"use client";

const SERVICES = [
  {
    number: "۰۱",
    subtitle: "هسته‌های آشپزی",
    title: "بازسازی آشپزخانه",
    description:
      "محیط‌های آشپزی با عملکرد بالا شامل نجاری سفارشی و زیرساخت‌های درجه حرفه‌ای.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCkYdEODPQBOlsAqdipwCVicVmfBN6a22CyU0is1EZhdXtLBe_z9_PEb6R9pifLAzfvPWg53ewF7MRleGzPDGWZneP4ijAQ34F190Bp-wmq43rB7D5V-uzCDmzGqyXSB9kFVSy4rA7AwBsejVphRjhRbAvxPPE1R_xs2mF76OVmCRYKUDULVFcGSxeVNZ4_BAc3H2nDUjD_UD6Mu-VsqQRzSFuArTINAfcbKxQgvb2feP_FReFeNRaQy3yG69ql1341_4Ghj2tZ8c99",
  },
  {
    number: "۰۲",
    subtitle: "اتاق‌های آرامش",
    title: "حمام لوکس",
    description:
      "پناهگاه‌های سفارشی با استفاده از متریال‌های نادر، سیستم‌های نورپردازی یکپارچه و عایق‌کاری ساختاری.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCM3_M5xGoic38PTBPp4HCwNYidjK8fGYdFrH9UgJ6Uft64ZdrSlCd5GVXXdZuqh7J_KxZ7SD20hNAxZwa4T6ihsA7Mu0qR1drXP-GPRzgJuY2NpZIM5U3_MiNNWPQJ44_i2Jp4QzHRvznXduzudeCNcQF85Mz_2zNZ5SYRK4XC0bxOqpHsoooBshzsQVFW7Ep71eaDKJKHXwHk1bIUbYiEQNUALs8uU5_xQYMePnau8dd9s1Q8qmKnEzqQ8zbFRnOQAj2kM2ZZF8h3",
  },
  {
    number: "۰۳",
    subtitle: "گسترش فضا",
    title: "بسط‌های ساختاری",
    description:
      "یکپارچه‌سازی بی‌نقص حجم‌های جدید، تخصص در کارهای فولادی پیچیده و شیشه‌بندی معماری.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAVgBjt8FadLfWFR2EnflIoGFVte3OfryPpqarHOqKfR-JkrAj3-sfxLrF9r45ETKzRM8UHcvQP9M9wJy2Dwx3rcWdGdgrHfYbPg1HZSyZQ7p3xX1_SHKvsymrVw3giVn6BD5AF0tAzKOqsmN09zGeg5w7f2ah5rfJO7_GGhtBHlH90MJFid_Sff1bLG_IuAh_yVoyZPF5ZyBuYeRQpETBdcR6GqRTdyU6WP8MjpQrEAXGeG2WS98H57ZrApQdIGAaCOGfBKW0L3ObY",
  },
];

export default function StructuraServices() {
  return (
    <section className="py-24 bg-surface-container-low" id="services">
      <div className="max-w-[1440px] mx-auto px-4 md:px-16">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 reveal">
          <div className="max-w-2xl">
            <h2 className="font-[family-name:var(--font-vazirmatn)] text-[24px] md:text-[40px] leading-[36px] md:leading-[56px] font-extrabold text-primary mb-4">
              تخصص‌های اصلی
            </h2>
            <p className="font-[family-name:var(--font-vazirmatn)] text-[18px] leading-[28px] text-on-surface-variant">
              ما تخصص فنی را با دید معماری ترکیب می‌کنیم تا فضاهایی از نظر
              ساختاری مستحکم و از نظر زیبایی بی‌نظیر ارائه دهیم.
            </p>
          </div>
          <div className="hidden md:block font-[family-name:var(--font-vazirmatn)] text-[14px] leading-5 text-secondary mt-4">
            فهرست خدمات
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {SERVICES.map((service, i) => (
            <div
              key={service.number}
              className="group bg-surface-container-lowest border border-outline-variant rounded-2xl overflow-hidden hover:border-primary hover:shadow-[0_4px_20px_rgba(0,0,0,0.04)] transition-all duration-500 reveal"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              {/* Image */}
              <div className="h-64 overflow-hidden rounded-t-2xl">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>

              {/* Content */}
              <div className="p-8">
                <span className="font-[family-name:var(--font-vazirmatn)] text-[12px] leading-4 text-secondary mb-2 block">
                  {service.number} / {service.subtitle}
                </span>
                <h3 className="font-[family-name:var(--font-vazirmatn)] text-[24px] leading-[36px] font-extrabold mb-4">
                  {service.title}
                </h3>
                <p className="font-[family-name:var(--font-vazirmatn)] text-[16px] leading-[24px] text-on-surface-variant mb-6">
                  {service.description}
                </p>
                <a
                  href="#"
                  className="flex items-center gap-2 font-[family-name:var(--font-vazirmatn)] text-[14px] leading-5 text-tertiary group-hover:text-primary transition-colors"
                >
                  مشاهده مشخصات
                  <svg
                    className="rotate-180"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
