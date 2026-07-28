"use client";

import { useState, useMemo, useCallback } from "react";
import Link from "next/link";
import StructuraFooter from "../components/StructuraFooter";

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

  const handleAreaChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setArea(Number(e.target.value));
    },
    []
  );

  const handleScopeChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setScope(Number(e.target.value));
    },
    []
  );

  return (
    <main className="pt-20">
      {/* ═══ HERO ═══════════════════════════════════════ */}
      <section
        className="relative min-h-[400px] flex flex-col justify-center border-b border-outline-variant overflow-hidden"
        style={{
          backgroundImage:
            "linear-gradient(to right, #e0e0e0 1px, transparent 1px), linear-gradient(to bottom, #e0e0e0 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      >
        <div className="px-4 md:px-16 max-w-[1440px] mx-auto w-full py-24 relative">
          <div className="max-w-3xl">
            <div className="flex items-center gap-4 mb-6">
              <div className="h-1 w-12 bg-secondary-container" />
              <span className="font-[family-name:var(--font-vazirmatn)] text-[14px] leading-5 text-secondary-container">
                محاسبه هزینه
              </span>
            </div>

            <h1 className="font-[family-name:var(--font-vazirmatn)] text-[32px] md:text-[64px] leading-[48px] md:leading-[80px] font-extrabold text-primary mb-8">
              تخمین هزینه
              <br />
              بازسازی
            </h1>

            <p className="font-[family-name:var(--font-vazirmatn)] text-[18px] leading-[28px] text-on-surface-variant max-w-xl leading-relaxed">
              با وارد کردن مشخصات پروژه، برآورد اولیه هزینه بازسازی خود را
              دریافت کنید.
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-1/3 h-px bg-primary hidden md:block" />
      </section>

      {/* ═══ CALCULATOR ════════════════════════════════ */}
      <section className="py-24 bg-surface-container-lowest">
        <div className="px-4 md:px-16 max-w-[1440px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-0 border border-outline-variant rounded-2xl overflow-hidden">
            {/* Controls */}
            <div className="lg:col-span-3 p-8 md:p-12 bg-surface-bright">
              {/* Area Slider */}
              <div className="mb-10">
                <div className="flex items-center justify-between mb-4">
                  <span className="font-[family-name:var(--font-vazirmatn)] text-[14px] leading-5 text-primary">
                    متراژ فضا
                  </span>
                  <span className="font-[family-name:var(--font-vazirmatn)] text-[14px] leading-5 text-secondary-container font-bold">
                    {area} متر مربع
                  </span>
                </div>
                <input
                  type="range"
                  min={30}
                  max={300}
                  step={5}
                  value={area}
                  onChange={handleAreaChange}
                  className="w-full h-1 bg-outline-variant appearance-none cursor-pointer accent-secondary-container"
                  aria-label="متراژ فضا"
                />
                <div className="flex justify-between mt-2">
                  <span className="font-[family-name:var(--font-vazirmatn)] text-[12px] leading-4 text-outline">
                    ۳۰ متر
                  </span>
                  <span className="font-[family-name:var(--font-vazirmatn)] text-[12px] leading-4 text-outline">
                    ۳۰۰ متر
                  </span>
                </div>
              </div>

              {/* Scope Slider */}
              <div className="mb-10">
                <div className="flex items-center justify-between mb-4">
                  <span className="font-[family-name:var(--font-vazirmatn)] text-[14px] leading-5 text-primary">
                    دامنه کار
                  </span>
                  <span className="font-[family-name:var(--font-vazirmatn)] text-[14px] leading-5 text-secondary-container font-bold">
                    {scopeLabel}
                  </span>
                </div>
                <input
                  type="range"
                  min={1}
                  max={4}
                  step={1}
                  value={scope}
                  onChange={handleScopeChange}
                  className="w-full h-1 bg-outline-variant appearance-none cursor-pointer accent-secondary-container"
                  aria-label="دامنه کار"
                />
                <div className="flex justify-between mt-2">
                  <span className="font-[family-name:var(--font-vazirmatn)] text-[12px] leading-4 text-outline">
                    ترمیم جزئی
                  </span>
                  <span className="font-[family-name:var(--font-vazirmatn)] text-[12px] leading-4 text-outline">
                    طراحی مجدد
                  </span>
                </div>
              </div>

              {/* Style Selector */}
              <div>
                <span className="font-[family-name:var(--font-vazirmatn)] text-[14px] leading-5 text-primary block mb-4">
                  سبک طراحی
                </span>
                <div className="flex flex-wrap gap-3">
                  {styles.map((s) => (
                    <button
                      key={s.id}
                      onClick={() => setStyleId(s.id)}
                      className={`font-[family-name:var(--font-vazirmatn)] text-[14px] leading-5 px-6 py-3 border border-outline-variant rounded-xl transition-all ${
                        styleId === s.id
                          ? "bg-tertiary text-on-tertiary border-tertiary"
                          : "bg-transparent text-on-surface hover:border-primary"
                      }`}
                    >
                      {s.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Result */}
            <div className="lg:col-span-2 p-8 md:p-12 bg-primary text-on-primary flex flex-col justify-center">
              <span className="font-[family-name:var(--font-vazirmatn)] text-[14px] leading-5 text-secondary-container mb-4">
                برآورد هزینه
              </span>
              <div className="font-[family-name:var(--font-vazirmatn)] text-[24px] md:text-[32px] leading-[36px] md:leading-[48px] font-extrabold mb-8">
                {formatPrice(estimate.low)}
                <br />
                {formatPrice(estimate.high)}
              </div>
              <p className="font-[family-name:var(--font-vazirmatn)] text-[14px] leading-[22px] text-on-primary-container mb-8 leading-relaxed">
                این برآورد بر اساس میانگین هزینه متریال و نیروی کار در منطقه شما
                محاسبه شده است. قیمت نهایی پس از بازدید حضوری و مشاوره تخصصی
                اعلام می‌شود.
              </p>
              <Link
                href="/contact"
                className="inline-block bg-tertiary text-on-tertiary rounded-xl px-8 py-4 font-[family-name:var(--font-vazirmatn)] text-[14px] leading-5 text-center hover:bg-on-secondary-container hover:text-on-primary transition-all active:scale-95"
              >
                مشاوره رایگان
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ INFO CARDS ════════════════════════════════ */}
      <section className="py-24 bg-surface">
        <div className="px-4 md:px-16 max-w-[1440px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: (
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  </svg>
                ),
                title: "ضمانت قیمت",
                desc: "قیمت نهایی پس از بازدید رایگان و بدون تغییر اعلام می‌شود.",
              },
              {
                icon: (
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                ),
                title: "تحویل به موقع",
                desc: "تمام پروژه‌ها طبق زمان‌بندی تعیین شده تحویل داده می‌شوند.",
              },
              {
                icon: (
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                ),
                title: "تیم متخصص",
                desc: "بیش از ۱۲ سال تجربه در بازسازی و طراحی داخلی حرفه‌ای.",
              },
            ].map((card) => (
              <div
                key={card.title}
                className="border border-outline-variant p-8 hover:border-primary transition-all group rounded-2xl"
              >
                <div className="text-secondary-container mb-6 group-hover:scale-110 transition-transform inline-block">
                  {card.icon}
                </div>
                <h3 className="font-[family-name:var(--font-vazirmatn)] text-[18px] leading-[28px] font-extrabold mb-3">
                  {card.title}
                </h3>
                <p className="font-[family-name:var(--font-vazirmatn)] text-[14px] leading-[22px] text-on-surface-variant leading-relaxed">
                  {card.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <StructuraFooter />
    </main>
  );
}
