"use client";

import { useEffect, useRef, useState } from "react";
import { getContent } from "@/lib/content";
import { SOCIALS } from "@/lib/site";

// Floating contact button: one main button that expands into social links.
// Links come from SOCIALS in lib/site.js; the order below is top → bottom.
const ORDER = ["Facebook", "LinkedIn", "YouTube", "GitHub"];

const ICONS = {
  Facebook: (
    <svg viewBox="0 0 24 24" fill="#fff" aria-hidden="true"><path d="M14 8V6.5c0-.7.2-1 1-1h2V2h-3c-3 0-4.5 1.8-4.5 4.5V8H7v3.5h2.5V22H14V11.5h2.8L17.5 8H14z" /></svg>
  ),
  LinkedIn: (
    <svg viewBox="0 0 24 24" fill="#fff" aria-hidden="true"><path d="M4.98 3.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0zM.24 8h4.52v14H.24V8zm7.5 0h4.33v1.92h.06c.6-1.14 2.08-2.34 4.28-2.34 4.58 0 5.42 3.01 5.42 6.93V22h-4.51v-6.6c0-1.57-.03-3.6-2.2-3.6-2.2 0-2.53 1.72-2.53 3.49V22H7.74V8z" transform="translate(1.5 0) scale(0.9)" /></svg>
  ),
  YouTube: (
    <svg viewBox="0 0 24 24" fill="#fff" aria-hidden="true"><path d="M23 7.2a3 3 0 0 0-2.1-2.1C19 4.6 12 4.6 12 4.6s-7 0-8.9.5A3 3 0 0 0 1 7.2 31 31 0 0 0 .5 12 31 31 0 0 0 1 16.8a3 3 0 0 0 2.1 2.1c1.9.5 8.9.5 8.9.5s7 0 8.9-.5a3 3 0 0 0 2.1-2.1 31 31 0 0 0 .5-4.8 31 31 0 0 0-.5-4.8zM9.8 15.1V8.9L15.6 12l-5.8 3.1z" /></svg>
  ),
  GitHub: (
    <svg viewBox="0 0 24 24" fill="#fff" aria-hidden="true"><path d="M12 .5a11.5 11.5 0 0 0-3.6 22.4c.6.1.8-.3.8-.6v-2c-3.2.7-3.9-1.5-3.9-1.5-.5-1.3-1.3-1.7-1.3-1.7-1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1 1.8 2.8 1.3 3.4 1 .1-.8.4-1.3.8-1.6-2.6-.3-5.3-1.3-5.3-5.7 0-1.3.5-2.3 1.2-3.1-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.2 1.2a11 11 0 0 1 5.8 0c2.2-1.5 3.2-1.2 3.2-1.2.6 1.6.2 2.8.1 3.1.8.8 1.2 1.8 1.2 3.1 0 4.4-2.7 5.4-5.3 5.7.4.4.8 1.1.8 2.2v3.2c0 .3.2.7.8.6A11.5 11.5 0 0 0 12 .5z" /></svg>
  ),
};

export default function ChatButtons({ lang = "en" }) {
  const t = getContent(lang).chat;
  const [open, setOpen] = useState(false);
  const wrapRef = useRef(null);
  const items = ORDER.map((name) => SOCIALS.find((s) => s.name === name)).filter(Boolean);

  // Close when clicking outside or pressing Escape.
  useEffect(() => {
    const onClick = (e) => {
      if (wrapRef.current && !wrapRef.current.contains(e.target)) setOpen(false);
    };
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    document.addEventListener("click", onClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("click", onClick);
      document.removeEventListener("keydown", onKey);
    };
  }, []);

  return (
    <div ref={wrapRef} className={`cb-wrap${open ? " open" : ""}`}>
      <div className="cb-list">
        {items.map((s, i) => (
          <a
            key={s.name}
            className={`cb-item cb-btn cb-${s.name.toLowerCase()}`}
            style={{ "--d": `${(items.length - 1 - i) * 60}ms` }}
            href={s.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={s.name}
            tabIndex={open ? 0 : -1}
          >
            <span className="cb-label">{s.name}</span>
            {ICONS[s.name]}
          </a>
        ))}
      </div>

      <div className="cb-main">
        <span className="cb-bubble">{t.bubble}</span>
        <button
          type="button"
          className="cb-toggle"
          aria-label={t.toggle}
          aria-expanded={open}
          onClick={(e) => {
            e.stopPropagation();
            setOpen((v) => !v);
          }}
        >
          <svg className="cb-i-chat" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M4 3h16a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H9l-5 4v-4H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z" /></svg>
          <svg className="cb-i-close" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" aria-hidden="true"><path d="M6 6l12 12M18 6L6 18" /></svg>
        </button>
        <span className="cb-badge" aria-hidden="true">!</span>
      </div>
    </div>
  );
}
