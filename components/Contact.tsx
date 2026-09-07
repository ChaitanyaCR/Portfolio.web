"use client";

import { ArrowUpRight, Check, Copy, Download, LoaderCircle, Mail, Phone, Send } from "lucide-react";
import { useState, type FormEvent } from "react";
import { SectionHeading } from "./SectionHeading";
import { Container } from "./Container";
import { GithubIcon, LinkedinIcon } from "./icons";
import { profile } from "@/lib/content";

type Status = "idle" | "sending" | "sent" | "error";

export function Contact() {
  const [copied, setCopied] = useState(false);
  const [copyError, setCopyError] = useState(false);

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setCopyError(false);
    } catch { setCopyError(true); }
  }

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
    <section id="contact" className="section contact-section">
      <Container>
        <div className="contact-layout">
          <div>
            <SectionHeading eyebrow="06 / GET IN TOUCH" title="Good work starts with a conversation." />
            <p className="contact-description">Have an engineering challenge, a role in mind, or an interesting idea? Let’s talk about architecture, banking technology, and what we could build together.</p>
            <div className="contact-email"><a href={`mailto:${profile.email}`}><Mail size={18} /><span>{profile.email}</span></a><button type="button" onClick={copyEmail} aria-label={copied ? "Email address copied" : "Copy email address"}>{copied ? <Check size={17} /> : <Copy size={17} />}</button></div>
            <p className="copy-status" role="status">{copied ? "Email address copied." : copyError ? "Select the email address to copy it, or click to open your email app." : ""}</p>
            <div className="contact-links">
              <a href={`tel:+91${profile.phone}`}><Phone size={16} /> +91 {profile.phone} <ArrowUpRight size={14} /></a>
              <a href={profile.resumeUrl} download><Download size={16} /> Download résumé <ArrowUpRight size={14} /></a>
              {!profile.linkedin.includes("PLACEHOLDER") && <a href={profile.linkedin} target="_blank" rel="noreferrer"><LinkedinIcon className="h-4 w-4" /> LinkedIn <ArrowUpRight size={14} /></a>}
              {!profile.github.includes("PLACEHOLDER") && <a href={profile.github} target="_blank" rel="noreferrer"><GithubIcon className="h-4 w-4" /> GitHub <ArrowUpRight size={14} /></a>}
            </div>
          </div>
          <form onSubmit={handleSubmit} className="contact-form" aria-busy={status === "sending"}>
            <h3>Leave me a message</h3>
            <p>Tell me a little about what you have in mind.</p>
            <fieldset disabled={status === "sending"}>
              <div className="form-row"><div><label htmlFor="name">Your name</label><input id="name" name="name" type="text" autoComplete="name" maxLength={200} placeholder="Alex Morgan" required /></div><div><label htmlFor="email">Email address</label><input id="email" name="email" type="email" autoComplete="email" maxLength={200} placeholder="alex@company.com" required /></div></div>
              <div><label htmlFor="message">Your message</label><textarea id="message" name="message" rows={5} maxLength={5000} placeholder="I’d love to connect about…" required /></div>
              <button type="submit" disabled={status === "sending"} className="button button-primary">{status === "sending" ? "Sending message…" : "Send message"}{status === "sending" ? <LoaderCircle size={17} className="animate-spin" /> : <Send size={17} />}</button>
            </fieldset>
            <div aria-live="polite" aria-atomic="true">{status === "sent" && <p className="form-success"><Check size={17} /> Thanks! Your message has been sent.</p>}{status === "error" && <p className="form-error">{errorMessage} <a href={`mailto:${profile.email}`}>Email me directly instead.</a></p>}</div>
          </form>
        </div>
      </Container>
    </section>
  );
}
