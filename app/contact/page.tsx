"use client";

import { useState, useCallback } from "react";
import StructuraFooter from "../components/StructuraFooter";

const projectTypes = [
  "بازسازی کامل",
  "بازسازی جزئی",
  "فقط طراحی داخلی",
  "فقط مشاوره سه‌بعدی",
];

const faqs = [
  {
    q: "آیا مشاوره رایگان ارائه می‌دهید؟",
    a: "بله. مشاوره اولیه ۳۰ دقیقه‌ای ما رایگان است — فضای شما را بازدید می‌کنیم، دیدگاهتان را بررسی کرده و برآورد اولیه بدون تعهد ارائه می‌دهیم.",
  },
  {
    q: "یک بازسازی کامل چقدر زمان می‌برد؟",
    a: "بازسازی کامل معمولاً ۸ تا ۱۴ هفته بسته به محدوده کار طول می‌کشد. بازسازی‌های جزئی و پروژه‌های طراحی داخلی معمولاً ۳ تا ۶ هفته تکمیل می‌شوند. زمان‌بندی دقیق پس از مشاوره اولیه ارائه می‌شود.",
  },
  {
    q: "آیا می‌توانم قبل از تصمیم‌گیری پیش‌نمایش سه‌بعدی ببینم؟",
    a: "قطعاً. ما رندرهای سه‌بعدی واقع‌گرایانه از بازسازی پیشنهادی شما قبل از شروع هر کار ساخت‌وسازی ایجاد می‌کنیم. می‌توانید بررسی کنید، اصلاحات درخواست کنید و طرح را با سرعت خود تأیید کنید.",
  },
  {
    q: "آیا خارج از شهر هم کار می‌کنید؟",
    a: "بله، ما در پروژه‌های سراسر منطقه فعالیت می‌کنیم. هزینه‌های سفر و اقامت شفاف در قیمت پروژه لحاظ می‌شود. مشاوره‌های سه‌بعدی از راه دور نیز برای مشتریان دورتر موجود است.",
  },
];

