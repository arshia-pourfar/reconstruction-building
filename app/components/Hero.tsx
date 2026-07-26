"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import BeforeAfter from "./BeforeAfter";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const items = el.querySelectorAll("[data-anim]");
    gsap.fromTo(
      items,
      { y: 28, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.13,
        ease: "power3.out",
      }
    );
  }, []);

  return (
    <section ref={containerRef} className="relative w-full h-screen overflow-hidden bg-[var(--matte-slate)] group">
      {/* Background gradient */}
      <div className="absolute inset-0 z-0" style={{
        background: "radial-gradient(ellipse 70% 60% at 25% 50%, rgba(179,140,96,0.08), transparent 60%), radial-gradient(ellipse 40% 40% at 80% 30%, rgba(0,0,0,0.3), transparent), linear-gradient(160deg, #2A2520, #1B1D1F 35%, #141516 70%, #0F1011)",
      }} />

      {/* Full-screen before/after slider */}
      <div className="absolute inset-0 z-[1]">
        <BeforeAfter variant="fullscreen" />
      </div>

      {/* Dark gradient overlay for text readability */}
      <div className="absolute inset-0 z-[2]" style={{
        background: "linear-gradient(135deg, rgba(var(--matte-slate-rgb),0.55) 0%, rgba(var(--matte-slate-rgb),0.25) 50%, transparent 80%)",
        pointerEvents: "none",
      }} />

      {/* Text overlay — pointer-events: none so the slider drag handle works through it */}
      <div className="absolute inset-y-0 right-0 z-[3] w-full pointer-events-none flex items-center" style={{ padding: "clamp(32px, 6vw, 80px) clamp(20px, 5vw, 64px)" }}>
        {/* Glass card behind text — fades out on section hover */}
        <div className="absolute -inset-6 rounded-2xl opacity-100 transition-all duration-500 group-hover:opacity-0 pointer-events-none" style={{ background: "rgba(27,29,31,0.35)", backdropFilter: "blur(16px)", WebkitBackdropFilter: "blur(16px)", border: "1px solid rgba(246,244,241,0.08)" }} />
        <div className="max-w-[580px] mr-auto relative">
          <div data-anim className="hero-v2-eyebrow pointer-events-auto" style={{ marginBottom: "16px" }}>
            <span className="hero-v2-eyebrow-dot animate-pulse" />
            <span>بازسازی سه‌بعدی تعاملی</span>
          </div>

          <h1 data-anim className="hero-v2-headline pointer-events-auto" style={{ fontSize: "clamp(32px, 5vw, 56px)", marginBottom: "20px" }}>
            خانه‌ای که همیشه
            <br />
            خواسته‌اید، همین الآن
            <br />
            بسازید
          </h1>

          <p data-anim className="hero-v2-sub pointer-events-auto" style={{ marginBottom: "32px", maxWidth: "420px" }}>
            از طراحی سه‌بعدی تا اجرای نهایی — هر مرحله از بازسازی خانه شما با دقت و هنر تیم ما همراه است.
          </p>

          <div data-anim className="flex items-center gap-4 flex-wrap pointer-events-auto">
            <a href="/projects" className="btn-primary pointer-events-auto" style={{ padding: "0 32px", height: "50px", fontSize: "15px" }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                <circle cx="8.5" cy="8.5" r="1.5" />
                <polyline points="21 15 16 10 5 21" />
              </svg>
              مشاهده پروژه‌ها
            </a>
            <a href="/contact" className="btn-ghost pointer-events-auto" style={{ padding: "0 28px", height: "50px", fontSize: "15px" }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
              </svg>
              مشاوره رایگان
            </a>
          </div>

          <div data-anim className="hero-v2-trust pointer-events-auto" style={{ marginTop: "40px" }}>
            <div className="hero-v2-trust-item">
              <span className="hero-v2-trust-num">۱۵۰+</span>
              <span className="hero-v2-trust-label">پروژه موفق</span>
            </div>
            <div className="hero-v2-trust-sep" />
            <div className="hero-v2-trust-item">
              <span className="hero-v2-trust-num">۱۲</span>
              <span className="hero-v2-trust-label">سال تجربه</span>
            </div>
            <div className="hero-v2-trust-sep" />
            <div className="hero-v2-trust-item">
              <span className="hero-v2-trust-num">۹۸٪</span>
              <span className="hero-v2-trust-label">رضایت مشتری</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-[5] flex flex-col items-center gap-2 pointer-events-none animate-bounce">
        <span className="text-[11px] font-medium tracking-[2px] uppercase" style={{ color: "rgba(var(--off-white-rgb),0.3)" }}>SCROLL</span>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="rgba(var(--off-white-rgb),0.3)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M7 13l5 5 5-5" />
          <path d="M7 6l5 5 5-5" />
        </svg>
      </div>

      {/* Bottom fade for clean transition to next section */}
      <div className="absolute bottom-0 left-0 right-0 h-32 z-[4] pointer-events-none" style={{ background: "linear-gradient(to top, var(--matte-slate), transparent)" }} />
    </section>
  );
}
