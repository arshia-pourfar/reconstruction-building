"use client";

const guarantees = [
  {
    title: "تحویل به موقع",
    desc: "تأخیر بیش از ۳ روز کاری = جریمه نقدی. تعهد ما به زمان‌بندی، تضمینی است.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
  },
  {
    title: "پرداخت مرحله‌ای",
    desc: "هزینه پروژه در ۳ الی ۴ مرحله و پس از تأیید هر فاز پرداخت می‌شود.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" y1="1" x2="12" y2="23" />
        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </svg>
    ),
  },
  {
    title: "گارانتی ۲۴ ماهه",
    desc: "تمام خدمات بازسازی و نصب تجهیزات شامل ۲۴ ماه گارانتی کتبی است.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
];

export default function RulesGuarantees() {
  return (
    <section className="trust-section">
      <div className="trust-inner">
        <div data-aos="fade-up" className="trust-header">
          <div className="eyebrow">
            <span className="eyebrow-text">ضمانت‌ها</span>
          </div>
          <h2 className="section-headline">تعهدات و ضمانت‌نامه</h2>
        </div>

        <div data-aos="fade-up" data-aos-delay="100" className="trust-grid">
          {guarantees.map((g, i) => (
            <div
              key={g.title}
              data-aos="fade-up"
              data-aos-delay={200 + (i + 1) * 80}
              className="trust-card"
            >
              <div className="trust-card-icon">{g.icon}</div>
              <h3 className="trust-card-title">{g.title}</h3>
              <p className="trust-card-desc">{g.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
