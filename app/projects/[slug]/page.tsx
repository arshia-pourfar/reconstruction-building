"use client";

import { useRef, useEffect } from "react";
import StructuraFooter from "../../components/StructuraFooter";

const HIGHLIGHTS = [
  {
    number: "۰۱",
    title: "کابینت‌های شیک ذغالی",
    description: "پایان مات مقاوم در برابر اثر انگشت با سخت‌افزار دقیق یکپارچه.",
    hoverBg: "hover:bg-primary-container",
    hoverText: "group-hover:text-white",
  },
  {
    number: "۰۲",
    title: "کانترهای مرمری",
    description: "صخره‌های Calacatta Borghini صیقلی با لبه‌های میتر شده کتاب‌-match شده.",
    hoverBg: "hover:bg-secondary-container",
    hoverText: "group-hover:text-white",
  },
  {
    number: "۰۳",
    title: "لوازم درجه حرفه‌ای",
    description: "یکپارچه‌سازی Sub-Zero و Wolf برای عملکرد آشپزی بی‌سازش.",
    hoverBg: "hover:bg-primary",
    hoverText: "group-hover:text-white/80",
  },
  {
    number: "۰۴",
    title: "نورپردازی صنعتی",
    description: "آویزهای فولادی سفارشی با آرایه‌های LED تنظیم شده کلوین.",
    hoverBg: "",
    hoverText: "",
  },
];

const SPECS = [
  { label: "ابعاد", value: "۴۸۰ فوت مربع // سقف ۱۲ فوت" },
  { label: "ساختار", value: "تیرهای I فولادی نمایان" },
  { label: "متریال", value: "بتن / کوارتز / فولاد" },
  { label: "سخت‌افزار", value: "سیستم‌های BLUM TANDEMBOX" },
  { label: "مدت زمان", value: "۱۴ هفته از شروع تا پایان" },
];

const STEPS = [
  {
    number: "۰۱. هدف",
    text: "به هم ریختگی ساختاری را حذف کنید تا پتانسیل حجمی نمایان شود و بهره‌وری به حداکثر برسد.",
  },
  {
    number: "۰۲. اجرا",
    text: "نصب هدرهای ساختاری فولادی و سیستم‌های کابینت یکپارچه.",
  },
  {
    number: "۰۳. نتیجه",
    text: "محیطی با عملکرد بالا با ۴۵٪ بهره‌وری فضای کاری افزایش یافته.",
  },
];

