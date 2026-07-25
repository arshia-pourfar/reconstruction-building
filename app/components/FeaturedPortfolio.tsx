"use client";

import { useState } from "react";
import Link from "next/link";

const categories = ["همه", "پذیرایی", "آشپزخانه", "هوشمند"];

const projects = [
  { id: 1, title: "آپارتمان مدرن ولنجک", category: "پذیرایی", area: "۱۸۰ متر", duration: "۱۲ هفته", before: "/projects/before-p1.png", after: "/projects/after-p1.png" },
  { id: 2, title: "ویلای کلاسیک شمال", category: "پذیرایی", area: "۳۲۰ متر", duration: "۱۶ هفته", before: "/projects/before-p1.png", after: "/projects/after-p1.png" },
  { id: 3, title: "آشپزخانه مدرن تهرانپارس", category: "آشپزخانه", area: "۳۵ متر", duration: "۴ هفته", before: "/projects/before-p1.png", after: "/projects/after-p1.png" },
  { id: 4, title: "دفتر کار هوشمند", category: "هوشمند", area: "۲۰۰ متر", duration: "۸ هفته", before: "/projects/before-p1.png", after: "/projects/after-p1.png" },
  { id: 5, title: "سوئیت میکروآپارتمان", category: "پذیرایی", area: "۴۵ متر", duration: "۶ هفته", before: "/projects/before-p1.png", after: "/projects/after-p1.png" },
  { id: 6, title: "کافه مینیمال", category: "پذیرایی", area: "۱۲۰ متر", duration: "۱۰ هفته", before: "/projects/before-p1.png", after: "/projects/after-p1.png" },
];

export default function FeaturedPortfolio() {
  const [active, setActive] = useState("همه");
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const filtered = active === "همه" ? projects : projects.filter((p) => p.category === active);

  return (
    <section className="w-full bg-[var(--off-white)]" style={{ padding: "var(--section-pad) var(--side-pad)", maxWidth: "var(--container-max)", margin: "0 auto" }}>
      <div className="mx-auto max-w-[var(--container-max)]">
        {/* Header */}
        <div className="flex flex-col items-center" style={{ marginBottom: "40px" }}>
          <div className="inline-flex items-center h-8 px-[18px] rounded-full mb-6 bg-[var(--matte-slate)]">
            <span className="text-xs font-semibold tracking-[1.5px] uppercase text-[var(--oak)]">نمونه کارها</span>
          </div>
          <h2 className="text-[40px] font-semibold leading-[1.15] tracking-tight text-center mb-4 text-[var(--foreground)]">پروژه‌های منتخب</h2>
        </div>

        {/* Filter pills */}
        <div className="flex flex-wrap gap-2.5 justify-center mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`text-[13px] font-medium px-5 py-2 rounded-full cursor-pointer transition-all duration-200 font-[var(--font-persian)] border-[1.5px] ${active === cat ? "text-[var(--off-white)] bg-[var(--matte-slate)] border-[var(--matte-slate)]" : "text-[var(--concrete)] bg-transparent hover:text-[var(--foreground)] hover:border-black/10"}`}
              style={{ borderColor: active === cat ? "var(--matte-slate)" : "rgba(0,0,0,0.06)" }}
              onClick={() => setActive(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid gap-6 grid-cols-3">
          {filtered.map((project) => (
            <div
              key={project.id}
              className="rounded-[20px] overflow-hidden transition-all duration-300 hover:-translate-y-1 bg-white group"
              style={{ border: "1px solid rgba(0,0,0,0.06)", boxShadow: "0 20px 48px rgba(0,0,0,0.08)" }}
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div className="relative w-full h-[220px] overflow-hidden">
                <img
                  src={hoveredId === project.id ? project.after : project.before}
                  alt={project.title}
                  className="w-full h-full object-cover transition-opacity duration-300"
                />
                <span className="absolute top-3 left-3 h-7 px-3 flex items-center text-[11px] font-bold tracking-[1.5px] rounded-full backdrop-blur-[8px]" style={{ background: "rgba(0,0,0,0.5)", color: "rgba(246,244,241,0.85)" }}>
                  {hoveredId === project.id ? "AFTER" : "BEFORE"}
                </span>
              </div>

              <div className="p-5">
                <h3 className="text-base font-bold m-0 mb-2.5 text-[var(--foreground)]">{project.title}</h3>
                <div className="flex gap-4 mb-3.5">
                  <span className="inline-flex items-center gap-1.5 text-[13px] text-[var(--concrete)]">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="3" y="3" width="18" height="18" rx="2" />
                      <path d="M3 9h18" />
                    </svg>
                    {project.area}
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-[13px] text-[var(--concrete)]">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10" />
                      <polyline points="12 6 12 12 16 14" />
                    </svg>
                    {project.duration}
                  </span>
                </div>
                <Link href="/contact" className="inline-flex items-center gap-1.5 text-[13px] font-semibold no-underline transition-all duration-200 text-[var(--blue-cta)] hover:gap-[10px]">
                  مشاهده تور سه‌بعدی
                  <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M10 4L6 8L10 12" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
