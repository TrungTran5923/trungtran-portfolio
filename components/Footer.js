import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer-top">
        <div>
          <div className="footer-brand">
            <Image src="/images/logo-full.png" alt="Trung Tran" width={160} height={84} style={{ height: 32, width: "auto" }} />
          </div>
          <p style={{ fontSize: 14, lineHeight: 1.7, maxWidth: 280 }}>
            Ecommerce Operations Executive scaling TikTok Shop storefronts to
            #1 — and building the websites that back them up.
          </p>
        </div>

        <div>
          <div className="footer-col-head">Quick Links</div>
          <ul className="footer-links">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about-me">About Me</Link></li>
            <li><Link href="/services">Services</Link></li>
            <li><Link href="/portfolio">Portfolio</Link></li>
            <li><Link href="/blog">Blog</Link></li>
            <li><Link href="/contact-us">Contact Us</Link></li>
          </ul>
        </div>

        <div>
          <div className="footer-col-head">Services</div>
          <ul className="footer-links">
            <li><Link href="/services">WordPress Website Development</Link></li>
            <li><Link href="/services">AI Workflow Automation</Link></li>
            <li><Link href="/services">Ecom Operations Consulting</Link></li>
            <li><Link href="/services">Part-Time Marketplace Ops</Link></li>
            <li><Link href="/services">Livestream Consulting</Link></li>
          </ul>
        </div>

        <div>
          <div className="footer-col-head">Contact</div>
          <ul className="footer-links">
            <li><a href="mailto:trungtran5923@gmail.com">trungtran5923@gmail.com</a></li>
            <li><a href="tel:+84902368316">0902 368 316</a></li>
            <li><span>Ho Chi Minh City, Vietnam</span></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <span>&copy; {year} Trần Lê Minh Trung. All rights reserved.</span>
          <span>trungtranecom.pro.vn</span>
        </div>
      </div>
    </footer>
  );
}
