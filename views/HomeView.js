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
import { getContent } from "@/lib/content";
import { SOCIALS, localePath } from "@/lib/site";
import { imageExists, listImages } from "@/lib/files";
import { PROJECTS } from "@/lib/projects";
import { POSTS, CATEGORIES } from "@/lib/posts";

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

const Arrow = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
    <path d="M7 17L17 7M17 7H8M17 7V16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export default function HomeView({ lang = "en" }) {
  const c = getContent(lang);
  const h = c.home;
  const L = (p) => localePath(lang, p);

  const featured = PROJECTS.filter((p) => p.featured).map((p) => ({ ...p, ...p[lang] }));
  const news = POSTS.slice(0, 3).map((p) => ({ ...p, ...p[lang], hasImg: imageExists(p.img) }));
  const testimonials = c.testimonials.map((t) => ({ ...t, hasPhoto: imageExists(t.photo) }));
  const proof = listImages("proof").slice(0, 4);

  return (
    <>
      <header className="hero">
        <div className="container hero-grid">
          <div className="hero-left">
            <Reveal>
              <span className="hero-status"><span className="hero-status-dot" />{h.hero.status}</span>
              <h1 className="hero-title">
                <span className="accent">{h.hero.im}</span>{" "}
                <TypingText text="Trung Tran" loop />
                <span className="hero-subtitle">{h.hero.subtitle}</span>
              </h1>
              <div className="hero-actions">
                <Link href={L("/contact-us")} className="btn btn-primary">{h.hero.ctaPrimary}</Link>
                <Link href={L("/portfolio")} className="btn btn-outline">{h.hero.ctaSecondary}</Link>
              </div>
            </Reveal>

            <Reveal delay={0.3}>
              <div className="hero-social">
                {SOCIALS.map((s) => (
                  <a key={s.name} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.name}>{s.name}</a>
                ))}
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.15} style={{ alignSelf: "stretch" }}>
            <div className="hero-visual">
              <div className="hero-lines" aria-hidden="true">
                <span /><span /><span /><span /><span />
              </div>
              <Parallax range={40}>
                <div className="hero-image">
                  <Image src="/images/portrait-home.png" alt="Trần Lê Minh Trung" fill style={{ objectFit: "contain", objectPosition: "bottom" }} priority />
                </div>
              </Parallax>
            </div>
          </Reveal>

          <Reveal delay={0.25} className="hero-right">
            <p className="hero-desc text-muted">{h.hero.desc}</p>
          </Reveal>
        </div>
      </header>

      <Marquee items={h.marquee} />

      {/* About Myself */}
      <section>
        <div className="container">
          <Reveal><span className="eyebrow">{h.about.eyebrow}</span></Reveal>
          <div className="about-grid">
            <div>
              <Reveal className="about-badges">
                {h.about.badges.map((b) => (
                  <span key={b.text} className="about-badge"><strong>{b.strong}</strong> {b.text}</span>
                ))}
              </Reveal>

              <Stagger className="skill-tile-grid">
                {h.skills.map((s) => (
                  <StaggerItem key={s.name} className="skill-tile">
                    <div className="skill-tile-icon has-image">
                      <Image src={`/images/${s.icon}`} alt={s.name} width={44} height={44} style={{ objectFit: "contain" }} />
                    </div>
                    <div>
                      <div className="skill-tile-value"><Counter value={s.value} suffix="%" /></div>
                      <div className="skill-tile-name">{s.name}</div>
                    </div>
                  </StaggerItem>
                ))}
              </Stagger>

              <Reveal delay={0.1} className="about-tools-label">
                <svg width="34" height="26" viewBox="0 0 34 26" fill="none" aria-hidden="true">
                  <path d="M2 2C18 2 6 18 22 20C28 20.8 31 17 33 12" stroke="currentColor" strokeWidth="1.4" strokeDasharray="3 4" />
                </svg>
                {h.about.toolsLabel}
              </Reveal>
            </div>

            <Reveal delay={0.15} className="about-right">
              <p className="text-muted">{h.about.p1}</p>
              <p className="text-muted">{h.about.p2}</p>
              <div className="about-actions">
                <Link href={L("/about-me")} className="btn btn-outline">{h.about.ctaAbout}</Link>
                <Link href={L("/contact-us")} className="btn btn-outline">{h.about.ctaCall}</Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Results at a Glance */}
      <section className="section-alt">
        <div className="container">
          <Reveal><span className="eyebrow">{h.results.eyebrow}</span></Reveal>
          <Stagger className="reveal-stagger-grid stats-grid">
            {h.results.stats.map((stat) => (
              <StaggerItem key={stat.label}>
                <div className="stat-value">
                  <Counter prefix={stat.prefix} value={stat.value} suffix={stat.suffix} />
                </div>
                <p style={{ marginTop: 8, fontSize: 15 }}>{stat.label}</p>
              </StaggerItem>
            ))}
          </Stagger>

          {proof.length > 0 && (
            <>
              <Reveal delay={0.1}>
                <p className="text-muted small-caps-label">{h.results.proofLabel}</p>
              </Reveal>
              <Stagger className="proof-grid">
                {proof.map((src) => (
                  <StaggerItem key={src} className="proof-item">
                    <Image src={`/images/${src}`} alt={h.results.proofLabel} fill style={{ objectFit: "cover", objectPosition: "top" }} sizes="(max-width: 900px) 50vw, 25vw" />
                  </StaggerItem>
                ))}
              </Stagger>
            </>
          )}

          <Reveal delay={0.1}>
            <p className="text-muted small-caps-label">{h.results.toolsLabel}</p>
          </Reveal>
          <Stagger className="logo-grid">
            {TOOLS.map((tool) => (
              <StaggerItem key={tool.name} className="logo-tile">
                <div className="logo-tile-icon">
                  <Image src={`/images/${tool.icon}`} alt={tool.name} width={40} height={40} style={{ objectFit: "contain" }} />
                </div>
                <span className="logo-tile-name">{tool.name}</span>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* What I Do */}
      <section>
        <div className="container">
          <Reveal><span className="eyebrow">{h.whatIDo.eyebrow}</span></Reveal>
          <div className="section-head">
            <Reveal as="h2">{h.whatIDo.title}</Reveal>
            <Reveal><Link href={L("/services")} className="btn btn-outline">{h.whatIDo.cta}</Link></Reveal>
          </div>

          <Stagger style={{ marginTop: 24 }}>
            {c.services.map((s) => (
              <StaggerItem key={s.title}>
                <Link href={L("/services")} className="list-row">
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
          <Reveal><span className="eyebrow">{h.work.eyebrow}</span></Reveal>
          <Reveal as="h2">{h.work.title}</Reveal>
          <Reveal delay={0.1}>
            <WorkArc items={c.work} tag={h.work.tag} />
          </Reveal>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="projects-section">
        <span className="projects-watermark" aria-hidden="true">PROJECTS</span>
        <div className="container">
          <Reveal><span className="eyebrow">{h.projects.eyebrow}</span></Reveal>
          <div className="section-head">
            <Reveal as="h2">{h.projects.title}</Reveal>
            <Reveal><Link href={L("/portfolio")} className="btn btn-outline">{h.projects.cta}</Link></Reveal>
          </div>

          <Stagger className="projects-grid" style={{ marginTop: 56, display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 32 }}>
            {featured.map((p, i) => (
              <StaggerItem key={p.slug}>
                <Parallax range={i % 2 === 0 ? 18 : -18}>
                  <Link href={L(`/portfolio/${p.slug}`)} className="project-link">
                    <TiltCard className="project-tile" max={9}>
                      <Image src={`/images/${p.img}`} alt={p.title} fill style={{ objectFit: "cover" }} sizes="(max-width: 900px) 100vw, 33vw" />
                      <div className="project-tile-body">
                        <span className="tag">{p.tag}</span>
                        <h3>{p.title}</h3>
                        <p>{p.meta}</p>
                      </div>
                    </TiltCard>
                  </Link>
                </Parallax>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-alt">
        <div className="container">
          <Reveal><span className="eyebrow">{h.testimonials.eyebrow}</span></Reveal>
          <Reveal as="h2">{h.testimonials.title}</Reveal>
          <Reveal delay={0.1}>
            <Testimonials items={testimonials} />
          </Reveal>
        </div>
      </section>

      {/* News & Blog */}
      <section>
        <div className="container">
          <Reveal><span className="eyebrow">{h.news.eyebrow}</span></Reveal>
          <div className="section-head">
            <Reveal as="h2">{h.news.title}</Reveal>
            <Reveal><Link href={L("/blog")} className="btn btn-outline">{h.news.cta}</Link></Reveal>
          </div>

          <Stagger style={{ marginTop: 24 }}>
            {news.map((a) => (
              <StaggerItem key={a.slug}>
                <div className="news-row">
                  <div className="news-row-body">
                    <span className="tag">{CATEGORIES[a.category][lang]}</span>
                    <h3 style={{ marginTop: 14 }}>{a.title}</h3>
                    <div className="news-row-meta">
                      <Image className="news-avatar" src="/images/trung-tran.jpg" alt="Trung Tran" width={32} height={32} />
                      <span className="news-row-author">
                        <strong>Trung Tran</strong>
                        {a.date}
                      </span>
                    </div>
                    <Link href={L(`/blog/${a.slug}`)} className="news-row-more">
                      {c.common.readMore}
                      <Arrow />
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

      {/* CTA */}
      <section className="section-alt">
        <Reveal className="container cta-banner">
          <h2>
            {h.cta.line1}
            <br />
            <span className="accent">{h.cta.line2}</span>
          </h2>
          <Link href={L("/contact-us")} className="btn btn-primary">{h.cta.button}</Link>
        </Reveal>
      </section>
    </>
  );
}
