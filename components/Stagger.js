"use client";

import { motion } from "framer-motion";

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.09, delayChildren: 0.05 },
  },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

/**
 * Staggered scroll-reveal for a grid/list of children.
 * Wrap the group with <Stagger>, and each direct child with <StaggerItem>.
 */
export function Stagger({ children, className, style }) {
  return (
    <motion.div
      className={className}
      style={style}
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-60px" }}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({ children, className, style, id }) {
  return (
    <motion.div id={id} className={className} style={style} variants={item}>
      {children}
    </motion.div>
  );
}

export default Stagger;
