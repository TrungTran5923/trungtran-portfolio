"use client";

import { useEffect, useRef } from "react";

/**
 * Custom trailing cursor: a small lime dot that follows the mouse exactly,
 * and a ring that trails behind with a slight delay and grows on hover
 * over links/buttons/cards. Hidden automatically on touch devices via CSS.
 */
export default function Cursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);

  useEffect(() => {
    if (window.matchMedia("(hover: none), (pointer: coarse)").matches) return;

    const dot = dotRef.current;
    const ring = ringRef.current;
    let mouseX = 0;
    let mouseY = 0;
    let ringX = 0;
    let ringY = 0;

    const onMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (dot) dot.style.transform = `translate(${mouseX}px, ${mouseY}px) translate(-50%, -50%)`;
    };

    const onOver = (e) => {
      if (e.target.closest("a, button, .card, .tilt-card, input, textarea")) {
        ring?.classList.add("is-hovering");
      }
    };
    const onOut = (e) => {
      if (e.target.closest("a, button, .card, .tilt-card, input, textarea")) {
        ring?.classList.remove("is-hovering");
      }
    };

    let raf;
    const tick = () => {
      ringX += (mouseX - ringX) * 0.15;
      ringY += (mouseY - ringY) * 0.15;
      if (ring) ring.style.transform = `translate(${ringX}px, ${ringY}px) translate(-50%, -50%)`;
      raf = requestAnimationFrame(tick);
    };

    window.addEventListener("mousemove", onMove);
    document.addEventListener("mouseover", onOver);
    document.addEventListener("mouseout", onOut);
    raf = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseover", onOver);
      document.removeEventListener("mouseout", onOut);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      <div ref={dotRef} className="cursor-dot" />
      <div ref={ringRef} className="cursor-ring" />
    </>
  );
}
