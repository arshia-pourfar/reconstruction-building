"use client";

export default function Hero() {
  return (
    <section className="hero-v2">
      {/* Background image */}
      <div className="hero-v2-bg">
        <img
          src="/hero-image.png"
          alt="بازسازی مدرن خانه"
          className="hero-v2-bg-img"
        />
        <div className="hero-v2-bg-overlay" />
      </div>

      {/* Content overlay */}
      <div className="hero-v2-content">
        {/* Eyebrow pill */}
        <div className="hero-v2-eyebrow">
          <span className="hero-v2-eyebrow-dot" />
          <span>بازسازی سه‌بعدی تعاملی</span>
        </div>

        {/* Headline */}
        <h1 className="hero-v2-headline">
          طراحی و بازسازی مدرن
          <br />
          خانه شما
        </h1>

        {/* Subheadline */}
        <p className="hero-v2-sub">
          با تجربه اسکرول سه‌بعدی، فضای رویایی خود را زندگی کنید.
        </p>

        {/* CTA Button */}
        <a href="/contact" className="hero-v2-cta">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
          </svg>
          مشاوره رایگان
        </a>

        {/* Trust indicators */}
        <div className="hero-v2-trust">
          <div className="hero-v2-trust-item">
            <span className="hero-v2-trust-num">۱۵۰+</span>
            <span className="hero-v2-trust-label">پروژه موفق</span>
          </div>
          <div className="hero-v2-trust-sep" />
          <div className="hero-v2-trust-item">
            <span className="hero-v2-trust-num">۱۲</span>
            <span className="hero-v2-trust-label">سال تجربه</span>
          </div>
          <div className="hero-v2-trust-sep" />
          <div className="hero-v2-trust-item">
            <span className="hero-v2-trust-num">۹۸٪</span>
            <span className="hero-v2-trust-label">رضایت مشتری</span>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="hero-v2-scroll">
        <div className="hero-v2-scroll-line" />
        <span>اسکرول کنید</span>
      </div>
    </section>
  );
}
