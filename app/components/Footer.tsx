"use client";

import Link from "next/link";

const studioLinks = [
  { label: "About", href: "/about" },
  { label: "Rules & Terms", href: "/rules" },
  { label: "Contact", href: "/contact" },
];

const socialLinks = [
  { label: "Instagram", href: "https://instagram.com" },
  { label: "Pinterest", href: "https://pinterest.com" },
  { label: "LinkedIn", href: "https://linkedin.com" },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        {/* Top row — 4 columns */}
        <div className="footer-columns">
          {/* Column 1: Brand */}
          <div className="footer-brand">
            <Link href="/" className="footer-logo">
              RENO3D
            </Link>
            <p className="footer-tagline">
              Architectural visualization and 3D renovation studio.
            </p>
            <a href="mailto:hello@reno3d.studio" className="footer-email">
              hello@reno3d.studio
            </a>
            <a href="tel:+14155550192" className="footer-phone">
              +1 (415) 555-0192
            </a>
          </div>

          {/* Column 2: Studio */}
          <div className="footer-col">
            <h4 className="footer-col-title">Studio</h4>
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

          {/* Column 3: Social */}
          <div className="footer-col">
            <h4 className="footer-col-title">Social</h4>
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

          {/* Column 4: Newsletter */}
          <div className="footer-col">
            <h4 className="footer-col-title">Stay Inspired</h4>
            <form
              className="footer-newsletter"
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                type="email"
                placeholder="Your email"
                className="footer-newsletter-input"
                aria-label="Email address for newsletter"
                required
              />
              <button type="submit" className="footer-newsletter-btn">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Divider */}
        <div className="footer-divider" />

        {/* Bottom row */}
        <div className="footer-bottom">
          <span className="footer-copyright">
            © 2026 RENO3D Studio. All rights reserved.
          </span>
          <div className="footer-legal">
            <Link href="/rules" className="footer-legal-link">
              Privacy Policy
            </Link>
            <span className="footer-legal-sep">·</span>
            <Link href="/rules" className="footer-legal-link">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
