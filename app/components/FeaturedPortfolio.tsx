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
    <section className="portfolio-section">
      <div className="portfolio-inner">
        <div data-aos="fade-up" className="portfolio-header">
          <div className="eyebrow">
            <span className="eyebrow-text">نمونه کارها</span>
          </div>
          <h2 className="section-headline">پروژه‌های منتخب</h2>
        </div>

        <div data-aos="fade-up" data-aos-delay="100" className="portfolio-filters">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`portfolio-pill ${active === cat ? "portfolio-pill--active" : ""}`}
              onClick={() => setActive(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="portfolio-grid">
          {filtered.map((project, i) => (
            <div
              key={project.id}
              data-aos="fade-up"
              data-aos-delay={200 + (i % 6) * 80}
              className="portfolio-card"
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div className="portfolio-card-img">
                <img
                  src={hoveredId === project.id ? project.after : project.before}
                  alt={project.title}
                  className="portfolio-card-photo"
                />
                <span className="portfolio-card-badge">
                  {hoveredId === project.id ? "AFTER" : "BEFORE"}
                </span>
              </div>

              <div className="portfolio-card-body">
                <h3 className="portfolio-card-title">{project.title}</h3>
                <div className="portfolio-card-meta">
                  <span className="portfolio-card-meta-item">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="3" y="3" width="18" height="18" rx="2" />
                      <path d="M3 9h18" />
                    </svg>
                    {project.area}
                  </span>
                  <span className="portfolio-card-meta-item">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10" />
                      <polyline points="12 6 12 12 16 14" />
                    </svg>
                    {project.duration}
                  </span>
                </div>
                <Link href="/contact" className="portfolio-card-link">
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
