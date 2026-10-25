import Reveal from "@/components/Reveal";
import { Stagger, StaggerItem } from "@/components/Stagger";
import TiltCard from "@/components/TiltCard";
import Link from "next/link";
import Image from "next/image";
import { getContent } from "@/lib/content";
import { localePath } from "@/lib/site";
import { imageExists } from "@/lib/files";
import { PROJECTS } from "@/lib/projects";

const Arrow = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M7 17L17 7M17 7H8M17 7V16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
);

export default function PortfolioView({ lang = "en" }) {
  const c = getContent(lang);
  const t = c.portfolio;
  const all = PROJECTS.map((p) => ({ ...p, ...p[lang], hasImg: imageExists(p.img) }));
  const withImage = all.filter((p) => p.hasImg);
  const more = all.filter((p) => !p.hasImg);

  return (
    <>
      <header>
        <div className="container page-head center">
          <Reveal><span className="eyebrow">{t.eyebrow}</span></Reveal>
          <Reveal as="h1">{t.title}</Reveal>
          <Reveal className="text-muted page-intro">{t.intro}</Reveal>
        </div>
      </header>

      <section style={{ paddingTop: 0 }}>
        <Stagger className="container portfolio-grid">
          {withImage.map((p) => {
            const href = p.caseStudy ? localePath(lang, `/portfolio/${p.slug}`) : p.link;
            const external = !p.caseStudy;
            return (
              <StaggerItem key={p.slug} id={p.slug}>
                <TiltCard className="card portfolio-card" max={5}>
                  <a href={href} target={external ? "_blank" : undefined} rel={external ? "noopener noreferrer" : undefined} className="portfolio-card-img">
                    <Image src={`/images/${p.img}`} alt={p.title} fill style={{ objectFit: "cover", objectPosition: "top" }} sizes="(max-width: 900px) 100vw, 50vw" />
                  </a>
                  <div style={{ padding: 28 }}>
                    <span className="tag">{p.tag}</span>
                    <h3 style={{ marginTop: 12 }}>{p.title}</h3>
                    <p style={{ marginTop: 10, fontSize: 14 }}>{p.desc}</p>
                    <div className="portfolio-card-foot">
                      <span>{p.meta || p.tech}</span>
                      <a href={href} target={external ? "_blank" : undefined} rel={external ? "noopener noreferrer" : undefined} className="news-row-more" style={{ marginTop: 0 }}>
                        {p.caseStudy ? c.common.viewProject : p.linkKind === "code" ? c.common.viewCode : c.common.visitSite}
                        <Arrow />
                      </a>
                    </div>
                  </div>
                </TiltCard>
              </StaggerItem>
            );
          })}
        </Stagger>
      </section>

      {more.length > 0 && (
        <section className="section-alt">
          <div className="container">
            <Reveal><span className="eyebrow">{t.moreEyebrow}</span></Reveal>
            <Reveal as="h2">{t.moreTitle}</Reveal>
            <Stagger style={{ marginTop: 24 }}>
              {more.map((p) => (
                <StaggerItem key={p.slug} id={p.slug}>
                  <div className="more-row">
                    <div>
                      <span className="tag">{p.tag}</span>
                      <h3 style={{ marginTop: 12, fontSize: 22 }}>{p.title}</h3>
                      <p style={{ marginTop: 8, fontSize: 14 }}>{p.desc}</p>
                      <p style={{ marginTop: 6, fontSize: 13, color: "var(--gray-1)" }}>{p.client} · {p.tech}</p>
                    </div>
                    {p.link && (
                      <a href={p.link} target="_blank" rel="noopener noreferrer" className="btn btn-outline">
                        {p.linkKind === "code" ? c.common.viewCode : c.common.visitSite}
                      </a>
                    )}
                  </div>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </section>
      )}

      <section>
        <Reveal className="container cta-banner">
          <h2>
            {t.cta.line1}
            <br />
            <span className="accent">{t.cta.line2}</span>
          </h2>
          <Link href={localePath(lang, "/contact-us")} className="btn btn-primary">{c.common.getInTouch}</Link>
        </Reveal>
      </section>
    </>
  );
}
