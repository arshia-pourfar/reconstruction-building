import Link from "next/link";
import Footer from "../components/Footer";

const services = [
  {
    id: "modern",
    title: "طراحی و اجرای مدرن",
    desc: "طراحی مینیمال، میکروسمنت و نورپردازی توکار",
    fullDesc: "طراحی و اجرای فضاهای مدرن با تمرکز بر خطوط تمیز، متریال‌های خاص و نورپردازی حرفه‌ای. از میکروسمنت و بتن اکسپوز تا سیستم‌های نورپردازی توکار که فضا را زنده می‌کنند.",
    features: ["طراحی مینیمال", "میکروسمنت", "نورپردازی توکار", "بتن اکسپوز"],
    gradient: "linear-gradient(160deg, #E8E4DF 0%, #D4D0CB 40%, #C8C4BF 70%, #BCB8B3 100%)",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
  },
  {
    id: "luxury",
    title: "بازسازی لوکس و کلاسیک",
    desc: "قاب‌بندی، پتینه و متریال‌های خاص",
    fullDesc: "بازسازی فضاها با سبک لوکس و کلاسیک شامل قاب‌بندی‌های ظریف، تکنیک‌های پتینه کاری، و استفاده از متریال‌های خاص مانند سنگ مرمر، چوب طبیعی و فلزات برنجی.",
    features: ["قاب‌بندی ظریف", "پتینه کاری", "سنگ مرمر", "فلزات برنجی"],
    gradient: "linear-gradient(160deg, #3B4049 0%, #2A2D33 35%, #1F2127 65%, #B8956A 100%)",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ),
  },
  {
    id: "kitchen",
    title: "بازسازی آشپزخانه",
    desc: "کابینت‌های مدرن، جزیره و تجهیزات توکار",
    fullDesc: "بازسازی کامل آشپزخانه با طراحی ارگونومیک، کابینت‌های مدرن های‌گلاس یا چوبی، جزیره مرکزی، و تجهیزات توکار برای بهترین تجربه پخت‌وپز.",
    features: ["کابینت مدرن", "جزیره مرکزی", "تجهیزات توکار", "طراحی ارگونومیک"],
    gradient: "linear-gradient(160deg, #D4C4A8 0%, #C4A77D 35%, #B8956A 65%, #A89070 100%)",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
        <line x1="3" y1="9" x2="21" y2="9" />
        <line x1="9" y1="21" x2="9" y2="9" />
      </svg>
    ),
  },
  {
    id: "smart",
    title: "هوشمندسازی فضا",
    desc: "کنترل نور، دما و سیستم‌های BMS",
    fullDesc: "هوشمندسازی کامل فضای زندگی شامل کنترل هوشمند نور، دما، سیستم‌های امنیتی و مدیریت ساختمان (BMS) با اپلیکیشن موبایل.",
    features: ["کنترل نور هوشمند", "ترموستات هوشمند", "سیستم BMS", "اپلیکیشن موبایل"],
    gradient: "linear-gradient(160deg, #2A2D33 0%, #1B1D1F 35%, #141617 65%, #2563EB 100%)",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="4" y="4" width="16" height="16" rx="2" />
        <rect x="9" y="9" width="6" height="6" />
        <line x1="9" y1="1" x2="9" y2="4" />
        <line x1="15" y1="1" x2="15" y2="4" />
        <line x1="9" y1="20" x2="9" y2="23" />
        <line x1="15" y1="20" x2="15" y2="23" />
        <line x1="20" y1="9" x2="23" y2="9" />
        <line x1="20" y1="14" x2="23" y2="14" />
        <line x1="1" y1="9" x2="4" y2="9" />
        <line x1="1" y1="14" x2="4" y2="14" />
      </svg>
    ),
  },
];

const process = [
  { num: "۰۱", title: "مشاوره رایگان", desc: "بازدید از محل، بررسی نیازها و ارائه پیشنهاد اولیه" },
  { num: "۰۲", title: "طراحی سه‌بعدی", desc: "ارائه رندر فوتورئالیستیک قبل از شروع اجرا" },
  { num: "۰۳", title: "انتخاب متریال", desc: "معرفی بهترین متریال‌ها با توجه به بودجه و سلیقه" },
  { num: "۰۴", title: "اجرا و نظارت", desc: "اجرای دقیق با نظارت مستمر بر کیفیت کار" },
];

export default function ServicesPage() {
  return (
    <div className="services-page">
      {/* Header */}
      <header className="services-header">
        <div className="eyebrow">
          <span className="eyebrow-text">خدمات ما</span>
        </div>
        <h1 className="services-headline">طراحی و بازسازی تخصصی</h1>
        <p className="services-sub">
          از مشاوره تا اجرا، تمام مراحل بازسازی خانه رویایی‌تان را با ما تجربه کنید.
        </p>
      </header>

      {/* Services Grid */}
      <section className="services-grid-section">
        <div className="services-grid">
          {services.map((service) => (
            <div key={service.id} className="services-card">
              <div className="services-card-swatch" style={{ background: service.gradient }} />
              <div className="services-card-body">
                <div className="services-card-icon">{service.icon}</div>
                <h2 className="services-card-title">{service.title}</h2>
                <p className="services-card-desc">{service.fullDesc}</p>
                <div className="services-card-features">
                  {service.features.map((f) => (
                    <span key={f} className="services-feature-tag">{f}</span>
                  ))}
                </div>
                <Link href="/contact" className="services-card-link">
                  مشاوره رایگان
                  <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M10 4L6 8L10 12" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Process Section */}
      <section className="services-process-section">
        <div className="services-process-inner">
          <div className="services-process-header">
            <div className="eyebrow" style={{ background: "rgba(255,255,255,0.1)" }}>
              <span className="eyebrow-text">فرآیند کار</span>
            </div>
            <h2 className="section-headline" style={{ color: "var(--off-white)" }}>
              از ایده تا اجرا
            </h2>
          </div>
          <div className="services-process-grid">
            {process.map((step) => (
              <div key={step.num} className="services-process-step">
                <span className="services-process-num">{step.num}</span>
                <h3 className="services-process-title">{step.title}</h3>
                <p className="services-process-desc">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="services-cta-section">
        <div className="services-cta-inner">
          <h2 className="services-cta-title">آماده شروع پروژه هستید؟</h2>
          <p className="services-cta-desc">
            همین الان با ما تماس بگیرید و مشاوره رایگان دریافت کنید.
          </p>
          <div className="services-cta-actions">
            <Link href="/contact" className="btn-pill">
              درخواست مشاوره
            </Link>
            <a href="tel:+989121234567" className="btn-pill-dark">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              تماس تلفنی
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
