import Reveal from "@/components/Reveal";
import BlogList from "@/components/BlogList";
import Link from "next/link";
import { getContent } from "@/lib/content";
import { localePath } from "@/lib/site";
import { imageExists } from "@/lib/files";
import { POSTS, CATEGORIES } from "@/lib/posts";

export default function BlogView({ lang = "en" }) {
  const c = getContent(lang);
  const t = c.blog;
  const posts = POSTS.map((p) => ({
    slug: p.slug,
    category: p.category,
    img: p.img,
    gradient: p.gradient,
    hasImg: imageExists(p.img),
    href: localePath(lang, `/blog/${p.slug}`),
    title: p[lang].title,
    excerpt: p[lang].excerpt,
    date: p[lang].date,
    readTime: p[lang].readTime,
  }));
  const categories = Object.fromEntries(Object.entries(CATEGORIES).map(([k, v]) => [k, v[lang]]));

  return (
    <>
      <header>
        <div className="container page-head center">
          <Reveal><span className="eyebrow">{t.eyebrow}</span></Reveal>
          <Reveal as="h1">{t.title}</Reveal>
          <Reveal className="text-muted page-intro">{t.intro}</Reveal>
        </div>
      </header>

      <section style={{ paddingTop: 0 }}>
        <div className="container">
          <BlogList posts={posts} categories={categories} allLabel={t.all} readMore={c.common.readMore} />
        </div>
      </section>

      <section className="section-alt">
        <Reveal className="container cta-banner">
          <h2>
            {t.cta.line1}
            <br />
            <span className="accent">{t.cta.line2}</span>
          </h2>
          <Link href={localePath(lang, "/contact-us")} className="btn btn-primary">{c.common.getInTouch}</Link>
        </Reveal>
      </section>
    </>
  );
}
