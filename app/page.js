import Reveal from "@/components/Reveal";
import { Stagger, StaggerItem } from "@/components/Stagger";
import Parallax from "@/components/Parallax";
import Marquee from "@/components/Marquee";
import Counter from "@/components/Counter";
import TiltCard from "@/components/TiltCard";
import TypingText from "@/components/TypingText";
import WorkArc from "@/components/WorkArc";
import Testimonials from "@/components/Testimonials";
import Link from "next/link";
import Image from "next/image";
import fs from "fs";
import path from "path";
import { POSTS } from "@/lib/posts";

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
  { name: "TikTok Shop", icon: "logo-tiktokshop.png" },
  { name: "Shopee", icon: "logo-shopee.png" },
  { name: "Lazada", icon: "logo-lazada.png" },
  { name: "WordPress", icon: "logo-wordpress.png" },
  { name: "Elementor", icon: "logo-elementor.png" },
  { name: "Data Analysis", icon: "datatools.png" },
  { name: "AI Automation", icon: "aiauto.png" },
  { name: "Livestream", icon: "livetools.png" },
];

const SKILLS = [
  { name: "Marketplace Ops", abbr: "MKT", icon: "ecomsite.png", value: 95 },
  { name: "WordPress / Elementor", abbr: "WP", icon: "weblogo.png", value: 92 },
  { name: "Data Analysis", abbr: "DA", icon: "datatools.png", value: 85 },
  { name: "AI Workflow Automation", abbr: "AI", icon: "aiauto.png", value: 80 },
  { name: "Livestream Ops", abbr: "LV", icon: "livetools.png", value: 88 },
];

const WHAT_I_DO = [
  { n: "01", title: "WordPress Website Development", body: "WordPress/Elementor and custom HTML/Next.js builds." },
  { n: "02", title: "AI Workflow Automation", body: "Automations and dashboards that remove manual busywork." },
  { n: "03", title: "Ecom Operations Consulting", body: "Audits, pricing, and campaign strategy for marketplace storefronts." },
  { n: "04", title: "Part-Time Marketplace Ops", body: "Hands-on TikTok Shop, Shopee, Lazada operations on a flexible basis." },
  { n: "05", title: "Livestream Consulting", body: "Structure and pacing for sale livestream sessions that convert." },
];

const WORK_EXPERIENCE = [
  { n: "01", short: "Levoit", title: "Levoit — Ecommerce Operations Intern", body: "First hands-on exposure to marketplace operations and ecommerce content workflows." },
  { n: "02", short: "Decor Home", title: "Decor Home & Phuong Hoang Linh", body: "Marketplace operations and content across multiple storefronts." },
  { n: "03", short: "Freelance Web", title: "Freelance Web Development", body: "Designed and built websites for STU, Rennes, and independent brands." },
  { n: "04", short: "O-Tech Smart Equipment", title: "Vietnam O-Tech Smart Equipment — Ecommerce Executive", body: "Running a TikTok Shop storefront, #1 in Vacuum Cleaners during the 6.6 & 11.11 mega sales.", active: true },
];

const FEATURED_PROJECTS = [
  { tag: "Ecommerce Operations", title: "TikTok Shop Storefront Operations", meta: "#1 in Vacuum Cleaners — TikTok Shop 6.6 & 11.11", img: "prj-roborock.png" },
  { tag: "Website Development", title: "UEH-Rennes", meta: "Custom WordPress build for Top University", img: "prj-ueh-rennes.png" },
  { tag: "Website Development", title: "StyleAI", meta: "Custom Intergrated A.I function on website", img: "prj-styleai.png" },
];

const TESTIMONIALS = [
  { quote: "Trung picked up marketplace operations and content quickly and always took ownership of the details. He is reliable, careful with numbers, and easy to work with.", name: "Ms. Kim Linh", role: "Co-founder / Business Owner, Phượng Hoàng Linh Media & Training Co., Ltd" },
  { quote: "What I value most is his attitude: he asks the right questions, follows through on tasks, and keeps improving how he works. I would happily work with him again.", name: "Ms. Phượng Nguyễn", role: "Co-founder / Business Owner, Phượng Hoàng Linh Media & Training Co., Ltd" },
];

