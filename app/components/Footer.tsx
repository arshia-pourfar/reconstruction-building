"use client";

import Link from "next/link";

const studioLinks = [
  { label: "درباره ما", href: "/about" },
  { label: "قوانین و مقررات", href: "/rules" },
  { label: "تماس با ما", href: "/contact" },
];

const serviceLinks = [
  { label: "بازسازی مدرن", href: "/services" },
  { label: "بازسازی آشپزخانه", href: "/services" },
  { label: "هوشمندسازی", href: "/services" },
];

const socialLinks = [
  { label: "اینستاگرام", href: "https://instagram.com" },
  { label: "تلگرام", href: "https://t.me/reno3d" },
  { label: "لینکدین", href: "https://linkedin.com" },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner" dir="rtl">
        {/* Top row — 4 columns */}
        <div className="footer-columns">
          {/* Column 1: Brand */}
          <div className="footer-brand">
            <Link href="/" className="footer-logo">
              <span style={{ color: "var(--off-white)" }}>RENO</span>
              <span style={{ color: "var(--blue-cta)" }}>3D</span>
            </Link>
            <p className="footer-tagline">
              استودیو طراحی و بازسازی سه‌بعدی خانه شما
            </p>
            <a href="mailto:info@bazsazi-no.ir" className="footer-email">
              info@bazsazi-no.ir
            </a>
            <a href="tel:+989121234567" className="footer-phone">
              ۰۹۱۲-۱۲۳-۴۵۶۷
            </a>
          </div>

          {/* Column 2: Studio */}
          <div className="footer-col">
            <h4 className="footer-col-title">استودیو</h4>
            <ul className="footer-links">
              {studioLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="footer-link">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services */}
          <div className="footer-col">
            <h4 className="footer-col-title">خدمات</h4>
            <ul className="footer-links">
              {serviceLinks.map((link, i) => (
                <li key={i}>
                  <Link href={link.href} className="footer-link">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Social */}
          <div className="footer-col">
            <h4 className="footer-col-title">شبکه‌های اجتماعی</h4>
            <ul className="footer-links">
              {socialLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="footer-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="footer-divider" />

        {/* Bottom row */}
        <div className="footer-bottom">
          <span className="footer-copyright">
            © ۲۰۲۶ بازسازی نو. تمامی حقوق محفوظ است.
          </span>
          <div className="footer-legal">
            <Link href="/rules" className="footer-legal-link">
              سیاست حریم خصوصی
            </Link>
            <span className="footer-legal-sep">·</span>
            <Link href="/rules" className="footer-legal-link">
              شرایط استفاده
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
