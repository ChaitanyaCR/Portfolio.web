import { ArrowUpRight, Zap } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { Container } from "./Container";
import { Reveal, StaggerCard, StaggerGroup } from "./motion";
import { experience, profile } from "@/lib/content";

export function Experience() {
  return (
    <section id="experience" className="section">
      <Container>
        <div className="experience-layout">
          <Reveal>
            <SectionHeading
              eyebrow="03 / THE JOURNEY"
              title="Growing impact. One role at a time."
              description="From building enterprise applications to leading the architecture and teams behind them."
            />
            <a href={profile.resumeUrl} download className="text-link">Get the full résumé <ArrowUpRight size={16} /></a>
            <aside className="performance-callout">
              <Zap size={20} />
              <p className="mono">ENGINEERING IN PRACTICE</p>
              <h3>~10 min <span>→ &lt;30 sec</span></h3>
              <p>Reduced batch processing time through architecture and query optimization.</p>
            </aside>
          </Reveal>

          <div className="career-timeline">
            {experience.map((entry) => (
              <div key={entry.company} className="career-company">
                <Reveal>
                  <div className="company-heading">
                    <h3>{entry.company}</h3>
                    <span>{entry.location}</span>
                  </div>
                  {entry.note && <p className="company-note">{entry.note}</p>}
                </Reveal>
                <StaggerGroup>
                  {entry.roles.map((role) => (
                    <StaggerCard className="career-role" key={role.title}>
                      <div className="role-meta">
                        <span>{role.period.replaceAll(" - ", " — ")}</span>
                        {role.period.includes("Present") && <span className="current-badge">Current</span>}
                      </div>
                      <h4>{role.title}</h4>
                      <ul>{role.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul>
                    </StaggerCard>
                  ))}
                </StaggerGroup>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
