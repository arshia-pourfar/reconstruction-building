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
    <section className="hero-v2">
      {/* Dark background */}
      <div className="hero-v2-bg" />

      {/* Content — left text + right slider */}
      <div className="hero-v2-inner">
        {/* Left: text */}
        <div className="hero-v2-content">
          <div className="hero-v2-eyebrow">
            <span className="hero-v2-eyebrow-dot" />
            <span>بازسازی سه‌بعدی تعاملی</span>
          </div>

          <h1 className="hero-v2-headline">
            طراحی و بازسازی مدرن
            <br />
            خانه شما
          </h1>

          <p className="hero-v2-sub">
            با تجربه اسکرول سه‌بعدی، فضای رویایی خود را زندگی کنید.
          </p>

          <a href="/contact" className="hero-v2-cta">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
            مشاوره رایگان
          </a>

          <div className="hero-v2-trust">
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

        {/* Right: Before/After slider */}
        <div
          ref={frameRef}
          className="hero-v2-slider"
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onPointerLeave={handlePointerUp}
        >
          {/* Before side */}
          <div
            className="hero-v2-side hero-v2-side--before"
            style={{ clipPath: `inset(0 ${100 - splitPos}% 0 0)` }}
          >
            <img
              src="/projects/before-p1.png"
              alt="قبل از بازسازی"
              className="hero-v2-side-img"
            />
            <div className="hero-v2-label hero-v2-label--before">
              <span>قبل</span>
              <span className="hero-v2-label-sep">—</span>
              <span>BEFORE</span>
            </div>
          </div>

          {/* After side */}
          <div className="hero-v2-side hero-v2-side--after">
            <img
              src="/projects/after-p1.png"
              alt="بعد از بازسازی"
              className="hero-v2-side-img"
            />
            <div className="hero-v2-label hero-v2-label--after">
              <span>بعد</span>
              <span className="hero-v2-label-sep">—</span>
              <span>AFTER</span>
            </div>
          </div>

          {/* Drag handle */}
          <div
            className="hero-v2-handle"
            style={{ left: `${splitPos}%` }}
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
            <div className="hero-v2-handle-line" />
            <div className="hero-v2-handle-knob">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 3L2 8L5 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M11 3L14 8L11 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </div>

          {/* Material tags */}
          <div className="hero-v2-tag" style={{ left: "22%", top: "45%" }}>
            <span className="hero-v2-tag-dot" />
            <span className="hero-v2-tag-label">میکروسمنت</span>
          </div>
          <div className="hero-v2-tag" style={{ left: "68%", top: "55%" }}>
            <span className="hero-v2-tag-dot" />
            <span className="hero-v2-tag-label">پنل چوبی</span>
          </div>
          <div className="hero-v2-tag" style={{ left: "78%", top: "30%" }}>
            <span className="hero-v2-tag-dot" />
            <span className="hero-v2-tag-label">نور توکار</span>
          </div>
        </div>
      </div>
    </section>
  );
}
