"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { getContent } from "@/lib/content";
import { CV_URL, localePath } from "@/lib/site";

/** Same page in the other language: /about-me <-> /vi/about-me */
function switchPath(lang, pathname) {
  if (lang === "vi") {
    const rest = pathname.replace(/^\/vi(?=\/|$)/, "");
    return rest || "/";
  }
  return pathname === "/" ? "/vi" : `/vi${pathname}`;
}

export default function Header({ lang = "en" }) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname() || "/";
  const t = getContent(lang).nav;

  const isActive = (href) => {
    const full = localePath(lang, href);
    if (href === "/") return pathname === full;
    return pathname === full || pathname.startsWith(`${full}/`);
  };

  return (
    <nav className="nav">
      <div className="container">
        <Link href={localePath(lang, "/")} className="nav-logo">
          <Image src="/images/logo-full.png" alt="Trung Tran" width={220} height={46} style={{ height: 38, width: "auto" }} priority />
        </Link>

        <ul className={`nav-links${open ? " is-open" : ""}`}>
          {t.links.map((link) => (
            <li key={link.href}>
              <Link
                href={localePath(lang, link.href)}
                className={isActive(link.href) ? "active" : ""}
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li className="nav-mobile-extra">
            <a href={switchPath(lang, pathname)}>{t.switchLabel}</a>
          </li>
          <li className="nav-mobile-extra">
            <a href={CV_URL} target="_blank" rel="noopener noreferrer">{t.cvTitle}</a>
          </li>
        </ul>

        <div className="nav-actions">
          <div className="lang-switch" aria-label="Language">
            <a href={lang === "en" ? pathname : switchPath(lang, pathname)} className={lang === "en" ? "on" : ""} hrefLang="en">EN</a>
            <a href={lang === "vi" ? pathname : switchPath(lang, pathname)} className={lang === "vi" ? "on" : ""} hrefLang="vi">VI</a>
          </div>
          <a href={CV_URL} target="_blank" rel="noopener noreferrer" className="nav-cv" title={t.cvTitle}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M12 3v12m0 0l-5-5m5 5l5-5M5 21h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            {t.cv}
          </a>
          <Link href={localePath(lang, "/contact-us")} className="btn btn-primary nav-cta">
            {t.cta}
          </Link>
        </div>

        <button
          className="nav-toggle"
          aria-label={t.menu}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </nav>
  );
}