const NEWS = POSTS.map((p) => ({
  ...p,
  hasImg: !!p.img && fs.existsSync(path.join(process.cwd(), "public", "images", p.img)),
}));

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
                <a href="https://www.facebook.com/minhtrung.tranle.3/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">Facebook</a>
                <a href="https://www.linkedin.com/in/trung-tran-4311a9282/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">LinkedIn</a>
                <a href="https://www.youtube.com/@trung-dilungtung" target="_blank" rel="noopener noreferrer" aria-label="YouTube">YouTube</a>
                <a href="https://github.com/TrungTran5923" target="_blank" rel="noopener noreferrer" aria-label="GitHub">GitHub</a>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.15} style={{ alignSelf: "stretch" }}>
            <div className="hero-visual">
              <div className="hero-lines" aria-hidden="true">
                <span />
                <span />
                <span />
                <span />
                <span />
              </div>
              <Parallax range={40}>
                <div className="hero-image">
                  <Image
                    src="/images/portrait-home.png"
                    alt="Trần Lê Minh Trung"
                    fill
                    style={{ objectFit: "contain", objectPosition: "bottom" }}
                    priority
                  />
                </div>
              </Parallax>
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

      {/* About Myself */}
      <section>
        <div className="container">
          <Reveal><span className="eyebrow">About Myself</span></Reveal>
          <div className="about-grid">
            <div>
              <Reveal className="about-badges">
                <span className="about-badge"><strong>2+ yrs</strong> in marketplace &amp; web ops</span>
                <span className="about-badge"><strong>#1</strong> storefront ranking, TikTok Shop</span>
              </Reveal>

              <Stagger className="skill-tile-grid">
                {SKILLS.map((s) => (
                  <StaggerItem key={s.name} className="skill-tile">
                    <div className={`skill-tile-icon${s.icon ? " has-image" : ""}`}>
                      {s.icon ? (
                        <Image src={`/images/${s.icon}`} alt={s.name} width={44} height={44} style={{ objectFit: "contain" }} />
                      ) : (
                        s.abbr
                      )}
                    </div>
                    <div>
                      <div className="skill-tile-value">
                        <Counter value={s.value} suffix="%" />
                      </div>
                      <div className="skill-tile-name">{s.name}</div>
                    </div>
                  </StaggerItem>
                ))}
              </Stagger>

              <Reveal delay={0.1} className="about-tools-label">
                <svg width="34" height="26" viewBox="0 0 34 26" fill="none" aria-hidden="true">
                  <path d="M2 2C18 2 6 18 22 20C28 20.8 31 17 33 12" stroke="currentColor" strokeWidth="1.4" strokeDasharray="3 4" />
                </svg>
                My favorite tools
              </Reveal>
            </div>

            <Reveal delay={0.15} className="about-right">
              <p className="text-muted">
                I&apos;m an ecommerce operations executive who also builds the
                websites behind the storefronts I run — day to day I manage
                pricing, Flash Sales, and livestream for a top-ranked TikTok
                Shop storefront.
              </p>
              <p className="text-muted">
                Off the clock, I design and build WordPress/Elementor and
                custom HTML/Next.js sites, and set up AI-driven workflows
                that remove manual busywork for small teams.
              </p>
              <div className="about-actions">
                <Link href="/about-me" className="btn btn-outline">Get to Know Me</Link>
                <Link href="/contact-us" className="btn btn-outline">Book a Call</Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

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
                <div className="logo-tile-icon"><Image src={`/images/${t.icon}`} alt={t.name} width={40} height={40} style={{ objectFit: "contain" }} /></div>
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

          <Stagger style={{ marginTop: 24 }}>
            {WHAT_I_DO.map((s) => (
              <StaggerItem key={s.n}>
                <Link href="/services" className="list-row">
                  <div className="list-row-body">
                    <h3 style={{ fontSize: 26, textTransform: "uppercase" }}>{s.title}</h3>
                    <p>{s.body}</p>
                  </div>
                  <span className="list-row-arrow" aria-hidden="true">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                      <path d="M7 17L17 7M17 7H8M17 7V16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                </Link>
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
          <Reveal delay={0.1}>
            <WorkArc items={WORK_EXPERIENCE} />
          </Reveal>
        </div>
      </section>

      {/* My Projects */}
      <section className="projects-section">
        <span className="projects-watermark" aria-hidden="true">PROJECTS</span>
        <div className="container">
          <Reveal><span className="eyebrow">My Featured Projects</span></Reveal>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: 16 }}>
            <Reveal as="h2">A mix of marketplace campaigns and the sites I&apos;ve built.</Reveal>
            <Reveal><Link href="/portfolio" className="btn btn-outline">See All Work</Link></Reveal>
          </div>

          <Stagger className="projects-grid" style={{ marginTop: 56, display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 32 }}>
            {FEATURED_PROJECTS.map((p, i) => (
              <StaggerItem key={p.title}>
                <Parallax range={i % 2 === 0 ? 18 : -18}>
                  <TiltCard className="project-tile" max={9}>
                    {p.img && (
                      <Image
                        src={`/images/${p.img}`}
                        alt={p.title}
                        fill
                        style={{ objectFit: "cover" }}
                        sizes="(max-width: 900px) 100vw, 33vw"
                      />
                    )}
                    <div className="project-tile-body">
                      <span className="tag">{p.tag}</span>
                      <h3>{p.title}</h3>
                      <p>{p.meta}</p>
                    </div>
                  </TiltCard>
                </Parallax>
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
          <Reveal delay={0.1}>
            <Testimonials items={TESTIMONIALS} />
          </Reveal>
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

          <Stagger style={{ marginTop: 24 }}>
            {NEWS.map((a) => (
              <StaggerItem key={a.title}>
                <div className="news-row">
                  <div className="news-row-body">
                    <span className="tag">{a.tag}</span>
                    <h3 style={{ marginTop: 14 }}>{a.title}</h3>
                    <div className="news-row-meta">
                      <div className="news-avatar" style={{ background: "var(--black-2)", border: "1px solid var(--gray-4)" }} />
                      <span className="news-row-author">
                        <strong>Trung Tran</strong>
                        {a.date}
                      </span>
                    </div>
                    <Link href={`/blog/${a.slug}`} className="news-row-more">
                      Read More
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                        <path d="M7 17L17 7M17 7H8M17 7V16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </Link>
                  </div>
                  <div className="news-row-img" style={{ background: a.gradient }}>
                    {a.hasImg && <Image src={`/images/${a.img}`} alt={a.title} fill style={{ objectFit: "cover" }} sizes="220px" />}
                  </div>
                </div>
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
