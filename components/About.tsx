import { SectionHeading } from "./SectionHeading";
import { Container } from "./Container";
import { about, domainExpertise } from "@/lib/content";

export function About() {
  return (
    <section id="about" className="py-16 sm:py-24">
      <Container>
        <SectionHeading eyebrow="About" title="Professional Summary" />

        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr]">
          <p className="max-w-2xl text-lg leading-relaxed text-muted">{about.summary}</p>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-1">
            <div>
              <h3 className="mb-3 text-sm font-medium text-muted">Architecture</h3>
              <div className="flex flex-wrap gap-2">
                {domainExpertise.architecture.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-border bg-surface px-3 py-1 text-sm"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h3 className="mb-3 text-sm font-medium text-muted">Banking & Treasury</h3>
              <div className="flex flex-wrap gap-2">
                {domainExpertise.banking.map((item) => (
                  <span
                    key={item}
                    className="rounded-full bg-accent-soft px-3 py-1 text-sm text-accent"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
