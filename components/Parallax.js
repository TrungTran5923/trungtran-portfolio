"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

/**
 * Wraps children (typically the hero image/visual) and shifts them vertically
 * as the page scrolls past, for a subtle parallax depth effect.
 *
 * Both wrapper divs default to height: 100% so that a `fill`-mode next/image
 * (or any absolutely positioned child) inside can still see a real height
 * all the way up the chain, instead of collapsing to 0 because this wrapper
 * introduced an auto-height div in between.
 */
export default function Parallax({ children, className, style, range = 60 }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, range]);

  return (
    <div ref={ref} className={className} style={{ height: "100%", ...style }}>
      <motion.div style={{ y, height: "100%" }}>{children}</motion.div>
    </div>
  );
}
