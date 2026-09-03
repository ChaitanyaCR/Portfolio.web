import { SectionHeading } from "./SectionHeading";
import { projects } from "@/lib/content";

export function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-5xl px-6 py-16">
      <SectionHeading eyebrow="Projects" title="Selected Product Delivery" />

      <div className="grid gap-6 sm:grid-cols-2">
        {projects.map((project) => (
          <div
            key={project.name}
            className="rounded-2xl border border-border bg-surface p-6 transition-colors hover:border-accent"
          >
            <h3 className="font-semibold">{project.name}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">{project.description}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-accent-soft px-2.5 py-1 text-xs font-medium text-accent"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