export default function ProjectDetailPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const afterImageRef = useRef<HTMLDivElement>(null);
  const handleRef = useRef<HTMLDivElement>(null);
  const afterImgRef = useRef<HTMLImageElement>(null);
  const isResizing = useRef(false);

  useEffect(() => {
    const container = containerRef.current;
    const afterImage = afterImageRef.current;
    const handle = handleRef.current;
    const afterImg = afterImgRef.current;

    if (!container || !afterImage || !handle || !afterImg) return;

    const updateSlider = (clientX: number) => {
      const rect = container.getBoundingClientRect();
      // RTL: invert direction
      let x = rect.right - clientX;
      if (x < 0) x = 0;
      if (x > rect.width) x = rect.width;
      const percentage = (x / rect.width) * 100;
      afterImage.style.width = `${percentage}%`;
      handle.style.right = `${percentage}%`;
      handle.style.left = "auto";
      afterImg.style.width = `${rect.width}px`;
    };

    const onMove = (e: MouseEvent | TouchEvent) => {
      if (!isResizing.current) return;
      const clientX =
        "clientX" in e ? e.clientX : e.touches[0]?.clientX;
      if (clientX !== undefined) updateSlider(clientX);
    };

    const start = () => {
      isResizing.current = true;
      container.classList.add("interacting");
    };
    const stop = () => {
      isResizing.current = false;
      container.classList.remove("interacting");
    };

    const initResize = () => {
      afterImg.style.width = `${container.getBoundingClientRect().width}px`;
    };
    window.addEventListener("resize", initResize);
    initResize();

    container.addEventListener("mousedown", start);
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseup", stop);
    container.addEventListener("touchstart", start);
    window.addEventListener("touchmove", onMove);
    window.addEventListener("touchend", stop);

    afterImage.style.width = "50%";
    handle.style.right = "50%";
    handle.style.left = "auto";

    return () => {
      window.removeEventListener("resize", initResize);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseup", stop);
      window.removeEventListener("touchmove", onMove);
      window.removeEventListener("touchend", stop);
    };
  }, []);

  return (
    <main className="pt-20">
      {/* ═══ PROJECT HEADER ═══════════════════════════ */}
      <section className="max-w-[1440px] mx-auto px-4 md:px-16 py-12 md:py-20 border-b border-on-surface-variant">
        <div className="flex flex-col md:flex-row justify-between items-end gap-6">
          <div className="max-w-2xl">
            <span className="font-[family-name:var(--font-vazirmatn)] text-[12px] leading-4 text-secondary mb-4 block">
              بازسازی مسکونی // ۰۴۲
            </span>
            <h1 className="font-[family-name:var(--font-vazirmatn)] text-[32px] md:text-[64px] leading-[48px] md:leading-[80px] font-extrabold mb-6 leading-[0.9]">
              مجموعه آشپزخانه تک‌بلاک
            </h1>
            <p className="font-[family-name:var(--font-vazirmatn)] text-[18px] leading-[28px] text-on-surface-variant leading-relaxed">
              محیط آشپزی دقیق مهندسی‌شده تعریف شده توسط صداقت ساختاری و
              کنتراست متریال. این پروژه یک فضای کاری مسکونی قدیمی را به یک
              آزمایشگاه آشپزخانه درجه صنعتی تبدیل کرد.
            </p>
          </div>
          <a
            href="/projects"
            className="flex items-center gap-2 font-[family-name:var(--font-vazirmatn)] text-[14px] leading-5 text-on-surface hover:text-secondary transition-colors group"
          >
            <svg
              className="transition-transform group-hover:translate-x-1 rotate-180"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
            بازگشت به نمونه کارها
          </a>
        </div>
      </section>

      {/* ═══ BEFORE/AFTER SLIDER ══════════════════════ */}
      <section className="bg-surface-container-low py-16 overflow-hidden">
        <div className="max-w-[1440px] mx-auto px-4 md:px-16">
          <div className="mb-8 flex justify-between items-baseline border-r border-outline-variant pr-6">
            <h2 className="font-[family-name:var(--font-vazirmatn)] text-[24px] md:text-[40px] leading-[36px] md:leading-[56px] font-extrabold">
              تکامل ساختاری
            </h2>
            <span className="font-[family-name:var(--font-vazirmatn)] text-[12px] leading-4 text-on-surface-variant">
              مقایسه تعاملی
            </span>
          </div>

          <div
            ref={containerRef}
            className="comparison-slider w-full aspect-[1.79] cursor-ew-resize rounded-2xl overflow-hidden"
            style={{ border: "1px solid #1A1A1A", position: "relative", overflow: "hidden", userSelect: "none" }}
          >
            <img
              alt="وضعیت قبل"
              className="w-full h-full object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBFN4H-UVOZ3tCo4amRG7U_v1D_tS-bB8PBY2zQH3HO6huJMyjdzmATbuOd8irCPkBHGw8DTO1UThly4b3XanTf8H6ppq_ljuGxfDP_-9xX6hO9sk7O38k_eRAMBVzakAhP4zjIcKQmd4a4Nsq70VU-oCpjOx_QrXtA1PsGe58UB1N1WNsUrJ5p4XH5pvrFKb6xK4zq8CJZ_XqO4tPK_VWnJV1m_Nb5YXmTB3H2Zt_rfHJGInyqgRKTD1SLVaR_gqpz02Xxfy9FTg7g"
            />
            <div
              ref={afterImageRef}
              style={{
                position: "absolute",
                top: 0,
                right: 0,
                left: "auto",
                height: "100%",
                width: "50%",
                overflow: "hidden",
                borderLeft: "2px solid #6366f1",
              }}
            >
              <img
                ref={afterImgRef}
                alt="وضعیت بعد"
                className="absolute top-0 right-0 w-full h-full object-cover max-w-none"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBLiZ_hxL0-I6H0zsl8WzUQ2Zclr7bsYmMIH6lLsjdM2cR_gRvW_rrRerOXoKiEtXh4T8p2781kMYaafb1PyKB0wGxSg4Ar8UB_KzqqStuPaP8I-VqtY4wysLTVql69NoFHy7D73S0etLlnNwmRg8AH28CYnhaY4gGnvg7B0imBwtw1G6puw-EqETUHPrZI-U2c8YM6_nuqsth6h8oYEM82SpEpafYmezxQqUikvEPnHVAvzYk1Hb_yGVaHemtgXk9TTp0CcXCBLzON"
              />
            </div>
            <div
              ref={handleRef}
              style={{
                position: "absolute",
                top: 0,
                right: "50%",
                left: "auto",
                bottom: 0,
                width: "4px",
                background: "#6366f1",
                cursor: "ew-resize",
                zIndex: 10,
                transform: "translateX(50%)",
              }}
            >
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-secondary flex items-center justify-center border border-outline-variant rounded-lg">
                <svg
                  className="text-white text-sm"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M12 5v14M5 12l7-7 7 7M5 12l7 7 7-7" />
                </svg>
              </div>
            </div>
            <div className="absolute top-6 right-6 z-20 bg-primary/80 backdrop-blur-sm text-white px-4 py-1 font-[family-name:var(--font-vazirmatn)] text-[12px] leading-4 pointer-events-none">
              قبل
            </div>
            <div className="absolute top-6 left-6 z-20 bg-secondary/90 backdrop-blur-sm text-white px-4 py-1 font-[family-name:var(--font-vazirmatn)] text-[12px] leading-4 pointer-events-none">
              بعد
            </div>
          </div>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            {STEPS.map((step) => (
              <div
                key={step.number}
                className="p-6 bg-surface rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.04)]"
                style={{ border: "1px solid #1A1A1A" }}
              >
                <h4 className="font-[family-name:var(--font-vazirmatn)] text-[14px] leading-5 mb-2 text-secondary">
                  {step.number}
                </h4>
                <p className="font-[family-name:var(--font-vazirmatn)] text-[16px] leading-[24px] text-on-surface-variant italic">
                  {step.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ HIGHLIGHTS + SPECS ═══════════════════════ */}
      <section className="max-w-[1440px] mx-auto px-4 md:px-16 py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          <div className="md:col-span-8 space-y-6">
            <h3 className="font-[family-name:var(--font-vazirmatn)] text-[24px] leading-[36px] font-extrabold mb-8 flex items-center gap-4">
              <span className="w-12 h-1 bg-primary" />
              نکات برجسته پروژه
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {HIGHLIGHTS.map((h) => (
                <div
                  key={h.number}
                  className={`group relative aspect-square bg-surface overflow-hidden p-8 flex flex-col justify-end transition-all rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.04)] ${h.hoverBg}`}
                  style={{ border: "1px solid #1A1A1A" }}
                >
                  <span
                    className={`absolute top-8 right-8 font-[family-name:var(--font-vazirmatn)] text-[32px] md:text-[48px] leading-[40px] md:leading-[56px] font-extrabold text-surface-variant ${h.hoverText} transition-colors`}
                  >
                    {h.number}
                  </span>
                  <div className="relative z-10">
                    <h4
                      className={`font-[family-name:var(--font-vazirmatn)] text-[20px] leading-[28px] font-extrabold mb-2 ${h.hoverText} transition-colors`}
                    >
                      {h.title}
                    </h4>
                    <p
                      className={`font-[family-name:var(--font-vazirmatn)] text-[16px] leading-[24px] text-on-surface-variant ${h.hoverText} transition-colors`}
                    >
                      {h.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="md:col-span-4 bg-primary p-10 text-on-primary h-fit sticky top-28 rounded-2xl">
            <h3 className="font-[family-name:var(--font-vazirmatn)] text-[14px] leading-5 mb-10 border-b border-on-primary-container pb-4">
              مشخصات فنی
            </h3>
            <ul className="space-y-6">
              {SPECS.map((spec) => (
                <li key={spec.label} className="flex flex-col gap-1">
                  <span className="font-[family-name:var(--font-vazirmatn)] text-[12px] leading-4 text-on-primary-container">
                    {spec.label}
                  </span>
                  <span className="font-[family-name:var(--font-vazirmatn)] text-[14px] leading-5 font-medium">
                    {spec.value}
                  </span>
                </li>
              ))}
            </ul>
            <div className="mt-12 pt-8 border-t border-on-primary-container">
              <button className="w-full bg-tertiary text-on-tertiary py-4 rounded-lg font-[family-name:var(--font-vazirmatn)] text-[14px] leading-5 hover:shadow-[0_4px_20px_rgba(99,102,241,0.25)] hover:brightness-110 transition-all">
                استعلام پروژه
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ NEXT PROJECT ═════════════════════════════ */}
      <section className="max-w-[1440px] mx-auto px-4 md:px-16 mb-24">
        <div
          className="group relative flex flex-col md:flex-row overflow-hidden hover:border-secondary transition-colors rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.04)]"
          style={{ border: "1px solid #1A1A1A" }}
        >
          <div className="md:w-1/2 p-12 flex flex-col justify-center">
            <span className="font-[family-name:var(--font-vazirmatn)] text-[12px] leading-4 text-secondary mb-4">
              پروژه بعدی
            </span>
            <h2 className="font-[family-name:var(--font-vazirmatn)] text-[24px] md:text-[40px] leading-[36px] md:leading-[56px] font-extrabold mb-6 group-hover:-translate-x-2 transition-transform">
              لوفت پنت‌هاوس بروتالیست
            </h2>
            <a
              href="#"
              className="font-[family-name:var(--font-vazirmatn)] text-[14px] leading-5 border-b border-outline-variant w-fit pb-1 hover:border-secondary"
            >
              مشاهده جزئیات
            </a>
          </div>
          <div className="md:w-1/2 h-64 md:h-auto bg-surface-container-highest relative overflow-hidden">
            <div
              className="bg-cover bg-center absolute inset-0 grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
              style={{
                backgroundImage:
                  "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAw-y7w8Xy4hkMW3qI-kcZlaAG5lc-VqDBZEvHipLEUixd63YUPDUAI3Mtsb8yFKA_mJaXWK85-4WAHYCeMAefe-R3rIsYENYnFnpaUKTSzWDNC5mm1EJxqjdtAYuX6VeznYWY1n-17GOM__jUtVjckev_QmDhkfsEi_k30YjX-q-DXSkN4uUaHRHTC4Wgvhu7fUYZTJTySF9ZDOug-Fj_SorCBJbCVIBODyrq65u4lGbY7ENMA1PNoR4a_H627coMrwmsOtGsGyG44')",
              }}
            />
          </div>
        </div>
      </section>

      <StructuraFooter />
    </main>
  );
}
