import { Download, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./icons";
import { profile } from "@/lib/content";

export function Hero() {
  return (
    <section id="top" className="mx-auto max-w-5xl px-6 pb-20 pt-16 sm:pt-24">
      <p className="text-sm font-medium uppercase tracking-widest text-accent">
        {profile.location}
      </p>
      <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-6xl">
        {profile.name}
      </h1>
      <p className="mt-4 text-xl text-muted sm:text-2xl">{profile.title}</p>
      <p className="mt-2 max-w-2xl text-base text-muted">{profile.tagline}</p>

      <div className="mt-8 flex flex-wrap items-center gap-3">
        <a
          href={profile.resumeUrl}
          download
          className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-accent-foreground transition-opacity hover:opacity-90"
        >
          <Download className="h-4 w-4" />
          Download Resume
        </a>
        <a
          href="#contact"
          className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm font-medium transition-colors hover:border-accent hover:text-accent"
        >
          <Mail className="h-4 w-4" />
          Contact Me
        </a>
        <a
          href={profile.linkedin}
          target="_blank"
          rel="noreferrer"
          aria-label="LinkedIn"
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted transition-colors hover:border-accent hover:text-accent"
        >
          <LinkedinIcon className="h-4 w-4" />
        </a>
        <a
          href={profile.github}
          target="_blank"
          rel="noreferrer"
          aria-label="GitHub"
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted transition-colors hover:border-accent hover:text-accent"
        >
          <GithubIcon className="h-4 w-4" />
        </a>
      </div>
    </section>
  );
}
