import Reveal from "@/components/Reveal";
import { Stagger, StaggerItem } from "@/components/Stagger";
import Link from "next/link";

export const metadata = {
  title: "Services",
  description:
    "WordPress website development, AI workflow automation, ecommerce operations consulting, part-time marketplace operations, and livestream sales consulting.",
  alternates: { canonical: "/services" },
};

const SERVICES = [
  {
    n: "01", bg: "var(--black-3)", title: "WordPress Website Development", tag: "WordPress · Elementor · HTML/CSS/JS",
    desc: "I design and build websites with the same attention to detail as a #1 storefront — from WordPress/Elementor builds to hand-written HTML/CSS/JS and Next.js.",
    bullets: ["WordPress and Elementor site builds", "SEO-conscious structure and page speed basics", "Custom HTML/CSS/JS and Next.js builds", "Ongoing edits and content updates"],
  },
  {
    n: "02", bg: "var(--black-2)", title: "AI Workflow Automation", tag: "Automation · Dashboards · Integrations",
    desc: "I build the AI-assisted workflows and automations that take repetitive reporting and admin work off your plate — connecting the tools your team already uses.",
    bullets: ["Automated reporting pipelines (Sheets, Lark Base, Power BI)", "AI-assisted content and data workflows", "Tool integrations that remove manual copy-paste steps", "Alerting for stock, pricing, and ranking shifts"],
  },
  {
    n: "03", bg: "var(--black-3)", title: "Ecommerce Operations Consulting & Planning", tag: "Strategy · Campaign Planning",
    desc: "For brands that need a plan, not just a pair of hands — I audit the storefront and build the pricing, campaign, and category strategy behind it.",
    bullets: ["Storefront and competitor audits", "Mega sale campaign planning (6.6, 11.11, and beyond)", "Pricing, voucher, and promotion strategy", "Category and ranking benchmarking"],
  },
  {
    n: "04", bg: "var(--black-2)", title: "Part-Time Marketplace Operations", tag: "TikTok Shop · Shopee · Lazada",
    desc: "For brands that need hands-on storefront management without a full-time hire — I run the daily mechanics on a part-time or freelance basis.",
    bullets: ["Day-to-day pricing and inventory management", "Flash Sale scheduling and voucher structuring", "Cross-marketplace operations (TikTok Shop, Shopee, Lazada)", "Monthly performance reporting"],
  },
  {
    n: "05", bg: "var(--black-3)", title: "Livestream Operations Consulting", tag: "Sale Livestream",
    desc: "I advise on how to structure livestream sales that actually convert — pacing, scripting, and the operational setup behind a smooth session.",
    bullets: ["Livestream session structure and pacing", "Scripting and offer sequencing for sale streams", "Briefing hosts and production teams", "Post-stream performance review"],
  },
];

const COMPARISON = [
  { aspect: "Website builds", typical: "Generic template, handed off with no follow-up", trung: "WordPress/Next.js site built and maintained by someone who also runs storefronts" },
  { aspect: "Ecom strategy", typical: "Generic playbook, not tailored to the category", trung: "Strategy built from real campaign data across TikTok Shop, Shopee, and Lazada" },
  { aspect: "Reporting & admin", typical: "Manual weekly exports, reviewed after the fact", trung: "AI-assisted workflows and dashboards doing the busywork automatically" },
  { aspect: "Livestream sales", typical: "Run ad-hoc, no structure or pacing plan", trung: "Structured around scripting, pacing, and offer sequencing that convert" },
];

const PROCESS = [
  { n: "01", title: "Discovery call", body: "Understand what you need — a website, ecom operations support, or livestream strategy." },
  { n: "02", title: "Audit & plan", body: "Assess the current storefront, site, or workflow and put together a tailored plan." },
  { n: "03", title: "Build or set up", body: "Build the WordPress/Next.js site, AI workflow, or operations calendar the plan calls for." },
  { n: "04", title: "Launch or run", body: "Go live, or start the part-time operations / consulting engagement." },
  { n: "05", title: "Review & optimize", body: "Check results against the plan and adjust — nothing ships and gets forgotten.", active: true },
];

export default function ServicesPage() {
  return (
    <>
      <header>
        <div className="container" style={{ paddingTop: 96, paddingBottom: 64, maxWidth: 760 }}>
          <Reveal><span className="eyebrow">Services</span></Reveal>
          <Reveal as="h1">Where I create the most value.</Reveal>
          <Reveal className="text-muted" style={{ marginTop: 20, fontSize: 18 }}>
            From building the site to running the storefront and the livestream behind it — here is where I plug in and move the needle fastest.
          </Reveal>
        </div>
      </header>

      <section>
        <div className="container">
          {SERVICES.map((s) => (
            <Reveal key={s.n} className="service-row">
              <div className="service-icon" style={{ background: s.bg }}>{s.n}</div>
              <div>
                <h3>{s.title}</h3>
                <span className="tag" style={{ marginTop: 8 }}>{s.tag}</span>
                <p style={{ marginTop: 14, fontSize: 15 }}>{s.desc}</p>
                <ul className="bullets">
                  {s.bullets.map((b) => <li key={b}>{b}</li>)}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section-alt">
        <div className="container">
          <Reveal><span className="eyebrow">Why It Matters</span></Reveal>
          <Reveal as="h2">What I bring vs. a typical hire.</Reveal>
          <Reveal>
            <table className="compare-table">
              <thead><tr><th>Aspect</th><th>Typical Hire</th><th>Trung Tran</th></tr></thead>
              <tbody>
                {COMPARISON.map((row) => (
                  <tr key={row.aspect}>
                    <td>{row.aspect}</td>
                    <td>{row.typical}</td>
                    <td>{row.trung}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Reveal>
        </div>
      </section>

      <section>
        <div className="container">
          <Reveal><span className="eyebrow">Process</span></Reveal>
          <Reveal as="h2">How an engagement usually runs.</Reveal>
          <Stagger style={{ marginTop: 32, display: "flex", flexDirection: "column" }}>
            {PROCESS.map((p) => (
              <StaggerItem key={p.n} className="timeline-step">
                <div className={`timeline-num${p.active ? " active" : ""}`}>{p.n}</div>
                <div>
                  <h4>{p.title}</h4>
                  <p style={{ marginTop: 6, fontSize: 14 }}>{p.body}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="section-alt">
        <Reveal className="container cta-banner">
          <h2>Ready to put one of these to work?</h2>
          <Link href="/contact-us" className="btn btn-primary">Get In Touch</Link>
        </Reveal>
      </section>
    </>
  );
}
