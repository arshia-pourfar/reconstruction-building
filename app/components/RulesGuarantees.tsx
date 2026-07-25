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
    <section className="w-full bg-[var(--off-white)]" style={{ padding: "var(--section-pad) var(--side-pad)", maxWidth: "var(--container-max)", margin: "0 auto" }}>
      <div className="mx-auto max-w-[var(--container-max)]">
        <div className="flex flex-col items-center" style={{ marginBottom: "var(--heading-gap)" }}>
          <div className="inline-flex items-center h-8 px-[18px] rounded-full mb-6 bg-[var(--matte-slate)]">
            <span className="text-xs font-semibold tracking-[1.5px] uppercase text-[var(--oak)]">ضمانت‌ها</span>
          </div>
          <h2 className="text-[40px] font-semibold leading-[1.15] tracking-tight text-center mb-4 text-[var(--foreground)]">تعهدات و ضمانت‌نامه</h2>
        </div>

        <div className="grid gap-6 grid-cols-3">
          {guarantees.map((g) => (
            <div key={g.title} className="flex flex-col items-center text-center p-9 rounded-[20px] transition-transform duration-300 hover:-translate-y-1" style={{ background: "rgba(255,255,255,0.5)", backdropFilter: "blur(12px)", border: "1px solid rgba(255,255,255,0.6)", boxShadow: "0 20px 48px rgba(0,0,0,0.08)" }}>
              <div className="flex items-center justify-center w-14 h-14 rounded-[14px] mb-5" style={{ background: "rgba(37,99,235,0.06)", color: "var(--blue-cta)" }}>{g.icon}</div>
              <h3 className="text-lg font-bold m-0 mb-2.5 text-[var(--foreground)]">{g.title}</h3>
              <p className="text-sm leading-[1.65] m-0 text-[var(--concrete)]">{g.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
