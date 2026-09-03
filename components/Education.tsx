import { Award, GraduationCap } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { Container } from "./Container";
import { certifications, education } from "@/lib/content";

export function Education() {
  return (
    <section id="education" className="py-16 sm:py-24">
      <Container>
        <SectionHeading eyebrow="Education" title="Academic Background" />

        <div className={`grid gap-12 ${certifications.length > 0 ? "lg:grid-cols-2" : ""}`}>
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

          {certifications.length > 0 && (
            <div>
              <h3 className="mb-4 text-sm font-medium text-muted">Licenses & Certifications</h3>
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
                      <h4 className="font-medium">{cert.name}</h4>
                      <p className="text-sm text-muted">
                        {cert.issuer} · {cert.year}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </Container>
    </section>
  );
}
