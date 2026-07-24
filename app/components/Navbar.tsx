"use client";

import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { label: "About", href: "/about" },
  { label: "Rules & Terms", href: "/rules" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [lang, setLang] = useState<"EN" | "FA">("EN");

  return (
    <header className="navbar">
      <div className="navbar-inner">
        {/* Logo */}
        <Link href="/" className="navbar-logo">
          RENO3D
        </Link>

        {/* Nav links */}
        <nav className="navbar-links">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="navbar-link">
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Right cluster */}
        <div className="navbar-actions">
          <button
            className="navbar-lang"
            onClick={() => setLang(lang === "EN" ? "FA" : "EN")}
            aria-label="Switch language"
          >
            {lang}
          </button>

          <Link href="/contact" className="navbar-cta">
            Get in Touch
          </Link>
        </div>
      </div>
    </header>
  );
}
