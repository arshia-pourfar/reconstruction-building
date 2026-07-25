"use client";

import { useRef, useState, useCallback } from "react";

const materialTags = [
  { id: 1, label: "میکروسمنت", x: "22%", y: "45%" },
  { id: 2, label: "پنل چوبی", x: "68%", y: "55%" },
  { id: 3, label: "نور توکار", x: "78%", y: "30%" },
];

export default function BeforeAfter() {
  const frameRef = useRef<HTMLDivElement>(null);
  const [splitPos, setSplitPos] = useState(50);
  const [isDragging, setIsDragging] = useState(false);

  const updateSplit = useCallback((clientX: number) => {
    if (!frameRef.current) return;
    const rect = frameRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const pct = Math.max(10, Math.min(90, (x / rect.width) * 100));
    setSplitPos(pct);
  }, []);

  const handlePointerDown = useCallback((e: React.PointerEvent) => {
    e.preventDefault();
    setIsDragging(true);
    (e.target as HTMLElement).setPointerCapture(e.pointerId);
    updateSplit(e.clientX);
  }, [updateSplit]);

  const handlePointerMove = useCallback((e: React.PointerEvent) => {
    if (!isDragging) return;
    updateSplit(e.clientX);
  }, [isDragging, updateSplit]);

  const handlePointerUp = useCallback(() => { setIsDragging(false); }, []);

  return (
    <section className="w-full bg-[var(--matte-slate)]" style={{ padding: "var(--section-pad) var(--side-pad)" }}>
      {/* Heading */}
      <div className="flex flex-col items-center max-w-[var(--container-max)] mx-auto" style={{ marginBottom: "var(--heading-gap)" }}>
        <div className="inline-flex items-center h-8 px-[18px] rounded-full mb-6 bg-[var(--matte-slate)]" style={{ border: "1px solid rgba(255,255,255,0.1)" }}>
          <span className="text-xs font-semibold tracking-[1.5px] uppercase text-[var(--oak)]">قبل و بعد</span>
        </div>
        <h2 className="text-[40px] font-semibold leading-[1.15] tracking-tight text-center mb-4" style={{ color: "var(--off-white)" }}>
          مشاهده تحول فضا
        </h2>
      </div>

      {/* Split-view frame */}
      <div
        ref={frameRef}
        className="relative w-full h-[640px] rounded-[20px] overflow-hidden mx-auto cursor-ew-resize select-none max-w-[var(--container-max)]"
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerLeave={handlePointerUp}
      >
        {/* Before side */}
        <div className="absolute inset-0" style={{ clipPath: `inset(0 ${100 - splitPos}% 0 0)`, zIndex: 2 }}>
          <img src="/projects/before-p1.png" alt="قبل از بازسازی" className="absolute inset-0 w-full h-full object-cover object-center" />
          <div className="absolute top-5 left-5 inline-flex items-center gap-1.5 h-8 px-3.5 rounded-full text-xs font-semibold tracking-[1px] uppercase z-[3] backdrop-blur-[8px]" style={{ background: "rgba(0,0,0,0.5)", color: "rgba(246,244,241,0.8)" }}>
            <span>قبل</span>
            <span className="opacity-40">—</span>
            <span>BEFORE</span>
          </div>
        </div>

        {/* After side */}
        <div className="absolute inset-0" style={{ zIndex: 1 }}>
          <img src="/projects/after-p1.png" alt="بعد از بازسازی" className="absolute inset-0 w-full h-full object-cover object-center" />
          <div className="absolute top-5 left-5 inline-flex items-center gap-1.5 h-8 px-3.5 rounded-full text-xs font-semibold tracking-[1px] uppercase z-[3] backdrop-blur-[8px]" style={{ background: "rgba(179,140,96,0.2)", border: "1px solid rgba(179,140,96,0.3)", color: "var(--oak)" }}>
            <span>بعد</span>
            <span className="opacity-40">—</span>
            <span>AFTER</span>
          </div>
        </div>

        {/* Drag handle */}
        <div
          className="absolute top-0 bottom-0 z-10 flex items-center justify-center w-12 cursor-ew-resize"
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
            if (e.key === "ArrowLeft") setSplitPos((p) => Math.max(10, p - 2));
            if (e.key === "ArrowRight") setSplitPos((p) => Math.min(90, p + 2));
          }}
        >
          <div className="absolute top-0 bottom-0 left-1/2 w-0.5 -translate-x-1/2" style={{ background: "rgba(246,244,241,0.6)" }} />
          <div className="relative z-[2] flex items-center justify-center w-[44px] h-[44px] rounded-full transition-all duration-150 bg-[var(--off-white)] text-[var(--matte-slate)] shadow-[0_2px_8px_rgba(0,0,0,0.25),0_0_0_3px_rgba(246,244,241,0.2)] hover:scale-[1.08] hover:shadow-[0_4px_12px_rgba(0,0,0,0.3),0_0_0_4px_rgba(179,140,96,0.35)] focus-visible:scale-[1.08] focus-visible:shadow-[0_4px_12px_rgba(0,0,0,0.3),0_0_0_4px_var(--oak)]">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 3L2 8L5 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M11 3L14 8L11 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>

        {/* Material tags */}
        {materialTags.map((tag) => (
          <div key={tag.id} className="absolute z-[5] flex items-center gap-2 py-2 px-3.5 rounded-full pointer-events-none backdrop-blur-[8px]" style={{ left: tag.x, top: tag.y, background: "rgba(0,0,0,0.55)", border: "1px solid rgba(246,244,241,0.1)", transform: "translate(-50%, -50%)" }}>
            <span className="w-2 h-2 rounded-full shrink-0 bg-[var(--oak)] shadow-[0_0_0_3px_rgba(179,140,96,0.2)]" />
            <span className="text-xs font-medium text-nowrap text-[var(--off-white)]">{tag.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
