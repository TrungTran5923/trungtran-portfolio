import Reveal from "@/components/Reveal";

export const metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Trần Lê Minh Trung for full-time Senior Ecommerce Executive / Marketplace Manager roles or freelance WordPress projects.",
  alternates: { canonical: "/contact-us" },
};

export default function ContactPage() {
  return (
    <header>
      <div
        className="container"
        style={{
          paddingTop: 96,
          paddingBottom: 96,
          display: "grid",
          gridTemplateColumns: "1.2fr 1fr",
          gap: 64,
          alignItems: "start",
        }}
      >
        <Reveal>
          <span className="eyebrow">Contact</span>
          <h1>Let&apos;s talk about your storefront or your site.</h1>
          <p className="text-muted" style={{ marginTop: 20, fontSize: 17, maxWidth: 520 }}>
            Whether you&apos;re evaluating me for a Senior Ecommerce Executive / Marketplace Manager role, or you need a WordPress site built right — tell me a bit about it below.
          </p>

          <form
            action="mailto:trungtran5923@gmail.com"
            method="post"
            encType="text/plain"
            style={{ display: "flex", flexDirection: "column", gap: 20, maxWidth: 520, marginTop: 32 }}
          >
            <div className="form-field">
              <label htmlFor="name">Full Name *</label>
              <input type="text" id="name" name="name" required placeholder="Your name" />
            </div>
            <div className="form-field">
              <label htmlFor="email">Email *</label>
              <input type="email" id="email" name="email" required placeholder="you@company.com" />
            </div>
            <div className="form-field">
              <label htmlFor="company">Company (Optional)</label>
              <input type="text" id="company" name="company" placeholder="Where you work" />
            </div>
            <fieldset style={{ border: "none", padding: 0, margin: 0 }}>
              <legend className="form-field" style={{ marginBottom: 10 }}>
                <span style={{ fontSize: 13, fontWeight: 500, color: "var(--gray-2)", textTransform: "uppercase", letterSpacing: "0.04em" }}>
                  I&apos;m reaching out about *
                </span>
              </legend>
              <div className="radio-group">
                <label><input type="radio" name="inquiry_type" value="full-time-role" required /> A full-time role</label>
                <label><input type="radio" name="inquiry_type" value="freelance-project" /> A freelance project</label>
              </div>
            </fieldset>
            <div className="form-field">
              <label htmlFor="message">Message *</label>
              <textarea id="message" name="message" required rows={5} placeholder="Tell me about the role or the project" />
            </div>
            <button type="submit" className="btn btn-primary" style={{ alignSelf: "flex-start" }}>
              Send Message
            </button>
          </form>
        </Reveal>

        <Reveal delay={0.1} className="card" style={{ padding: "40px 36px" }}>
          <span className="tag">Available for full-time roles &amp; freelance projects</span>
          <div style={{ marginTop: 28, display: "flex", flexDirection: "column", gap: 20 }}>
            <a href="mailto:trungtran5923@gmail.com" className="contact-info-item">
              <span className="contact-info-icon">✉</span> trungtran5923@gmail.com
            </a>
            <a href="tel:+84902368316" className="contact-info-item">
              <span className="contact-info-icon">☎</span> 0902 368 316
            </a>
            <div className="contact-info-item">
              <span className="contact-info-icon">📍</span> Ho Chi Minh City, Vietnam
            </div>
            <a href="/" className="contact-info-item">
              <span className="contact-info-icon">🌐</span> trungtranecom.pro.vn
            </a>
          </div>
        </Reveal>
      </div>
    </header>
  );
}
