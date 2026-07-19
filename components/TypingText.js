"use client";

import { useEffect, useState } from "react";

/**
 * Types out `text` one character at a time (classic terminal-style typing
 * animation). With `loop`, it types, pauses, deletes, pauses, and repeats
 * forever; otherwise it types once and leaves a blinking caret.
 */
export default function TypingText({
  text,
  speed = 80,
  deleteSpeed = 45,
  startDelay = 250,
  holdDelay = 1800,
  loop = false,
  className,
}) {
  const [display, setDisplay] = useState("");

  useEffect(() => {
    let i = 0;
    let timer;

    function typeStep() {
      i += 1;
      setDisplay(text.slice(0, i));
      if (i < text.length) {
        timer = setTimeout(typeStep, speed);
      } else if (loop) {
        timer = setTimeout(deleteStep, holdDelay);
      }
    }

    function deleteStep() {
      i -= 1;
      setDisplay(text.slice(0, i));
      if (i > 0) {
        timer = setTimeout(deleteStep, deleteSpeed);
      } else {
        timer = setTimeout(typeStep, speed);
      }
    }

    const startTimer = setTimeout(typeStep, startDelay);
    return () => {
      clearTimeout(startTimer);
      clearTimeout(timer);
    };
  }, [text, speed, deleteSpeed, startDelay, holdDelay, loop]);

  return (
    <span className={className}>
      {display}
      <span className="typing-cursor">|</span>
    </span>
  );
}
