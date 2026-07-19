"use client";

import { useRef } from "react";

/**
 * Wraps children in a card that tilts in 3D following the mouse position,
 * on top of whatever entrance animation the parent (e.g. Reveal/Stagger)
 * already applies. Disabled automatically on touch devices.
 */
export default function TiltCard({ children, className = "", style, max = 10 }) {
  const ref = useRef(null);

  const onMouseMove = (e) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    el.style.transform = `perspective(800px) rotateY(${x * max}deg) rotateX(${-y * max}deg) translateZ(0)`;
  };

  const onMouseLeave = () => {
    const el = ref.current;
    if (!el) return;
    el.style.transform = "perspective(800px) rotateY(0deg) rotateX(0deg) translateZ(0)";
  };

  return (
    <div
      ref={ref}
      className={`tilt-card ${className}`}
      style={style}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
    >
      {children}
    </div>
  );
}
