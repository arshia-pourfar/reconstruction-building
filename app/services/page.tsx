import StructuraFooter from "../components/StructuraFooter";
import PageBanner from "../components/PageBanner";

const SERVICES = [
  {
    number: "۰۱",
    title: "مهندسی ساختاری",
    badge: "هسته فنی",
    description:
      "پایه هر شاهکاری، یکپارچگی ساختاری آن است. راه‌حل‌های مهندسی جامعی ارائه می‌دهیم که امکان دهانه‌های معماری جسورانه و بازآرایی‌های پیچیده را فراهم می‌کند.",
    specs: [
      "تحلیل باربری",
      " مقاوم‌سازی لرزه‌ای",
      "سیستم‌های قاب‌بندی فولادی",
      "تقویت فونداسیون",
    ],
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuA7nrAiY9BAmU2i1JI2VhHPIsmqab-gWo4OAuAhMByg8NhBKRzHE_-4qGZrjZ9iOp5zum4PszirlUwPCmA7kZcIOXhkFCFP_3i0pqiDtaLB21l7c_bUZthBdOifXDVc6LcjWEnMajjCSjDC7F7VqZgAzi33DIQw3owjd2DPBA483XRJLiZDAEefb_7SdUvwcAhE9nc2ZSUcaJTYy8kqFuWsOnRkr2nqAFg9hACVVQG2bNV0APyASUKPGaKuML3y2r7QORX4Wqj47oPe",
  },
  {
    number: "۰۲",
    title: "طراحی معماری",
    badge: "نقشه خلاقانه",
    description:
      "پل بین دید مفهومی و واقعیت قابل ساخت. تیم طراحی ما فضاهایی ایجاد می‌کند که جسارت زیبایی‌شناختی را با دقت عملکردی ترکیب می‌کند.",
    specs: [
      "بهینه‌سازی فضا",
      "پیگیری مجوز",
      "یکپارچه‌سازی BIM",
      "مشخصات متریال",
    ],
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCMeCqMA87v-CyT0XIGP2olQWVMVWR5WuvtpIgdLHcoqnRgPeTeGdzo-eivg19ix3ErlxzHbVdaC1d_ooxBrIGlUALcKHBHlVbpOcmim5YWZEHcDXR5PP4FWzD0p57bzDfgeQN7p-ywSFhHfNCTw1zMi0sRC2pneLJSvDpT865aqvFfKG29Avg2V-P4WHcVYA-6GCe8MeEgWmXhDZDFZLuGKdSMrW9N0Bwx4JLdU4GUgLcNL7SstPQolyNEwQfjD3iu7r2F038HgrSA",
  },
  {
    number: "۰۳",
    title: "آشپزخانه و حمام",
    badge: "کار دقیق",
    description:
      "فنی‌ترین اتاق‌های هر خانه‌ای به دقت جراحی نیاز دارند. سیستم‌های لوله‌کشی و برقی پیچیده را با نازک‌کاری‌های درجه یک ترکیب می‌کنیم.",
    specs: [
      "کف‌گذاری آبی",
      "نجاری سفارشی",
      "اتصال سیستم‌های هوشمند",
      "برش سنگ",
    ],
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBidKUwVMNCjp4qzK4gnbvCADgzFxMvD3_nMwX1GHB1p4EDHY2udn0KvMf4BRsnVjEqecvmA0PgCEteDxhrcDvGnHP1nPB4aflXQ8aN2fRvuttsPTwc9xyFgOyQYLRscTnXEQw-RTgctEIAXJjNFi7eUaCfdJo_fA4Xw9JXasjHKNDJi8_s-4ewM1Qj-6NgbjNd4OuqPU0jRShkOtDtMwVDz1cfLut1Wxd52kjbmal-e9dDkgzr68Vq8Tk1zKekjPVP6wLmv26vNAlX",
  },
  {
    number: "۰۴",
    title: "دکوراسیون سفارشی",
    badge: "مجموعه منحصربفرد",
    description:
      "ارتقای زندگی روزمره از طریق عناصر داخلی مهندسی‌شده سفارشی. از پله‌های اوتانژان تا سیستم‌های نورپردازی گالری، محیط‌های بی‌نظیری ارائه می‌دهیم.",
    specs: [
      "مهندسی آکوستیک",
      "فلزکاری هنری",
      "プラン نورپردازی سفارشی",
      "سیستم‌های دیواری بافت‌دار",
    ],
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBvWT4LD2JSEfVZySZiqd4CDNNBPAQW81kzR5xZ4p9h1okyfLCzbA3PYnDZOKg9aNYhKyyVfegdgLhlaapArsky0u9u_OTyJXQIz2F8WBdy_8_KfTwZnRhk-EyDn1bjwpoLDMMSYuDM2fKVB2ZqvRAiYVCCbSFoLFWYAo83mxzhUzWL4egGT5m4Dy4R10jBEOyC-xclrqHrBsmL3JIBtOxCQBB2l8BceH1QyUx1mZ4xZWsLbjvP4hCbTrrKVs-XzufDSGBjRTdRdEXu",
  },
];

