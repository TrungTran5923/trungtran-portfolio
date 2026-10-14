import fs from "fs";
import path from "path";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Reveal from "@/components/Reveal";
import { POSTS, getPost } from "@/lib/posts";

export function generateStaticParams() {
  return POSTS.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }) {
  const post = getPost(params.slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `/blog/${post.slug}` },
  };
}

export default function PostPage({ params }) {
  const post = getPost(params.slug);
  if (!post) notFound();
  const hasImg = post.img && fs.existsSync(path.join(process.cwd(), "public", "images", post.img));

  return (
    <>
      <header>
        <div className="container" style={{ paddingTop: 96, paddingBottom: 40, maxWidth: 760 }}>
          <Reveal><span className="tag">{post.tag}</span></Reveal>
          <Reveal as="h1" style={{ marginTop: 16 }}>{post.title}</Reveal>
          <Reveal className="text-muted" style={{ marginTop: 16, fontSize: 14 }}>
            Trung Tran · {post.date} · {post.readTime}
          </Reveal>
        </div>
      </header>

      <section style={{ paddingTop: 0 }}>
        <div className="container" style={{ maxWidth: 760 }}>
          <div style={{ position: "relative", aspectRatio: "16/9", borderRadius: 16, overflow: "hidden", background: post.gradient }}>
            {hasImg && <Image src={`/images/${post.img}`} alt={post.title} fill style={{ objectFit: "cover" }} sizes="760px" priority />}
          </div>

          <article style={{ marginTop: 40 }}>
            {post.body.map((b, i) => (
              <div key={i} style={{ marginTop: i === 0 ? 0 : 28 }}>
                {b.h && <h2 style={{ fontSize: 24, marginBottom: 10 }}>{b.h}</h2>}
                <p style={{ fontSize: 17, lineHeight: 1.8 }}>{b.p}</p>
              </div>
            ))}
          </article>

          <div style={{ marginTop: 56, display: "flex", gap: 16, flexWrap: "wrap" }}>
            <Link href="/blog" className="btn btn-outline">← All Articles</Link>
            <Link href="/contact-us" className="btn btn-primary">Get In Touch</Link>
          </div>
        </div>
      </section>
    </>
  );
}
