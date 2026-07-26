"use client";

import Image from "next/image";
import { useRef, useState, useCallback } from "react";

interface BeforeAfterProps {
  beforeSrc?: string;
  afterSrc?: string;
  beforeAlt?: string;
  afterAlt?: string;
  tags?: { label: string; x: string; y: string }[];
  height?: string;
  radius?: string;
  border?: string;
  variant?: "hero" | "standalone" | "fullscreen";
}

const defaultTags = [
  { label: "میکروسمنت", x: "22%", y: "45%" },
  { label: "پنل چوبی", x: "68%", y: "55%" },
  { label: "نور توکار", x: "78%", y: "30%" },
];

export default function BeforeAfter({
  beforeSrc = "/projects/before-p1.png",
  afterSrc = "/projects/after-p1.png",
  beforeAlt = "قبل از بازسازی",
  afterAlt = "بعد از بازسازی",
  tags = defaultTags,
  height = "480px",
  radius = "20px",
  border,
  variant = "hero",
}: BeforeAfterProps) {
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

  const handlePointerUp = useCallback(() => setIsDragging(false), []);

  const isHero = variant === "hero";
  const isFullscreen = variant === "fullscreen";
  const tagSize = isHero || isFullscreen ? "text-[11px] py-1.5 px-3 gap-1.5 h-auto" : "text-xs py-2 px-3.5 gap-2";
  const dotSize = isHero || isFullscreen ? "w-[7px] h-[7px]" : "w-2 h-2";
  const labelHeight = isHero || isFullscreen ? "h-[30px]" : "h-8";
  const labelText = isHero || isFullscreen ? "text-[11px] font-bold tracking-[1.5px]" : "text-xs font-semibold tracking-[1px]";

  const handleWidth = isHero ? "44px" : "48px";
  const displayTags = isFullscreen ? [] : tags;
  const effectiveHeight = isFullscreen ? "100%" : height;
  const effectiveRadius = isFullscreen ? "0" : radius;
  const effectiveBorder = isFullscreen ? "none" : (border || "1px solid rgba(246,244,241,0.08)");
  const labelPos = isFullscreen ? "absolute bottom-6" : (isHero ? "absolute bottom-4" : "absolute top-5");
  const labelBeforePos = isFullscreen
    ? "right-[calc(50%+12px)]"
    : (isHero ? "right-4" : "right-5");
  const labelAfterPos = isFullscreen
    ? "left-[calc(50%+12px)]"
    : (isHero ? "left-4" : "left-5");

  return (
    <div
      ref={frameRef}
      className="relative w-full overflow-hidden cursor-ew-resize select-none"
      style={{
        height: effectiveHeight,
        borderRadius: effectiveRadius,
        border: effectiveBorder,
      }}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerLeave={handlePointerUp}
    >
      {/* Before side — on the right in RTL */}
      <div
        className="absolute inset-0"
        style={{
          clipPath: `inset(0 0 0 ${splitPos}%)`,
          zIndex: 2,
        }}
      >
        <Image
          src={beforeSrc}
          alt={beforeAlt}
          fill
          sizes="100%"
          className="object-cover object-center"
          priority={isFullscreen}
        />
        <div
          className={`${labelPos} ${labelBeforePos} inline-flex items-center gap-1.5 ${labelHeight} px-3.5 rounded-full ${labelText} z-[3] backdrop-blur-[8px]`}
          style={{ background: "rgba(0,0,0,0.5)", color: "rgba(246,244,241,0.8)" }}
        >
          <span>قبل</span>
          <span className="opacity-40">—</span>
          <span>BEFORE</span>
        </div>
      </div>

      {/* After side — on the left in RTL */}
      <div className="absolute inset-0" style={{ zIndex: 1 }}>
        <Image
          src={afterSrc}
          alt={afterAlt}
          fill
          sizes="100%"
          className="object-cover object-center"
          priority={isFullscreen}
        />
        <div
          className={`${labelPos} ${labelAfterPos} inline-flex items-center gap-1.5 ${labelHeight} px-3.5 rounded-full ${labelText} z-[3] backdrop-blur-[8px]`}
          style={{
            background: "rgba(179,140,96,0.2)",
            border: "1px solid rgba(179,140,96,0.3)",
            color: "var(--oak)",
          }}
        >
          <span>بعد</span>
          <span className="opacity-40">—</span>
          <span>AFTER</span>
        </div>
      </div>

      {/* Drag handle — positioned from the right in RTL */}
      <div
        className="absolute top-0 bottom-0 z-999 flex items-center justify-center cursor-ew-resize"
        style={{
          right: `${splitPos}%`,
          transform: "translateX(-50%)",
          width: handleWidth,
        }}
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
          if (e.key === "ArrowLeft") setSplitPos((p) => Math.min(90, p + 2));
          if (e.key === "ArrowRight") setSplitPos((p) => Math.max(10, p - 2));
        }}
      >
        <div
          className="absolute top-0 bottom-0 left-1/2 w-0.5 -translate-x-1/2"
          style={{ background: "rgba(246,244,241,0.4)" }}
        />
        <div
          className="relative z-[2] flex items-center justify-center rounded-full transition-all duration-150 bg-[var(--off-white)] text-[var(--matte-slate)] hover:scale-[1.08] focus-visible:scale-[1.08]"
          style={{
            width: isHero || isFullscreen ? "40px" : "44px",
            height: isHero || isFullscreen ? "40px" : "44px",
            boxShadow: "0 2px 10px rgba(0,0,0,0.3),0 0 0 3px rgba(246,244,241,0.12)",
          }}
        >
          <svg width="15" height="15" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5 3L2 8L5 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M11 3L14 8L11 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>

      {/* Material tags (hidden in fullscreen) — x mirrored for RTL */}
      {displayTags.map((tag, i) => {
        const tagPct = parseFloat(tag.x);
        return (
        <div
          key={i}
          className={`absolute z-[5] flex items-center ${tagSize} rounded-full pointer-events-none backdrop-blur-[8px]`}
          style={{
            left: `${100 - tagPct}%`,
            top: tag.y,
            background: "rgba(0,0,0,0.5)",
            border: "1px solid rgba(246,244,241,0.1)",
            transform: "translate(-50%, -50%)",
          }}
        >
          <span className={`${dotSize} rounded-full shrink-0 bg-[var(--oak)] shadow-[0_0_0_3px_rgba(179,140,96,0.2)]`} />
          <span className="text-nowrap text-[var(--off-white)]">{tag.label}</span>
        </div>
        );
      })}
    </div>
  );
}
