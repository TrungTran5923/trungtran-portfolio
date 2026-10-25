import Reveal from "@/components/Reveal";
import { Stagger, StaggerItem } from "@/components/Stagger";
import Parallax from "@/components/Parallax";
import Counter from "@/components/Counter";
import TiltCard from "@/components/TiltCard";
import Link from "next/link";
import Image from "next/image";
import { getContent } from "@/lib/content";
import { CV_URL, localePath } from "@/lib/site";

export default function AboutView({ lang = "en" }) {
  const c = getContent(lang);
  const a = c.about;

  return (
    <>
      <header>
        <div className="container page-head center">
          <Reveal><span className="eyebrow">{a.eyebrow}</span></Reveal>
          <Reveal as="h1">{a.title}</Reveal>
          <Reveal className="text-muted page-intro">{a.intro}</Reveal>
        </div>
      </header>

      <section>
        <div className="container about-story">
          <Reveal>
            <Parallax range={30}>
              <div className="about-portrait">
                <Image src="/images/trung-tran.jpg" alt="Trần Lê Minh Trung" fill style={{ objectFit: "cover" }} sizes="(max-width: 900px) 100vw, 45vw" priority />
              </div>
            </Parallax>
          </Reveal>
          <Reveal delay={0.1}>
            <h2>{a.storyTitle}</h2>
            {a.story.map((p, i) => (
              <p key={i} style={{ marginTop: i === 0 ? 20 : 16, fontSize: 16, lineHeight: 1.8 }}>{p}</p>
            ))}
            <div style={{ marginTop: 28, display: "flex", gap: 12, flexWrap: "wrap" }}>
              <a href={CV_URL} target="_blank" rel="noopener noreferrer" className="btn btn-primary">{a.cvButton}</a>
              <Link href={localePath(lang, "/contact-us")} className="btn btn-outline">{c.common.getInTouch}</Link>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-alt">
        <div className="container">
          <Reveal><span className="eyebrow">{a.valuesEyebrow}</span></Reveal>
          <Reveal as="h2">{a.valuesTitle}</Reveal>
          <Stagger className="three-col" style={{ marginTop: 40 }}>
            {a.values.map((v) => (
              <StaggerItem key={v.title}>
                <TiltCard className="card" style={{ padding: 32, height: "100%" }}>
                  <h3>{v.title}</h3>
                  <p style={{ marginTop: 12, fontSize: 15 }}>{v.body}</p>
                </TiltCard>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <section>
        <div className="container">
          <Reveal><span className="eyebrow">{a.skillsEyebrow}</span></Reveal>
          <Reveal as="h2">{a.skillsTitle}</Reveal>
          <Reveal style={{ marginTop: 40, display: "flex", flexDirection: "column", gap: 24, maxWidth: 720 }}>
            {a.skills.map((s) => (
              <div key={s.label}>
                <div style={{ display: "flex", justifyContent: "space-between", gap: 16, fontSize: 14, fontWeight: 600, color: "var(--white)" }}>
                  <span>{s.label}</span>
                  <span><Counter value={s.pct} suffix="%" /></span>
                </div>
                <div className="skill-bar-track">
                  <div className="skill-bar-fill" style={{ width: `${s.pct}%` }} />
                </div>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="section-alt">
        <div className="container">
          <Reveal><span className="eyebrow">{a.timelineEyebrow}</span></Reveal>
          <Reveal as="h2">{a.timelineTitle}</Reveal>
          <Stagger style={{ marginTop: 40, display: "flex", flexDirection: "column" }}>
            {c.work.map((t) => (
              <StaggerItem key={t.n} className="timeline-step">
                <div className={`timeline-num${t.active ? " active" : ""}`}>{t.n}</div>
                <div>
                  <span className="timeline-date">{t.date}</span>
                  <h4>{t.title}</h4>
                  <p style={{ marginTop: 6, fontSize: 14 }}>{t.body}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <section>
        <div className="container">
          <Reveal><span className="eyebrow">{a.eduEyebrow}</span></Reveal>
          <Reveal as="h2">{a.eduTitle}</Reveal>
          <Stagger className="three-col" style={{ marginTop: 40 }}>
            {a.education.map((e) => (
              <StaggerItem key={e.title} className="card edu-card">
                <span className="tag">{e.kind}</span>
                <h3 style={{ marginTop: 14, fontSize: 20 }}>{e.title}</h3>
                <p style={{ marginTop: 8, fontSize: 14 }}>{e.sub}</p>
              </StaggerItem>
            ))}
            {a.certificates.map((cert) => (
              <StaggerItem key={cert.title} className="card edu-card">
                <span className="tag">{cert.issuer}</span>
                <h3 style={{ marginTop: 14, fontSize: 20 }}>{cert.title}</h3>
                <a href={cert.href} target="_blank" rel="noopener noreferrer" className="news-row-more" style={{ marginTop: 14 }}>
                  {a.viewCert}
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M7 17L17 7M17 7H8M17 7V16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                </a>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="section-alt">
        <Reveal className="container cta-banner">
          <h2>
            {a.cta.line1}
            <br />
            <span className="accent">{a.cta.line2}</span>
          </h2>
          <Link href={localePath(lang, "/contact-us")} className="btn btn-primary">{c.common.getInTouch}</Link>
        </Reveal>
      </section>
    </>
  );
}
