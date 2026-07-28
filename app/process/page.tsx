import StructuraFooter from "../components/StructuraFooter";

const RULES = [
  {
    code: "قانون_۰۱",
    title: "یکپارچگی ساختاری",
    description:
      "هر بازسازی با برتری مهندسی شروع می‌شود. قبل از زیباسازی تثبیت می‌کنیم و اطمینان حاصل می‌کنیم که استخوان‌های خانه شما برای قرن بعد ساخته شده است.",
  },
  {
    code: "قانون_۰۲",
    title: "صداقت متریال",
    description:
      "فولاد خام، بتن و چوب را جشن می‌گیریم. اصالت انتخاب پایان ماست—قوت و بافت عناصری را که فضا را نگه می‌دارند به نمایش می‌گذاریم.",
  },
  {
    code: "قانون_۰۳",
    title: "مهندسی دقیق",
    description:
      "اجرای دقیق میلی‌متری نه هدف، بلکه خط مباست. فرآیند ساخت ما از مدل‌سازی با مشخصات بالا استفاده می‌کند.",
  },
];

const STEPS = [
  {
    number: "۰۱",
    title: "ممیزی ساختاری",
    description:
      "تحلیل استخوان‌های سایت از طریق تصویربرداری حرارتی و اسکن‌های ساختاری. پتانسیل باربری و محدودیت‌های پنهان را شناسایی می‌کنیم.",
  },
  {
    number: "۰۲",
    title: "طراحی و ساخت",
    description:
      "تهیه نقشه‌های دقیق و مدل‌های سه‌بعدی. تغییرات ساختاری را در یک محیط مجازی شبیه‌سازی می‌کنیم.",
  },
  {
    number: "۰۳",
    title: "تخریب دقیق",
    description:
      "حذف دقیق عناصر قدیمی. فضا را با دقت جراحی به اصل آن برمی‌گردانیم.",
  },
  {
    number: "۰۴",
    title: "مونتاژ صنعتی",
    description:
      "ساخت و نازک‌کاری نهایی. اجزای پیش‌ساخته فولادی و مasonry سفارشی را با پایان درجه صنعتی نصب می‌کنیم.",
  },
];

