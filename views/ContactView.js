import Reveal from "@/components/Reveal";
import ContactForm from "@/components/ContactForm";
import { getContent } from "@/lib/content";
import { BOOKING_URL, CONTACT, SOCIALS, SITE_URL } from "@/lib/site";

export default function ContactView({ lang = "en" }) {
  const c = getContent(lang);
  const t = c.contact;

  return (
    <header>
      <div className="container contact-grid">
        <Reveal>
          <span className="eyebrow">{t.eyebrow}</span>
          <h1>{t.title}</h1>
          <p className="text-muted page-intro" style={{ maxWidth: 560 }}>{t.intro}</p>
          <ContactForm t={t.form} />
        </Reveal>

        <Reveal delay={0.1} className="card contact-card">
          <span className="hero-status"><span className="hero-status-dot" />{t.status}</span>
          <div className="contact-list">
            <a href={`mailto:${CONTACT.email}`} className="contact-info-item">
              <span className="contact-info-icon">✉</span> {CONTACT.email}
            </a>
            <a href={`tel:${CONTACT.phoneIntl}`} className="contact-info-item">
              <span className="contact-info-icon">☎</span> {CONTACT.phone}
            </a>
            <a href={CONTACT.zalo} target="_blank" rel="noopener noreferrer" className="contact-info-item">
              <span className="contact-info-icon">Z</span> Zalo: {CONTACT.phone}
            </a>
            <div className="contact-info-item">
              <span className="contact-info-icon">⌖</span> {c.footer.location}
            </div>
            <div className="contact-info-item">
              <span className="contact-info-icon">◷</span> {c.footer.remote}
            </div>
            <a href={SITE_URL} className="contact-info-item">
              <span className="contact-info-icon">⌂</span> trungtranecom.pro.vn
            </a>
          </div>
          {BOOKING_URL && (
            <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ marginTop: 28, width: "100%" }}>{t.book}</a>
          )}
          <div className="footer-social" style={{ marginTop: 28 }}>
            {SOCIALS.map((s) => (
              <a key={s.name} href={s.href} target="_blank" rel="noopener noreferrer">{s.name}</a>
            ))}
          </div>
        </Reveal>
      </div>
    </header>
  );
}
