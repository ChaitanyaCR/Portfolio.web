import { ArrowUpRight, Compass, Layers3, Users } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { Container } from "./Container";

const principles = [
  { icon: Compass, title: "Think in systems", text: "Translate complex banking requirements into a clear architecture that can grow with the product." },
  { icon: Layers3, title: "Build for the long run", text: "Create reusable services, workflows, and reporting frameworks with maintainability at their core." },
  { icon: Users, title: "Make the team stronger", text: "Stay hands-on while mentoring engineers, reviewing designs, and giving teams a clear technical direction." },
];

export function About() {
  return <section id="about" className="section"><Container>
    <div className="about-grid">
      <SectionHeading eyebrow="01 / ABOUT ME" title="An engineer’s mindset. A bigger-picture view." />
      <div className="about-copy"><p>I’m a Senior Lead Software Engineer with over six years of experience building enterprise banking and treasury applications. I enjoy the space where a complex business problem becomes a clear, practical engineering solution.</p><p>At <strong>Surya FinTech</strong>, I lead architecture for an enterprise Balance Sheet Management suite. My work spans system design, backend services, databases, and the interfaces that bring it all together.</p><a href="#experience" className="text-link">Follow my journey <ArrowUpRight size={16} /></a></div>
    </div>
    <div className="principles-grid">{principles.map(({ icon: Icon, title, text }, index) => <article className="principle" key={title}><div className="principle-top"><Icon size={23} strokeWidth={1.5} /><span className="mono">0{index + 1}</span></div><h3>{title}</h3><p>{text}</p></article>)}</div>
  </Container></section>;
}
