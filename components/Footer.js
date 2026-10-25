import Link from "next/link";
import Image from "next/image";
import { getContent } from "@/lib/content";
import { CONTACT, SOCIALS, localePath } from "@/lib/site";

export default function Footer({ lang = "en" }) {
  const year = new Date().getFullYear();
  const c = getContent(lang);
  const t = c.footer;

  return (
    <footer className="footer">
      <div className="container footer-top">
        <div>
          <div className="footer-brand">
            <Image src="/images/logo-full.png" alt="Trung Tran" width={220} height={46} style={{ height: 34, width: "auto" }} />
          </div>
          <p style={{ fontSize: 14, lineHeight: 1.7, maxWidth: 300 }}>{t.blurb}</p>
          <div className="footer-social">
            {SOCIALS.map((s) => (
              <a key={s.name} href={s.href} target="_blank" rel="noopener noreferrer">{s.name}</a>
            ))}
          </div>
        </div>

        <div>
          <div className="footer-col-head">{t.quick}</div>
          <ul className="footer-links">
            {c.nav.links.map((l) => (
              <li key={l.href}><Link href={localePath(lang, l.href)}>{l.label}</Link></li>
            ))}
          </ul>
        </div>

        <div>
          <div className="footer-col-head">{t.services}</div>
          <ul className="footer-links">
            {c.services.map((s) => (
              <li key={s.title}><Link href={localePath(lang, "/services")}>{s.title}</Link></li>
            ))}
          </ul>
        </div>

        <div>
          <div className="footer-col-head">{t.contact}</div>
          <ul className="footer-links">
            <li><a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a></li>
            <li><a href={`tel:${CONTACT.phoneIntl}`}>{CONTACT.phone}</a></li>
            <li><a href={CONTACT.zalo} target="_blank" rel="noopener noreferrer">Zalo: {CONTACT.phone}</a></li>
            <li><span>{t.location}</span></li>
            <li><span>{t.remote}</span></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <span>&copy; {year} Trần Lê Minh Trung. {t.rights}</span>
          <span>trungtranecom.pro.vn</span>
        </div>
      </div>
    </footer>
  );
}
