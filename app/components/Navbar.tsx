"use client";

import Link from "next/link";
import { useState, useRef, useEffect, useCallback } from "react";

const navLinks = [
  { label: "نمونه‌کارها", href: "/projects" },
  { label: "محاسبه هزینه", href: "/calculator" },
  { label: "بلاگ و راهنما", href: "/blog" },
  { label: "قوانین و مقررات", href: "/rules" },
  { label: "تماس با ما", href: "/contact" },
];

const serviceItems = [
  {
    title: "طراحی و اجرای مدرن",
    desc: "طراحی مینیمال، میکروسمنت و نورپردازی توکار",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
  },
  {
    title: "بازسازی لوکس و کلاسیک",
    desc: "قاب‌بندی، پتینه و متریال‌های خاص",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ),
  },
  {
    title: "بازسازی آشپزخانه",
    desc: "کابینت‌های مدرن، جزیره و تجهیزات توکار",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
        <line x1="3" y1="9" x2="21" y2="9" />
        <line x1="9" y1="21" x2="9" y2="9" />
      </svg>
    ),
  },
  {
    title: "هوشمندسازی فضا",
    desc: "کنترل نور، دما و سیستم‌های BMS",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="4" y="4" width="16" height="16" rx="2" />
        <rect x="9" y="9" width="6" height="6" />
        <line x1="9" y1="1" x2="9" y2="4" />
        <line x1="15" y1="1" x2="15" y2="4" />
        <line x1="9" y1="20" x2="9" y2="23" />
        <line x1="15" y1="20" x2="15" y2="23" />
        <line x1="20" y1="9" x2="23" y2="9" />
        <line x1="20" y1="14" x2="23" y2="14" />
        <line x1="1" y1="9" x2="4" y2="9" />
        <line x1="1" y1="14" x2="4" y2="14" />
      </svg>
    ),
  },
];

const projectTypes = [
  "بازسازی کامل",
  "بازسازی جزئی",
  "طراحی داخلی",
  "مشاوره سه‌بعدی",
];

