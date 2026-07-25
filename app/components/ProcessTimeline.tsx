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
    <section className="process-section">
      <div className="process-inner">
        <div className="process-header">
          <div className="eyebrow" style={{ background: "rgba(255,255,255,0.1)" }}>
            <span className="eyebrow-text">فرآیند کار</span>
          </div>
          <h2 className="section-headline" style={{ color: "var(--off-white)" }}>
            از ایده تا اجرا
          </h2>
        </div>

        <div className="process-timeline">
          {/* Connecting line */}
          <div className="process-line" />

          {steps.map((step, i) => (
            <div key={step.num} className="process-step">
              <div className="process-step-dot">
                <div className="process-step-icon">{step.icon}</div>
              </div>
              <div className="process-step-num">{step.num}</div>
              <h3 className="process-step-title">{step.title}</h3>
              <p className="process-step-desc">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
