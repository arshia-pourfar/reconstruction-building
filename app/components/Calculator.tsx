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
    <section className="w-full bg-[var(--warm-gray)]" style={{ padding: "var(--section-pad) var(--side-pad)" }}>
      {/* Heading */}
      <div className="flex flex-col items-center" style={{ marginBottom: "var(--heading-gap)" }}>
        <div className="inline-flex items-center h-8 px-[18px] rounded-full mb-6 bg-[var(--matte-slate)]">
          <span className="text-xs font-semibold tracking-[1.5px] uppercase text-[var(--oak)]">تخمین هزینه</span>
        </div>
        <h2 className="text-[40px] font-semibold leading-[1.15] tracking-tight text-center mb-4 text-[var(--foreground)]">برآورد هزینه بازسازی</h2>
      </div>

      {/* Calculator card */}
      <div className="flex w-full mx-auto rounded-[20px] overflow-hidden max-w-[1080px] bg-white shadow-[0_20px_48px_rgba(0,0,0,0.08)]">
        {/* Left panel — controls */}
        <div className="flex-1 min-w-0 p-10 flex flex-col gap-9">
          {/* Slider 1: Area Size */}
          <div className="flex flex-col gap-3">
            <div className="flex items-baseline justify-between gap-3">
              <span className="text-sm font-semibold text-[var(--foreground)]">متراژ فضا</span>
              <span className="text-sm font-semibold tabular-nums text-[var(--oak)]">{area} متر مربع</span>
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
            <div className="flex justify-between text-xs text-[var(--concrete)]" style={{ marginTop: "-4px" }}>
              <span>۳۰ متر</span>
              <span>۳۰۰ متر</span>
            </div>
          </div>

          {/* Slider 2: Scope of Work */}
          <div className="flex flex-col gap-3">
            <div className="flex items-baseline justify-between gap-3">
              <span className="text-sm font-semibold text-[var(--foreground)]">دامنه کار</span>
              <span className="text-sm font-semibold tabular-nums text-[var(--oak)]">{scopeLabel}</span>
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
            <div className="flex justify-between text-xs text-[var(--concrete)]" style={{ marginTop: "-4px" }}>
              <span>ترمیم جزئی</span>
              <span>طراحی مجدد</span>
            </div>
          </div>

          {/* Style selector */}
          <div className="flex flex-col gap-3">
            <span className="text-sm font-semibold text-[var(--foreground)] mb-1">سبک طراحی</span>
            <div className="flex gap-3">
              {styles.map((s) => (
                <label
                  key={s.id}
                  className={`flex items-center gap-2.5 p-3 px-[18px] rounded-[20px] cursor-pointer transition-all duration-200 flex-1 ${styleId === s.id ? "border-[var(--oak)] bg-[rgba(179,140,96,0.06)]" : "hover:border-[#C8C4BF] bg-transparent"}`}
                  style={{ border: `1.5px solid ${styleId === s.id ? "var(--oak)" : "#E0DDD8"}` }}
                >
                  <span className="w-[18px] h-[18px] rounded-full shrink-0 transition-colors duration-200 flex items-center justify-center" style={{ border: `2px solid ${styleId === s.id ? "var(--oak)" : "#C8C4BF"}` }}>
                    {styleId === s.id && <span className="w-2 h-2 rounded-full bg-[var(--oak)]" />}
                  </span>
                  <input
                    type="radio"
                    name="style"
                    value={s.id}
                    checked={styleId === s.id}
                    onChange={() => setStyleId(s.id)}
                    className="absolute w-px h-px p-0 m-[-1px] overflow-hidden whitespace-nowrap clip-[rect(0,0,0,0)] border-0"
                  />
                  <span className="text-sm font-medium text-nowrap text-[var(--foreground)]">{s.label}</span>
                </label>
              ))}
            </div>
          </div>
        </div>

        {/* Right panel — result + lead form */}
        <div className="w-[424px] shrink-0 p-10 flex flex-col justify-center bg-[var(--matte-slate)]">
          <span className="text-xs font-semibold tracking-[1.5px] uppercase mb-3 text-[var(--oak)]">برآورد هزینه</span>
          <div className="text-[36px] font-semibold leading-[1.15] tracking-tight mb-4 tabular-nums text-[var(--off-white)]">
            {formatPrice(estimate.low)} – {formatPrice(estimate.high)}
          </div>
          <p className="text-[13px] leading-[1.55] m-0 mb-7" style={{ color: "rgba(246,244,241,0.5)" }}>
            این برآورد بر اساس میانگین هزینه متریال و نیروی کار محاسبه شده.
            قیمت نهایی پس از بازدید حضوری اعلام می‌شود.
          </p>

          {/* Lead capture form */}
          <form className="flex flex-col gap-2.5 mt-5 pt-5" style={{ borderTop: "1px solid rgba(246,244,241,0.1)" }} onSubmit={(e) => e.preventDefault()}>
            <input
              type="text"
              placeholder="نام و نام خانوادگی"
              className="w-full h-11 px-4 text-sm outline-none transition-colors duration-200 rounded-xl font-[var(--font-persian)] text-[var(--off-white)] bg-black/25 placeholder:text-[rgba(246,244,241,0.35)] focus:border-[var(--oak)]"
              style={{ border: "1.5px solid rgba(246,244,241,0.1)" }}
              required
            />
            <input
              type="tel"
              placeholder="شماره تماس"
              className="w-full h-11 px-4 text-sm outline-none transition-colors duration-200 rounded-xl font-[var(--font-persian)] text-[var(--off-white)] bg-black/25 placeholder:text-[rgba(246,244,241,0.35)] focus:border-[var(--oak)]"
              style={{ border: "1.5px solid rgba(246,244,241,0.1)" }}
              dir="ltr"
              required
            />
            <button type="submit" className="w-full h-11 text-sm font-semibold rounded-xl cursor-pointer transition-all duration-200 font-[var(--font-persian)] text-[var(--matte-slate)] bg-[var(--oak)] border-none hover:bg-[var(--oak-hover)] hover:-translate-y-px active:translate-y-0 focus-visible:outline-2 focus-visible:outline-[var(--off-white)] focus-visible:outline-offset-2">
              مشاوره رایگان
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
