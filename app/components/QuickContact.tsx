"use client";

const spaceTypes = ["آپارتمان", "ویلایی", "اداری", "تجاری", "other"];

export default function QuickContact() {
  return (
    <section className="w-full" style={{ padding: "var(--section-pad) var(--side-pad)", background: "var(--matte-slate)" }}>
      <div className="mx-auto max-w-[var(--container-max)]">
        {/* Header */}
        <div className="flex flex-col items-center mb-12">
          <div className="inline-flex items-center h-8 px-[18px] rounded-full mb-6" style={{ background: "rgba(255,255,255,0.1)" }}>
            <span className="text-xs font-semibold tracking-[1.5px] uppercase text-[var(--oak)]">تماس سریع</span>
          </div>
          <h2 className="text-[40px] font-semibold leading-[1.15] tracking-tight text-center m-0 mb-4 text-[var(--off-white)]">مشاوره رایگان دریافت کنید</h2>
          <p className="text-base font-normal leading-[1.65] text-center m-0" style={{ color: "rgba(246,244,241,0.6)" }}>
            فرم را پر کنید، ظرف ۲۴ ساعت با شما تماس می‌گیریم.
          </p>
        </div>

        <div className="grid gap-6 mb-12 grid-cols-2">
          {/* Form card */}
          <div className="p-9 rounded-[20px]" style={{ background: "rgba(255,255,255,0.06)", backdropFilter: "blur(12px)", border: "1px solid rgba(246,244,241,0.08)" }}>
            <form className="flex flex-col gap-4" onSubmit={(e) => e.preventDefault()}>
              <div className="flex flex-col gap-1.5">
                <label className="text-[13px] font-semibold" style={{ color: "rgba(246,244,241,0.7)" }} htmlFor="qc-name">نام و نام خانوادگی</label>
                <input
                  id="qc-name"
                  type="text"
                  placeholder="نام خود را وارد کنید"
                  className="w-full h-12 px-4 text-sm outline-none transition-colors duration-200 font-[var(--font-persian)] text-[var(--off-white)] bg-black/25 rounded-xl placeholder:text-[rgba(246,244,241,0.35)] focus:border-[var(--oak)] focus:bg-black/[0.35]"
                  style={{ border: "1.5px solid rgba(246,244,241,0.1)" }}
                  required
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-[13px] font-semibold" style={{ color: "rgba(246,244,241,0.7)" }} htmlFor="qc-phone">شماره تماس</label>
                <input
                  id="qc-phone"
                  type="tel"
                  placeholder="۰۹۱۲۱۲۳۴۵۶۷"
                  className="w-full h-12 px-4 text-sm outline-none transition-colors duration-200 font-[var(--font-persian)] text-[var(--off-white)] bg-black/25 rounded-xl placeholder:text-[rgba(246,244,241,0.35)] focus:border-[var(--oak)] focus:bg-black/[0.35]"
                  style={{ border: "1.5px solid rgba(246,244,241,0.1)" }}
                  dir="ltr"
                  required
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-[13px] font-semibold" style={{ color: "rgba(246,244,241,0.7)" }} htmlFor="qc-space">نوع فضا</label>
                <select
                  id="qc-space"
                  className="w-full h-12 px-4 text-sm outline-none transition-colors duration-200 font-[var(--font-persian)] text-[var(--off-white)] bg-black/25 rounded-xl appearance-none cursor-pointer pr-9 bg-no-repeat bg-[length:12px_8px] bg-[right_16px_center] placeholder:text-[rgba(246,244,241,0.35)] focus:border-[var(--oak)] focus:bg-black/[0.35]"
                  style={{ border: "1.5px solid rgba(246,244,241,0.1)", backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='12' height='8' viewBox='0 0 12 8' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 1.5L6 6.5L11 1.5' stroke='%238A8A82' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E\")" }}
                >
                  {spaceTypes.map((t) => (
                    <option key={t} value={t}>{t}</option>
                  ))}
                </select>
              </div>
              <button type="submit" className="w-full inline-flex items-center justify-center gap-2.5 h-12 px-8 text-[15px] font-semibold rounded-full cursor-pointer transition-all duration-200 font-[var(--font-persian)] text-[var(--matte-slate)] bg-[var(--oak)] border-none hover:bg-[var(--oak-hover)] hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(179,140,96,0.25)] active:translate-y-0 active:shadow-none focus-visible:outline-2 focus-visible:outline-[var(--oak)] focus-visible:outline-offset-3">
                ارسال درخواست
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="22" y1="2" x2="11" y2="13" />
                  <polygon points="22 2 15 22 11 13 2 9 22 2" />
                </svg>
              </button>
            </form>
          </div>

          {/* Info side */}
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-1.5">
              <span className="text-xs font-semibold tracking-[1.5px] uppercase text-[var(--oak)]">آدرس دفتر</span>
              <p className="text-sm leading-[1.6] m-0 text-[var(--off-white)]">
                تهران، خیابان ولیعصر، خیابان عباس آباد، پلاک ۱۲۳
              </p>
            </div>
            <div className="flex flex-col gap-1.5">
              <span className="text-xs font-semibold tracking-[1.5px] uppercase text-[var(--oak)]">تلفن تماس</span>
              <a href="tel:+989121234567" className="text-sm font-medium no-underline transition-colors duration-200 text-[var(--off-white)] hover:text-[var(--oak)]">
                ۰۹۱۲-۱۲۳-۴۵۶۷
              </a>
            </div>
            <div className="flex flex-col gap-1.5">
              <span className="text-xs font-semibold tracking-[1.5px] uppercase text-[var(--oak)]">ایمیل</span>
              <a href="mailto:info@bazsazi-no.ir" className="text-sm font-medium no-underline transition-colors duration-200 text-[var(--off-white)] hover:text-[var(--oak)]">
                info@bazsazi-no.ir
              </a>
            </div>
            {/* Map placeholder */}
            <div className="w-full h-40 rounded-[20px] overflow-hidden" style={{ background: "linear-gradient(135deg, rgba(255,255,255,0.04), rgba(179,140,96,0.08))", border: "1px solid rgba(246,244,241,0.08)" }}>
              <div className="w-full h-full flex flex-col items-center justify-center gap-2" style={{ color: "rgba(246,244,241,0.4)", fontFamily: "var(--font-persian)", fontSize: "13px", fontWeight: 500 }}>
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <span>موقعیت دفتر</span>
              </div>
            </div>
          </div>
        </div>

        {/* Trust strip */}
        <div className="flex items-center justify-center gap-3">
          <span className="text-[13px]" style={{ color: "rgba(246,244,241,0.45)" }}>+۵۰۰ مشاوره رایگان</span>
          <span className="text-[13px]" style={{ color: "rgba(246,244,241,0.2)" }}>·</span>
          <span className="text-[13px]" style={{ color: "rgba(246,244,241,0.45)" }}>بدون تعهد</span>
          <span className="text-[13px]" style={{ color: "rgba(246,244,241,0.2)" }}>·</span>
          <span className="text-[13px]" style={{ color: "rgba(246,244,241,0.45)" }}>پاسخ در ۲۴ ساعت</span>
        </div>
      </div>
    </section>
  );
}
