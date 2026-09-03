import { Award } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { certifications } from "@/lib/content";

export function Certifications() {
  if (certifications.length === 0) return null;

  return (
    <section id="certifications" className="mx-auto max-w-5xl px-6 py-16">
      <SectionHeading eyebrow="Certifications" title="Licenses & Certifications" />

      <div className="grid gap-4 sm:grid-cols-2">
        {certifications.map((cert) => (
          <div
            key={cert.name}
            className="flex items-start gap-4 rounded-2xl border border-border bg-surface p-5"
          >
            <span className="mt-0.5 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-accent-soft text-accent">
              <Award className="h-4 w-4" />
            </span>
            <div>
              <h3 className="font-medium">{cert.name}</h3>
              <p className="text-sm text-muted">
                {cert.issuer} · {cert.year}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