export default function ProcessPage() {
  return (
    <main className="pt-20">
      {/* ═══ HERO ═══════════════════════════════════════ */}
      <section className="relative h-[70vh] flex items-center overflow-hidden border-b border-outline-variant">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "radial-gradient(circle, #e3e2e2 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />
        <div className="absolute top-0 right-0 w-1/3 h-full border-l border-primary/20 pointer-events-none">
          <div className="absolute top-1/4 left-0 w-full h-px bg-primary/20" />
          <div className="absolute top-3/4 left-0 w-full h-px bg-primary/20" />
        </div>

        <div className="container mx-auto px-4 md:px-16 max-w-[1440px] z-10">
          <div className="max-w-3xl">
            <span className="font-[family-name:var(--font-vazirmatn)] text-[14px] leading-5 text-secondary mb-4 block">
              فاز ۰۰ // روش‌شناسی
            </span>
            <h1 className="font-[family-name:var(--font-vazirmatn)] text-[32px] md:text-[64px] leading-[48px] md:leading-[80px] font-extrabold mb-8">
              روش ساختارا
            </h1>
            <p className="font-[family-name:var(--font-vazirmatn)] text-[18px] leading-[28px] text-on-surface-variant max-w-xl mb-12">
              دقت مهندسی با دید معماری ترکیب می‌شود. ما فقط بازسازی نمی‌کنیم؛
              فضاها را از هسته بازآفرینی می‌کنیم و زیبایی خام ضرورت ساختاری را
              جشن می‌گیریم.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 items-center">
              <button
                className="bg-tertiary text-on-primary px-10 py-4 rounded-xl font-[family-name:var(--font-vazirmatn)] text-[14px] leading-5 hover:bg-secondary transition-all"
                style={{ boxShadow: "0 2px 8px rgba(99,102,241,0.15)" }}
              >
                مشاهده مشخصات
              </button>
              <div className="flex items-center gap-4 text-tertiary font-[family-name:var(--font-vazirmatn)] text-[14px] leading-5 py-4">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                </svg>
                تضمین برتری فنی
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ CORE PRINCIPLES ═══════════════════════════ */}
      <section className="py-24 border-b border-outline-variant">
        <div className="container mx-auto px-4 md:px-16 max-w-[1440px]">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <h2 className="font-[family-name:var(--font-vazirmatn)] text-[24px] md:text-[40px] leading-[36px] md:leading-[56px] font-extrabold">
              اصول
              <br />
              اصلی
            </h2>
            <div className="w-full md:w-1/2 h-px bg-outline-variant mb-4" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-r border-t border-outline-variant">
            {RULES.map((rule) => (
              <div
                key={rule.code}
                className="p-10 border-l border-b border-outline-variant rounded-2xl group hover:bg-surface-container-low transition-colors"
              >
                <div className="text-secondary font-[family-name:var(--font-vazirmatn)] text-[14px] leading-5 mb-8">
                  {rule.code}
                </div>
                <h3 className="font-[family-name:var(--font-vazirmatn)] text-[24px] leading-[36px] font-extrabold mb-4">
                  {rule.title}
                </h3>
                <p className="font-[family-name:var(--font-vazirmatn)] text-[16px] leading-[24px] text-on-surface-variant">
                  {rule.description}
                </p>
                <div className="mt-8 flex justify-end opacity-0 group-hover:opacity-100 transition-opacity">
                  <svg
                    className="text-secondary"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                    <polyline points="22 4 12 14.01 9 11.01" />
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ STEPS TO TRANSFORMATION ══════════════════ */}
      <section className="py-24 bg-surface-container-low">
        <div className="container mx-auto px-4 md:px-16 max-w-[1440px]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
            <div>
              <span className="font-[family-name:var(--font-vazirmatn)] text-[14px] leading-5 text-secondary mb-4 block">
                خط لوله گردش کار
              </span>
              <h2 className="font-[family-name:var(--font-vazirmatn)] text-[24px] md:text-[40px] leading-[36px] md:leading-[56px] font-extrabold mb-12">
                مراحل تبدیل
              </h2>
              <div className="space-y-12">
                {STEPS.map((step, i) => (
                  <div
                    key={step.number}
                    className="relative pr-16 group"
                  >
                    {i < STEPS.length - 1 && (
                      <div
                        className="absolute right-5 top-10 bottom-[-24px] w-px bg-outline-variant"
                      />
                    )}
                    <div
                      className="absolute right-0 top-0 w-10 h-10 border border-outline-variant rounded-xl bg-background flex items-center justify-center font-[family-name:var(--font-vazirmatn)] text-[14px] leading-5 z-10 group-hover:bg-secondary group-hover:text-white transition-colors"
                    >
                      {step.number}
                    </div>
                    <h4 className="font-[family-name:var(--font-vazirmatn)] text-[24px] leading-[36px] font-extrabold mb-2">
                      {step.title}
                    </h4>
                    <p className="font-[family-name:var(--font-vazirmatn)] text-[16px] leading-[24px] text-on-surface-variant">
                      {step.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div
                className="aspect-[4/5] bg-surface-container overflow-hidden rounded-2xl border border-outline-variant"
                style={{ boxShadow: "0 2px 8px rgba(0,0,0,0.08)" }}
              >
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDkP_JwtttTsf8FIRPKao9nqL6UykrluSRTqdDnDDnZtEZBUmn_5vC1v-VlTqBJq8QbFkkiLgScl498NmP3U5PMvvI2PGAIxKrAxvs9ss7mB-5ig5e8GBLqd9itjCiyLOl6GLvjpXGDiBrSYCKfE-QuqogzcvuPOideBaw5vpH7UejVDxLvlOHczoY0jFph1rKqJnOf5zfE02dBEWlgiDnX1xTci9egQ7XtuAcvBo9Peot6Vo9qGbl3LCNotH_uyzo2KBP5L9jiq-tG"
                  alt="تقویت ساختاری"
                  className="w-full h-full object-cover grayscale-[50%] hover:grayscale-0 transition-all duration-700"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-tertiary text-on-primary p-8 max-w-xs rounded-2xl">
                <div className="font-[family-name:var(--font-vazirmatn)] text-[14px] leading-5 text-secondary mb-2">
                  شکل_۰۶A
                </div>
                <p className="font-[family-name:var(--font-vazirmatn)] text-[14px] leading-[20px] italic opacity-80">
                  &quot;فاز تقویت ساختاری با استفاده از تیرهای فولادی تقویت
                  شده و سیستم‌های براکتینگ جانبی.&quot;
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ CTA ═══════════════════════════════════════ */}
      <section className="py-24 border-y border-outline-variant">
        <div className="container mx-auto px-4 md:px-16 max-w-[1440px] text-center">
          <h2 className="font-[family-name:var(--font-vazirmatn)] text-[32px] md:text-[64px] leading-[48px] md:leading-[80px] font-extrabold mb-8">
            برای ماندن بسازید
          </h2>
          <p className="font-[family-name:var(--font-vazirmatn)] text-[18px] leading-[28px] max-w-2xl mx-auto mb-12">
            آماده تبدیل فضای خود با طراحی مبتنی بر مهندسی هستید؟ ممیزی
            ساختاری خود را امروز شروع کنید.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <button className="bg-secondary text-white px-12 py-5 rounded-xl font-[family-name:var(--font-vazirmatn)] text-[14px] leading-5 hover:bg-primary transition-all">
              شروع مشاوره
            </button>
            <button className="border border-outline-variant text-tertiary px-12 py-5 rounded-xl font-[family-name:var(--font-vazirmatn)] text-[14px] leading-5 hover:bg-surface-container-highest transition-all">
              دانلود بروشور
            </button>
          </div>
        </div>
      </section>

      <StructuraFooter />
    </main>
  );
}
