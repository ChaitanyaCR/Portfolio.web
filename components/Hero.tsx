import { ArrowDown, ArrowDownRight, ArrowUpRight, Braces, Database, Layers3, MapPin } from "lucide-react";
import { Container } from "./Container";
import { profile } from "@/lib/content";

export function Hero() {
  return (
    <section id="top" className="hero-section">
      <Container>
        <div className="hero-grid">
          <div className="hero-copy">
            <p className="eyebrow"><span className="status-dot" /> ENGINEER. ARCHITECT. TEAM LEAD.</p>
            <p className="hero-intro">Hi, I’m {profile.name}.</p>
            <h1>Complex systems.<br /><span>Clear solutions.</span></h1>
            <p className="hero-description">I design and build the software behind better banking. Bringing architecture, hands-on engineering, and people together to turn complex requirements into reliable products.</p>
            <div className="hero-actions">
              <a href="#projects" className="button button-primary">Explore my work <ArrowDownRight size={18} /></a>
              <a href={profile.resumeUrl} download className="button button-secondary">Download résumé <ArrowUpRight size={18} /></a>
            </div>
            <div className="hero-location"><MapPin size={15} /><span>{profile.location}</span><span className="location-divider" /><span>Senior Lead Software Engineer</span></div>
          </div>
          <aside className="architecture-card" aria-label="Current engineering focus">
            <div className="architecture-top"><span className="mono">CURRENTLY BUILDING</span><Layers3 size={18} /></div>
            <h2>Built for complexity.<br />Designed for clarity.</h2>
            <p className="architecture-description">Enterprise Balance Sheet Management</p>
            <div className="architecture-diagram" aria-label="Balance sheet management connects risk, liquidity, and capital through shared services and a data layer">
              <div className="diagram-core"><Braces size={20} /><span>Balance Sheet Management</span></div>
              <div className="diagram-connector" />
              <div className="diagram-modules"><span>Risk</span><span>Liquidity</span><span>Capital</span></div>
              <div className="diagram-connector" />
              <div className="diagram-data"><Database size={16} /><span>Shared services & data</span></div>
            </div>
            <div className="architecture-bottom"><span className="status-dot" /><span>Architecture to implementation</span><ArrowUpRight size={16} /></div>
          </aside>
        </div>
        <div className="hero-bottom"><span className="mono">THOUGHTFUL ENGINEERING. MEASURABLE IMPACT.</span><a href="#about">A little more about me <ArrowDown size={15} /></a></div>
        <div className="impact-strip">
          <div><strong>6<span>+</span></strong><span>Years building enterprise software</span></div>
          <div><strong>3–4</strong><span>Engineers per team led</span></div>
          <div><strong>&lt;30<span> sec</span></strong><span>Batch processing, down from ~10 min</span></div>
          <div><strong>End to end</strong><span>From system design to delivery</span></div>
        </div>
      </Container>
    </section>
  );
}
