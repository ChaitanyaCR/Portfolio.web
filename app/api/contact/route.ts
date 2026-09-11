import { NextResponse } from "next/server";
import { Resend } from "resend";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MAX_LENGTH = 5000;
const CONTACT_TO_EMAIL = "c.rajchaitanya@outlook.com";

const RATE_LIMIT = 5;
const RATE_WINDOW_MS = 60 * 60 * 1000; // 1 hour
const MAX_TRACKED_CLIENTS = 5000;

/**
 * Best-effort in-memory throttle. It resets on cold start and is per-instance,
 * so it blunts casual abuse rather than a distributed flood — move to Vercel KV
 * or Upstash if this endpoint ever gets seriously targeted.
 */
const hits = new Map<string, number[]>();

function clientId(request: Request) {
  const forwarded = request.headers.get("x-forwarded-for");
  return forwarded?.split(",")[0]?.trim() || request.headers.get("x-real-ip") || "unknown";
}

function isRateLimited(id: string) {
  const now = Date.now();
  const recent = (hits.get(id) ?? []).filter((time) => now - time < RATE_WINDOW_MS);

  if (recent.length >= RATE_LIMIT) {
    hits.set(id, recent);
    return true;
  }

  recent.push(now);
  hits.set(id, recent);

  // Keep the map from growing without bound on a long-lived instance.
  if (hits.size > MAX_TRACKED_CLIENTS) {
    for (const [key, times] of hits) {
      if (times.every((time) => now - time >= RATE_WINDOW_MS)) hits.delete(key);
    }
  }

  return false;
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);

  if (!body || typeof body !== "object") {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  if (isRateLimited(clientId(request))) {
    return NextResponse.json(
      { error: "That's a few messages in a short while — please try again later, or email me directly." },
      { status: 429 },
    );
  }

  const { name, email, message, company } = body as Record<string, unknown>;

  // Honeypot: only a bot fills this in. Report success so it learns nothing.
  if (typeof company === "string" && company.trim()) {
    return NextResponse.json({ ok: true });
  }

  if (
    typeof name !== "string" ||
    typeof email !== "string" ||
    typeof message !== "string" ||
    !name.trim() ||
    !email.trim() ||
    !message.trim()
  ) {
    return NextResponse.json({ error: "Name, email and message are required." }, { status: 400 });
  }

  if (name.length > 200 || email.length > 200 || message.length > MAX_LENGTH) {
    return NextResponse.json({ error: "Input is too long." }, { status: 400 });
  }

  if (!EMAIL_REGEX.test(email)) {
    return NextResponse.json({ error: "Please provide a valid email address." }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return NextResponse.json(
      { error: "The contact form isn't configured yet — please email me directly instead." },
      { status: 503 },
    );
  }

  try {
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from: "Portfolio Contact Form <onboarding@resend.dev>",
      to: CONTACT_TO_EMAIL,
      replyTo: email,
      subject: `New portfolio message from ${name}`,
      text: `From: ${name} <${email}>\n\n${message}`,
      html: `<p><strong>From:</strong> ${escapeHtml(name)} (${escapeHtml(email)})</p><p>${escapeHtml(message).replace(/\n/g, "<br/>")}</p>`,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json({ error: "Failed to send message. Please try again." }, { status: 502 });
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Contact form error:", err);
    return NextResponse.json({ error: "Failed to send message. Please try again." }, { status: 500 });
  }
}
