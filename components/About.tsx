import { SectionHeading } from "./SectionHeading";
import { about } from "@/lib/content";

export function About() {
  return (
    <section id="about" className="mx-auto max-w-5xl px-6 py-16">
      <SectionHeading eyebrow="About" title="Professional Summary" />
      <p className="max-w-3xl text-lg leading-relaxed text-muted">{about.summary}</p>
    </section>
  );
}
