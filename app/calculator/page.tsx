"use client";

import { useState, useMemo, useCallback } from "react";
import Link from "next/link";
import Footer from "../components/Footer";

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

export default function CalculatorPage() {
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
    <div className="calc-page">
      {/* Header */}
      <header className="calc-page-header">
        <div className="eyebrow">
          <span className="eyebrow-text">محاسبه هزینه</span>
        </div>
        <h1 className="calc-page-headline">تخمین هزینه بازسازی</h1>
        <p className="calc-page-sub">
          با وارد کردن مشخصات پروژه، برآورد اولیه هزینه بازسازی خود را دریافت کنید.
        </p>
      </header>

      {/* Calculator */}
      <section className="calc-section">
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

          {/* Right panel — result */}
          <div className="calc-result">
            <span className="calc-result-label">برآورد هزینه</span>
            <div className="calc-result-price">
              {formatPrice(estimate.low)} – {formatPrice(estimate.high)}
            </div>
            <p className="calc-result-note">
              این برآورد بر اساس میانگین هزینه متریال و نیروی کار در منطقه شما محاسبه شده است.
              قیمت نهایی پس از بازدید حضوری و مشاوره تخصصی اعلام می‌شود.
            </p>
            <Link href="/contact" className="calc-result-cta">
              مشاوره رایگان
            </Link>
          </div>
        </div>
      </section>

      {/* Info Cards */}
      <section className="calc-info-section">
        <div className="calc-info-grid">
          <div className="calc-info-card">
            <div className="calc-info-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
            </div>
            <h3 className="calc-info-title">ضمانت قیمت</h3>
            <p className="calc-info-desc">قیمت نهایی پس از بازدید رایگان و بدون تغییر اعلام می‌شود.</p>
          </div>
          <div className="calc-info-card">
            <div className="calc-info-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
              </svg>
            </div>
            <h3 className="calc-info-title">تحویل به موقع</h3>
            <p className="calc-info-desc">تمام پروژه‌ها طبق زمان‌بندی تعیین شده تحویل داده می‌شوند.</p>
          </div>
          <div className="calc-info-card">
            <div className="calc-info-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
              </svg>
            </div>
            <h3 className="calc-info-title">تیم متخصص</h3>
            <p className="calc-info-desc">بیش از ۱۲ سال تجربه در بازسازی و طراحی داخلی حرفه‌ای.</p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
