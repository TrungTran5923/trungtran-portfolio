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

const TOOLS = [
  { name: "TikTok Shop", abbr: "TT" },
  { name: "Shopee", abbr: "SP" },
  { name: "Lazada", abbr: "LZ" },
  { name: "WordPress", abbr: "WP" },
  { name: "Elementor", abbr: "EL" },
  { name: "Next.js", abbr: "N" },
  { name: "Power BI", abbr: "BI" },
  { name: "Google Colab", abbr: "GC" },
];

const WHAT_I_DO = [
  { n: "01", title: "WordPress Website Development", body: "WordPress/Elementor and custom HTML/Next.js builds." },
  { n: "02", title: "AI Workflow Automation", body: "Automations and dashboards that remove manual busywork." },
  { n: "03", title: "Ecom Operations Consulting", body: "Audits, pricing, and campaign strategy for marketplace storefronts." },
  { n: "04", title: "Part-Time Marketplace Ops", body: "Hands-on TikTok Shop, Shopee, Lazada operations on a flexible basis." },
  { n: "05", title: "Livestream Consulting", body: "Structure and pacing for sale livestream sessions that convert." },
];

const WORK_EXPERIENCE = [
  { n: "01", title: "Levoit — Ecommerce Operations Intern", body: "First hands-on exposure to marketplace operations and ecommerce content workflows." },
  { n: "02", title: "Decor Home & Phuong Hoang Linh", body: "Marketplace operations and content across multiple storefronts." },
  { n: "03", title: "Freelance Web Development", body: "Designed and built websites for STU, Rennes, and independent brands." },
  { n: "04", title: "Vietnam O-Tech Smart Equipment — Ecommerce Executive", body: "Running a TikTok Shop storefront, #1 in Vacuum Cleaners during the 6.6 & 11.11 mega sales.", active: true },
];

const FEATURED_PROJECTS = [
  { tag: "Ecommerce Operations", title: "TikTok Shop Storefront Operations", meta: "#1 in Vacuum Cleaners — TikTok Shop 6.6 & 11.11", img: "TikTok Shop ranking screenshot" },
  { tag: "Website Development", title: "STU", meta: "Custom WordPress build", img: "STU website screenshot" },
  { tag: "Website Development", title: "Snowball Movie", meta: "Custom website build", img: "Snowball Movie website screenshot" },
];

// Placeholder testimonials — swap in real quotes/names once you have them.
const TESTIMONIALS = [
  { quote: "Placeholder testimonial — replace with a real quote from a client or teammate you've worked with.", name: "Client Name", role: "Role, Company" },
  { quote: "Placeholder testimonial — replace with a real quote from a client or teammate you've worked with.", name: "Client Name", role: "Role, Company" },
  { quote: "Placeholder testimonial — replace with a real quote from a client or teammate you've worked with.", name: "Client Name", role: "Role, Company" },
];

const NEWS = [
  { tag: "Case Study", title: "How I Took a TikTok Shop Storefront to #1 in Vacuum Cleaners on 11.11", date: "Nov 2025" },
  { tag: "Playbook", title: "5 Things I Check Before Every Flash Sale Campaign", date: "Sep 2025" },
  { tag: "Perspective", title: "Why I Still Write HTML/CSS as an Ecommerce Operator", date: "Jul 2025" },
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

      {/* Results at a Glance */}
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

          <Reveal delay={0.1}>
            <p className="text-muted" style={{ marginTop: 56, fontSize: 13, textTransform: "uppercase", letterSpacing: "0.08em" }}>
              Platforms &amp; tools I work with
            </p>
          </Reveal>
          <Stagger className="logo-grid">
            {TOOLS.map((t) => (
              <StaggerItem key={t.name} className="logo-tile">
                <div className="logo-tile-icon">{t.abbr}</div>
                <span className="logo-tile-name">{t.name}</span>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* What I Do */}
      <section>
        <div className="container">
          <Reveal><span className="eyebrow">What I Do</span></Reveal>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: 16 }}>
            <Reveal as="h2">Where I plug in and move the needle fastest.</Reveal>
            <Reveal><Link href="/services" className="btn btn-outline">See All Services</Link></Reveal>
          </div>

          <Stagger style={{ marginTop: 40, display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 24 }}>
            {WHAT_I_DO.map((s) => (
              <StaggerItem key={s.n}>
                <TiltCard className="card" style={{ padding: 28 }} max={6}>
                  <div className="service-icon" style={{ background: "var(--black-2)", width: 52, height: 52, fontSize: 16, borderRadius: 12 }}>{s.n}</div>
                  <h3 style={{ marginTop: 18, fontSize: 18 }}>{s.title}</h3>
                  <p style={{ marginTop: 10, fontSize: 14 }}>{s.body}</p>
                </TiltCard>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Work Experience */}
      <section className="section-alt">
        <div className="container">
          <Reveal><span className="eyebrow">Work Experience</span></Reveal>
          <Reveal as="h2">The path so far.</Reveal>
          <Stagger style={{ marginTop: 40, display: "flex", flexDirection: "column" }}>
            {WORK_EXPERIENCE.map((t) => (
              <StaggerItem key={t.n} className="timeline-step">
                <div className={`timeline-num${t.active ? " active" : ""}`}>{t.n}</div>
                <div>
                  <h4>{t.title}</h4>
                  <p style={{ marginTop: 6, fontSize: 14 }}>{t.body}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* My Projects */}
      <section>
        <div className="container">
          <Reveal><span className="eyebrow">My Projects</span></Reveal>
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

      {/* Testimonials */}
      <section className="section-alt">
        <div className="container">
          <Reveal><span className="eyebrow">Testimonials</span></Reveal>
          <Reveal as="h2">What people I&apos;ve worked with say.</Reveal>
          <Stagger style={{ marginTop: 40, display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 32 }}>
            {TESTIMONIALS.map((t, i) => (
              <StaggerItem key={i}>
                <TiltCard className="testimonial-card" max={6}>
                  <span className="testimonial-quote-mark">&ldquo;</span>
                  <p className="testimonial-body">{t.quote}</p>
                  <div className="testimonial-author">
                    <div className="testimonial-avatar" />
                    <div>
                      <div className="testimonial-name">{t.name}</div>
                      <div className="testimonial-role">{t.role}</div>
                    </div>
                  </div>
                </TiltCard>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* News & Blog */}
      <section>
        <div className="container">
          <Reveal><span className="eyebrow">News &amp; Blog</span></Reveal>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: 16 }}>
            <Reveal as="h2">Notes from the storefront floor.</Reveal>
            <Reveal><Link href="/blog" className="btn btn-outline">View All News</Link></Reveal>
          </div>

          <Stagger style={{ marginTop: 40, display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 32 }}>
            {NEWS.map((a) => (
              <StaggerItem key={a.title}>
                <TiltCard className="card" style={{ padding: 28 }} max={5}>
                  <span className="tag">{a.tag}</span>
                  <h3 style={{ marginTop: 16, fontSize: 18 }}>{a.title}</h3>
                  <p style={{ marginTop: 12, fontSize: 13, color: "var(--gray-2)" }}>{a.date}</p>
                </TiltCard>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Let's talk CTA */}
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
