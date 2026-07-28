"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

const NAV_LINKS = [
  { label: "Portfolio", href: "/projects" },
  { label: "Services", href: "/services" },
  { label: "Process", href: "/process" },
  { label: "About", href: "/about" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#fbf9f9]/90 backdrop-blur-md border-b border-[#1b1c1c]"
          : "bg-[#fbf9f9] border-b border-[#1b1c1c]"
      }`}
    >
      <nav className="max-w-[1440px] mx-auto px-4 md:px-16 flex items-center justify-between h-20">
        {/* Logo */}
        <a
          href="/"
          className="font-[family-name:var(--font-headline-md)] text-[24px] leading-[32px] font-bold tracking-tighter text-primary"
        >
          STRUCTURA
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-12">
          {NAV_LINKS.map((link) => {
            const isActive = pathname === link.href;
            return (
              <a
                key={link.label}
                href={link.href}
                className={`font-[family-name:var(--font-label-md)] text-[14px] leading-5 tracking-[0.05em] uppercase transition-colors duration-200 pb-1 ${
                  isActive
                    ? "text-secondary font-bold border-b-2 border-secondary"
                    : "text-on-surface hover:text-secondary font-medium"
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </div>

        {/* CTA */}
        <button className="bg-primary text-on-primary font-[family-name:var(--font-label-md)] text-[14px] leading-5 tracking-[0.05em] px-6 py-3 uppercase hover:bg-secondary transition-all active:translate-y-0.5">
          Get Quote
        </button>
      </nav>
    </header>
  );
}
