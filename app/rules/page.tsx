"use client";

import { useState, useCallback } from "react";
import Link from "next/link";
import StructuraFooter from "../components/StructuraFooter";

const sections = [
  {
    id: "project-process",
    chip: "فرآیند پروژه",
    title: "فرآیند پروژه",
    content: {
      intro:
        "هر پروژه استراکچرا از یک فرآیند ساختاریافته چهار مرحله‌ای پیروی می‌کند که برای حفظ زمان‌بندی دقیق و هم‌راستایی انتظارات طراحی شده است.",
      steps: [
        {
          label: "مشاوره",
          desc: "فضای شما را بازدید می‌کنیم، دیدگاهتان را بررسی کرده و محدوده کار، بودجه و زمان‌بندی را تعریف می‌کنیم.",
        },
        {
          label: "کانسپت سه‌بعدی",
          desc: "تیم طراحی ما رندرهای سه‌بعدی واقع‌گرایانه از بازسازی پیشنهادی شما برای بررسی ایجاد می‌کند.",
        },
        {
          label: "تأیید",
          desc: "کانسپت را بررسی کرده، در صورت نیاز اصلاحات درخواست می‌کنید و طرح نهایی را تأیید می‌کنید.",
        },
        {
          label: "اجرا",
          desc: "تیم ساخت ما طرح تأیید شده را با به‌روزرسانی‌های هفتگی پیشرفت اجرا می‌کند.",
        },
      ],
    },
  },
  {
    id: "payments",
    chip: "پرداخت‌ها",
    title: "شرایط پرداخت",
    content: {
      intro:
        "پرداخت‌ها بر اساس نقطه عطف است تا فقط در ازای تکمیل کار پرداخت کنید.",
      bullets: [
        "۳۰٪ پیش‌پرداخت هنگام امضای قرارداد پروژه.",
        "۴۰٪ پس از تأیید کانسپت سه‌بعدی و قبل از شروع ساخت.",
        "۲۰٪ در نیمه مرحله ساخت.",
        "۱۰٪ مانده نهایی پس از تکمیل پروژه و بازدید نهایی.",
      ],
      note:
        "تمام فاکتورها ظرف ۱۴ روز قابل پرداخت هستند. تأخیر در پرداخت شامل جریمه ماهانه ۱.۵٪ است.",
    },
  },
  {
    id: "revisions",
    chip: "اصلاحات",
    title: "اصلاحات طراحی سه‌بعدی",
    content: {
      intro:
        "می‌خواهیم قبل از لمس یک دیوار، طرح را دوست داشته باشید.",
      bullets: [
        "دو دور اصلاحات سه‌بعدی در هر پروژه بدون هزینه اضافی شامل می‌شود.",
        "دورهای اضافی با هزینه ۳۵۰ دلار به ازای هر دور صورتحساب می‌شود.",
        "تغییرات اساسی محدوده (اتاق‌های جدید، تغییرات ساختاری) جداگانه قیمت‌گذاری می‌شود.",
        "زمان اصلاحات معمولاً ۳ تا ۵ روز کاری است.",
      ],
    },
  },
  {
    id: "materials",
    chip: "متریال و تأمین",
    title: "متریال و تأمین",
    content: {
      intro: "شفافیت در مورد آنچه شامل می‌شود و آنچه بر عهده شماست.",
      bullets: [
        "تأمین متریال استاندارد (کاشی، رنگ، تجهیزات پایه) در خدمات ما شامل است.",
        "متریال ممتاز یا تخصصی (سنگ وارداتی، نجاری سفارشی) جداگانه قیمت‌گذاری می‌شود.",
        "می‌توانید متریال خود را تأمین کنید — قیمت بر اساس آن تنظیم می‌شود.",
        "تمام هزینه‌های متریال بدون افزایش قیمت ارائه می‌شود.",
      ],
    },
  },
  {
    id: "cancellations",
    chip: "لغو و بازپرداخت",
    title: "سیاست لغو و بازپرداخت",
    content: {
      intro: "برنامه‌ها تغییر می‌کنند. نحوه مدیریت ما:",
      bullets: [
        "لغو قبل از تحویل کانسپت سه‌بعدی: بازپرداخت کامل منهای ۵۰۰ دلار هزینه اداری.",
        "لغو پس از تأیید کانسپت: پیش‌پرداخت غیرقابل بازپرداخت؛ پرداخت‌های نقطه عطف برای کار تکمیل شده حفظ می‌شود.",
        "لغو در مرحله ساخت: تمام کار تکمیل شده صورتحساب می‌شود؛ مبالغ پیش‌پرداخت باقیمانده ظرف ۳۰ روز بازپرداخت می‌شود.",
      ],
    },
  },
  {
    id: "warranty",
    chip: "گارانتی",
    title: "گارانتی کیفیت اجرا",
    content: {
      intro: "ما از کاری که می‌سازیم پشتیبانی می‌کنیم.",
      bullets: [
        "تمام کارهای ساختاری و نازک‌کاری دارای گارانتی ۵ ساله هستند.",
        "کارهای لوله‌کشی و برقی تا ۳ سال پوشش داده می‌شود.",
        "ادعاهای گارانتی ظرف ۵ روز کاری پس از ارسال بررسی می‌شوند.",
        "آسیب ناشی از سوءاستفاده، اصلاحات غیرمجاز یا استفاده عادی شامل گارانتی نمی‌شود.",
      ],
    },
  },
];

