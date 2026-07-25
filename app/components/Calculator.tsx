"use client";

import { useState, useMemo, useCallback } from "react";

const styles = [
  { id: "minimalist", label: "مینیمال", multiplier: 1.0 },
  { id: "modern-luxury", label: "لوکس مدرن", multiplier: 1.4 },
  { id: "japandi", label: "جاپندی", multiplier: 1.15 },
] as const;

const scopeLabels = [
  "ترمیم جزئی",
  "بازسازی نیمه",
  "بازسازی کامل",
  "طراحی مجدد",
];

function formatPrice(n: number): string {
  return n.toLocaleString("fa-IR") + " تومان";
}

export default function Calculator() {
  const [area, setArea] = useState(120);
  const [scope, setScope] = useState(2);
  const [styleId, setStyleId] = useState<string>("minimalist");

  const areaPct = ((area - 30) / (300 - 30)) * 100;
  const scopePct = ((scope - 1) / (4 - 1)) * 100;

  const estimate = useMemo(() => {
    const style = styles.find((s) => s.id === styleId) ?? styles[0];
    const basePerSqm = 2200000;
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
        <div className="eyebrow">
          <span className="eyebrow-text">تخمین هزینه</span>
        </div>
        <h2 className="section-headline">برآورد هزینه بازسازی</h2>
      </div>

      {/* Calculator card */}
      <div className="calc-card">
        {/* Left panel — controls */}
        <div className="calc-controls">
          {/* Slider 1: Area Size */}
          <div className="calc-field">
            <div className="calc-field-header">
              <span className="calc-field-label">متراژ فضا</span>
              <span className="calc-field-value">{area} متر مربع</span>
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
              aria-label="متراژ فضا"
            />
            <div className="calc-slider-ticks">
              <span>۳۰ متر</span>
              <span>۳۰۰ متر</span>
            </div>
          </div>

          {/* Slider 2: Scope of Work */}
          <div className="calc-field">
            <div className="calc-field-header">
              <span className="calc-field-label">دامنه کار</span>
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
              aria-label="دامنه کار"
            />
            <div className="calc-slider-ticks">
              <span>ترمیم جزئی</span>
              <span>طراحی مجدد</span>
            </div>
          </div>

          {/* Style selector */}
          <div className="calc-field">
            <span className="calc-field-label calc-field-label--block">سبک طراحی</span>
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

        {/* Right panel — result + lead form */}
        <div className="calc-result">
          <span className="calc-result-label">برآورد هزینه</span>
          <div className="calc-result-price">
            {formatPrice(estimate.low)} – {formatPrice(estimate.high)}
          </div>
          <p className="calc-result-note">
            این برآورد بر اساس میانگین هزینه متریال و نیروی کار محاسبه شده.
            قیمت نهایی پس از بازدید حضوری اعلام می‌شود.
          </p>

          {/* Lead capture form */}
          <form className="calc-lead-form" onSubmit={(e) => e.preventDefault()}>
            <input
              type="text"
              placeholder="نام و نام خانوادگی"
              className="calc-lead-input"
              required
            />
            <input
              type="tel"
              placeholder="شماره تماس"
              className="calc-lead-input"
              dir="ltr"
              required
            />
            <button type="submit" className="calc-lead-btn">
              مشاوره رایگان
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