const PROCESS_STEPS = [
  {
    number: "۰۱",
    title: "تحلیل",
    description:
      "با یک ممیزی ساختاری دقیق و مطالعه امکان‌سنجی شروع می‌کنیم و محدودیت‌های مکانیکی فریم موجود را شناسایی می‌کنیم.",
  },
  {
    number: "۰۲",
    title: "اجرا",
    description:
      "استادکاران و مهندسان ما تبدیل را با دقت میلی‌متری اجرا می‌کنند و ایمنی ساختاری را در اولویت قرار می‌دهند.",
  },
  {
    number: "۰۳",
    title: "بررسی",
    description:
      "هر اتصال، جوش و نازک‌کاری تحت بازرسی چند نقطه‌ای سخت‌گیرانه قرار می‌گیرد تا اطمینان حاصل شود که چشم‌انداز بی‌نقص محقق شده است.",
  },
];

const FEATURES = [
  { label: "فنی", value: "ممیزی ساختاری" },
  { label: "زمان‌بندی", value: "گزینه‌های تسریع" },
  { label: "پشتیبانی", value: "مرکز پروژه ۲۴/۷" },
  { label: "موقعیت", value: " mobility جهانی" },
];

export default function ServicesPage() {
  return (
    <main className="pt-20">
      {/* ═══ HERO ═══════════════════════════════════════ */}
      <PageBanner
        image="/banners/Gemini_Generated_Image_u8qf60u8qf60u8qf (3).png"
        phase="خدمات // تخصص ما"
        title="خدمات"
        titleSuffix="دقیق"
        description="برتری مهندسی با دید معماری ترکیب می‌شود. ما در تبدیل دقیق فضاهای لوکس مسکونی و تجاری از طریق تسلط ساختاری و طراحی بی‌سازش تخصص داریم."
        align="right"
      />

      {/* ═══ SERVICE GRID ══════════════════════════════ */}
      <section className="py-24 bg-surface-container-lowest">
        <div className="px-4 md:px-16 max-w-[1440px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-x-6 md:gap-y-32">
            {SERVICES.map((service, i) => (
              <div
                key={service.number}
                className={`group ${i % 2 === 1 ? "md:mt-24" : ""}`}
              >
                <div className="flex items-start gap-6 mb-8">
                  <span className="font-[family-name:var(--font-vazirmatn)] text-[24px] leading-[36px] font-extrabold text-outline-variant">
                    {service.number}
                  </span>
                  <div className="flex-1">
                    <h2 className="font-[family-name:var(--font-vazirmatn)] text-[24px] md:text-[40px] leading-[36px] md:leading-[56px] font-extrabold mb-6 group-hover:text-secondary-container transition-colors">
                      {service.title}
                    </h2>

                    <div className="w-full aspect-video relative overflow-hidden mb-8 border border-outline rounded-2xl">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                      />
                      <div className="absolute bottom-0 right-0 bg-primary text-on-primary p-4 font-[family-name:var(--font-vazirmatn)] text-[12px] leading-4">
                        {service.badge}
                      </div>
                    </div>

                    <p className="font-[family-name:var(--font-vazirmatn)] text-[16px] leading-[24px] text-on-surface-variant mb-8 leading-relaxed">
                      {service.description}
                    </p>

                    <div className="border-t border-outline py-6">
                      <h4 className="font-[family-name:var(--font-vazirmatn)] text-[14px] leading-5 mb-4 text-primary">
                        {i === 0
                          ? "مشخصات فنی"
                          : i === 1
                            ? "پروتکل‌های طراحی"
                            : i === 2
                              ? "سیستم‌های فنی"
                              : "جزئیات تخصصی"}
                      </h4>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 font-[family-name:var(--font-vazirmatn)] text-[12px] leading-4 text-on-surface-variant">
                        {service.specs.map((spec) => (
                          <li
                            key={spec}
                            className="flex items-center gap-2"
                          >
                            <span className="w-2 h-2 bg-secondary-container" />
                            {spec}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <a
                      href="#"
                      className="inline-flex items-center gap-3 font-[family-name:var(--font-vazirmatn)] text-[14px] leading-5 text-primary border-b-2 border-primary pb-1 group-hover:border-secondary-container group-hover:text-secondary-container transition-all mt-4"
                    >
                      مشاهده پروژه‌ها
                      <svg
                        className="rotate-180"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ PROCESS HIGHLIGHT ═════════════════════════ */}
      <section className="bg-primary text-on-primary py-24 overflow-hidden relative">
        <div className="absolute top-0 left-0 h-full flex items-center justify-center opacity-5 pointer-events-none">
          <span
            className="text-[300px] font-black leading-none"
            style={{ writingMode: "vertical-rl", textOrientation: "mixed" }}
          >
            سیستم‌ها
          </span>
        </div>

        <div className="px-4 md:px-16 max-w-[1440px] mx-auto relative z-10">
          <div className="max-w-4xl">
            <div className="flex items-center gap-4 mb-12">
              <div className="h-px w-16 bg-tertiary" />
              <span className="font-[family-name:var(--font-vazirmatn)] text-[14px] leading-5 text-tertiary">
                چارچوب
              </span>
            </div>

            <h2 className="font-[family-name:var(--font-vazirmatn)] text-[24px] md:text-[40px] leading-[36px] md:leading-[56px] font-extrabold mb-16 max-w-2xl">
              فرآیند ساخته شده: از نقشه تا واقعیت
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {PROCESS_STEPS.map((step) => (
                <div key={step.number} className="relative group">
                  <span className="absolute -top-6 -right-4 text-6xl font-black text-on-primary-container opacity-20 group-hover:opacity-100 group-hover:text-tertiary transition-all duration-500">
                    {step.number}
                  </span>
                  <h3 className="font-[family-name:var(--font-vazirmatn)] text-[24px] leading-[36px] font-extrabold mb-4 relative">
                    {step.title}
                  </h3>
                  <p className="font-[family-name:var(--font-vazirmatn)] text-[16px] leading-[24px] text-on-primary-container leading-relaxed">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══ CTA SECTION ═══════════════════════════════ */}
      <section className="py-32 bg-surface">
        <div className="px-4 md:px-16 max-w-[1440px] mx-auto">
          <div
            className="border-2 border-primary p-12 md:p-20 relative bg-surface-bright overflow-hidden rounded-2xl"
            style={{ boxShadow: "0 4px 20px rgba(0,0,0,0.04)" }}
          >
            <div
              className="absolute inset-0 opacity-20 pointer-events-none"
              style={{
                backgroundImage:
                  "linear-gradient(to right, #e0e0e0 1px, transparent 1px), linear-gradient(to bottom, #e0e0e0 1px, transparent 1px)",
                backgroundSize: "40px 40px",
              }}
            />

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="font-[family-name:var(--font-vazirmatn)] text-[32px] md:text-[64px] leading-[48px] md:leading-[80px] font-extrabold text-primary mb-8">
                  آماده
                  <br />
                  ساختن هستید؟
                </h2>
                <p className="font-[family-name:var(--font-vazirmatn)] text-[18px] leading-[28px] text-on-surface-variant max-w-md mb-12">
                  هر تبدیل ساختاری با یک مکالمه شروع می‌شود. امروز مشاوره با
                  مهندسان اصلی ما را رزرو کنید.
                </p>
                <button className="bg-primary text-on-primary px-12 py-5 rounded-lg font-[family-name:var(--font-vazirmatn)] text-[14px] leading-5 hover:bg-secondary-container transition-all active:scale-95">
                  شروع پروژه
                </button>
              </div>

              <div className="grid grid-cols-2 gap-8">
                {FEATURES.map((f) => (
                  <div
                    key={f.label}
                    className="border-r-2 border-primary pr-6 py-4"
                  >
                    <span className="font-[family-name:var(--font-vazirmatn)] text-[14px] leading-5 text-secondary-container block mb-2">
                      {f.label}
                    </span>
                    <p className="font-[family-name:var(--font-vazirmatn)] text-[16px] leading-[24px] font-bold">
                      {f.value}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <StructuraFooter />
    </main>
  );
}