export default function RulesPage() {
  const [active, setActive] = useState("project-process");

  const handleChipClick = useCallback((id: string) => {
    setActive(id);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, []);

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
                سیاست‌های استودیو
              </span>
            </div>

            <h1 className="font-[family-name:var(--font-vazirmatn)] text-[32px] md:text-[64px] leading-[48px] md:leading-[80px] font-extrabold text-primary mb-8">
              چگونه با هم
              <br />
              کار می‌کنیم
            </h1>

            <p className="font-[family-name:var(--font-vazirmatn)] text-[18px] leading-[28px] text-on-surface-variant max-w-xl leading-relaxed">
              شرایط شفاف، فرآیند صادقانه — هر آنچه باید قبل از شروع پروژه با
              استراکچرا بدانید.
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-1/3 h-px bg-primary hidden md:block" />
      </section>

      {/* ═══ CHIP NAV ══════════════════════════════════ */}
      <nav
        className="py-8 border-b border-outline-variant bg-surface-container-lowest sticky top-20 z-30"
        aria-label="ناوبری بخش‌ها"
      >
        <div className="px-4 md:px-16 max-w-[1440px] mx-auto">
          <div className="flex flex-wrap gap-3">
            {sections.map((s) => (
              <button
                key={s.id}
                onClick={() => handleChipClick(s.id)}
                className={`font-[family-name:var(--font-vazirmatn)] text-[14px] leading-5 px-5 py-2 border border-outline-variant rounded-xl transition-all ${
                  active === s.id
                    ? "bg-tertiary text-on-tertiary border-tertiary"
                    : "bg-transparent text-on-surface hover:border-primary"
                }`}
              >
                {s.chip}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* ═══ RULE SECTIONS ═════════════════════════════ */}
      <section className="py-24 bg-surface">
        <div className="px-4 md:px-16 max-w-[1440px] mx-auto space-y-16">
          {sections.map((s, i) => (
            <div
              key={s.id}
              id={s.id}
              className={`border border-outline-variant p-8 md:p-12 scroll-mt-40 rounded-2xl ${
                i % 2 === 1 ? "bg-surface-container-low" : "bg-surface-bright"
              }`}
            >
              <div className="flex items-start gap-6 mb-8">
                <span className="font-[family-name:var(--font-vazirmatn)] text-[48px] leading-none font-black text-outline-variant">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h2 className="font-[family-name:var(--font-vazirmatn)] text-[24px] md:text-[32px] leading-[36px] md:leading-[48px] font-extrabold mb-4">
                    {s.title}
                  </h2>
                  <p className="font-[family-name:var(--font-vazirmatn)] text-[16px] leading-[24px] text-on-surface-variant leading-relaxed mb-8">
                    {s.content.intro}
                  </p>
                </div>
              </div>

              {s.content.steps && (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
                  {s.content.steps.map((step, j) => (
                    <div
                      key={step.label}
                      className="border-r-2 border-secondary-container pr-4"
                    >
                      <span className="font-[family-name:var(--font-vazirmatn)] text-[12px] leading-4 text-secondary-container block mb-2">
                        مرحله {j + 1}
                      </span>
                      <h4 className="font-[family-name:var(--font-vazirmatn)] text-[16px] leading-[24px] font-bold mb-2">
                        {step.label}
                      </h4>
                      <p className="font-[family-name:var(--font-vazirmatn)] text-[14px] leading-[22px] text-on-surface-variant leading-relaxed">
                        {step.desc}
                      </p>
                    </div>
                  ))}
                </div>
              )}

              {s.content.bullets && (
                <ul className="space-y-3 mt-8">
                  {s.content.bullets.map((b) => (
                    <li
                      key={b}
                      className="flex items-start gap-3 font-[family-name:var(--font-vazirmatn)] text-[14px] leading-[22px] text-on-surface-variant"
                    >
                      <span className="w-2 h-2 bg-secondary-container mt-2 shrink-0" />
                      {b}
                    </li>
                  ))}
                </ul>
              )}

              {s.content.note && (
                <p className="font-[family-name:var(--font-vazirmatn)] text-[14px] leading-[22px] text-secondary-container mt-6 border-r-2 border-secondary-container pr-4">
                  {s.content.note}
                </p>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* ═══ CTA ═══════════════════════════════════════ */}
      <section className="bg-primary text-on-primary py-24">
        <div className="px-4 md:px-16 max-w-[1440px] mx-auto text-center">
          <p className="font-[family-name:var(--font-vazirmatn)] text-[18px] leading-[28px] text-on-primary-container mb-8">
            سؤالی در مورد فرآیند ما دارید؟
          </p>
          <Link
            href="/contact"
            className="inline-block bg-tertiary text-on-tertiary rounded-xl px-8 py-4 font-[family-name:var(--font-vazirmatn)] text-[14px] leading-5 hover:bg-on-secondary-container hover:text-on-primary transition-all active:scale-95"
          >
            با تیم ما صحبت کنید
          </Link>
        </div>
      </section>

      <StructuraFooter />
    </main>
  );
}
