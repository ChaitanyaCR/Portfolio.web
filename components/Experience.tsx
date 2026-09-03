import { SectionHeading } from "./SectionHeading";
import { experience } from "@/lib/content";

export function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-5xl px-6 py-16">
      <SectionHeading eyebrow="Experience" title="Where I've Worked" />

      <div className="space-y-12">
        {experience.map((entry) => (
          <div key={entry.company}>
            <div className="mb-4 flex flex-wrap items-baseline justify-between gap-2">
              <h3 className="text-lg font-semibold">{entry.company}</h3>
              <span className="text-sm text-muted">{entry.location}</span>
            </div>

            <div className="space-y-8 border-l border-border pl-6">
              {entry.roles.map((role) => (
                <div key={role.title} className="relative">
                  <span className="absolute -left-[29px] top-1.5 h-2.5 w-2.5 rounded-full bg-accent" />
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h4 className="font-medium">{role.title}</h4>
                    <span className="text-sm text-muted">{role.period}</span>
                  </div>
                  {role.bullets.length > 0 && (
                    <ul className="mt-3 space-y-2">
                      {role.bullets.map((bullet) => (
                        <li key={bullet} className="text-sm leading-relaxed text-muted">
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
