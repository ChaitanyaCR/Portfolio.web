import { ArrowDown, ChartNoAxesCombined, GitBranch, Landmark, Workflow } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { Container } from "./Container";
import { Spotlight } from "./interactions";
import { Reveal, StaggerGroup } from "./motion";
import { projects, type Project } from "@/lib/content";

const icons: Record<Project["icon"], typeof Workflow> = {
  workflow: Workflow,
  chart: ChartNoAxesCombined,
  landmark: Landmark,
  branch: GitBranch,
};

export function Projects() {
  return (
    <section id="projects" className="section section-tinted">
      <Container>
        <Reveal>
          <div className="section-heading-row">
            <SectionHeading
              eyebrow="02 / SELECTED WORK"
              title="Complex problems. Practical outcomes."
              description="A selection of the enterprise banking products I’ve helped design and build."
            />
            <span className="section-note mono">BANKING / TREASURY / RISK</span>
          </div>
        </Reveal>

        <StaggerGroup className="projects-grid">
          {projects.map((project, index) => {
            const Icon = icons[project.icon];
            return (
              <Spotlight className="project-card" key={project.name}>
                <div className="project-top">
                  <span className="project-icon"><Icon size={25} strokeWidth={1.5} /></span>
                  <span className="mono">0{index + 1}</span>
                </div>
                <p className="project-category mono">{project.category}</p>
                <h3>{project.name}</h3>
                <p className="project-focus">{project.focus}</p>
                <p className="project-description">{project.description}</p>
                <div className="project-tags">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
                <details className="project-details">
                  <summary>My contribution <ArrowDown size={16} /></summary>
                  <div>
                    <p className="project-role">{project.role}</p>
                    <p>{project.contribution}</p>
                  </div>
                </details>
              </Spotlight>
            );
          })}
        </StaggerGroup>
      </Container>
    </section>
  );
}
