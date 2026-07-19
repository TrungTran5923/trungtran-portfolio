import Reveal from "@/components/Reveal";
import { Stagger, StaggerItem } from "@/components/Stagger";
import Link from "next/link";

export const metadata = {
  title: "Portfolio",
  description:
    "Selected results: Roborock's #1-ranked TikTok Shop storefront, WordPress and custom HTML site builds, and the dashboards behind them.",
  alternates: { canonical: "/portfolio" },
};

const PROJECTS = [
  { slug: "roborock", tag: "Ecommerce Operations", title: "Roborock TikTok Shop Storefront", desc: "Full operational ownership of the storefront for Roborock, the global No.1 robot vacuum brand, inside Home Electrical Appliances.", metric: "#1 in Vacuum Cleaners — TikTok Shop 6.6 & 11.11", img: "Screenshot of the Roborock TikTok Shop storefront showing its #1 ranking in the Vacuum Cleaner category" },
  { slug: "stu", tag: "Website Development", title: "STU", desc: "WordPress/Elementor site build focused on clear information hierarchy and fast page load.", metric: "Custom WordPress build", img: "Screenshot of the STU website homepage" },
  { slug: "rennes", tag: "Website Development", title: "Rennes", desc: "Marketing site built on WordPress with a custom Elementor layout.", metric: "Custom WordPress build", img: "Screenshot of the Rennes website homepage" },
  { slug: "dusdee", tag: "Website Development", title: "DusDEe", desc: "Hand-written HTML/CSS/JS build for a brand that needed something outside a page-builder template.", metric: "Custom HTML/CSS/JS build", img: "Screenshot of the DusDEe website homepage" },
  { slug: "snowball-movie", tag: "Website Development", title: "Snowball Movie", desc: "Website build for a film/production project, designed to hold up as a portfolio and press page.", metric: "Custom website build", img: "Screenshot of the Snowball Movie website homepage" },
  { slug: "dashboard", tag: "Data & Automation", title: "Cross-Platform Performance Dashboard", desc: "Power BI dashboard pulling TikTok Shop, Shopee, and Lazada data through Google Colab into Sheets and Lark Base.", metric: "Near real-time cross-marketplace reporting", img: "Screenshot of a Power BI dashboard tracking marketplace sales performance" },
];

export default function PortfolioPage() {
  return (
    <>
      <header>
        <div className="container" style={{ paddingTop: 96, paddingBottom: 64, textAlign: "center", maxWidth: 760 }}>
          <Reveal><span className="eyebrow">Portfolio</span></Reveal>
          <Reveal as="h1">Selected results across marketplaces and the web.</Reveal>
          <Reveal className="text-muted" style={{ marginTop: 20, fontSize: 18 }}>
            A mix of marketplace campaigns and the websites I&apos;ve designed and built.
          </Reveal>
        </div>
      </header>

      <section>
        <Stagger className="container" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 32 }}>
          {PROJECTS.map((p) => (
            <StaggerItem key={p.slug} id={p.slug} className="card" style={{ overflow: "hidden" }}>
              <div className="img-placeholder" style={{ height: 240 }}>{p.img}</div>
              <div style={{ padding: 28 }}>
                <span className="tag">{p.tag}</span>
                <h3 style={{ marginTop: 12 }}>{p.title}</h3>
                <p style={{ marginTop: 10, fontSize: 14 }}>{p.desc}</p>
                <div style={{ marginTop: 16, paddingTop: 16, borderTop: "1px solid var(--gray-3)", fontSize: 13, fontWeight: 600, color: "var(--white)" }}>
                  {p.metric}
                </div>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      <section className="section-alt">
        <Reveal className="container cta-banner">
          <h2>
            Want results like these on
            <br />
            <span className="accent">your storefront?</span>
          </h2>
          <Link href="/contact-us" className="btn btn-primary">Get In Touch</Link>
        </Reveal>
      </section>
    </>
  );
}
