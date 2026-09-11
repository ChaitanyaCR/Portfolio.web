import { existsSync } from "node:fs";
import { join } from "node:path";
import Image from "next/image";
import { ArrowUpRight, Compass, Layers3, Users } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { Container } from "./Container";
import { Reveal, StaggerCard, StaggerGroup } from "./motion";
import { about, principles, profile, type Principle } from "@/lib/content";

const icons: Record<Principle["icon"], typeof Compass> = { compass: Compass, layers: Layers3, users: Users };

// Resolved at build time: the portrait only renders once the file is actually in public/,
// so a missing image degrades to no portrait rather than a broken one.
const hasPortrait = Boolean(profile.photo) && existsSync(join(process.cwd(), "public", profile.photo));

/** Renders the `**bold**` spans authored in lib/content.ts. */
function withEmphasis(text: string) {
  return text.split(/(\*\*[^*]+\*\*)/g).map((part, index) =>
    part.startsWith("**") && part.endsWith("**")
      ? <strong key={index}>{part.slice(2, -2)}</strong>
      : part,
  );
}

export function About() {
  return (
    <section id="about" className="section">
      <Container>
        <div className="about-grid">
          <Reveal>
            <SectionHeading eyebrow="01 / ABOUT ME" title={about.intro} />
            {hasPortrait && (
              <div className="about-portrait-frame">
                <div className="about-portrait">
                  <Image
                    src={profile.photo}
                    alt={`${profile.name}, ${profile.title}`}
                    fill
                    sizes="(max-width: 767px) 62vw, (max-width: 1023px) 32vw, 300px"
                  />
                </div>
              </div>
            )}
          </Reveal>
          <Reveal delay={0.1}>
            <div className="about-copy">
              {about.paragraphs.map((paragraph) => <p key={paragraph}>{withEmphasis(paragraph)}</p>)}
              <a href="#experience" className="text-link">Follow my journey <ArrowUpRight size={16} /></a>
            </div>
          </Reveal>
        </div>

        <StaggerGroup className="principles-grid">
          {principles.map(({ icon, title, text }, index) => {
            const Icon = icons[icon];
            return (
              <StaggerCard className="principle" key={title}>
                <div className="principle-top"><Icon size={23} strokeWidth={1.5} /><span className="mono">0{index + 1}</span></div>
                <h3>{title}</h3>
                <p>{text}</p>
              </StaggerCard>
            );
          })}
        </StaggerGroup>
      </Container>
    </section>
  );
}
