import Reveal from "@/components/Reveal";
import { Stagger, StaggerItem } from "@/components/Stagger";
import Parallax from "@/components/Parallax";
import Marquee from "@/components/Marquee";
import Counter from "@/components/Counter";
import TiltCard from "@/components/TiltCard";
import Link from "next/link";

export const metadata = {
  title: "Home",
  description:
    "I take TikTok Shop storefronts to #1 — then build the site to match.",
  alternates: { canonical: "/" },
};

const STATS = [
  { prefix: "#", value: 1, suffix: "", label: "Ranked storefront, Vacuum Cleaner category, TikTok Shop 6.6 & 11.11" },
  { prefix: "", value: 9, suffix: "-fig", label: "VND revenue scale contributed at Roborock" },
  { prefix: "", value: 3, suffix: "", label: "Marketplaces operated: TikTok Shop, Shopee, Lazada" },
  { prefix: "", value: 2, suffix: "", label: "Disciplines: ecommerce operations and web development" },
];

const PLATFORMS = ["TikTok Shop", "Shopee", "Lazada", "Roborock", "WordPress", "Elementor", "Next.js", "Power BI"];

const FEATURED_PROJECTS = [
  { tag: "Ecommerce Operations", title: "Roborock TikTok Shop Storefront", meta: "#1 in Vacuum Cleaners — TikTok Shop 6.6 & 11.11", img: "Roborock TikTok Shop ranking screenshot" },
  { tag: "Website Development", title: "STU", meta: "Custom WordPress build", img: "STU website screenshot" },
  { tag: "Website Development", title: "Snowball Movie", meta: "Custom website build", img: "Snowball Movie website screenshot" },
];

export default function HomePage() {
  return (
    <>
      <header>
        <div
          className="container"
          style={{
            paddingTop: 96,
            paddingBottom: 96,
            display: "grid",
            gridTemplateColumns: "1.1fr 0.9fr",
            gap: 64,
            alignItems: "center",
          }}
        >
          <Reveal>
            <span className="tag" style={{ marginBottom: 24 }}>
              Available for full-time roles &amp; freelance projects
            </span>
            <h1 style={{ marginTop: 24 }}>
              I take TikTok Shop storefronts to #1 — then build the site to
              match.
            </h1>
            <p
              className="text-muted"
              style={{ marginTop: 24, maxWidth: 520, fontSize: 17, lineHeight: 1.7 }}
            >
              I run day-to-day marketplace operations for Roborock&apos;s
              TikTok Shop storefront, the global No.1 robot vacuum brand —
              ranked #1 in the Vacuum Cleaner category through the 6.6 and
              11.11 mega sales, contributing to a 9-figure VND revenue scale.
              Off the clock, I design and build WordPress and custom HTML
              websites.
            </p>
            <div style={{ marginTop: 32, display: "flex", gap: 16, flexWrap: "wrap" }}>
              <Link href="/contact-us" className="btn btn-primary">Get In Touch</Link>
              <Link href="/portfolio" className="btn btn-outline">View Portfolio</Link>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <Parallax range={40}>
              <div className="img-placeholder" style={{ aspectRatio: "4/3", borderRadius: "var(--radius-card)" }}>
                Portrait photo of Trần Lê Minh Trung
              </div>
              <TiltCard className="card" style={{ marginTop: 24, padding: 24 }} max={8}>
                <div style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 32, color: "var(--lime)" }}>#1</div>
                <p style={{ marginTop: 8, fontSize: 14 }}>Vacuum Cleaner category, TikTok Shop 6.6 &amp; 11.11</p>
              </TiltCard>
            </Parallax>
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
