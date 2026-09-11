"use client";

import { motion, useInView, useReducedMotion } from "framer-motion";
import { Braces, Database } from "lucide-react";
import { useRef } from "react";
import { architectureDiagram } from "@/lib/content";

/** Seconds for one full pass of the signal through the diagram. */
const LOOP = 4.2;

const glow = (delay: number) => ({
  animate: { opacity: [0, 1, 1, 0] },
  transition: { duration: 1.1, delay, repeat: Infinity, repeatDelay: LOOP - 1.1, times: [0, 0.25, 0.6, 1], ease: "easeInOut" as const },
});

function Connector({ delay, play }: { delay: number; play: boolean }) {
  return (
    <div className="diagram-connector">
      {play && (
        <motion.span
          className="diagram-pulse"
          initial={{ top: "-40%", opacity: 0 }}
          animate={{ top: ["-40%", "0%", "80%", "110%"], opacity: [0, 1, 1, 0] }}
          transition={{ duration: 0.75, delay, repeat: Infinity, repeatDelay: LOOP - 0.75, times: [0, 0.2, 0.8, 1], ease: "easeInOut" }}
        />
      )}
    </div>
  );
}

export function ArchitectureDiagram() {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  // Only run the loop while the diagram is actually on screen.
  const inView = useInView(ref, { margin: "0px 0px -40px 0px" });
  const play = inView && !reduced;

  return (
    <div
      ref={ref}
      className="architecture-diagram"
      aria-label={`${architectureDiagram.core} connects ${architectureDiagram.modules.join(", ")} through ${architectureDiagram.foundation.toLowerCase()}`}
    >
      <div className="diagram-core">
        {play && <motion.span className="diagram-glow" {...glow(0)} aria-hidden />}
        <Braces size={20} />
        <span>{architectureDiagram.core}</span>
      </div>

      <Connector delay={0.5} play={play} />

      <div className="diagram-modules">
        {architectureDiagram.modules.map((module, index) => (
          <span key={module} className="diagram-module">
            {play && <motion.span className="diagram-glow" {...glow(1.15 + index * 0.18)} aria-hidden />}
            {module}
          </span>
        ))}
      </div>

      <Connector delay={2.1} play={play} />

      <div className="diagram-data">
        {play && <motion.span className="diagram-glow" {...glow(2.6)} aria-hidden />}
        <Database size={16} />
        <span>{architectureDiagram.foundation}</span>
      </div>
    </div>
  );
}
