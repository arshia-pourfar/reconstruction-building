"use client";

const spaceTypes = ["آپارتمان", "ویلایی", "اداری", "تجاری", "other"];

export default function QuickContact() {
  return (
    <section className="qc-section">
      <div className="qc-inner">
        <div data-aos="fade-up" className="qc-header">
          <div className="eyebrow">
            <span className="eyebrow-text">تماس سریع</span>
          </div>
          <h2 className="qc-headline">مشاوره رایگان دریافت کنید</h2>
          <p className="qc-sub">
            فرم را پر کنید، ظرف ۲۴ ساعت با شما تماس می‌گیریم.
          </p>
        </div>

        <div data-aos="fade-up" data-aos-delay="100" className="qc-grid">
          <div className="qc-form-card">
            <form className="qc-form" onSubmit={(e) => e.preventDefault()}>
              <div className="qc-field">
                <label className="qc-label" htmlFor="qc-name">نام و نام خانوادگی</label>
                <input
                  id="qc-name"
                  type="text"
                  placeholder="نام خود را وارد کنید"
                  className="qc-input"
                  required
                />
              </div>
              <div className="qc-field">
                <label className="qc-label" htmlFor="qc-phone">شماره تماس</label>
                <input
                  id="qc-phone"
                  type="tel"
                  placeholder="۰۹۱۲۱۲۳۴۵۶۷"
                  className="qc-input"
                  dir="ltr"
                  required
                />
              </div>
              <div className="qc-field">
                <label className="qc-label" htmlFor="qc-space">نوع فضا</label>
                <select id="qc-space" className="qc-select">
                  {spaceTypes.map((t) => (
                    <option key={t} value={t}>{t}</option>
                  ))}
                </select>
              </div>
              <button type="submit" className="qc-submit">
                ارسال درخواست
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="22" y1="2" x2="11" y2="13" />
                  <polygon points="22 2 15 22 11 13 2 9 22 2" />
                </svg>
              </button>
            </form>
          </div>

          <div className="qc-info">
            <div className="qc-info-block">
              <span className="qc-info-label">آدرس دفتر</span>
              <p className="qc-info-text">
                تهران، خیابان ولیعصر، خیابان عباس آباد، پلاک ۱۲۳
              </p>
            </div>
            <div className="qc-info-block">
              <span className="qc-info-label">تلفن تماس</span>
              <a href="tel:+989121234567" className="qc-info-link">
                ۰۹۱۲-۱۲۳-۴۵۶۷
              </a>
            </div>
            <div className="qc-info-block">
              <span className="qc-info-label">ایمیل</span>
              <a href="mailto:info@bazsazi-no.ir" className="qc-info-link">
                info@bazsazi-no.ir
              </a>
            </div>
            <div className="qc-map">
              <div className="qc-map-inner">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <span>موقعیت دفتر</span>
              </div>
            </div>
          </div>
        </div>

        <div data-aos="fade-up" data-aos-delay="300" className="qc-trust">
          <span className="qc-trust-item">+۵۰۰ مشاوره رایگان</span>
          <span className="qc-trust-sep">·</span>
          <span className="qc-trust-item">بدون تعهد</span>
          <span className="qc-trust-sep">·</span>
          <span className="qc-trust-item">پاسخ در ۲۴ ساعت</span>
        </div>
      </div>
    </section>
  );
}
