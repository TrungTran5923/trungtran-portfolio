"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Counter from "@/components/Counter";

/**
 * Skill row: label + animated count-up percentage, with a progress bar
 * that fills from 0 to `value`% the moment it scrolls into view.
 */
export default function SkillBar({ name, value }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <div ref={ref} className="skill-bar-row">
      <div className="skill-bar-head">
        <span className="skill-bar-name">{name}</span>
        <span className="skill-bar-value">
          <Counter value={value} suffix="%" />
        </span>
      </div>
      <div className="skill-bar-track">
        <motion.div
          className="skill-bar-fill"
          initial={{ width: 0 }}
          animate={inView ? { width: `${value}%` } : { width: 0 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        />
      </div>
    </div>
  );
}
