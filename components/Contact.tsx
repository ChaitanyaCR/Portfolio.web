"use client";

import { Download, Mail, Phone, Send } from "lucide-react";
import { useState, type FormEvent } from "react";
import { SectionHeading } from "./SectionHeading";
import { GithubIcon, LinkedinIcon } from "./icons";
import { profile } from "@/lib/content";

type Status = "idle" | "sending" | "sent" | "error";

export function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");
    setErrorMessage(null);

    const form = event.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body.error ?? "Something went wrong. Please try again.");
      }

      setStatus("sent");
      form.reset();
    } catch (err) {
      setStatus("error");
      setErrorMessage(err instanceof Error ? err.message : "Something went wrong.");
    }
  }

  return (
    <section id="contact" className="mx-auto max-w-5xl px-6 py-16">
      <SectionHeading eyebrow="Contact" title="Let's Talk" />

      <div className="grid gap-12 sm:grid-cols-2">
        <div>
          <p className="max-w-sm text-muted">
            Open to conversations about architecture, banking & treasury systems, or your next
            engineering challenge. Reach out directly or use the form.
          </p>

          <div className="mt-6 space-y-3 text-sm">
            <a
              href={`mailto:${profile.email}`}
              className="flex items-center gap-3 text-muted transition-colors hover:text-accent"
            >
              <Mail className="h-4 w-4" /> {profile.email}
            </a>
            <a
              href={`tel:${profile.phone}`}
              className="flex items-center gap-3 text-muted transition-colors hover:text-accent"
            >
              <Phone className="h-4 w-4" /> {profile.phone}
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 text-muted transition-colors hover:text-accent"
            >
              <LinkedinIcon className="h-4 w-4" /> LinkedIn
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 text-muted transition-colors hover:text-accent"
            >
              <GithubIcon className="h-4 w-4" /> GitHub
            </a>
            <a
              href={profile.resumeUrl}
              download
              className="flex items-center gap-3 text-muted transition-colors hover:text-accent"
            >
              <Download className="h-4 w-4" /> Download Resume
            </a>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="mb-1.5 block text-sm text-muted">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              className="w-full rounded-lg border border-border bg-surface px-4 py-2.5 text-sm outline-none focus:border-accent"
            />
          </div>
          <div>
            <label htmlFor="email" className="mb-1.5 block text-sm text-muted">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className="w-full rounded-lg border border-border bg-surface px-4 py-2.5 text-sm outline-none focus:border-accent"
            />
          </div>
          <div>
            <label htmlFor="message" className="mb-1.5 block text-sm text-muted">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              required
              className="w-full rounded-lg border border-border bg-surface px-4 py-2.5 text-sm outline-none focus:border-accent"
            />
          </div>

          <button
            type="submit"
            disabled={status === "sending"}
            className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-accent-foreground transition-opacity hover:opacity-90 disabled:opacity-60"
          >
            <Send className="h-4 w-4" />
            {status === "sending" ? "Sending..." : "Send Message"}
          </button>

          {status === "sent" && (
            <p className="text-sm text-accent">Thanks — your message has been sent.</p>
          )}
          {status === "error" && (
            <p className="text-sm text-red-500">
              {errorMessage}{" "}
              <a href={`mailto:${profile.email}`} className="underline">
                Email me directly instead.
              </a>
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
