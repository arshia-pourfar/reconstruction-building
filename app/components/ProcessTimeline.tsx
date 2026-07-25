const steps = [
  {
    num: "۰۱",
    title: "اسکن سه‌بعدی و مشاوره",
    desc: "بازدید رایگان از محل، اسکن سه‌بعدی فضا و بررسی نیازها و بودجه شما.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
  },
  {
    num: "۰۲",
    title: "طراحی و رندر VR",
    desc: "ارائه رندر فوتورئالیستیک و پیش‌نمایش واقعیت مجازی قبل از شروع اجرا.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
  },
  {
    num: "۰۳",
    title: "اجرای فنی",
    desc: "اجرای دقیق با نظارت مستمر بر کیفیت متریال و اجرا توسط تیم متخصص.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
      </svg>
    ),
  },
  {
    num: "۰۴",
    title: "تحویل هوشمند",
    desc: "تحویل نهایی با گارانتی ۲۴ ماهه، آموزش سیستم‌های هوشمند و پشتیبانی مستمر.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="20 6 9 17 4 12" />
      </svg>
    ),
  },
];

export default function ProcessTimeline() {
  return (
    <section className="w-full" style={{ padding: "var(--section-pad) var(--side-pad)", background: "var(--matte-slate)" }}>
      <div className="mx-auto max-w-[var(--container-max)]">
        <div className="flex flex-col items-center mb-16">
          <div className="inline-flex items-center h-8 px-[18px] rounded-full mb-6" style={{ background: "rgba(255,255,255,0.1)" }}>
            <span className="text-xs font-semibold tracking-[1.5px] uppercase text-[var(--oak)]">فرآیند کار</span>
          </div>
          <h2 className="text-[40px] font-semibold leading-[1.15] tracking-tight text-center mb-4" style={{ color: "var(--off-white)" }}>
            از ایده تا اجرا
          </h2>
        </div>

        <div className="grid gap-8 relative grid-cols-4">
          {/* Connecting line */}
          <div className="absolute top-7 left-[12.5%] right-[12.5%] h-0.5" style={{ background: "linear-gradient(90deg, rgba(37,99,235,0.2), rgba(37,99,235,0.5) 50%, rgba(37,99,235,0.2))" }} />

          {steps.map((step) => (
            <div key={step.num} className="flex flex-col items-center text-center relative">
              <div className="flex items-center justify-center w-14 h-14 rounded-full mb-5 relative z-[2]" style={{ background: "rgba(37,99,235,0.1)", border: "2px solid rgba(37,99,235,0.3)" }}>
                <div style={{ color: "var(--blue-cta)" }}>{step.icon}</div>
              </div>
              <div className="text-sm font-bold mb-2 text-[var(--blue-cta)]">{step.num}</div>
              <h3 className="text-base font-bold m-0 mb-2 text-[var(--off-white)]">{step.title}</h3>
              <p className="text-[13px] leading-[1.65] m-0" style={{ color: "rgba(246,244,241,0.5)" }}>{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