export default function ContactPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = useCallback((i: number) => {
    setOpenFaq((prev) => (prev === i ? null : i));
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
                تماس با ما
              </span>
            </div>

            <h1 className="font-[family-name:var(--font-vazirmatn)] text-[32px] md:text-[64px] leading-[48px] md:leading-[80px] font-extrabold text-primary mb-8">
              فصل بعدی
              <br />
              فضایتان را طراحی کنیم
            </h1>

            <p className="font-[family-name:var(--font-vazirmatn)] text-[18px] leading-[28px] text-on-surface-variant max-w-xl leading-relaxed">
              درباره فضایتان برای ما بگویید — ظرف ۲۴ ساعت پاسخ خواهیم داد.
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-1/3 h-px bg-primary hidden md:block" />
      </section>

      {/* ═══ TWO COLUMN ════════════════════════════════ */}
      <section className="py-24 bg-surface-container-lowest">
        <div className="px-4 md:px-16 max-w-[1440px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-0 border border-outline-variant rounded-2xl overflow-hidden">
            {/* Form */}
            <div className="lg:col-span-3 p-8 md:p-12 bg-surface-bright rounded-2xl">
              <form
                className="space-y-6"
                onSubmit={(e) => e.preventDefault()}
              >
                <div>
                  <label className="font-[family-name:var(--font-vazirmatn)] text-[14px] leading-5 text-primary block mb-2">
                    نام و نام خانوادگی
                  </label>
                  <input
                    type="text"
                    placeholder="نام خود را وارد کنید"
                    className="w-full border border-outline-variant bg-transparent px-4 py-3 rounded-xl font-[family-name:var(--font-vazirmatn)] text-[14px] leading-5 focus:outline-none focus:border-primary transition-colors"
                    required
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="font-[family-name:var(--font-vazirmatn)] text-[14px] leading-5 text-primary block mb-2">
                      ایمیل
                    </label>
                    <input
                      type="email"
                      placeholder="example@email.com"
                      className="w-full border border-outline-variant bg-transparent px-4 py-3 rounded-xl font-[family-name:var(--font-vazirmatn)] text-[14px] leading-5 focus:outline-none focus:border-primary transition-colors"
                      required
                    />
                  </div>
                  <div>
                    <label className="font-[family-name:var(--font-vazirmatn)] text-[14px] leading-5 text-primary block mb-2">
                      تلفن
                    </label>
                    <input
                      type="tel"
                      placeholder="۰۹۱۲۱۲۳۴۵۶۷"
                      className="w-full border border-outline-variant bg-transparent px-4 py-3 rounded-xl font-[family-name:var(--font-vazirmatn)] text-[14px] leading-5 focus:outline-none focus:border-primary transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="font-[family-name:var(--font-vazirmatn)] text-[14px] leading-5 text-primary block mb-2">
                    نوع پروژه
                  </label>
                  <select className="w-full border border-outline-variant bg-transparent px-4 py-3 rounded-xl font-[family-name:var(--font-vazirmatn)] text-[14px] leading-5 focus:outline-none focus:border-primary transition-colors appearance-none">
                    {projectTypes.map((t) => (
                      <option key={t} value={t}>
                        {t}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="font-[family-name:var(--font-vazirmatn)] text-[14px] leading-5 text-primary block mb-2">
                    پیام شما
                  </label>
                  <textarea
                    rows={5}
                    placeholder="درباره فضای خود، دیدگاهتان و هر سؤالی که دارید برای ما بنویسید..."
                    className="w-full border border-outline-variant bg-transparent px-4 py-3 rounded-xl font-[family-name:var(--font-vazirmatn)] text-[14px] leading-5 focus:outline-none focus:border-primary transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-tertiary text-on-tertiary px-8 py-4 rounded-xl font-[family-name:var(--font-vazirmatn)] text-[14px] leading-5 hover:bg-secondary-container transition-all active:scale-95"
                >
                  ارسال پیام
                </button>
              </form>
            </div>

            {/* Info */}
            <div className="lg:col-span-2 p-8 md:p-12 bg-primary text-on-primary rounded-2xl">
              {/* Map placeholder */}
              <div className="w-full aspect-[4/3] border-2 border-on-primary flex items-center justify-center mb-8">
                <div className="text-center">
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="mx-auto mb-3 text-secondary-container"
                  >
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  <span className="font-[family-name:var(--font-vazirmatn)] text-[14px] leading-5 text-on-primary-container">
                    موقعیت استودیو
                  </span>
                </div>
              </div>

              <div className="space-y-6">
                <div className="border-b border-on-primary/20 pb-6">
                  <span className="font-[family-name:var(--font-vazirmatn)] text-[12px] leading-4 text-secondary-container block mb-2">
                    آدرس استودیو
                  </span>
                  <p className="font-[family-name:var(--font-vazirmatn)] text-[14px] leading-[22px]">
                    تهران، خیابان ولیعصر، نبش کوچه گل
                    <br />
                    پلاک ۱۴۲، طبقه سوم
                  </p>
                </div>

                <div className="border-b border-on-primary/20 pb-6">
                  <span className="font-[family-name:var(--font-vazirmatn)] text-[12px] leading-4 text-secondary-container block mb-2">
                    تماس مستقیم
                  </span>
                  <a
                    href="tel:+982112345678"
                    className="font-[family-name:var(--font-vazirmatn)] text-[14px] leading-[22px] block hover:text-secondary-container transition-colors"
                  >
                    ۰۲۱-۱۲۳۴۵۶۷۸
                  </a>
                  <a
                    href="mailto:info@structura.ir"
                    className="font-[family-name:var(--font-vazirmatn)] text-[14px] leading-[22px] block hover:text-secondary-container transition-colors"
                  >
                    info@structura.ir
                  </a>
                </div>

                <div className="border-b border-on-primary/20 pb-6">
                  <span className="font-[family-name:var(--font-vazirmatn)] text-[12px] leading-4 text-secondary-container block mb-2">
                    پیام‌رسان‌ها
                  </span>
                  <div className="flex gap-4">
                    <a
                      href="https://wa.me/989121234567"
                      className="w-10 h-10 border-2 border-on-primary flex items-center justify-center hover:bg-secondary-container hover:border-secondary-container transition-all"
                      aria-label="واتساپ"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                      </svg>
                    </a>
                    <a
                      href="https://t.me/structura"
                      className="w-10 h-10 border-2 border-on-primary flex items-center justify-center hover:bg-secondary-container hover:border-secondary-container transition-all"
                      aria-label="تلگرام"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.479.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
                      </svg>
                    </a>
                  </div>
                </div>

                <div className="border-b border-on-primary/20 pb-6">
                  <span className="font-[family-name:var(--font-vazirmatn)] text-[12px] leading-4 text-secondary-container block mb-2">
                    ساعات کاری
                  </span>
                  <p className="font-[family-name:var(--font-vazirmatn)] text-[14px] leading-[22px]">
                    شنبه تا پنجشنبه، ۹ صبح تا ۷ شب
                  </p>
                </div>

                <div>
                  <span className="font-[family-name:var(--font-vazirmatn)] text-[12px] leading-4 text-secondary-container block mb-3">
                    ما را دنبال کنید
                  </span>
                  <div className="flex gap-3">
                    {["instagram", "linkedin"].map((social) => (
                      <a
                        key={social}
                        href={`https://${social}.com`}
                        className="w-10 h-10 border-2 border-on-primary flex items-center justify-center hover:bg-secondary-container hover:border-secondary-container transition-all"
                        aria-label={social}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          {social === "instagram" && (
                            <>
                              <rect x="2" y="2" width="20" height="20" rx="5" />
                              <circle cx="12" cy="12" r="5" />
                              <circle
                                cx="17.5"
                                cy="6.5"
                                r="1.5"
                                fill="currentColor"
                                stroke="none"
                              />
                            </>
                          )}
                          {social === "linkedin" && (
                            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2zM4 2a2 2 0 1 1 0 4 2 2 0 0 1 0-4z" />
                          )}
                        </svg>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ FAQ ═══════════════════════════════════════ */}
      <section className="py-24 bg-surface">
        <div className="px-4 md:px-16 max-w-[1440px] mx-auto">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-4 mb-12">
              <div className="h-1 w-12 bg-secondary-container" />
              <span className="font-[family-name:var(--font-vazirmatn)] text-[14px] leading-5 text-secondary-container">
                سؤالات متداول
              </span>
            </div>

            <h2 className="font-[family-name:var(--font-vazirmatn)] text-[32px] md:text-[40px] leading-[48px] md:leading-[56px] font-extrabold mb-12">
              پاسخ به سؤالات شما
            </h2>

            <div className="space-y-4">
              {faqs.map((faq, i) => (
                <div
                  key={i}
                  className={`border transition-all ${
                    openFaq === i
                      ? "border-primary"
                      : "border-outline-variant hover:border-primary"
                  }`}
                >
                  <button
                    className="w-full flex items-center justify-between p-6 text-left"
                    onClick={() => toggleFaq(i)}
                    aria-expanded={openFaq === i}
                  >
                    <span className="font-[family-name:var(--font-vazirmatn)] text-[16px] leading-[24px] font-bold">
                      {faq.q}
                    </span>
                    <svg
                      className={`w-5 h-5 shrink-0 transition-transform ${
                        openFaq === i ? "rotate-180" : ""
                      }`}
                      viewBox="0 0 18 18"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M5 7l4 4 4-4" />
                    </svg>
                  </button>
                  <div
                    className={`overflow-hidden transition-all ${
                      openFaq === i ? "max-h-96 pb-6" : "max-h-0"
                    }`}
                  >
                    <p className="px-6 font-[family-name:var(--font-vazirmatn)] text-[14px] leading-[22px] text-on-surface-variant leading-relaxed">
                      {faq.a}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <StructuraFooter />
    </main>
  );
}
