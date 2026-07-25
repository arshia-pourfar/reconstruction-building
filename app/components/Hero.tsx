"use client";

import BeforeAfter from "./BeforeAfter";

export default function Hero() {
  return (
    <section className="relative w-full h-screen flex items-center overflow-hidden bg-[var(--matte-slate)] pt-20">
      {/* Dark background */}
      <div className="absolute inset-0 z-0" style={{ background: "radial-gradient(ellipse 80% 60% at 30% 50%, rgba(179,140,96,0.06), transparent 60%), radial-gradient(ellipse 50% 40% at 80% 30%, rgba(60,55,50,0.1), transparent), linear-gradient(160deg, #2A2520, #1B1D1F 35%, #141516 70%, #0F1011)" }} />

      {/* Content */}
      <div className="relative z-[2] flex items-center w-full h-full mx-auto gap-12 max-w-[var(--container-max)] px-0" style={{ padding: "0 var(--side-pad)" }}>
        {/* Left: text */}
        <div className="flex flex-col items-start flex-1 min-w-0">
          <div className="inline-flex items-center gap-2 h-9 px-[18px] rounded-full mb-7" style={{ background: "rgba(179,140,96,0.12)", border: "1px solid rgba(179,140,96,0.2)" }}>
            <span className="w-2 h-2 rounded-full bg-[var(--oak)] animate-[pulse-dot_2s_ease-in-out_infinite]" />
            <span className="text-[13px] font-medium text-[var(--oak)] font-[var(--font-persian)]">بازسازی سه‌بعدی تعاملی</span>
          </div>

          <h1 className="text-[48px] font-bold leading-[1.2] tracking-tight m-0 mb-5 text-[var(--off-white)]">
            طراحی و بازسازی مدرن
            <br />
            خانه شما
          </h1>

          <p className="text-base font-normal leading-[1.7] m-0 mb-8 max-w-[380px]" style={{ color: "rgba(246,244,241,0.55)" }}>
            با تجربه اسکرول سه‌بعدی، فضای رویایی خود را زندگی کنید.
          </p>

          <a href="/contact" className="inline-flex items-center justify-center gap-2.5 h-[52px] px-9 text-base font-semibold rounded-full cursor-pointer transition-all duration-200 font-[var(--font-persian)] text-white bg-[var(--blue-cta)] border-none hover:bg-[var(--blue-cta-hover)] hover:-translate-y-0.5 hover:shadow-[0_8px_32px_rgba(37,99,235,0.35)] active:translate-y-0 active:shadow-none focus-visible:outline-2 focus-visible:outline-[var(--blue-cta)] focus-visible:outline-offset-3">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
            مشاوره رایگان
          </a>

          <div className="flex items-center gap-6 mt-10">
            <div className="flex flex-col gap-1">
              <span className="text-[22px] font-bold text-[var(--off-white)]">۱۵۰+</span>
              <span className="text-xs font-normal" style={{ color: "rgba(246,244,241,0.4)" }}>پروژه موفق</span>
            </div>
            <div className="w-px h-8" style={{ background: "rgba(246,244,241,0.12)" }} />
            <div className="flex flex-col gap-1">
              <span className="text-[22px] font-bold text-[var(--off-white)]">۱۲</span>
              <span className="text-xs font-normal" style={{ color: "rgba(246,244,241,0.4)" }}>سال تجربه</span>
            </div>
            <div className="w-px h-8" style={{ background: "rgba(246,244,241,0.12)" }} />
            <div className="flex flex-col gap-1">
              <span className="text-[22px] font-bold text-[var(--off-white)]">۹۸٪</span>
              <span className="text-xs font-normal" style={{ color: "rgba(246,244,241,0.4)" }}>رضایت مشتری</span>
            </div>
          </div>
        </div>

        {/* Right: Before/After slider */}
        <div className="flex-[1.6] min-w-0 ">
          <BeforeAfter variant="hero" />
        </div>
      </div>
    </section>
  );
}
