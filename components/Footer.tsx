import { Container } from "./Container";
import { profile } from "@/lib/content";

export function Footer() {
  return (
    <footer className="border-t border-border">
      <Container>
        <div className="flex flex-col items-center gap-2 py-8 text-sm text-muted sm:flex-row sm:justify-between">
          <p>
            © {new Date().getFullYear()} {profile.name}
          </p>
          {/* <p>Built with Next.js & Tailwind CSS</p> */}
        </div>
      </Container>
    </footer>
  );
}
