"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import { ArrowDown, ArrowDownRight, ArrowUpRight, Layers3, MapPin } from "lucide-react";
import { Container } from "./Container";
import { ArchitectureDiagram } from "./ArchitectureDiagram";
import { Magnetic } from "./interactions";
import { CountUp, StaggerGroup, StaggerItem } from "./motion";
import { impactStats, profile } from "@/lib/content";

const EASE = [0.22, 1, 0.36, 1] as const;

const copy: Variants = { hidden: {}, shown: { transition: { staggerChildren: 0.075, delayChildren: 0.12 } } };
const line: Variants = {
  hidden: { opacity: 0, y: 22 },
  shown: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
};

export function Hero() {
  const reduced = useReducedMotion();
  const stagger = reduced ? {} : { variants: copy, initial: "hidden" as const, animate: "shown" as const };
  const child = reduced ? {} : { variants: line };

  return (
    <section id="top" className="hero-section">
      <Container>
        <div className="hero-grid">
          <motion.div className="hero-copy" {...stagger}>
            <motion.p className="eyebrow" {...child}>
              <span className="status-dot status-dot-live" />
              {profile.availability}
            </motion.p>
            <motion.p className="hero-intro" {...child}>Hi, I’m {profile.name}.</motion.p>
            <motion.h1 {...child}>Complex systems.<br /><span>Clear solutions.</span></motion.h1>
            <motion.p className="hero-description" {...child}>
              I design and build the software behind better banking. Bringing architecture, hands-on engineering, and people together to turn complex requirements into reliable products.
            </motion.p>
            <motion.div className="hero-actions" {...child}>
              <Magnetic><a href="#projects" className="button button-primary">Explore my work <ArrowDownRight size={18} /></a></Magnetic>
              <Magnetic><a href={profile.resumeUrl} download className="button button-secondary">Download résumé <ArrowUpRight size={18} /></a></Magnetic>
            </motion.div>
            <motion.div className="hero-location" {...child}>
              <MapPin size={15} /><span>{profile.location}</span>
              <span className="location-divider" /><span>{profile.title}</span>
            </motion.div>
          </motion.div>

          {/* The tilt stays in CSS so the mobile `transform: none` override still wins;
              framer only animates this wrapper. */}
          <motion.div
            initial={reduced ? undefined : { opacity: 0, y: 28 }}
            animate={reduced ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.35, ease: EASE }}
          >
          <aside className="architecture-card" aria-label="Current engineering focus">
            <div className="architecture-top"><span className="mono">CURRENTLY BUILDING</span><Layers3 size={18} /></div>
            <h2>Built for complexity.<br />Designed for clarity.</h2>
            <p className="architecture-description">Enterprise Balance Sheet Management</p>
            <ArchitectureDiagram />
            <div className="architecture-bottom"><span className="status-dot" /><span>Architecture to implementation</span><ArrowUpRight size={16} /></div>
          </aside>
          </motion.div>
        </div>

        <div className="hero-bottom">
          <span className="mono">THOUGHTFUL ENGINEERING. MEASURABLE IMPACT.</span>
          <a href="#about">A little more about me <ArrowDown size={15} /></a>
        </div>

        <StaggerGroup className="impact-strip">
          {impactStats.map((stat) => (
            <StaggerItem key={stat.label}>
              <strong>
                {stat.prefix}
                {stat.countTo !== undefined ? <CountUp to={stat.countTo} /> : stat.value}
                {stat.suffix && <span>{stat.suffix}</span>}
              </strong>
              <span>{stat.label}</span>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </Container>
    </section>
  );
}
