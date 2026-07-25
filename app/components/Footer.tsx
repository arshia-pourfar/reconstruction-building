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
    <footer className="w-full bg-[var(--matte-slate)] pt-20 pb-10" style={{ paddingLeft: "var(--side-pad)", paddingRight: "var(--side-pad)" }}>
      <div className="max-w-[var(--container-max)] mx-auto" dir="rtl">
        {/* Top row — 4 columns */}
        <div className="grid gap-12 [grid-template-columns:1.6fr_1fr_1fr_1.4fr]">
          {/* Column 1: Brand */}
          <div className="flex flex-col gap-3">
            <Link href="/" className="text-[22px] font-bold tracking-tight no-underline mb-1 text-[var(--off-white)]">
              <span style={{ color: "var(--off-white)" }}>RENO</span>
              <span style={{ color: "var(--blue-cta)" }}>3D</span>
            </Link>
            <p className="text-sm leading-[1.6] m-0 text-[var(--concrete)]">
              استودیو طراحی و بازسازی سه‌بعدی خانه شما
            </p>
            <a href="mailto:info@bazsazi-no.ir" className="text-sm font-medium no-underline transition-colors duration-200 text-[var(--oak)] hover:text-[var(--oak-hover)]">
              info@bazsazi-no.ir
            </a>
            <a href="tel:+989121234567" className="text-sm font-medium no-underline transition-colors duration-200 text-[var(--off-white)] hover:text-[rgba(246,244,241,0.8)]">
              ۰۹۱۲-۱۲۳-۴۵۶۷
            </a>
          </div>

          {/* Column 2: Studio */}
          <div className="flex flex-col">
            <h4 className="text-xs font-semibold tracking-[1.5px] uppercase m-0 mb-5 text-[var(--oak)]">استودیو</h4>
            <ul className="list-none m-0 p-0 flex flex-col gap-3.5">
              {studioLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm font-normal no-underline transition-colors duration-200 text-[var(--concrete)] hover:text-[var(--off-white)]">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services */}
          <div className="flex flex-col">
            <h4 className="text-xs font-semibold tracking-[1.5px] uppercase m-0 mb-5 text-[var(--oak)]">خدمات</h4>
            <ul className="list-none m-0 p-0 flex flex-col gap-3.5">
              {serviceLinks.map((link, i) => (
                <li key={i}>
                  <Link href={link.href} className="text-sm font-normal no-underline transition-colors duration-200 text-[var(--concrete)] hover:text-[var(--off-white)]">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Social */}
          <div className="flex flex-col">
            <h4 className="text-xs font-semibold tracking-[1.5px] uppercase m-0 mb-5 text-[var(--oak)]">شبکه‌های اجتماعی</h4>
            <ul className="list-none m-0 p-0 flex flex-col gap-3.5">
              {socialLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-sm font-normal no-underline transition-colors duration-200 text-[var(--concrete)] hover:text-[var(--off-white)]" target="_blank" rel="noopener noreferrer">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px my-12 mb-7" style={{ background: "rgba(246,244,241,0.1)" }} />

        {/* Bottom row */}
        <div className="flex items-center justify-between">
          <span className="text-[13px] text-[var(--concrete)]">
            © ۲۰۲۶ بازسازی نو. تمامی حقوق محفوظ است.
          </span>
          <div className="flex items-center gap-2">
            <Link href="/rules" className="text-[13px] no-underline transition-colors duration-200 text-[var(--concrete)] hover:text-[var(--off-white)]">
              سیاست حریم خصوصی
            </Link>
            <span className="text-[13px]" style={{ color: "rgba(138,138,130,0.5)" }}>·</span>
            <Link href="/rules" className="text-[13px] no-underline transition-colors duration-200 text-[var(--concrete)] hover:text-[var(--off-white)]">
              شرایط استفاده
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
