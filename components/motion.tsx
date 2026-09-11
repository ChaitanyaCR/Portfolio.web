"use client";

import { animate, motion, useInView, useReducedMotion, type Variants } from "framer-motion";
import { useEffect, useRef, type ReactNode } from "react";

const EASE = [0.22, 1, 0.36, 1] as const;
const VIEWPORT = { once: true, margin: "-80px 0px -80px 0px" } as const;

/** Fades and lifts its children into view once, on scroll. */
export function Reveal({ children, delay = 0, className }: { children: ReactNode; delay?: number; className?: string }) {
  const reduced = useReducedMotion();
  if (reduced) return <div className={className}>{children}</div>;

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={VIEWPORT}
      transition={{ duration: 0.55, delay, ease: EASE }}
    >
      {children}
    </motion.div>
  );
}

const group: Variants = { hidden: {}, shown: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } } };
/** Exported so other motion components (e.g. Spotlight cards) can join a stagger. */
export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 20 },
  shown: { opacity: 1, y: 0, transition: { duration: 0.55, ease: EASE } },
};

/**
 * Becomes the layout container itself (pass the grid class through `className`)
 * so direct-child CSS selectors keep working, and staggers its `StaggerItem` children.
 */
export function StaggerGroup({ children, className, as = "div" }: { children: ReactNode; className?: string; as?: "div" | "ul" }) {
  const reduced = useReducedMotion();
  const Tag = as === "ul" ? motion.ul : motion.div;
  const Plain = as === "ul" ? "ul" : "div";
  if (reduced) return <Plain className={className}>{children}</Plain>;

  return (
    <Tag className={className} variants={group} initial="hidden" whileInView="shown" viewport={VIEWPORT}>
      {children}
    </Tag>
  );
}

export function StaggerItem({ children, className }: { children: ReactNode; className?: string }) {
  const reduced = useReducedMotion();
  if (reduced) return <div className={className}>{children}</div>;
  return <motion.div className={className} variants={staggerItem}>{children}</motion.div>;
}

export function StaggerCard({ children, className }: { children: ReactNode; className?: string }) {
  const reduced = useReducedMotion();
  if (reduced) return <article className={className}>{children}</article>;
  return <motion.article className={className} variants={staggerItem}>{children}</motion.article>;
}

/** Counts from zero to `to` the first time it scrolls into view. */
export function CountUp({ to, duration = 1.4 }: { to: number; duration?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const reduced = useReducedMotion();

  useEffect(() => {
    const node = ref.current;
    if (!node || !inView || reduced) return;
    const controls = animate(0, to, {
      duration,
      ease: "easeOut",
      onUpdate: (value) => { node.textContent = String(Math.round(value)); },
    });
    return () => controls.stop();
  }, [inView, reduced, to, duration]);

  // Rendered with the final value so it is correct before hydration and for crawlers.
  return <span ref={ref}>{to}</span>;
}
