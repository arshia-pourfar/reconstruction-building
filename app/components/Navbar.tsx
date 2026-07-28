"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

const NAV_LINKS = [
  { label: "نمونه کارها", href: "/projects" },
  { label: "خدمات", href: "/services" },
  { label: "فرآیند", href: "/process" },
  { label: "درباره ما", href: "/about" },
  { label: "بلاگ", href: "/blog" },
  { label: "محاسبه هزینه", href: "/calculator" },
  { label: "قوانین", href: "/rules" },
  { label: "تماس با ما", href: "/contact" },
];

function NavLink({ link, isActive }: { link: (typeof NAV_LINKS)[number]; isActive: boolean }) {
  return (
    <a
      href={link.href}
      className={`group relative font-[family-name:var(--font-vazirmatn)] text-[14px] leading-5 transition-colors duration-300 py-1 ${
        isActive
          ? "text-secondary font-bold"
          : "text-on-surface hover:text-secondary font-medium"
      }`}
    >
      {link.label}
      {/* Animated underline */}
      <span
        className={`absolute bottom-0 right-0 h-[2px] bg-secondary transition-all duration-300 ease-out ${
          isActive ? "w-full" : "w-0 group-hover:w-full"
        }`}
      />
    </a>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <>
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[#f9f9f8]/90 backdrop-blur-md border-b border-outline-variant"
            : "bg-[#f9f9f8] border-b border-outline-variant"
        }`}
      >
        <nav className="max-w-[1280px] mx-auto px-4 md:px-16 flex items-center justify-between h-20">
          {/* Logo */}
          <a
            href="/"
            className="font-[family-name:var(--font-headline-md)] text-[24px] leading-[32px] font-bold tracking-tighter text-primary hover:text-secondary transition-colors duration-300"
          >
            STRUCTURA
          </a>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.label}
                link={link}
                isActive={pathname === link.href}
              />
            ))}
          </div>

          {/* CTA */}
          <a
            href="/contact"
            className="hidden md:inline-block bg-tertiary text-on-tertiary font-[family-name:var(--font-vazirmatn)] text-[14px] leading-5 px-6 py-3 rounded-xl hover:shadow-[0_4px_20px_rgba(0,0,0,0.04)] transition-all duration-200"
          >
            دریافت مشاوره
          </a>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden relative w-10 h-10 flex items-center justify-center"
            onClick={() => setMobileOpen((p) => !p)}
            aria-label="منو"
          >
            <span
              className={`absolute w-6 h-[2px] bg-primary transition-all duration-300 ${
                mobileOpen ? "rotate-45 translate-y-0" : "-translate-y-[6px]"
              }`}
            />
            <span
              className={`absolute w-6 h-[2px] bg-primary transition-all duration-300 ${
                mobileOpen ? "-rotate-45 translate-y-0" : "translate-y-[6px]"
              }`}
            />
          </button>
        </nav>
      </header>

      {/* Mobile Drawer */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-opacity duration-300 ${
          mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-primary/40"
          onClick={() => setMobileOpen(false)}
        />
        {/* Panel */}
        <div
          className={`absolute top-20 left-0 right-0 bg-surface border-b border-outline-variant rounded-b-2xl shadow-[0_4px_20px_rgba(0,0,0,0.04)] transition-transform duration-300 ease-out ${
            mobileOpen ? "translate-y-0" : "-translate-y-4"
          }`}
        >
          <div className="max-w-[1280px] mx-auto px-4 py-6 flex flex-col gap-1">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  className={`font-[family-name:var(--font-vazirmatn)] text-[16px] leading-[24px] px-4 py-3 border-r-2 transition-all duration-200 ${
                    isActive
                      ? "border-secondary bg-secondary/5 text-secondary font-bold"
                      : "border-transparent text-on-surface hover:border-primary hover:bg-surface-container-low hover:text-secondary font-medium"
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
            <a
              href="/contact"
              className="mt-4 bg-tertiary text-on-tertiary font-[family-name:var(--font-vazirmatn)] text-[14px] leading-5 px-6 py-4 text-center rounded-xl transition-all"
            >
              دریافت مشاوره
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
