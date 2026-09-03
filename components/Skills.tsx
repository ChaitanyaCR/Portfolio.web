import { SectionHeading } from "./SectionHeading";
import { Container } from "./Container";
import { skillGroups } from "@/lib/content";

export function Skills() {
  return (
    <section id="skills" className="py-16 sm:py-24">
      <Container>
        <SectionHeading eyebrow="Skills" title="Core Competencies" />

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {skillGroups.map((group) => (
            <div key={group.label}>
              <h3 className="mb-3 text-sm font-medium text-muted">{group.label}</h3>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-border bg-surface px-3 py-1 text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
