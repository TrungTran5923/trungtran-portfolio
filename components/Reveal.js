"use client";

import { motion } from "framer-motion";

/**
 * Scroll-reveal wrapper. Fades + slides content up into view once,
 * the first time it enters the viewport.
 *
 * Usage: <Reveal><h2>Hello</h2></Reveal>
 *        <Reveal delay={0.1} as="div" style={{...}}>...</Reveal>
 */
export default function Reveal({
  children,
  delay = 0,
  y = 24,
  duration = 0.7,
  className,
  style,
  as = "div",
}) {
  const MotionTag = motion[as] || motion.div;

  return (
    <MotionTag
      className={className}
      style={style}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </MotionTag>
  );
}
