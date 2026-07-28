"use client";

import { useEffect, useRef, useMemo, useCallback } from "react";
import gsap from "gsap";
import BeforeAfter from "./BeforeAfter";

interface Brick {
  id: number; row: number; col: number;
  delay: number; fallY: number; rot: number; drift: number;
}

export default function Hero() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const glassRef = useRef<HTMLDivElement>(null);
  const triggeredRef = useRef<Set<number>>(new Set());
  const cascadingRef = useRef(false);
  const glassHiddenRef = useRef(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const items = el.querySelectorAll("[data-anim]");
    gsap.fromTo(items, { y: 28, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, stagger: 0.13, ease: "power3.out" });
  }, []);

  const bricks = useMemo(() => {
    const hash = (n: number) => { const x = Math.sin(n * 9301 + 49297) * 49297; return x - Math.floor(x); };
    const items: Brick[] = [];
    const cols = 10, rows = 14;
    for (let r = 0; r < rows; r++)
      for (let c = 0; c < cols; c++) {
        const s = r * cols + c;
        items.push({ id: s, row: r, col: c, delay: r * 0.035 + c * 0.015 + hash(s + 1) * 0.06, fallY: 100 + hash(s + 2) * 140, rot: (hash(s + 3) - 0.5) * 14, drift: (hash(s + 4) - 0.5) * 50 });
      }
    return items;
  }, []);

  const fallBrick = useCallback((el: Element, b: Brick, dur: number, d: number) => {
    gsap.set(el, { transformOrigin: "50% 100%" });
    gsap.to(el, {
      y: b.fallY, x: b.drift, rotation: b.rot + (Math.random() - 0.5) * 6,
      scaleX: 0.6 + Math.random() * 0.6,
      opacity: 0, duration: dur, delay: d,
      ease: "power2.in",
    });
  }, []);

  const hideGlass = useCallback(() => {
    if (glassHiddenRef.current || !glassRef.current) return;
    glassHiddenRef.current = true;
    gsap.to(glassRef.current, { opacity: 0, filter: "blur(20px)", duration: 1.2, ease: "power2.out", delay: 0.4 });
  }, []);

  const handlePointerMove = useCallback((e: React.PointerEvent) => {
    if (cascadingRef.current) return;
    const grid = gridRef.current;
    if (!grid) return;
    const rect = grid.getBoundingClientRect();
    const mx = ((e.clientX - rect.left) / rect.width) * 10;
    const my = ((e.clientY - rect.top) / rect.height) * 14;
    const radius = 2.8;
    const total = 140;

    for (const b of bricks) {
      if (triggeredRef.current.has(b.id)) continue;
      const dist = Math.sqrt((b.col - mx) ** 2 + (b.row - my) ** 2);
      if (dist >= radius) continue;
      triggeredRef.current.add(b.id);
      const el = grid.querySelector(`[data-brick="${b.id}"]`);
      if (el) fallBrick(el, b, 0.8, b.delay * 0.4);
    }

    if (!cascadingRef.current && triggeredRef.current.size >= total * 0.55) {
      cascadingRef.current = true;
      for (const b of bricks) {
        if (triggeredRef.current.has(b.id)) continue;
        triggeredRef.current.add(b.id);
        const el = grid.querySelector(`[data-brick="${b.id}"]`);
        if (el) fallBrick(el, b, 1.0, 0.05 + b.row * 0.03 + Math.random() * 0.08);
      }
      hideGlass();
    }
  }, [bricks, fallBrick, hideGlass]);

  return (
    <section ref={sectionRef} className="relative w-full h-screen overflow-hidden bg-(--matte-slate) group" onPointerMove={handlePointerMove}>
      {/* Background gradient */}
      <div className="absolute inset-0 z-0" style={{
        background: "radial-gradient(ellipse 70% 60% at 25% 50%, rgba(179,140,96,0.08), transparent 60%), radial-gradient(ellipse 40% 40% at 80% 30%, rgba(0,0,0,0.3), transparent), linear-gradient(160deg, #2A2520, #1B1D1F 35%, #141516 70%, #0F1011)",
      }} />

      {/* Full-screen before/after slider */}
      <div className="absolute inset-0 z-1">
        <BeforeAfter variant="fullscreen" />
      </div>

      {/* Dark gradient overlay for text readability */}
      <div className="absolute inset-0 z-2" style={{
        background: "linear-gradient(135deg, rgba(var(--matte-slate-rgb),0.55) 0%, rgba(var(--matte-slate-rgb),0.25) 50%, transparent 80%)",
        pointerEvents: "none",
      }} />

      {/* Text overlay */}
      <div className="absolute inset-y-0 right-0 z-3 w-full pointer-events-none flex items-center" style={{ padding: "clamp(32px, 6vw, 80px) clamp(20px, 5vw, 64px)" }}>
        {/* Brick wall */}
        <div ref={glassRef} className="absolute -inset-6 rounded-2xl overflow-hidden pointer-events-none" style={{ background: "rgba(27,29,31,0.35)", backdropFilter: "blur(16px)", WebkitBackdropFilter: "blur(16px)" }}>
          <div ref={gridRef} className="absolute inset-0 grid" style={{ gridTemplateColumns: "repeat(10,1fr)", gridTemplateRows: "repeat(14,1fr)" }}>
            {bricks.map((b) => (
              <div key={b.id} data-brick={b.id}
                style={{ gridColumn: b.col + 1, gridRow: b.row + 1, background: "rgba(246,244,241,0.06)", border: "1px solid rgba(246,244,241,0.04)", borderRadius: "2px" }}
              />
            ))}
          </div>
        </div>
        <div className="max-w-145 mr-auto relative" style={{ direction: "rtl" }}>
          <div data-anim className="hero-v2-eyebrow pointer-events-auto" style={{ marginBottom: "16px" }}>
            <span className="hero-v2-eyebrow-dot animate-pulse" />
            <span>بازسازی سه‌بعدی تعاملی</span>
          </div>
          <h1 data-anim className="hero-v2-headline pointer-events-auto" style={{ fontSize: "clamp(32px, 5vw, 56px)", marginBottom: "20px" }}>
            خانه‌ای که همیشه<br />خواسته‌اید، همین الآن<br />بسازید
          </h1>
          <p data-anim className="hero-v2-sub pointer-events-auto" style={{ marginBottom: "32px", maxWidth: "420px" }}>
            از طراحی سه‌بعدی تا اجرای نهایی — هر مرحله از بازسازی خانه شما با دقت و هنر تیم ما همراه است.
          </p>
          <div data-anim className="flex items-center gap-4 flex-wrap pointer-events-auto">
            <a href="/projects" className="btn-primary pointer-events-auto" style={{ padding: "0 32px", height: "50px", fontSize: "15px" }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2" /><circle cx="8.5" cy="8.5" r="1.5" /><polyline points="21 15 16 10 5 21" /></svg>
              مشاهده پروژه‌ها
            </a>
            <a href="/contact" className="btn-ghost pointer-events-auto" style={{ padding: "0 28px", height: "50px", fontSize: "15px" }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /></svg>
              مشاوره رایگان
            </a>
          </div>
          <div data-anim className="hero-v2-trust pointer-events-auto" style={{ marginTop: "40px" }}>
            <div className="hero-v2-trust-item"><span className="hero-v2-trust-num">۱۵۰+</span><span className="hero-v2-trust-label">پروژه موفق</span></div>
            <div className="hero-v2-trust-sep" />
            <div className="hero-v2-trust-item"><span className="hero-v2-trust-num">۱۲</span><span className="hero-v2-trust-label">سال تجربه</span></div>
            <div className="hero-v2-trust-sep" />
            <div className="hero-v2-trust-item"><span className="hero-v2-trust-num">۹۸٪</span><span className="hero-v2-trust-label">رضایت مشتری</span></div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="scroll-guide absolute bottom-10 left-1/2 -translate-x-1/2 z-5 flex flex-col items-center gap-3 pointer-events-none">
        <svg width="22" height="34" viewBox="0 0 22 34" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ opacity: 0.3 }}>
          <rect x="1.5" y="1.5" width="19" height="31" rx="9.5" stroke="rgba(var(--off-white-rgb),1)" strokeWidth="2" />
          <circle className="scroll-wheel" cx="11" cy="10" r="2.5" fill="rgba(var(--off-white-rgb),1)" />
        </svg>
        <span className="text-[10px] font-semibold tracking-[3px] uppercase" style={{ color: "rgba(var(--off-white-rgb),0.25)" }}>SCROLL</span>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 z-4 pointer-events-none" style={{ background: "linear-gradient(to top, var(--matte-slate), transparent)" }} />
    </section>
  );
}
