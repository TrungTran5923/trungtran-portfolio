"use client";

import { useEffect, useState } from "react";

/**
 * Types out `text` one character at a time (classic terminal-style typing
 * animation), then leaves a blinking caret. Runs once on mount.
 */
export default function TypingText({ text, speed = 80, startDelay = 250, className }) {
  const [display, setDisplay] = useState("");

  useEffect(() => {
    let i = 0;
    let stepTimer;

    function tick() {
      i += 1;
      setDisplay(text.slice(0, i));
      if (i < text.length) {
        stepTimer = setTimeout(tick, speed);
      }
    }

    const startTimer = setTimeout(tick, startDelay);
    return () => {
      clearTimeout(startTimer);
      clearTimeout(stepTimer);
    };
  }, [text, speed, startDelay]);

  return (
    <span className={className}>
      {display}
      <span className="typing-cursor">|</span>
    </span>
  );
}
