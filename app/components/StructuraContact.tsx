export default function StructuraContact() {
  return (
    <section className="py-24 bg-surface text-on-surface" id="contact">
      <div className="max-w-[1440px] mx-auto px-4 md:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          {/* Right: Contact Details (RTL = right side is first) */}
          <div className="reveal">
            <span className="font-[family-name:var(--font-vazirmatn)] text-[14px] leading-5 text-secondary block mb-4">
              ارتباط با ما
            </span>
            <h2 className="font-[family-name:var(--font-vazirmatn)] text-[24px] md:text-[40px] leading-[36px] md:leading-[56px] font-extrabold mb-8">
              پروژه خود را شروع کنید
            </h2>
            <p className="font-[family-name:var(--font-vazirmatn)] text-[18px] leading-[28px] text-on-surface-variant mb-12 max-w-md">
              آماده بازتعریف فضای خود هستید؟ مشاوران مهندسی ما برای بررسی‌های
              فنی ساختاری پیچیده در دسترس هستند.
            </p>

            <div className="space-y-8">
              {/* Address */}
              <div className="flex items-start gap-4">
                <svg
                  className="text-secondary mt-1 shrink-0"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <div>
                  <h4 className="font-[family-name:var(--font-vazirmatn)] text-[14px] leading-5 mb-2">
                    دفتر مرکزی
                  </h4>
                  <p className="font-[family-name:var(--font-vazirmatn)] text-[16px] leading-[24px] text-on-surface-variant">
                    منطقه صنعتی، واحد ۴۰۲
                    <br />
                    میدان معماری، لندن SE1
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4">
                <svg
                  className="text-secondary mt-1 shrink-0"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                <div>
                  <h4 className="font-[family-name:var(--font-vazirmatn)] text-[14px] leading-5 mb-2">
                    خط مستقیم
                  </h4>
                  <p className="font-[family-name:var(--font-vazirmatn)] text-[16px] leading-[24px] text-on-surface-variant">
                    +44 (0) 20 7946 0123
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4">
                <svg
                  className="text-secondary mt-1 shrink-0"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
                <div>
                  <h4 className="font-[family-name:var(--font-vazirmatn)] text-[14px] leading-5 mb-2">
                    درخواست‌های پروژه
                  </h4>
                  <p className="font-[family-name:var(--font-vazirmatn)] text-[16px] leading-[24px] text-on-surface-variant">
                    projects@structura.arch
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Left: Contact Form (RTL = left side is second) */}
          <div className="bg-primary p-10 md:p-16 text-on-primary rounded-2xl reveal">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="font-[family-name:var(--font-vazirmatn)] text-[12px] leading-4 opacity-60">
                    نام کامل
                  </label>
                  <input
                    type="text"
                    placeholder="علی رضایی"
                    className="w-full bg-transparent border-b border-on-primary/20 p-2 focus:border-secondary outline-none transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <label className="font-[family-name:var(--font-vazirmatn)] text-[12px] leading-4 opacity-60">
                    آدرس ایمیل
                  </label>
                  <input
                    type="email"
                    placeholder="ali@example.com"
                    className="w-full bg-transparent border-b border-on-primary/20 p-2 focus:border-secondary outline-none transition-colors"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="font-[family-name:var(--font-vazirmatn)] text-[12px] leading-4 opacity-60">
                  نوع پروژه
                </label>
                <select className="w-full bg-transparent border-b border-on-primary/20 p-2 focus:border-secondary outline-none transition-colors appearance-none cursor-pointer">
                  <option className="bg-primary text-on-primary">
                    بازسازی آشپزخانه
                  </option>
                  <option className="bg-primary text-on-primary">
                    حمام لوکس
                  </option>
                  <option className="bg-primary text-on-primary">
                    بسط ساختاری
                  </option>
                  <option className="bg-primary text-on-primary">
                    بازسازی تجاری
                  </option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="font-[family-name:var(--font-vazirmatn)] text-[12px] leading-4 opacity-60">
                  پیام
                </label>
                <textarea
                  placeholder="چشم‌انداز ساختاری خود را توضیح دهید..."
                  rows={4}
                  className="w-full bg-transparent border-b border-on-primary/20 p-2 focus:border-secondary outline-none transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-tertiary text-on-tertiary font-[family-name:var(--font-vazirmatn)] text-[14px] leading-5 py-5 rounded-lg hover:shadow-[0_4px_20px_rgba(99,102,241,0.25)] hover:brightness-110 transition-all mt-4"
              >
                ارسال درخواست
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
