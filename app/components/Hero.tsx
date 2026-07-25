"use client";

import { useRef, useState, useCallback } from "react";

export default function Hero() {
  const frameRef = useRef<HTMLDivElement>(null);
  const [splitPos, setSplitPos] = useState(50);
  const [isDragging, setIsDragging] = useState(false);

  const updateSplit = useCallback((clientX: number) => {
    if (!frameRef.current) return;
    const rect = frameRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const pct = Math.max(8, Math.min(92, (x / rect.width) * 100));
    setSplitPos(pct);
  }, []);

  const handlePointerDown = useCallback(
    (e: React.PointerEvent) => {
      e.preventDefault();
      setIsDragging(true);
      (e.target as HTMLElement).setPointerCapture(e.pointerId);
      updateSplit(e.clientX);
    },
    [updateSplit],
  );

  const handlePointerMove = useCallback(
    (e: React.PointerEvent) => {
      if (!isDragging) return;
      updateSplit(e.clientX);
    },
    [isDragging, updateSplit],
  );

  const handlePointerUp = useCallback(() => {
    setIsDragging(false);
  }, []);

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
        <div
          ref={frameRef}
          className="relative flex-[1.1] min-w-0 h-[480px] rounded-[20px] overflow-hidden cursor-ew-resize select-none"
          style={{ border: "1px solid rgba(246,244,241,0.08)" }}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onPointerLeave={handlePointerUp}
        >
          {/* Before side */}
          <div
            className="absolute inset-0"
            style={{ clipPath: `inset(0 ${100 - splitPos}% 0 0)`, zIndex: 2 }}
          >
            <img
              src="/projects/before-p1.png"
              alt="قبل از بازسازی"
              className="absolute inset-0 w-full h-full object-cover object-center"
            />
            <div className="absolute bottom-4 left-4 inline-flex items-center gap-1.5 h-[30px] px-3.5 rounded-full text-[11px] font-bold tracking-[1.5px] z-[3] backdrop-blur-[8px]" style={{ background: "rgba(0,0,0,0.5)", color: "rgba(246,244,241,0.8)" }}>
              <span>قبل</span>
              <span className="opacity-40">—</span>
              <span>BEFORE</span>
            </div>
          </div>

          {/* After side */}
          <div className="absolute inset-0" style={{ zIndex: 1 }}>
            <img
              src="/projects/after-p1.png"
              alt="بعد از بازسازی"
              className="absolute inset-0 w-full h-full object-cover object-center"
            />
            <div className="absolute bottom-4 right-4 inline-flex items-center gap-1.5 h-[30px] px-3.5 rounded-full text-[11px] font-bold tracking-[1.5px] z-[3] backdrop-blur-[8px]" style={{ background: "rgba(179,140,96,0.2)", border: "1px solid rgba(179,140,96,0.3)", color: "var(--oak)" }}>
              <span>بعد</span>
              <span className="opacity-40">—</span>
              <span>AFTER</span>
            </div>
          </div>

          {/* Drag handle */}
          <div
            className="absolute top-0 bottom-0 z-10 flex items-center justify-center w-11 cursor-ew-resize"
            style={{ left: `${splitPos}%`, transform: "translateX(-50%)" }}
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={handlePointerUp}
            role="slider"
            aria-label="Before/after split position"
            aria-valuemin={0}
            aria-valuemax={100}
            aria-valuenow={Math.round(splitPos)}
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === "ArrowLeft") setSplitPos((p) => Math.max(8, p - 2));
              if (e.key === "ArrowRight") setSplitPos((p) => Math.min(92, p + 2));
            }}
          >
            <div className="absolute top-0 bottom-0 left-1/2 w-0.5 -translate-x-1/2" style={{ background: "rgba(246,244,241,0.5)" }} />
            <div className="relative z-[2] flex items-center justify-center w-[42px] h-[42px] rounded-full transition-all duration-150 bg-[var(--off-white)] text-[var(--matte-slate)] shadow-[0_2px_10px_rgba(0,0,0,0.3),0_0_0_3px_rgba(246,244,241,0.15)] hover:scale-[1.08] hover:shadow-[0_4px_14px_rgba(0,0,0,0.35),0_0_0_4px_rgba(179,140,96,0.3)] focus-visible:scale-[1.08] focus-visible:shadow-[0_4px_14px_rgba(0,0,0,0.35),0_0_0_4px_var(--oak)]">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 3L2 8L5 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M11 3L14 8L11 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </div>

          {/* Material tags */}
          <div className="absolute z-[5] flex items-center gap-1.5 py-1.5 px-3 rounded-full pointer-events-none backdrop-blur-[8px]" style={{ left: "22%", top: "45%", background: "rgba(0,0,0,0.5)", border: "1px solid rgba(246,244,241,0.1)", transform: "translate(-50%, -50%)" }}>
            <span className="w-[7px] h-[7px] rounded-full shrink-0 bg-[var(--oak)] shadow-[0_0_0_3px_rgba(179,140,96,0.2)]" />
            <span className="text-[11px] font-medium text-nowrap text-[var(--off-white)]">میکروسمنت</span>
          </div>
          <div className="absolute z-[5] flex items-center gap-1.5 py-1.5 px-3 rounded-full pointer-events-none backdrop-blur-[8px]" style={{ left: "68%", top: "55%", background: "rgba(0,0,0,0.5)", border: "1px solid rgba(246,244,241,0.1)", transform: "translate(-50%, -50%)" }}>
            <span className="w-[7px] h-[7px] rounded-full shrink-0 bg-[var(--oak)] shadow-[0_0_0_3px_rgba(179,140,96,0.2)]" />
            <span className="text-[11px] font-medium text-nowrap text-[var(--off-white)]">پنل چوبی</span>
          </div>
          <div className="absolute z-[5] flex items-center gap-1.5 py-1.5 px-3 rounded-full pointer-events-none backdrop-blur-[8px]" style={{ left: "78%", top: "30%", background: "rgba(0,0,0,0.5)", border: "1px solid rgba(246,244,241,0.1)", transform: "translate(-50%, -50%)" }}>
            <span className="w-[7px] h-[7px] rounded-full shrink-0 bg-[var(--oak)] shadow-[0_0_0_3px_rgba(179,140,96,0.2)]" />
            <span className="text-[11px] font-medium text-nowrap text-[var(--off-white)]">نور توکار</span>
          </div>
        </div>
      </div>
    </section>
  );
}
