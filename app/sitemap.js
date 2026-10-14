import { POSTS } from "@/lib/posts";

const BASE = "https://trungtranecom.pro.vn";

export default function sitemap() {
  const pages = ["", "/about-me", "/services", "/portfolio", "/blog", "/contact-us"].map((p) => ({
    url: `${BASE}${p}`,
    lastModified: new Date(),
    changeFrequency: p === "" ? "weekly" : "monthly",
    priority: p === "" ? 1 : 0.7,
  }));
  const posts = POSTS.map((p) => ({
    url: `${BASE}/blog/${p.slug}`,
    lastModified: new Date(),
    changeFrequency: "yearly",
    priority: 0.5,
  }));
  return [...pages, ...posts];
}
