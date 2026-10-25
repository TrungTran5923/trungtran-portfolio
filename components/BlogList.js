"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

/** Blog index with category filter chips. `posts` are already localized. */
export default function BlogList({ posts, categories, allLabel, readMore }) {
  const [cat, setCat] = useState("all");
  const shown = cat === "all" ? posts : posts.filter((p) => p.category === cat);

  return (
    <>
      <div className="filter-chips" role="tablist">
        <button type="button" className={cat === "all" ? "on" : ""} onClick={() => setCat("all")}>{allLabel}</button>
        {Object.entries(categories).map(([key, label]) => (
          <button key={key} type="button" className={cat === key ? "on" : ""} onClick={() => setCat(key)}>{label}</button>
        ))}
      </div>

      <div className="blog-grid">
        {shown.map((a) => (
          <Link key={a.slug} href={a.href} className="card blog-card">
            <div className="blog-card-img" style={{ background: a.gradient }}>
              {a.hasImg && <Image src={`/images/${a.img}`} alt={a.title} fill style={{ objectFit: "cover" }} sizes="(max-width: 900px) 100vw, 33vw" />}
            </div>
            <div className="blog-card-body">
              <span className="tag">{categories[a.category]}</span>
              <h2>{a.title}</h2>
              <p>{a.excerpt}</p>
              <div className="blog-card-foot">
                <span>{a.date} · {a.readTime}</span>
                <span className="news-row-more" style={{ marginTop: 0 }}>{readMore} →</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}
