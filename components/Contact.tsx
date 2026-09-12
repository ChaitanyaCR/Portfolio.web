"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Check, ChevronDown, Copy, Download, LoaderCircle, Mail, PenLine, Phone, Send } from "lucide-react";
import { useEffect, useRef, useState, type FormEvent } from "react";
import { SectionHeading } from "./SectionHeading";
import { Container } from "./Container";
import { GithubIcon, LinkedinIcon } from "./icons";
import { Magnetic } from "./interactions";
import { Reveal } from "./motion";
import { features, profile } from "@/lib/content";

type Status = "idle" | "sending" | "sent" | "error";

export function Contact() {
  const [copied, setCopied] = useState(false);
  const [copyError, setCopyError] = useState(false);
  const copyTimer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);
  const reduced = useReducedMotion();

  const [open, setOpen] = useState(false);
  const firstField = useRef<HTMLInputElement>(null);

  useEffect(() => () => clearTimeout(copyTimer.current), []);

  // Move focus into the form when it expands, so keyboard users aren't left behind the toggle.
  useEffect(() => {
    if (open) firstField.current?.focus();
  }, [open]);

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setCopyError(false);
      clearTimeout(copyTimer.current);
      copyTimer.current = setTimeout(() => setCopied(false), 2500);
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
      // Honeypot — left empty by humans, filled in by most bots.
      company: (form.elements.namedItem("company") as HTMLInputElement).value,
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
          <Reveal>
            <SectionHeading eyebrow="06 / GET IN TOUCH" title="Good work starts with a conversation." />
            <p className="contact-description">Have an engineering challenge, a role in mind, or an interesting idea? Let’s talk about architecture, banking technology, and what we could build together.</p>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="contact-details">
              <div className="contact-actions">
                <div className="contact-email">
                  <a href={`mailto:${profile.email}`}><Mail size={20} /><span>{profile.email}</span></a>
                  <button type="button" onClick={copyEmail} aria-label={copied ? "Email address copied" : "Copy email address"}>{copied ? <Check size={17} /> : <Copy size={17} />}</button>
                </div>
                {features.contactForm && <button
                  type="button"
                  className="compose-toggle"
                  aria-expanded={open}
                  // Only reference the panel while it exists in the DOM.
                  aria-controls={open ? "contact-message-form" : undefined}
                  onClick={() => setOpen(!open)}
                >
                  <PenLine size={17} />
                  {open ? "Hide the form" : "Write a message"}
                  <ChevronDown size={17} />
                </button>}
              </div>
              <p className="copy-status" role="status">{copied ? "Email address copied." : copyError ? "Select the email address to copy it, or click to open your email app." : ""}</p>
              <div className="contact-links">
                <a href={`tel:+91${profile.phone}`}><Phone size={16} /> +91 {profile.phone} <ArrowUpRight size={14} /></a>
                <a href={profile.resumeUrl} download><Download size={16} /> Download résumé <ArrowUpRight size={14} /></a>
                <a href={profile.linkedin} target="_blank" rel="noreferrer"><LinkedinIcon className="h-4 w-4" /> LinkedIn <ArrowUpRight size={14} /></a>
                <a href={profile.github} target="_blank" rel="noreferrer"><GithubIcon className="h-4 w-4" /> GitHub <ArrowUpRight size={14} /></a>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.14}>
            <div className="contact-compose">
              <AnimatePresence initial={false}>
                {features.contactForm && open && (
                  <motion.div
                    id="contact-message-form"
                    className="compose-panel"
                    initial={reduced ? false : { height: 0, opacity: 0 }}
                    animate={reduced ? undefined : { height: "auto", opacity: 1 }}
                    exit={reduced ? undefined : { height: 0, opacity: 0 }}
                    transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <form onSubmit={handleSubmit} className="contact-form" aria-label="Send me a message" aria-busy={status === "sending"}>
                      <fieldset disabled={status === "sending"}>
                        <div className="form-row">
                          <div><label htmlFor="name">Your name</label><input ref={firstField} id="name" name="name" type="text" autoComplete="name" maxLength={200} placeholder="Alex Morgan" required /></div>
                          <div><label htmlFor="email">Email address</label><input id="email" name="email" type="email" autoComplete="email" maxLength={200} placeholder="alex@company.com" required /></div>
                        </div>
                        <div><label htmlFor="message">Your message</label><textarea id="message" name="message" rows={4} maxLength={5000} placeholder="I’d love to connect about…" required /></div>
                        <div className="honeypot" aria-hidden="true">
                          <label htmlFor="company">Company (leave this empty)</label>
                          <input id="company" name="company" type="text" tabIndex={-1} autoComplete="off" />
                        </div>
                        <Magnetic strength={0.12}>
                          <button type="submit" disabled={status === "sending"} className="button button-primary">
                            {status === "sending" ? "Sending message…" : "Send message"}
                            {status === "sending" ? <LoaderCircle size={17} className="animate-spin" /> : <Send size={17} />}
                          </button>
                        </Magnetic>
                      </fieldset>
                      <div aria-live="polite" aria-atomic="true">
                        {status === "sent" && <p className="form-success"><Check size={17} /> Thanks! Your message has been sent.</p>}
                        {status === "error" && <p className="form-error">{errorMessage} <a href={`mailto:${profile.email}`}>Email me directly instead.</a></p>}
                      </div>
                    </form>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
