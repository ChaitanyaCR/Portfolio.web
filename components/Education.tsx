import { Award, GraduationCap } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { Container } from "./Container";
import { Reveal, StaggerCard, StaggerGroup } from "./motion";
import { certifications, education } from "@/lib/content";

export function Education() {
  return (
    <section id="education" className="education-section">
      <Container>
        <div className="education-layout">
          <Reveal><SectionHeading eyebrow="05 / EDUCATION" title="Where it started." /></Reveal>
          <StaggerGroup>
            {education.map((entry) => (
              <StaggerCard className="education-entry" key={entry.institution}>
                <GraduationCap size={25} strokeWidth={1.5} />
                <div>
                  <h3>{entry.institution}</h3>
                  <p>{entry.degree}</p>
                  <span>{entry.period.replace(" - ", " — ")}</span>
                </div>
              </StaggerCard>
            ))}
            {certifications.map((cert) => (
              <StaggerCard className="education-entry" key={cert.name}>
                <Award size={25} strokeWidth={1.5} />
                <div>
                  <h3>{cert.name}</h3>
                  <p>{cert.issuer} · {cert.year}</p>
                </div>
              </StaggerCard>
            ))}
          </StaggerGroup>
        </div>
      </Container>
    </section>
  );
}
