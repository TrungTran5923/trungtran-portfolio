import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import { getContent } from "@/lib/content";
import { localePath } from "@/lib/site";
import { imageExists } from "@/lib/files";
import { POSTS, CATEGORIES } from "@/lib/posts";

export default function PostView({ lang = "en", post }) {
  const c = getContent(lang);
  const t = post[lang];
  const hasImg = imageExists(post.img);
  const related = POSTS.filter((p) => p.slug !== post.slug).slice(0, 2);

  return (
    <>
      <header>
        <div className="container" style={{ paddingTop: 96, paddingBottom: 40, maxWidth: 760 }}>
          <Reveal><Link href={localePath(lang, "/blog")} className="back-link">{c.common.allArticles}</Link></Reveal>
          <Reveal><span className="tag" style={{ marginTop: 20 }}>{CATEGORIES[post.category][lang]}</span></Reveal>
          <Reveal as="h1" style={{ marginTop: 16 }}>{t.title}</Reveal>
          <Reveal className="text-muted" style={{ marginTop: 16, fontSize: 14 }}>
            Trung Tran · {t.date} · {t.readTime}
          </Reveal>
        </div>
      </header>

      <section style={{ paddingTop: 0 }}>
        <div className="container" style={{ maxWidth: 760 }}>
          <div style={{ position: "relative", aspectRatio: "16/9", borderRadius: 16, overflow: "hidden", background: post.gradient }}>
            {hasImg && <Image src={`/images/${post.img}`} alt={t.title} fill style={{ objectFit: "cover" }} sizes="760px" priority />}
          </div>

          <article style={{ marginTop: 40 }}>
            {t.body.map((b, i) => (
              <div key={i} style={{ marginTop: i === 0 ? 0 : 28 }}>
                {b.h && <h2 style={{ fontSize: 24, marginBottom: 10 }}>{b.h}</h2>}
                <p style={{ fontSize: 17, lineHeight: 1.8 }}>{b.p}</p>
              </div>
            ))}
          </article>

          <div className="post-related">
            {related.map((r) => (
              <Link key={r.slug} href={localePath(lang, `/blog/${r.slug}`)} className="card post-related-card">
                <span className="tag">{CATEGORIES[r.category][lang]}</span>
                <h3>{r[lang].title}</h3>
              </Link>
            ))}
          </div>

          <div style={{ marginTop: 40, display: "flex", gap: 16, flexWrap: "wrap" }}>
            <Link href={localePath(lang, "/blog")} className="btn btn-outline">{c.common.allArticles}</Link>
            <Link href={localePath(lang, "/contact-us")} className="btn btn-primary">{c.common.getInTouch}</Link>
          </div>
        </div>
      </section>
    </>
  );
}
