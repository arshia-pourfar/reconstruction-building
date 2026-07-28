"use client";

const STEPS = [
  {
    number: "۰۱",
    title: "مشاوره",
    description:
      "با یک تحلیل دقیق سایت و مطالعه امکان‌سنجی شروع می‌کنیم. درک سبک زندگی شما و پتانسیل ساختاری سایت، پایه کار ماست.",
  },
  {
    number: "۰۲",
    title: "طراحی",
    description:
      "دقت فنی با دید خلاقانه ترکیب می‌شود. ما مدل‌های BIM دقیق و مشخصات متریال تولید می‌کنیم تا هر میلی‌متر مشخص باشد.",
  },
  {
    number: "۰۳",
    title: "اجرا",
    description:
      "تیم‌های ساخت ما با انضباط مهندسی عمل می‌کنند. تمام لجستیک ساختاری و نازک‌کاری را مدیریت می‌کنیم تا کمال را به موقع تحویل دهیم.",
  },
];

export default function StructuraProcess() {
  return (
    <section
      className="py-24 bg-primary text-on-primary relative overflow-hidden"
      id="process"
    >
      {/* Blueprint Grid Background */}
      <div className="absolute inset-0 pointer-events-none opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)",
            backgroundSize: "400px 400px",
            border: "1px solid rgba(255,255,255,0.1)",
          }}
        />
      </div>

      <div className="max-w-[1440px] mx-auto px-4 md:px-16 relative z-10">
        {/* Header */}
        <div className="mb-20 reveal">
          <span className="font-[family-name:var(--font-vazirmatn)] text-[14px] leading-5 text-secondary-fixed-dim">
            گردش کار
          </span>
          <h2 className="font-[family-name:var(--font-vazirmatn)] text-[24px] md:text-[40px] leading-[36px] md:leading-[56px] font-extrabold mt-4">
            نقشه راه تا واقعیت
          </h2>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          {STEPS.map((step) => (
            <div
              key={step.number}
              className="step-card border-r border-on-primary-container/20 pr-8 py-8 transition-all duration-500"
            >
              <div className="font-[family-name:var(--font-vazirmatn)] text-[32px] md:text-[64px] leading-[48px] md:leading-[72px] font-extrabold text-secondary opacity-50 mb-4">
                {step.number}
              </div>
              <h3 className="font-[family-name:var(--font-vazirmatn)] text-[24px] leading-[36px] font-extrabold mb-6">
                {step.title}
              </h3>
              <p className="font-[family-name:var(--font-vazirmatn)] text-[18px] leading-[28px] text-on-primary-container">
                {step.description}
              </p>
              <div className="mt-8 h-px bg-on-primary-container/20 w-20" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
