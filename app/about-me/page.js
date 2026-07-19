import Reveal from "@/components/Reveal";
import { Stagger, StaggerItem } from "@/components/Stagger";
import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "About Me",
  description:
    "Trần Lê Minh Trung: Ecommerce Operations Executive running Roborock's TikTok Shop storefront, plus a self-taught WordPress and HTML/CSS/JS developer.",
  alternates: { canonical: "/about-me" },
};

const VALUES = [
  { title: "Numbers before opinions", body: "Pricing, Flash Sale timing, and content decisions get made against the data — competitor benchmarks, live dashboards, past campaign results — not gut feel." },
  { title: "Own the whole pipeline", body: "From briefing a designer on a banner to watching pricing move through a Flash Sale window to reading the post-mortem dashboard — I'd rather understand every step than hand off blind." },
  { title: "Ship it clean", body: "Whether it's a campaign calendar or a WordPress build, I'd rather take a bit longer and leave something the next person (often future me) can actually maintain." },
];

const SKILLS = [
  { label: "Marketplace Operations (TikTok Shop, Shopee, Lazada)", pct: 95 },
  { label: "Livestream & Content Production", pct: 85 },
  { label: "Data Analytics (Power BI, Colab, Lark Base)", pct: 80 },
  { label: "WordPress, Elementor & Custom HTML/CSS/JS", pct: 88 },
];

const TIMELINE = [
  { n: "01", title: "Levoit — Ecommerce Operations Intern", body: "First hands-on exposure to marketplace operations and ecommerce content workflows." },
  { n: "02", title: "Decor Home & Phuong Hoang Linh", body: "Marketplace operations and content across multiple storefronts, building the pricing and campaign instincts I still use today." },
  { n: "03", title: "Freelance Web Development", body: "Designed and built websites for Saigon Technology University (STU), Rennes, and independent brands using WordPress and hand-written HTML/CSS/JS." },
  { n: "04", title: "Vietnam O-Tech Smart Equipment — Ecommerce Executive (since Aug 2025)", body: "Run the TikTok Shop storefront for Roborock, taking it to #1 in the Vacuum Cleaner category during the 6.6 and 11.11 mega sales.", active: true },
];

export default function AboutPage() {
  return (
    <>
      <header>
        <div className="container" style={{ paddingTop: 96, paddingBottom: 64, textAlign: "center", maxWidth: 760 }}>
          <Reveal><span className="eyebrow">About Me</span></Reveal>
          <Reveal as="h1">The person behind the storefront and the site.</Reveal>
          <Reveal className="text-muted" style={{ marginTop: 20, fontSize: 18 }}>
            Ecommerce operator by day, web developer by habit — I like being close enough to the numbers to know what actually moves them.
          </Reveal>
        </div>
      </header>

      <section>
        <div className="container" style={{ display: "grid", gridTemplateColumns: "0.9fr 1.1fr", gap: 64, alignItems: "start" }}>
          <Reveal>
            <Image src="/images/trung-tran.jpg" alt="Trần Lê Minh Trung" width={600} height={750} style={{ borderRadius: "var(--radius-card)", objectFit: "cover", width: "100%", height: "auto" }} />
          </Reveal>
          <Reveal delay={0.1}>
            <h2>From marketplace floor to the code editor.</h2>
            <p style={{ marginTop: 20, fontSize: 16, lineHeight: 1.8 }}>
              I&apos;m Trần Lê Minh Trung — Trung Tran — an Ecommerce Operations Executive currently running the TikTok Shop storefront for Roborock, the global No.1 robot vacuum brand, inside Vietnam O-Tech Smart Equipment&apos;s Home Electrical Appliances lineup. Under my day-to-day operation, the storefront held the #1 ranking in the Vacuum Cleaner category through TikTok Shop&apos;s 6.6 and 11.11 mega sale campaigns, contributing to a 9-figure VND revenue scale.
            </p>
            <p style={{ marginTop: 16, fontSize: 16, lineHeight: 1.8 }}>
              Before Otech, I worked across marketplace operations and ecommerce content at Decor Home and Phuong Hoang Linh, and interned in ecommerce operations at Levoit. Alongside that path, I taught myself WordPress, Elementor, and hand-written HTML/CSS/JS — building and maintaining websites for organizations including Saigon Technology University (STU) and Rennes, plus freelance projects for smaller brands.
            </p>
            <p style={{ marginTop: 16, fontSize: 16, lineHeight: 1.8 }}>
              The two sides of the work feed each other: operating a top-ranked storefront means living inside dashboards, pricing sheets, and campaign timelines — and building websites means caring just as much about how that same information is presented to a visitor. I bring both instincts to any team I join.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section-alt">
        <div className="container">
          <Reveal><span className="eyebrow">What I Value</span></Reveal>
          <Reveal as="h2">How I approach the work.</Reveal>
          <Stagger style={{ marginTop: 40, display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 32 }}>
            {VALUES.map((v) => (
              <StaggerItem key={v.title} className="card" style={{ padding: 32 }}>
                <h3>{v.title}</h3>
                <p style={{ marginTop: 12, fontSize: 15 }}>{v.body}</p>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <section>
        <div className="container">
          <Reveal><span className="eyebrow">Skills</span></Reveal>
          <Reveal as="h2">Where I spend most of my time.</Reveal>
          <Reveal style={{ marginTop: 40, display: "flex", flexDirection: "column", gap: 24, maxWidth: 720 }}>
            {SKILLS.map((s) => (
              <div key={s.label}>
                <div style={{ display: "flex", justifyContent: "space-between", fontSize: 14, fontWeight: 600, color: "var(--white)" }}>
                  <span>{s.label}</span>
                  <span>{s.pct}%</span>
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
          <Reveal><span className="eyebrow">Career Highlights</span></Reveal>
          <Reveal as="h2">The path so far.</Reveal>
          <Stagger style={{ marginTop: 40, display: "flex", flexDirection: "column" }}>
            {TIMELINE.map((t) => (
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

      <section>
        <Reveal className="container cta-banner">
          <h2>
            Want the full story behind the numbers?
            <br />
            <span className="accent">Let&apos;s talk.</span>
          </h2>
          <Link href="/contact-us" className="btn btn-primary">Get In Touch</Link>
        </Reveal>
      </section>
    </>
  );
}
