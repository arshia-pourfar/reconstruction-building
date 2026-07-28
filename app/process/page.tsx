import StructuraFooter from "../components/StructuraFooter";
import RoadmapLine from "../components/RoadmapLine";
import WorkflowSteps from "../components/WorkflowSteps";
import PageBanner from "../components/PageBanner";

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
      <PageBanner
        image="/banners/Gemini_Generated_Image_u8qf60u8qf60u8qf (1).png"
        phase="فاز ۰۰ // روش‌شناسی"
        title="روش"
        titleSuffix="ساختارا"
        description="دقت مهندسی با دید معماری ترکیب می‌شود. ما فقط بازسازی نمی‌کنیم؛ فضاها را از هسته بازآفرینی می‌کنیم و زیبایی خام ضرورت ساختاری را جشن می‌گیریم."
      />

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
      <WorkflowSteps />

      {/* ═══ ROADMAP TO REALITY ══════════════════════ */}
      <RoadmapLine />

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
            <button className="bg-secondary text-white px-12 py-5 rounded-lg font-[family-name:var(--font-vazirmatn)] text-[14px] leading-5 hover:bg-primary transition-all">
              شروع مشاوره
            </button>
            <button className="border border-outline-variant text-tertiary px-12 py-5 rounded-lg font-[family-name:var(--font-vazirmatn)] text-[14px] leading-5 hover:bg-surface-container-highest transition-all">
              دانلود بروشور
            </button>
          </div>
        </div>
      </section>

      <StructuraFooter />
    </main>
  );
}
