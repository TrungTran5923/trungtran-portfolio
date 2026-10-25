import { POSTS } from "@/lib/posts";
import { PROJECTS } from "@/lib/projects";
import { SITE_URL, localePath } from "@/lib/site";

export default function sitemap() {
  const paths = [
    ["/", 1, "weekly"],
    ["/about-me", 0.8, "monthly"],
    ["/services", 0.9, "monthly"],
    ["/portfolio", 0.8, "monthly"],
    ["/blog", 0.7, "weekly"],
    ["/contact-us", 0.7, "yearly"],
    ...PROJECTS.filter((p) => p.caseStudy).map((p) => [`/portfolio/${p.slug}`, 0.6, "yearly"]),
    ...POSTS.map((p) => [`/blog/${p.slug}`, 0.5, "yearly"]),
  ];
  return paths.flatMap(([p, priority, changeFrequency]) =>
    ["en", "vi"].map((lang) => ({
      url: `${SITE_URL}${localePath(lang, p)}`,
      lastModified: new Date(),
      changeFrequency,
      priority,
      alternates: { languages: { en: `${SITE_URL}${p}`, vi: `${SITE_URL}${localePath("vi", p)}` } },
    }))
  );
}
