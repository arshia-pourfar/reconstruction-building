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
    <section ref={containerRef} className="relative w-full h-screen overflow-hidden bg-[var(--matte-slate)]">
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
        background: "linear-gradient(135deg, rgba(27,29,31,0.55) 0%, rgba(27,29,31,0.25) 50%, transparent 80%)",
        pointerEvents: "none",
      }} />

      {/* Text overlay — pointer-events: none so the slider drag handle works through it */}
      <div className="absolute bottom-0 right-0 z-[3] w-full pointer-events-none" style={{ padding: "clamp(32px, 6vw, 80px) clamp(20px, 5vw, 64px)" }}>
        <div className="max-w-[580px] mr-auto">
          <div data-anim className="hero-v2-eyebrow pointer-events-auto" style={{ marginBottom: "16px" }}>
            <span className="hero-v2-eyebrow-dot animate-pulse" />
            <span>بازسازی سه‌بعدی تعاملی</span>
          </div>

          <h1 data-anim className="hero-v2-headline pointer-events-auto" style={{ fontSize: "clamp(28px, 4.5vw, 52px)", marginBottom: "16px" }}>
            طراحی و بازسازی مدرن
            <br />
            خانه شما
          </h1>

          <p data-anim className="hero-v2-sub pointer-events-auto" style={{ marginBottom: "24px" }}>
            با تجربه اسکرول سه‌بعدی، فضای رویایی خود را زندگی کنید.
          </p>

          <div data-anim className="flex items-center gap-4 flex-wrap pointer-events-auto">
            <a href="/contact" className="hero-v2-cta">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              مشاوره رایگان
            </a>

            <a href="/projects" className="inline-flex items-center gap-2 h-[48px] px-6 text-sm font-medium rounded-full transition-all duration-200 text-white/70 hover:text-white border border-white/[0.12] hover:border-white/25 hover:bg-white/[0.05] pointer-events-auto" style={{ fontFamily: "var(--font-persian)" }}>
              مشاهده پروژه‌ها
            </a>
          </div>

          <div data-anim className="hero-v2-trust pointer-events-auto" style={{ marginTop: "32px" }}>
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

      {/* Bottom fade for clean transition to next section */}
      <div className="absolute bottom-0 left-0 right-0 h-32 z-[4] pointer-events-none" style={{ background: "linear-gradient(to top, var(--matte-slate), transparent)" }} />
    </section>
  );
}