export default function Navbar() {
  const [megaOpen, setMegaOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const megaTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const megaRef = useRef<HTMLDivElement>(null);

  const openMega = useCallback(() => {
    if (megaTimeoutRef.current) clearTimeout(megaTimeoutRef.current);
    setMegaOpen(true);
  }, []);

  const closeMega = useCallback(() => {
    megaTimeoutRef.current = setTimeout(() => setMegaOpen(false), 150);
  }, []);

  useEffect(() => {
    return () => {
      if (megaTimeoutRef.current) clearTimeout(megaTimeoutRef.current);
    };
  }, []);

  useEffect(() => {
    if (!megaOpen && !contactOpen) return;
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMegaOpen(false);
        setContactOpen(false);
      }
    };
    document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, [megaOpen, contactOpen]);

  return (
    <>
      <header className="navbar">
        <div className="navbar-inner" dir="rtl">
          {/* Logo */}
          <Link href="/" className="navbar-logo">
            <span className="navbar-logo-en">RENO</span>
            <span className="navbar-logo-accent">3D</span>
          </Link>

          {/* Center nav */}
          <nav className="navbar-links">
            {/* Services with mega-menu */}
            <div
              className="navbar-mega-trigger"
              onMouseEnter={openMega}
              onMouseLeave={closeMega}
              ref={megaRef}
            >
              <button
                className={`navbar-link navbar-link--has-icon ${megaOpen ? "navbar-link--active" : ""}`}
                onClick={() => (megaOpen ? setMegaOpen(false) : openMega())}
              >
                خدمات
                <svg
                  className={`navbar-chevron ${megaOpen ? "navbar-chevron--open" : ""}`}
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M3 4.5L6 7.5L9 4.5" />
                </svg>
              </button>

              {/* Mega-menu dropdown */}
              {megaOpen && (
                <div
                  className="navbar-mega"
                  onMouseEnter={openMega}
                  onMouseLeave={closeMega}
                >
                  <div className="navbar-mega-inner">
                    {/* Right column — service items */}
                    <div className="navbar-mega-services">
                      {serviceItems.map((item) => (
                        <Link
                          key={item.title}
                          href="/services"
                          className="navbar-mega-item"
                          onClick={() => setMegaOpen(false)}
                        >
                          <div className="navbar-mega-item-icon">
                            {item.icon}
                          </div>
                          <div className="navbar-mega-item-text">
                            <span className="navbar-mega-item-title">{item.title}</span>
                            <span className="navbar-mega-item-desc">{item.desc}</span>
                          </div>
                          <svg className="navbar-mega-item-arrow" width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M10 4L6 8L10 12" />
                          </svg>
                        </Link>
                      ))}
                    </div>

                    {/* Left column — featured card */}
                    <div className="navbar-mega-featured">
                      <div className="navbar-mega-card">
                        <div className="navbar-mega-card-img">
                          <div className="navbar-mega-card-img-placeholder" />
                          <span className="navbar-mega-card-badge">۲۰۲۶</span>
                        </div>
                        <div className="navbar-mega-card-body">
                          <h3 className="navbar-mega-card-title">طراحی مدرن ۲۰۲۶</h3>
                          <p className="navbar-mega-card-desc">
                            ترندهای جدید بازسازی و طراحی داخلی با تمرکز بر مینیمالیسم، پایداری و هوشمندسازی فضا
                          </p>
                          <Link
                            href="/services"
                            className="navbar-mega-card-link"
                            onClick={() => setMegaOpen(false)}
                          >
                            مشاهده خدمات
                            <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                              <path d="M10 4L6 8L10 12" />
                            </svg>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Regular links */}
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className="navbar-link">
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right actions */}
          <div className="navbar-actions">
            <a href="tel:+989121234567" className="navbar-phone" aria-label="تماس تلفنی">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
            </a>

            <button
              className="navbar-cta"
              onClick={() => setContactOpen(true)}
            >
              درخواست مشاوره
            </button>

            {/* Hamburger */}
            <button
              className="navbar-hamburger"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="منو"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                {mobileOpen ? (
                  <>
                    <line x1="6" y1="6" x2="18" y2="18" />
                    <line x1="6" y1="18" x2="18" y2="6" />
                  </>
                ) : (
                  <>
                    <line x1="3" y1="7" x2="21" y2="7" />
                    <line x1="3" y1="12" x2="21" y2="12" />
                    <line x1="3" y1="17" x2="21" y2="17" />
                  </>
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="navbar-mobile" dir="rtl">
            {/* Mobile services toggle */}
            <button
              className="navbar-mobile-link navbar-mobile-link--toggle"
              onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
            >
              <span>خدمات</span>
              <svg
                className={`navbar-chevron ${mobileServicesOpen ? "navbar-chevron--open" : ""}`}
                width="14"
                height="14"
                viewBox="0 0 12 12"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M3 4.5L6 7.5L9 4.5" />
              </svg>
            </button>
            {mobileServicesOpen && (
              <div className="navbar-mobile-sub">
                {serviceItems.map((item) => (
                  <Link
                    key={item.title}
                    href="/services"
                    className="navbar-mobile-sub-link"
                    onClick={() => { setMobileOpen(false); setMobileServicesOpen(false); }}
                  >
                    {item.title}
                  </Link>
                ))}
              </div>
            )}

            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="navbar-mobile-link"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}

            <div className="navbar-mobile-cta-row">
              <button
                className="navbar-mobile-cta"
                onClick={() => { setMobileOpen(false); setContactOpen(true); }}
              >
                درخواست مشاوره
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Overlay backdrop */}
      {(megaOpen || contactOpen) && (
        <div
          className="navbar-overlay"
          onClick={() => { setMegaOpen(false); setContactOpen(false); }}
        />
      )}

      {/* Contact flyout */}
      {contactOpen && (
        <div className="navbar-contact-flyout" dir="rtl">
          <div className="navbar-contact-header">
            <h3 className="navbar-contact-title">پیام سریع</h3>
            <button
              className="navbar-contact-close"
              onClick={() => setContactOpen(false)}
              aria-label="بستن"
            >
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4L14 14" />
                <path d="M14 4L4 14" />
              </svg>
            </button>
          </div>
          <p className="navbar-contact-sub">
            فرم را پر کنید، ظرف ۲۴ ساعت با شما تماس می‌گیریم.
          </p>
          <form className="navbar-contact-form" onSubmit={(e) => e.preventDefault()}>
            <div className="navbar-contact-field">
              <label className="navbar-contact-label" htmlFor="flyout-name">نام و نام خانوادگی</label>
              <input
                id="flyout-name"
                type="text"
                placeholder="نام خود را وارد کنید"
                className="navbar-contact-input"
                required
              />
            </div>
            <div className="navbar-contact-field">
              <label className="navbar-contact-label" htmlFor="flyout-phone">شماره تماس</label>
              <input
                id="flyout-phone"
                type="tel"
                placeholder="۰۹۱۲۱۲۳۴۵۶۷"
                className="navbar-contact-input"
                dir="ltr"
                required
              />
            </div>
            <div className="navbar-contact-field">
              <label className="navbar-contact-label" htmlFor="flyout-type">نوع پروژه</label>
              <select id="flyout-type" className="navbar-contact-input navbar-contact-select">
                {projectTypes.map((t) => (
                  <option key={t} value={t}>{t}</option>
                ))}
              </select>
            </div>
            <button type="submit" className="navbar-contact-submit">
              ارسال پیام
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="22" y1="2" x2="11" y2="13" />
                <polygon points="22 2 15 22 11 13 2 9 22 2" />
              </svg>
            </button>
          </form>
        </div>
      )}
    </>
  );
}
