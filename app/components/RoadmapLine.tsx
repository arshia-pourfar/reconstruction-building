"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const STEPS = [
  { num: "۰۱", title: "ایده و نیازسنجی", desc: "شناخت نیازها، اهداف و تعریف مسیر پروژه." },
  { num: "۰۲", title: "برنامه‌ریزی و طراحی", desc: "تبدیل ایده به یک ساختار دقیق و قابل اجرا." },
  { num: "۰۳", title: "توسعه و اجرا", desc: "ساخت و پیاده‌سازی با تمرکز بر کیفیت و جزئیات." },
  { num: "۰۴", title: "بازبینی و بهینه‌سازی", desc: "بررسی نهایی، رفع جزئیات و بهبود تجربه." },
  { num: "۰۵", title: "تحویل و رشد", desc: "تحویل محصول نهایی و آماده‌سازی برای ادامه مسیر." },
];

export default function RoadmapLine() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    const section = sectionRef.current;
    if (!wrapper || !section) return;

    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const ctx = gsap.context(() => {
      // ── Title entrance ────────────────────────────────
      if (!prefersReduced) {
        gsap.fromTo(section.querySelector(".rm-title"),
          { opacity: 0, y: 30, filter: "blur(6px)" },
          {
            opacity: 1, y: 0, filter: "blur(0px)", duration: 0.9, ease: "power2.out",
            scrollTrigger: { trigger: wrapper, start: "top 85%", toggleActions: "play none none none" },
          },
        );
        gsap.fromTo(section.querySelector(".rm-subtitle"),
          { opacity: 0, y: 20, filter: "blur(4px)" },
          {
            opacity: 1, y: 0, filter: "blur(0px)", duration: 0.8, ease: "power2.out",
            scrollTrigger: { trigger: wrapper, start: "top 80%", toggleActions: "play none none none" },
          },
        );
      } else {
        gsap.set(section.querySelectorAll(".rm-title, .rm-subtitle"), { opacity: 1 });
      }

      // ── Query animated elements ──────────────────────
      const progressLine = section.querySelector(".rm-progress") as HTMLElement;
      const tracer = section.querySelector(".rm-tracer") as HTMLElement;
      const dots = section.querySelectorAll(".rm-dot");
      const glows = section.querySelectorAll(".rm-glow");
      const cards = section.querySelectorAll(".rm-card");
      const nums = section.querySelectorAll(".rm-num");

      if (!progressLine || !tracer) return;

      // ── Pinned timeline ──────────────────────────────
      ScrollTrigger.create({
        trigger: wrapper,
        start: "top top",
        end: "+=250%",
        pin: section,
        scrub: prefersReduced ? false : 1,
        anticipatePin: 1,
        onUpdate(self) {
          const p = self.progress;

          // Progress line + tracer
          const isVertical = window.innerWidth < 768;
          if (isVertical) {
            gsap.set(progressLine, { scaleY: p });
            gsap.set(tracer, { top: `${p * 100}%` });
          } else {
            gsap.set(progressLine, { scaleX: p });
            gsap.set(tracer, { left: `${p * 100}%` });
          }

          // Step activation thresholds
          const thresholds = [0, 0.2, 0.4, 0.6, 0.8];
          dots.forEach((dot, i) => {
            const el = dot as HTMLElement;
            const glow = glows[i] as HTMLElement | undefined;
            const card = cards[i] as HTMLElement | undefined;
            const num = nums[i] as HTMLElement | undefined;
            if (!el) return;

            const t = thresholds[i];
            const reached = p >= t;
            const isPast = p >= (thresholds[i + 1] ?? 1);
            const isCurrent = reached && !isPast;

            // Dot
            if (prefersReduced) {
              gsap.set(el, { opacity: reached ? 1 : 0.25, scale: 1 });
            } else if (isCurrent) {
              gsap.to(el, { scale: 1.15, opacity: 1, duration: 0.35, ease: "back.out(2)" });
            } else if (isPast) {
              gsap.to(el, { scale: 1, opacity: 0.6, duration: 0.25 });
            } else {
              gsap.to(el, { scale: 0.8, opacity: 0.25, duration: 0.25 });
            }

            // Glow
            if (glow) {
              if (isCurrent && !prefersReduced) {
                gsap.to(glow, { scale: 1.5, opacity: 0.3, duration: 0.4, ease: "power2.out" });
              } else {
                gsap.to(glow, { scale: 1, opacity: 0, duration: 0.2 });
              }
            }

            // Number color
            if (num) {
              gsap.to(num, {
                color: reached ? "#6366f1" : "rgba(255,255,255,0.3)",
                duration: 0.25,
              });
            }

            // Card
            if (card) {
              if (prefersReduced) {
                gsap.set(card, { opacity: reached ? 1 : 0.2 });
              } else if (isCurrent) {
                gsap.to(card, { opacity: 1, y: 0, filter: "blur(0px)", scale: 1, duration: 0.55, ease: "power2.out" });
              } else if (isPast) {
                gsap.to(card, { opacity: 0.6, y: 0, filter: "blur(0px)", scale: 1, duration: 0.25 });
              } else {
                gsap.to(card, {
                  opacity: 0.15,
                  y: isVertical ? 0 : 16,
                  x: isVertical ? 20 : 0,
                  filter: "blur(4px)",
                  scale: 0.97,
                  duration: 0.25,
                });
              }
            }
          });
        },
      });
    }, wrapper);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={wrapperRef} className="relative">
      <section
        ref={sectionRef}
        className="h-screen w-full flex flex-col justify-center relative overflow-hidden"
        style={{ background: "linear-gradient(180deg, #0f0f0f 0%, #1a1a1a 100%)" }}
      >
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{
          backgroundImage: "linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }} />

        <div className="container mx-auto px-6 md:px-16 max-w-[1280px] relative z-10">

          {/* ── Header ────────────────────────────────── */}
          <div className="mb-10 md:mb-16 text-center">
            <h2 className="rm-title text-[28px] md:text-[42px] leading-[40px] md:leading-[54px] font-extrabold text-white opacity-0"
              style={{ fontFamily: "Vazirmatn, sans-serif" }}
            >
              نقشه راه تا واقعیت
            </h2>
            <p className="rm-subtitle text-[13px] md:text-[15px] leading-[22px] text-white/35 mt-3 opacity-0 max-w-md mx-auto"
              style={{ fontFamily: "Vazirmatn, sans-serif", fontWeight: 400 }}
            >
              از ایده اولیه تا اجرای نهایی، هر قدم با دقت طراحی می‌شود.
            </p>
          </div>

          {/* ═══════ DESKTOP: Horizontal ═══════════════ */}
          <div className="hidden md:block">
            {/* Track */}
            <div className="relative h-[2px] bg-white/[0.08] mx-10 mb-10">
              <div className="rm-progress absolute top-0 right-0 h-full origin-right"
                style={{
                  background: "linear-gradient(90deg, rgba(99,102,241,0.2), #6366f1)",
                  boxShadow: "0 0 24px rgba(99,102,241,0.35), 0 0 60px rgba(99,102,241,0.1)",
                  transform: "scaleX(0)",
                }}
              />
              <div className="rm-tracer absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-2.5 h-2.5 rounded-full z-10"
                style={{
                  background: "#6366f1",
                  boxShadow: "0 0 14px rgba(99,102,241,0.7), 0 0 36px rgba(99,102,241,0.25)",
                  left: "0%",
                }}
              />
            </div>

            {/* Steps */}
            <div className="grid grid-cols-5 gap-3 px-2">
              {STEPS.map((step, i) => (
                <div key={step.num} className="flex flex-col items-center group">
                  {/* Dot cluster */}
                  <div className="relative mb-5 cursor-default">
                    <div className="rm-glow absolute rounded-full bg-tertiary/25 opacity-0 pointer-events-none"
                      style={{ inset: "-10px" }}
                    />
                    <div className="rm-dot relative w-10 h-10 rounded-full border-2 border-white/15 bg-[#1a1a1a] flex items-center justify-center opacity-25 transition-[border-color,box-shadow] duration-300 group-hover:border-white/30 group-hover:shadow-[0_0_20px_rgba(99,102,241,0.15)]">
                      <span className="rm-num text-[13px] text-white/30 transition-colors duration-300"
                        style={{ fontFamily: "Vazirmatn, sans-serif", fontWeight: 600 }}
                      >
                        {step.num}
                      </span>
                    </div>
                  </div>

                  {/* Card */}
                  <div className="rm-card text-center opacity-15 px-1.5 transition-[transform,border-color] duration-300 group-hover:scale-[1.02]">
                    <div className="rounded-xl p-4 border border-white/[0.06] group-hover:border-white/[0.12]"
                      style={{
                        background: "rgba(255,255,255,0.03)",
                        backdropFilter: "blur(10px)",
                      }}
                    >
                      <h3 className="text-[14px] md:text-[15px] leading-[22px] font-bold text-white mb-1"
                        style={{ fontFamily: "Vazirmatn, sans-serif" }}
                      >
                        {step.title}
                      </h3>
                      <p className="text-[11px] md:text-[12px] leading-[18px] text-white/35"
                        style={{ fontFamily: "Vazirmatn, sans-serif", fontWeight: 400 }}
                      >
                        {step.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ═══════ MOBILE: Vertical ══════════════════ */}
          <div className="md:hidden">
            <div className="relative flex">
              {/* Vertical track */}
              <div className="relative w-[2px] bg-white/[0.08] mr-5 flex-shrink-0">
                <div className="rm-progress absolute top-0 left-0 w-full origin-top"
                  style={{
                    height: "100%",
                    background: "linear-gradient(180deg, rgba(99,102,241,0.2), #6366f1)",
                    boxShadow: "0 0 14px rgba(99,102,241,0.35)",
                    transform: "scaleY(0)",
                  }}
                />
                <div className="rm-tracer absolute left-1/2 -translate-x-1/2 w-2 h-2 rounded-full z-10"
                  style={{
                    background: "#6366f1",
                    boxShadow: "0 0 12px rgba(99,102,241,0.7)",
                    top: "0%",
                  }}
                />
              </div>

              {/* Steps */}
              <div className="flex flex-col gap-9 py-1">
                {STEPS.map((step, i) => (
                  <div key={step.num} className="flex items-start gap-4 group">
                    {/* Dot */}
                    <div className="relative flex-shrink-0 mt-1.5 cursor-default">
                      <div className="rm-glow absolute rounded-full bg-tertiary/25 opacity-0 pointer-events-none"
                        style={{ inset: "-8px" }}
                      />
                      <div className="rm-dot relative w-8 h-8 rounded-full border-2 border-white/15 bg-[#1a1a1a] flex items-center justify-center opacity-25 transition-[border-color] duration-300 group-hover:border-white/30">
                        <span className="rm-num text-[11px] text-white/30 transition-colors duration-300"
                          style={{ fontFamily: "Vazirmatn, sans-serif", fontWeight: 600 }}
                        >
                          {step.num}
                        </span>
                      </div>
                    </div>

                    {/* Card */}
                    <div className="rm-card opacity-15 flex-1 transition-[transform,border-color] duration-300 group-hover:scale-[1.01]">
                      <div className="rounded-xl p-3.5 border border-white/[0.06] group-hover:border-white/[0.12]"
                        style={{
                          background: "rgba(255,255,255,0.03)",
                          backdropFilter: "blur(10px)",
                        }}
                      >
                        <h3 className="text-[14px] leading-[22px] font-bold text-white mb-0.5"
                          style={{ fontFamily: "Vazirmatn, sans-serif" }}
                        >
                          {step.title}
                        </h3>
                        <p className="text-[11px] leading-[17px] text-white/35"
                          style={{ fontFamily: "Vazirmatn, sans-serif", fontWeight: 400 }}
                        >
                          {step.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
