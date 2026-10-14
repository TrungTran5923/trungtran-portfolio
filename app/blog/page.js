import Reveal from "@/components/Reveal";
import { Stagger, StaggerItem } from "@/components/Stagger";
import TiltCard from "@/components/TiltCard";
import Link from "next/link";
import { POSTS } from "@/lib/posts";

export const metadata = {
  title: "Blog",
  description:
    "Notes on TikTok Shop campaigns, marketplace operations, and web development from Trung Tran.",
  alternates: { canonical: "/blog" },
};

const ARTICLES = POSTS;

export default function BlogPage() {
  return (
    <>
      <header>
        <div className="container" style={{ paddingTop: 96, paddingBottom: 64, textAlign: "center", maxWidth: 760 }}>
          <Reveal><span className="eyebrow">Blog</span></Reveal>
          <Reveal as="h1">Notes from the storefront floor.</Reveal>
          <Reveal className="text-muted" style={{ marginTop: 20, fontSize: 18 }}>
            What I&apos;m actually checking, testing, and building — between campaigns and client projects.
          </Reveal>
        </div>
      </header>

      <section>
        <Stagger className="container" style={{ display: "flex", flexDirection: "column", gap: 24, maxWidth: 900 }}>
          {ARTICLES.map((a) => (
            <StaggerItem key={a.title}>
              <TiltCard className="card" style={{ padding: 32 }} max={4}>
                <span className="tag">{a.tag}</span>
                <h2 style={{ marginTop: 14, fontSize: 24 }}>{a.title}</h2>
                <p style={{ marginTop: 12, fontSize: 15 }}>{a.excerpt}</p>
                <div style={{ marginTop: 18, display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12 }}>
                  <span style={{ fontSize: 13, color: "var(--gray-2)" }}>{a.date} · {a.readTime}</span>
                  <Link href={`/blog/${a.slug}`} className="btn btn-outline">Read More</Link>
                </div>
              </TiltCard>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      <section className="section-alt">
        <Reveal className="container cta-banner">
          <h2>
            Have a topic you&apos;d like me to
            <br />
            <span className="accent">cover?</span>
          </h2>
          <Link href="/contact-us" className="btn btn-primary">Get In Touch</Link>
        </Reveal>
      </section>
    </>
  );
}
