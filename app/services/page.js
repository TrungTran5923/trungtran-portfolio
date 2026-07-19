import Reveal from "@/components/Reveal";
import { Stagger, StaggerItem } from "@/components/Stagger";
import Link from "next/link";

export const metadata = {
  title: "Services",
  description:
    "Marketplace operations, livestream and content production, data analytics and automation, and WordPress/HTML website development.",
  alternates: { canonical: "/services" },
};

const SERVICES = [
  {
    n: "01", bg: "var(--black-3)", title: "Marketplace Operations", tag: "TikTok Shop · Shopee · Lazada",
    desc: "I run the daily mechanics that decide whether a storefront ranks or stalls — pricing, Flash Sale scheduling, voucher structuring, inventory control, and constant competitor tracking across every marketplace I operate.",
    bullets: ["Pricing & promotion strategy for mega sale campaigns (6.6, 11.11, and beyond)", "Inventory monitoring and stock-out prevention", "Flash Sale scheduling and voucher/discount structuring", "Competitor tracking and category benchmarking"],
  },
  {
    n: "02", bg: "var(--black-2)", title: "Livestream & Content Production", tag: "Livestream · PDP · Banners",
    desc: "I brief designers, host live sessions, and direct the on-platform content that turns storefront traffic into checkouts.",
    bullets: ["Briefing designers on banners and PDP content", "Content calendars tied to campaign and sale schedules", "Hosting and producing TikTok Shop livestream sessions", "On-platform creative QA before launch"],
  },
  {
    n: "03", bg: "var(--black-3)", title: "Data Analytics & Automation", tag: "Power BI · Colab · Lark Base",
    desc: "I build the dashboards and automations that keep performance visible in near real time, instead of waiting on a weekly export.",
    bullets: ["Power BI dashboards for cross-marketplace performance", "Campaign post-mortems built on live data", "Google Colab scripts syncing data into Sheets and Lark Base", "Alerting for stock, pricing, and ranking shifts"],
  },
  {
    n: "04", bg: "var(--black-2)", title: "Website & Landing Page Development", tag: "WordPress · Elementor · HTML/CSS/JS",
    desc: "For teams who need a site with the same attention to detail as a #1 storefront — I design and build it, from WordPress builds to hand-written HTML/CSS/JS.",
    bullets: ["WordPress and Elementor site builds", "SEO-conscious structure and page speed basics", "Custom HTML/CSS/JS landing pages", "Ongoing edits and content updates"],
  },
];

const COMPARISON = [
  { aspect: "Reporting", typical: "Weekly manual export, reviewed after the fact", trung: "Power BI dashboard updated near real time, watched during the campaign" },
  { aspect: "Campaign execution", typical: "Pricing and Flash Sales set once, adjusted only after issues appear", trung: "Pricing, vouchers, and Flash Sales monitored and adjusted through the live window" },
  { aspect: "Content pipeline", typical: "Content briefed separately from performance data", trung: "Livestream and PDP content briefed with the numbers that are actually moving" },
  { aspect: "Web presence", typical: "Marketplace-only presence, site handed to an agency", trung: "Storefront and website built by the same person — the brand reads the same everywhere" },
];

const PROCESS = [
  { n: "01", title: "Audit & benchmark", body: "Pull competitor pricing, ranking, and promotion history before the campaign calendar is set." },
  { n: "02", title: "Pricing & voucher strategy", body: "Structure Flash Sale pricing, vouchers, and bundles against the audit, not a template." },
  { n: "03", title: "Content & livestream briefing", body: "Brief designers on banners and PDP content, then plan the livestream schedule around peak traffic." },
  { n: "04", title: "Live campaign monitoring", body: "Watch pricing, stock, and ranking through the sale window and adjust in real time." },
  { n: "05", title: "Dashboard & post-mortem", body: "Close the campaign with a Power BI readout — what worked, what to change next cycle.", active: true },
];

export default function ServicesPage() {
  return (
    <>
      <header>
        <div className="container" style={{ paddingTop: 96, paddingBottom: 64, maxWidth: 760 }}>
          <Reveal><span className="eyebrow">Services</span></Reveal>
          <Reveal as="h1">Where I create the most value.</Reveal>
          <Reveal className="text-muted" style={{ marginTop: 20, fontSize: 18 }}>
            From marketplace operations to the websites that support them, here is where I plug in and move the needle fastest.
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
          <Reveal as="h2">How I run a mega-sale campaign.</Reveal>
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
