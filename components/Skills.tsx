import { Braces, Database, PanelsTopLeft, Waypoints } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { Container } from "./Container";
import { Reveal, StaggerCard, StaggerGroup } from "./motion";
import { domainExpertise, skillGroups, type SkillGroup } from "@/lib/content";

const icons: Record<SkillGroup["icon"], typeof Braces> = {
  braces: Braces,
  panels: PanelsTopLeft,
  database: Database,
  waypoints: Waypoints,
};

export function Skills() {
  return (
    <section id="skills" className="section section-tinted">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="04 / EXPERTISE"
            title="The right tools. A solid foundation."
            description="A full-stack perspective, with depth in backend engineering, system design, and the banking domain."
          />
        </Reveal>

        <StaggerGroup className="skills-grid">
          {skillGroups.map((group) => {
            const Icon = icons[group.icon];
            return (
              <StaggerCard className="skill-card" key={group.label}>
                <Icon size={23} strokeWidth={1.5} />
                <h3>{group.label}</h3>
                <div className="skill-tags">{group.skills.map((skill) => <span key={skill}>{skill}</span>)}</div>
              </StaggerCard>
            );
          })}
        </StaggerGroup>

        <Reveal>
          <div className="domain-row">
            <p className="mono">ARCHITECTURE</p>
            <div>{domainExpertise.architecture.map((entry) => <span key={entry}>{entry}</span>)}</div>
          </div>
          <div className="domain-row">
            <p className="mono">DOMAIN KNOWLEDGE</p>
            <div>{domainExpertise.banking.map((domain) => <span key={domain}>{domain}</span>)}</div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
