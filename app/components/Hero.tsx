"use client";

import { useState } from "react";

const pins = [
  { id: 1, label: "Oak Console Table", x: "28%", y: "58%" },
  { id: 2, label: "Bouclé Sofa", x: "55%", y: "65%" },
  { id: 3, label: "Matte Pendant Light", x: "42%", y: "32%" },
];

const controls = ["360°", "Day/Night", "Materials", "Fullscreen"];

export default function Hero() {
  const [activePin, setActivePin] = useState<number | null>(null);

  return (
    <section className="hero">
      {/* Eyebrow */}
      <div className="hero-eyebrow">
        <span className="hero-eyebrow-text">Interactive 3D Renovation Studio</span>
      </div>

      {/* Headline */}
      <h1 className="hero-headline">
        Transforming Spaces
        <br />
        into 3D Reality
      </h1>

      {/* Subheadline */}
      <p className="hero-sub">
        Scroll to experience interactive, real-time home renovation.
      </p>

      {/* CTA */}
      <button className="hero-cta">
        <svg
          className="hero-cta-icon"
          width="14"
          height="14"
          viewBox="0 0 14 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M3 1.5L12 7L3 12.5V1.5Z" fill="currentColor" />
        </svg>
        Start 3D Tour
      </button>

      {/* Render Frame */}
      <div className="render-frame">
        {/* Placeholder gradient simulating a living room render */}
        <div className="render-placeholder" />

        {/* Top-left label */}
        <div className="render-label">
          <span>Living Room</span>
          <span className="render-label-sep">—</span>
          <span>Real-Time 3D Render</span>
        </div>

        {/* Top-right camera icon */}
        <button className="render-camera" aria-label="Rotate camera">
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
            <circle cx="12" cy="13" r="4" />
          </svg>
        </button>

        {/* Floating pins */}
        {pins.map((pin) => (
          <button
            key={pin.id}
            className={`render-pin ${activePin === pin.id ? "render-pin--active" : ""}`}
            style={{ left: pin.x, top: pin.y }}
            onMouseEnter={() => setActivePin(pin.id)}
            onMouseLeave={() => setActivePin(null)}
            aria-label={pin.label}
          >
            <span className="render-pin-dot" />
            <span className="render-pin-label">{pin.label}</span>
          </button>
        ))}

        {/* Bottom control bar */}
        <div className="render-controls">
          {controls.map((ctrl) => (
            <button key={ctrl} className="render-control-pill">
              {ctrl}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
