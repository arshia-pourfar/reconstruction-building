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
      {/* Decorative background accents */}
      <div className="calc-bg-accent" />
      <div className="calc-bg-dots" />

      <div data-aos="fade-up" className="calc-header">
        <div className="eyebrow">
          <svg className="calc-eyebrow-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="12" y1="1" x2="12" y2="23" />
            <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
          </svg>
          <span className="eyebrow-text">تخمین هزینه</span>
        </div>
        <h2 className="section-headline">برآورد هزینه بازسازی</h2>
        <p className="calc-subtitle">
          با تنظیم گزینه‌های زیر، محدوده تقریبی هزینه پروژه خود را مشاهده کنید
        </p>
      </div>

      <div data-aos="fade-up" data-aos-delay="100" className="calc-card">
        <div className="calc-controls">
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

          <div className="calc-field">
            <span className="calc-field-label calc-field-label--block">سبک طراحی</span>
            <div className="calc-radios">
              {styles.map((s) => (
                <label
                  key={s.id}
                  className={`calc-radio ${styleId === s.id ? "calc-radio--active" : ""}`}
                >
                  <span className="calc-radio-indicator">
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

        <div className="calc-result">
          <div className="calc-result-accent" />
          <span className="calc-result-label">برآورد هزینه</span>
          <div className="calc-result-price" key={`${estimate.low}-${estimate.high}`}>
            <span className="calc-result-amount">{formatPrice(estimate.low)}</span>
            <span className="calc-result-range">–</span>
            <span className="calc-result-amount">{formatPrice(estimate.high)}</span>
          </div>
          <p className="calc-result-note">
            این برآورد بر اساس میانگین هزینه متریال و نیروی کار محاسبه شده.
            قیمت نهایی پس از بازدید حضوری اعلام می‌شود.
          </p>

          <form className="calc-lead-form" onSubmit={(e) => e.preventDefault()}>
            <div className="calc-lead-row">
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
            </div>
            <button type="submit" className="calc-lead-btn">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              مشاوره رایگان
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
