"use client";

import { useState } from "react";
import Image from "next/image";

/**
 * Testimonial carousel — one lime card visible at a time, with a
 * prev/next pair and a "01 / 03" counter, echoing Revox's slider.
 */
export default function Testimonials({ items, labels = { prev: "Previous testimonial", next: "Next testimonial" } }) {
  const [index, setIndex] = useState(0);

  const go = (dir) => setIndex((i) => (i + dir + items.length) % items.length);

  return (
    <div className="testi-carousel">
      <div
        className="testi-track"
        style={{
          transform: `translateX(calc(-${index} * (min(720px, 88vw) + 24px)))`,
          transition: "transform 0.5s cubic-bezier(0.22,1,0.36,1)",
        }}
      >
        {items.map((t, i) => (
          <div className="testi-slide" key={i}>
            <div>
              <p className="testi-quote">&ldquo;{t.quote}&rdquo;</p>
              <div className="testi-foot">
                <div className="testi-person">
                  {t.hasPhoto ? (
                    <Image className="testi-avatar" src={`/images/${t.photo}`} alt={t.name} width={56} height={56} />
                  ) : (
                    <span className="testi-avatar testi-initials" aria-hidden="true">
                      {t.name.replace(/^(Ms|Mr|Mrs)\.?\s+/i, "").split(/\s+/).map((w) => w[0]).slice(-2).join("")}
                    </span>
                  )}
                  <div>
                  <div className="testi-name">{t.name}</div>
                    <div className="testi-role">{t.role}</div>
                  </div>
                </div>
              </div>
            </div>
            <span className="testi-rating" aria-hidden="true">★ ★ ★ ★ ★</span>
          </div>
        ))}
      </div>

      <div className="testi-controls">
        <span className="testi-counter">
          <span className="current">{String(index + 1).padStart(2, "0")}</span> / {String(items.length).padStart(2, "0")}
        </span>
        <div className="testi-nav">
          <button type="button" onClick={() => go(-1)} aria-label={labels.prev}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <button type="button" onClick={() => go(1)} aria-label={labels.next}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
