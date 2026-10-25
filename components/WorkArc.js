"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

/**
 * Work Experience — connected step timeline. A row of numbered nodes with
 * a fill-in progress line sits above a single content panel; the panel
 * crossfades between jobs. Auto-advances on a timer, and clicking any
 * node jumps straight to it. Much simpler/cleaner than the earlier dome
 * layout, and the interaction (click any step) is obvious at a glance.
 */
export default function WorkArc({ items, interval = 4500, tag = "Work Experience" }) {
  const defaultIndex = items.findIndex((it) => it.active);
  const [active, setActive] = useState(defaultIndex >= 0 ? defaultIndex : items.length - 1);
  const timerRef = useRef(null);

  const restartTimer = () => {
    clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setActive((i) => (i + 1) % items.length);
    }, interval);
  };

  useEffect(() => {
    restartTimer();
    return () => clearInterval(timerRef.current);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [items.length]);

  const selectItem = (i) => {
    setActive(i);
    restartTimer();
  };

  const current = items[active];
  const progress = items.length > 1 ? (active / (items.length - 1)) * 100 : 100;

  return (
    <div className="work-timeline">
      <div className="work-steps">
        <div className="work-steps-line" aria-hidden="true" />
        <div className="work-steps-progress" style={{ width: `${progress}%` }} aria-hidden="true" />
        {items.map((it, i) => (
          <button
            key={it.n}
            type="button"
            className={`work-step${i === active ? " active" : ""}${i < active ? " done" : ""}`}
            onClick={() => selectItem(i)}
          >
            <span className="work-step-dot">{it.n}</span>
            <span className="work-step-label">{it.short || it.title}</span>
          </button>
        ))}
      </div>

      <div className="work-panel">
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="work-panel-tag">{tag} — {String(active + 1).padStart(2, "0")} / {String(items.length).padStart(2, "0")}{current.date ? ` · ${current.date}` : ""}</span>
            <h3>{current.title}</h3>
            <p>{current.body}</p>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
