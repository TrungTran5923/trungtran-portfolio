import Reveal from "@/components/Reveal";
import { Stagger, StaggerItem } from "@/components/Stagger";
import Link from "next/link";

export const metadata = {
  title: "Blog",
  description:
    "Notes on TikTok Shop campaigns, marketplace operations, and web development from Trung Tran.",
  alternates: { canonical: "/blog" },
};

const ARTICLES = [
  { tag: "Case Study", title: "How I Took Roborock to #1 in the Vacuum Cleaner Category on TikTok Shop 11.11", excerpt: "A walk-through of the pricing, Flash Sale, and voucher strategy behind Roborock's #1 storefront ranking during TikTok Shop's biggest mega sale of the year.", date: "Nov 2025", readTime: "7 min read" },
  { tag: "Playbook", title: "5 Things I Check Before Every Flash Sale Campaign", excerpt: "The pre-launch checklist I run through before any Flash Sale goes live — from stock buffers to voucher stacking rules.", date: "Sep 2025", readTime: "5 min read" },
  { tag: "Perspective", title: "Why I Still Write HTML/CSS as an Ecommerce Operator", excerpt: "Marketplace operations and web development look like different jobs. I've found they reward the same instincts.", date: "Jul 2025", readTime: "4 min read" },
  { tag: "Tools", title: "Power BI or Google Sheets: Picking the Right Dashboard for Your Team", excerpt: "Not every team needs a full Power BI build. Here's how I decide what a dashboard actually needs to do before I build it.", date: "May 2025", readTime: "6 min read" },
];

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
            <StaggerItem key={a.title} className="card" style={{ padding: 32 }}>
              <span className="tag">{a.tag}</span>
              <h2 style={{ marginTop: 14, fontSize: 24 }}>{a.title}</h2>
              <p style={{ marginTop: 12, fontSize: 15 }}>{a.excerpt}</p>
              <div style={{ marginTop: 18, display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12 }}>
                <span style={{ fontSize: 13, color: "var(--gray-2)" }}>{a.date} · {a.readTime}</span>
                <Link href="#" className="btn btn-outline">Read More</Link>
              </div>
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
