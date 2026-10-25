import Reveal from "@/components/Reveal";
import { Stagger, StaggerItem } from "@/components/Stagger";
import Link from "next/link";
import Image from "next/image";
import { getContent } from "@/lib/content";
import { localePath } from "@/lib/site";
import { listImages } from "@/lib/files";
import { PROJECTS } from "@/lib/projects";

export default function ProjectView({ lang = "en", project }) {
  const c = getContent(lang);
  const t = c.portfolio.labels;
  const p = { ...project, ...project[lang] };
  const proof = p.proofDir ? listImages(p.proofDir) : [];
  const others = PROJECTS.filter((x) => x.caseStudy && x.slug !== p.slug).map((x) => ({ ...x, ...x[lang] }));

  const facts = [
    [t.client, p.client],
    [t.role, p.role],
    [t.tech, p.tech],
    [t.period, p.period],
  ].filter(([, v]) => v);

  return (
    <>
      <header>
        <div className="container page-head" style={{ paddingBottom: 40 }}>
          <Reveal><Link href={localePath(lang, "/portfolio")} className="back-link">{c.common.allProjects}</Link></Reveal>
          <Reveal><span className="tag" style={{ marginTop: 20 }}>{p.tag}</span></Reveal>
          <Reveal as="h1" style={{ marginTop: 16 }}>{p.title}</Reveal>
          <Reveal className="text-muted page-intro">{p.desc}</Reveal>
        </div>
      </header>

      <section style={{ paddingTop: 0 }}>
        <div className="container">
          <Reveal className="case-hero">
            <Image src={`/images/${p.img}`} alt={p.title} fill style={{ objectFit: "cover", objectPosition: "top" }} sizes="(max-width: 1200px) 100vw, 1200px" priority />
          </Reveal>

          <div className="case-grid">
            <Reveal as="aside" className="card case-facts">
              <dl>
                {facts.map(([k, v]) => (
                  <div key={k}>
                    <dt>{k}</dt>
                    <dd>{v}</dd>
                  </div>
                ))}
              </dl>
              {p.link && (
                <a href={p.link} target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ marginTop: 24, width: "100%" }}>
                  {c.common.visitSite}
                </a>
              )}
            </Reveal>

            <div className="case-body">
              <Reveal>
                <h2>{t.challenge}</h2>
                <p>{p.challenge}</p>
              </Reveal>
              <Reveal>
                <h2>{t.did}</h2>
                <ul className="bullets">
                  {p.did.map((d) => <li key={d}>{d}</li>)}
                </ul>
              </Reveal>
              <Reveal>
                <h2>{t.outcome}</h2>
                <p>{p.outcome}</p>
              </Reveal>
            </div>
          </div>

          {proof.length > 0 && (
            <>
              <Reveal><h2 style={{ marginTop: 72 }}>{t.proof}</h2></Reveal>
              <Stagger className="proof-grid">
                {proof.map((src) => (
                  <StaggerItem key={src} className="proof-item">
                    <a href={`/images/${src}`} target="_blank" rel="noopener noreferrer">
                      <Image src={`/images/${src}`} alt={t.proof} fill style={{ objectFit: "cover", objectPosition: "top" }} sizes="(max-width: 900px) 50vw, 25vw" />
                    </a>
                  </StaggerItem>
                ))}
              </Stagger>
            </>
          )}
        </div>
      </section>

      {others.length > 0 && (
        <section className="section-alt">
          <div className="container">
            <Reveal><span className="eyebrow">{t.moreWork}</span></Reveal>
            <Stagger className="related-grid">
              {others.map((o) => (
                <StaggerItem key={o.slug}>
                  <Link href={localePath(lang, `/portfolio/${o.slug}`)} className="related-card">
                    <div className="related-img">
                      <Image src={`/images/${o.img}`} alt={o.title} fill style={{ objectFit: "cover", objectPosition: "top" }} sizes="(max-width: 900px) 100vw, 50vw" />
                    </div>
                    <span className="tag" style={{ marginTop: 16 }}>{o.tag}</span>
                    <h3 style={{ marginTop: 10, fontSize: 22 }}>{o.title}</h3>
                  </Link>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </section>
      )}

      <section>
        <Reveal className="container cta-banner">
          <h2>
            {c.portfolio.cta.line1}
            <br />
            <span className="accent">{c.portfolio.cta.line2}</span>
          </h2>
          <Link href={localePath(lang, "/contact-us")} className="btn btn-primary">{c.common.getInTouch}</Link>
        </Reveal>
      </section>
    </>
  );
}
