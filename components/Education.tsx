import { GraduationCap } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { education } from "@/lib/content";

export function Education() {
  return (
    <section id="education" className="mx-auto max-w-5xl px-6 py-16">
      <SectionHeading eyebrow="Education" title="Academic Background" />

      <div className="space-y-4">
        {education.map((entry) => (
          <div key={entry.institution} className="flex items-start gap-4">
            <span className="mt-0.5 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-accent-soft text-accent">
              <GraduationCap className="h-4 w-4" />
            </span>
            <div>
              <h3 className="font-medium">{entry.institution}</h3>
              <p className="text-sm text-muted">{entry.degree}</p>
              <p className="text-sm text-muted">{entry.period}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
