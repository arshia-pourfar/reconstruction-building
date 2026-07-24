"use client";

import { useRef, useState, useCallback } from "react";

const materialTags = [
  { id: 1, label: "Microcement Wall", x: "22%", y: "45%" },
  { id: 2, label: "Oak Paneling", x: "68%", y: "55%" },
  { id: 3, label: "LED Accent Light", x: "78%", y: "30%" },
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
    <section className="ba-section">
      {/* Heading */}
      <div className="ba-header">
        <div className="ba-eyebrow">
          <span className="ba-eyebrow-text">Before / After</span>
        </div>
        <h2 className="ba-headline">Watch the Metamorphosis</h2>
      </div>

      {/* Split-view frame */}
      <div
        ref={frameRef}
        className="ba-frame"
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerLeave={handlePointerUp}
      >
        {/* Before side (left) — clipped by split position */}
        <div
          className="ba-side ba-side--before"
          style={{ clipPath: `inset(0 ${100 - splitPos}% 0 0)` }}
        >
          <div className="ba-placeholder ba-placeholder--before" />
          <div className="ba-label ba-label--before">
            <span>Raw Structure</span>
            <span className="ba-label-sep">—</span>
            <span>Before</span>
          </div>
        </div>

        {/* After side (right) — full width, behind before */}
        <div className="ba-side ba-side--after">
          <div className="ba-placeholder ba-placeholder--after" />
          <div className="ba-label ba-label--after">
            <span>Luxury Renovation</span>
            <span className="ba-label-sep">—</span>
            <span>After</span>
          </div>
        </div>

        {/* Drag handle line */}
        <div
          className="ba-handle"
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
            if (e.key === "ArrowLeft") setSplitPos((p) => Math.max(10, p - 2));
            if (e.key === "ArrowRight") setSplitPos((p) => Math.min(90, p + 2));
          }}
        >
          <div className="ba-handle-line" />
          <div className="ba-handle-knob">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5 3L2 8L5 13"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M11 3L14 8L11 13"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>

        {/* Material tags */}
        {materialTags.map((tag) => (
          <div
            key={tag.id}
            className="ba-tag"
            style={{ left: tag.x, top: tag.y }}
          >
            <span className="ba-tag-dot" />
            <span className="ba-tag-label">{tag.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
