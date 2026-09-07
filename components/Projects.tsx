import { ArrowDown, ChartNoAxesCombined, GitBranch, Landmark, Workflow } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { Container } from "./Container";
import { projects } from "@/lib/content";

const details = [
  { icon: Workflow, category: "PLATFORM ARCHITECTURE", role: "Lead Engineer · 2-member team", focus: "From a blank slate to a connected risk platform.", contribution: "Designed the application architecture, workflow engine, and reporting infrastructure. Led the implementation with a two-member team, connecting product requirements to the underlying technical design." },
  { icon: ChartNoAxesCombined, category: "CREDIT RISK", role: "Product development · 3-member team", focus: "Complex risk models. Configurable execution.", contribution: "Designed probability of default (PD), loss given default (LGD), segmentation, and stress-scenario components. Built a configurable execution engine as part of a three-member team." },
  { icon: Landmark, category: "REGULATORY SYSTEMS", role: "Backend engineering & reporting", focus: "Engineering for banking-book interest rate risk.", contribution: "Contributed backend development and regulatory reporting for the Interest Rate Risk in the Banking Book application, connecting domain requirements with backend implementation." },
  { icon: GitBranch, category: "TREASURY & PRICING", role: "Backend & pricing engine development", focus: "The services behind funds transfer pricing.", contribution: "Developed backend services and pricing-engine functionality for the Funds Transfer Pricing application within the enterprise banking product portfolio." },
];

export function Projects() {
  return <section id="projects" className="section section-tinted"><Container>
    <div className="section-heading-row"><SectionHeading eyebrow="02 / SELECTED WORK" title="Complex problems. Practical outcomes." description="A selection of the enterprise banking products I’ve helped design and build." /><span className="section-note mono">BANKING / TREASURY / RISK</span></div>
    <div className="projects-grid">{projects.map((project, index) => { const detail = details[index]; const Icon = detail.icon; return <article className="project-card" key={project.name}>
      <div className="project-top"><span className="project-icon"><Icon size={25} strokeWidth={1.5} /></span><span className="mono">0{index + 1}</span></div>
      <p className="project-category mono">{detail.category}</p><h3>{project.name}</h3><p className="project-focus">{detail.focus}</p><p className="project-description">{project.description}</p>
      <div className="project-tags">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div>
      <details className="project-details"><summary>My contribution <ArrowDown size={16} /></summary><div><p className="project-role">{detail.role}</p><p>{detail.contribution}</p></div></details>
    </article>; })}</div>
  </Container></section>;
}
