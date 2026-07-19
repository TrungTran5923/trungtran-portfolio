"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

/**
 * Wraps children (typically the hero image/visual) and shifts them vertically
 * as the page scrolls past, for a subtle parallax depth effect.
 */
export default function Parallax({ children, className, style, range = 60 }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, range]);

  return (
    <div ref={ref} className={className} style={style}>
      <motion.div style={{ y }}>{children}</motion.div>
    </div>
  );
}
