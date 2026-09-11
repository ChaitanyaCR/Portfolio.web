"use client";

import { motion, useMotionValue, useReducedMotion, useSpring } from "framer-motion";
import { staggerItem } from "./motion";
import { useRef, type ReactNode } from "react";

/**
 * Tracks the pointer across the card and exposes it as `--mx` / `--my`,
 * which the stylesheet uses to draw a soft accent spotlight. Joins the
 * surrounding `StaggerGroup` so the card still reveals on scroll.
 */
export function Spotlight({ children, className }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();

  function onPointerMove(event: React.PointerEvent<HTMLElement>) {
    const node = ref.current;
    if (!node) return;
    const rect = node.getBoundingClientRect();
    node.style.setProperty("--mx", `${event.clientX - rect.left}px`);
    node.style.setProperty("--my", `${event.clientY - rect.top}px`);
  }

  if (reduced) return <article className={className}>{children}</article>;

  return (
    <motion.article ref={ref} className={className} variants={staggerItem} onPointerMove={onPointerMove}>
      {children}
    </motion.article>
  );
}

/** Pulls its child a few pixels toward the pointer, then springs back on leave. */
export function Magnetic({ children, strength = 0.25 }: { children: ReactNode; strength?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const reduced = useReducedMotion();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 260, damping: 18, mass: 0.4 });
  const springY = useSpring(y, { stiffness: 260, damping: 18, mass: 0.4 });

  if (reduced) return <>{children}</>;

  function onPointerMove(event: React.PointerEvent<HTMLSpanElement>) {
    const node = ref.current;
    if (!node) return;
    const rect = node.getBoundingClientRect();
    x.set((event.clientX - (rect.left + rect.width / 2)) * strength);
    y.set((event.clientY - (rect.top + rect.height / 2)) * strength);
  }

  function reset() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.span
      ref={ref}
      className="magnetic"
      style={{ x: springX, y: springY }}
      onPointerMove={onPointerMove}
      onPointerLeave={reset}
    >
      {children}
    </motion.span>
  );
}
