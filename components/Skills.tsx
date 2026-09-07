import { Braces, Database, PanelsTopLeft, Waypoints } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { Container } from "./Container";
import { domainExpertise, skillGroups } from "@/lib/content";
const icons = [Braces, PanelsTopLeft, Database, Waypoints];

export function Skills() {
  return <section id="skills" className="section section-tinted"><Container>
    <SectionHeading eyebrow="04 / EXPERTISE" title="The right tools. A solid foundation." description="A full-stack perspective, with depth in backend engineering, system design, and the banking domain." />
    <div className="skills-grid">{skillGroups.map((group, index) => { const Icon = icons[index]; return <article className="skill-card" key={group.label}><Icon size={23} strokeWidth={1.5} /><h3>{group.label}</h3><div className="skill-tags">{group.skills.map(skill => <span key={skill}>{skill}</span>)}</div></article>; })}</div>
    <div className="domain-row"><p className="mono">DOMAIN KNOWLEDGE</p><div>{domainExpertise.banking.map(domain => <span key={domain}>{domain}</span>)}</div></div>
  </Container></section>;
}
