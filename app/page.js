import Reveal from "@/components/Reveal";
import { Stagger, StaggerItem } from "@/components/Stagger";
import Parallax from "@/components/Parallax";
import Marquee from "@/components/Marquee";
import Counter from "@/components/Counter";
import TiltCard from "@/components/TiltCard";
import TypingText from "@/components/TypingText";
import Link from "next/link";

export const metadata = {
  title: "Home",
  description:
    "I scale marketplace storefronts to #1 — then build the site to match.",
  alternates: { canonical: "/" },
};

const STATS = [
  { prefix: "#", value: 1, suffix: "", label: "Ranked storefront, Vacuum Cleaner category, TikTok Shop 6.6 & 11.11" },
  { prefix: "", value: 9, suffix: "-fig", label: "VND revenue scale contributed across marketplace campaigns" },
  { prefix: "", value: 3, suffix: "", label: "Marketplaces operated: TikTok Shop, Shopee, Lazada" },
  { prefix: "", value: 2, suffix: "", label: "Disciplines: ecommerce operations and web development" },
];

const PLATFORMS = ["TikTok Shop", "Shopee", "Lazada", "WordPress", "Elementor", "Next.js", "Power BI", "Livestream"];

const FEATURED_PROJECTS = [
  { tag: "Ecommerce Operations", title: "TikTok Shop Storefront Operations", meta: "#1 in Vacuum Cleaners — TikTok Shop 6.6 & 11.11", img: "TikTok Shop ranking screenshot" },
  { tag: "Website Development", title: "STU", meta: "Custom WordPress build", img: "STU website screenshot" },
  { tag: "Website Development", title: "Snowball Movie", meta: "Custom website build", img: "Snowball Movie website screenshot" },
];

export default function HomePage() {
  return (
    <>
      <header className="hero">
        <div className="container hero-grid">
          <div className="hero-left">
            <Reveal>
              <span className="eyebrow">Welcome to my profile</span>
              <h1 className="hero-title">
                <span className="accent">I&apos;m</span>{" "}
                <TypingText text="Trung Tran" loop />
                <span className="hero-subtitle">Ecommerce Operator. Web Developer.</span>
              </h1>
              <div className="hero-actions">
                <Link href="/portfolio" className="btn btn-outline">View Portfolio</Link>
              </div>
            </Reveal>

            <Reveal delay={0.3}>
              <div className="hero-social">
                <a href="#" aria-label="Facebook">Facebook</a>
                <a href="#" aria-label="LinkedIn">LinkedIn</a>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.15}>
            <div className="hero-visual">
              <div className="hero-lines" aria-hidden="true">
                <span />
                <span />
                <span />
                <span />
                <span />
              </div>
              <Parallax range={40}>
                <div className="img-placeholder hero-image">
                  Portrait photo of Trần Lê Minh Trung
                </div>
              </Parallax>
              <TiltCard className="hero-badge" max={10}>
                <div style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 30, color: "var(--lime)" }}>
                  <Counter prefix="#" value={1} />
                </div>
                <p style={{ marginTop: 6, fontSize: 13 }}>Vacuum Cleaner category, TikTok Shop 6.6 &amp; 11.11</p>
              </TiltCard>
            </div>
          </Reveal>

          <Reveal delay={0.25} className="hero-right">
            <p className="hero-desc text-muted">
              I run day-to-day marketplace operations for a top-ranked TikTok
              Shop storefront — pricing, Flash Sales, livestream, and
              dashboards. Off the clock, I design and build WordPress and
              custom HTML/Next.js websites.
            </p>
          </Reveal>
        </div>
      </header>

      <Marquee items={PLATFORMS} />

      <section className="section-alt">
        <div className="container">
          <Reveal><span className="eyebrow">Results at a Glance</span></Reveal>
          <Stagger
            className="reveal-stagger-grid"
            style={{ marginTop: 24, display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 32 }}
          >
            {STATS.map((stat) => (
              <StaggerItem key={stat.label}>
                <div style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 40, color: "var(--white)" }}>
                  <Counter prefix={stat.prefix} value={stat.value} suffix={stat.suffix} />
                </div>
                <p style={{ marginTop: 8, fontSize: 15 }}>{stat.label}</p>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <section>
        <div className="container">
          <Reveal><span className="eyebrow">Selected Work</span></Reveal>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: 16 }}>
            <Reveal as="h2">A mix of marketplace campaigns and the sites I&apos;ve built.</Reveal>
            <Reveal><Link href="/portfolio" className="btn btn-outline">See All Work</Link></Reveal>
          </div>

          <Stagger style={{ marginTop: 40, display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 32 }}>
            {FEATURED_PROJECTS.map((p) => (
              <StaggerItem key={p.title}>
                <TiltCard className="card" style={{ overflow: "hidden" }}>
                  <div className="img-placeholder" style={{ height: 200 }}>{p.img}</div>
                  <div style={{ padding: 24 }}>
                    <span className="tag">{p.tag}</span>
                    <h3 style={{ marginTop: 14 }}>{p.title}</h3>
                    <p style={{ marginTop: 10, fontSize: 14 }}>{p.meta}</p>
                  </div>
                </TiltCard>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="section-alt">
        <Reveal className="container cta-banner">
          <h2>
            Have a storefront or a site that needs work?
            <br />
            <span className="accent">Let&apos;s talk.</span>
          </h2>
          <Link href="/contact-us" className="btn btn-primary">Book An Intro Call</Link>
        </Reveal>
      </section>
    </>
  );
}
