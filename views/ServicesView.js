import Reveal from "@/components/Reveal";
import { Stagger, StaggerItem } from "@/components/Stagger";
import Link from "next/link";
import { getContent } from "@/lib/content";
import { localePath } from "@/lib/site";

export default function ServicesView({ lang = "en" }) {
  const c = getContent(lang);
  const s = c.servicesPage;
  const contact = localePath(lang, "/contact-us");

  return (
    <>
      <header>
        <div className="container page-head">
          <Reveal><span className="eyebrow">{s.eyebrow}</span></Reveal>
          <Reveal as="h1">{s.title}</Reveal>
          <Reveal className="text-muted page-intro">{s.intro}</Reveal>
        </div>
      </header>

      {/* Services */}
      <section style={{ paddingTop: 0 }}>
        <div className="container">
          <Reveal><span className="eyebrow">{s.servicesEyebrow}</span></Reveal>
          {c.services.map((svc, i) => (
            <Reveal key={svc.title} className="service-row">
              <div className="service-icon" style={{ background: i % 2 ? "var(--black-2)" : "var(--black-3)" }}>{String(i + 1).padStart(2, "0")}</div>
              <div>
                <h3>{svc.title}</h3>
                <span className="tag" style={{ marginTop: 8 }}>{s.details[i].tag}</span>
                <p style={{ marginTop: 14, fontSize: 15 }}>{svc.body}</p>
                <ul className="bullets">
                  {s.details[i].bullets.map((b) => <li key={b}>{b}</li>)}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="section-alt" id="pricing">
        <div className="container">
          <Reveal><span className="eyebrow">{s.pricingEyebrow}</span></Reveal>
          <Reveal as="h2">{s.pricingTitle}</Reveal>
          <Reveal className="text-muted" style={{ marginTop: 14, fontSize: 14 }}>{s.pricingNote}</Reveal>
          <Stagger className="pricing-grid">
            {s.packages.map((p) => (
              <StaggerItem key={p.name} className={`price-card${p.featured ? " is-featured" : ""}`}>
                <h3>{p.name}</h3>
                <div className="price-value">
                  <span className="price-from">{s.labels.from}</span> {p.price}
                </div>
                <dl className="price-meta">
                  <dt>{s.labels.fit}</dt><dd>{p.fit}</dd>
                  <dt>{s.labels.includes}</dt><dd>{p.includes}</dd>
                  <dt>{s.labels.delivery}</dt><dd>{p.delivery}</dd>
                  {p.revisions !== "—" && (<><dt>{s.labels.revisions}</dt><dd>{p.revisions}</dd></>)}
                </dl>
                <Link href={contact} className={`btn ${p.featured ? "btn-primary" : "btn-outline"} price-btn`}>{s.cta.button}</Link>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Process + payment */}
      <section>
        <div className="container two-col">
          <div>
            <Reveal><span className="eyebrow">{s.processEyebrow}</span></Reveal>
            <Reveal as="h2">{s.processTitle}</Reveal>
            <Stagger style={{ marginTop: 32, display: "flex", flexDirection: "column" }}>
              {s.process.map((p, i) => (
                <StaggerItem key={p.title} className="timeline-step">
                  <div className={`timeline-num${i === s.process.length - 1 ? " active" : ""}`}>{String(i + 1).padStart(2, "0")}</div>
                  <div>
                    <h4>{p.title}</h4>
                    <p style={{ marginTop: 6, fontSize: 14 }}>{p.body}</p>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
          <Reveal delay={0.1} className="card payment-card">
            <span className="eyebrow">{s.paymentTitle}</span>
            <p style={{ fontSize: 15, lineHeight: 1.8 }}>{s.payment}</p>
          </Reveal>
        </div>
      </section>

      {/* Comparison */}
      <section className="section-alt">
        <div className="container">
          <Reveal><span className="eyebrow">{s.compareEyebrow}</span></Reveal>
          <Reveal as="h2">{s.compareTitle}</Reveal>
          <Reveal>
            <div className="table-scroll">
              <table className="compare-table">
                <thead><tr>{s.compareHead.map((h) => <th key={h}>{h}</th>)}</tr></thead>
                <tbody>
                  {s.compare.map((row) => (
                    <tr key={row[0]}>{row.map((cell, i) => <td key={i}>{cell}</td>)}</tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Reveal>
        </div>
      </section>

      {/* FAQ */}
      <section>
        <div className="container" style={{ maxWidth: 860 }}>
          <Reveal><span className="eyebrow">{s.faqEyebrow}</span></Reveal>
          <Reveal as="h2">{s.faqTitle}</Reveal>
          <div className="faq-list">
            {s.faq.map((f) => (
              <details key={f.q} className="faq-item">
                <summary>{f.q}</summary>
                <p>{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="section-alt">
        <Reveal className="container cta-banner">
          <h2>{s.cta.line1}</h2>
          <Link href={contact} className="btn btn-primary">{s.cta.button}</Link>
        </Reveal>
      </section>
    </>
  );
}
