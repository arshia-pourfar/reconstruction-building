"use client";

import { useState, useMemo, useCallback } from "react";
import Link from "next/link";

const styles = [
  { id: "minimalist", label: "Minimalist", multiplier: 1.0 },
  { id: "modern-luxury", label: "Modern Luxury", multiplier: 1.4 },
  { id: "japandi", label: "Japandi", multiplier: 1.15 },
] as const;

const scopeLabels = [
  "Cosmetic Refresh",
  "Partial Renovation",
  "Full Renovation",
  "Complete Redesign",
];

function formatPrice(n: number): string {
  return "$" + n.toLocaleString("en-US");
}

export default function Calculator() {
  const [area, setArea] = useState(120);
  const [scope, setScope] = useState(2);
  const [styleId, setStyleId] = useState<string>("minimalist");

  const areaPct = ((area - 30) / (300 - 30)) * 100;
  const scopePct = ((scope - 1) / (4 - 1)) * 100;

  const estimate = useMemo(() => {
    const style = styles.find((s) => s.id === styleId) ?? styles[0];
    const basePerSqm = 220;
    const scopeFactor = 0.6 + scope * 0.28;
    const low = Math.round(area * basePerSqm * scopeFactor * style.multiplier);
    const high = Math.round(low * 1.5);
    return { low, high };
  }, [area, scope, styleId]);

  const scopeLabel = scopeLabels[Math.min(scope - 1, scopeLabels.length - 1)];

  const handleAreaChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setArea(Number(e.target.value));
  }, []);

  const handleScopeChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setScope(Number(e.target.value));
  }, []);

  return (
    <section className="calc-section">
      {/* Heading */}
      <div className="calc-header">
        <div className="calc-eyebrow">
          <span className="calc-eyebrow-text">Plan Your Project</span>
        </div>
        <h2 className="calc-headline">Estimate Your Renovation</h2>
      </div>

      {/* Calculator card */}
      <div className="calc-card">
        {/* Left panel — controls */}
        <div className="calc-controls">
          {/* Slider 1: Area Size */}
          <div className="calc-field">
            <div className="calc-field-header">
              <span className="calc-field-label">Area Size</span>
              <span className="calc-field-value">{area} m²</span>
            </div>
            <input
              type="range"
              min={30}
              max={300}
              step={5}
              value={area}
              onChange={handleAreaChange}
              className="calc-slider"
              style={{ "--fill": `${areaPct}%` } as React.CSSProperties}
              aria-label="Area size in square meters"
            />
            <div className="calc-slider-ticks">
              <span>30 m²</span>
              <span>300 m²</span>
            </div>
          </div>

          {/* Slider 2: Scope of Work */}
          <div className="calc-field">
            <div className="calc-field-header">
              <span className="calc-field-label">Scope of Work</span>
              <span className="calc-field-value">{scopeLabel}</span>
            </div>
            <input
              type="range"
              min={1}
              max={4}
              step={1}
              value={scope}
              onChange={handleScopeChange}
              className="calc-slider"
              style={{ "--fill": `${scopePct}%` } as React.CSSProperties}
              aria-label="Scope of work"
            />
            <div className="calc-slider-ticks">
              <span>Cosmetic</span>
              <span>Full Redesign</span>
            </div>
          </div>

          {/* Style selector */}
          <div className="calc-field">
            <span className="calc-field-label calc-field-label--block">Style</span>
            <div className="calc-radios">
              {styles.map((s) => (
                <label
                  key={s.id}
                  className={`calc-radio ${styleId === s.id ? "calc-radio--active" : ""}`}
                >
                  <span className="calc-radio-circle">
                    {styleId === s.id && <span className="calc-radio-dot" />}
                  </span>
                  <input
                    type="radio"
                    name="style"
                    value={s.id}
                    checked={styleId === s.id}
                    onChange={() => setStyleId(s.id)}
                    className="calc-radio-input"
                  />
                  <span className="calc-radio-label">{s.label}</span>
                </label>
              ))}
            </div>
          </div>
        </div>

        {/* Right panel — result */}
        <div className="calc-result">
          <span className="calc-result-label">Estimated Cost Range</span>
          <div className="calc-result-price">
            {formatPrice(estimate.low)} – {formatPrice(estimate.high)}
          </div>
          <p className="calc-result-note">
            Estimate based on average material and labor costs for your region.
            Final pricing confirmed after an on-site consultation.
          </p>
          <Link href="/contact" className="calc-result-cta">
            Book Free Consultation
          </Link>
        </div>
      </div>
    </section>
  );
}
