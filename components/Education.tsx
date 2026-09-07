import { Award, GraduationCap } from "lucide-react";
import { Container } from "./Container";
import { certifications, education } from "@/lib/content";

export function Education() {
  return <section id="education" className="education-section"><Container><div className="education-layout"><p className="eyebrow">05 / EDUCATION</p><div>{education.map(entry => <article className="education-entry" key={entry.institution}><GraduationCap size={25} strokeWidth={1.5} /><div><h2>{entry.institution}</h2><p>{entry.degree}</p><span>{entry.period.replace(' - ', ' — ')}</span></div></article>)}{certifications.map(cert => <article className="education-entry" key={cert.name}><Award size={25} /><div><h3>{cert.name}</h3><p>{cert.issuer} · {cert.year}</p></div></article>)}</div></div></Container></section>;
}
