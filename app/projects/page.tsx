import StructuraFooter from "../components/StructuraFooter";
import PageBanner from "../components/PageBanner";

const PROJECTS = [
  {
    slug: "penthouse-aseman",
    number: "۰۱",
    category: "بازسازی",
    tag: "مسکونی",
    title: "پنت‌هاوس آسمان",
    description:
      "بازسازی کامل داخلی یک پنت‌هاوس ۴۵۰۰ فوت مربعی. یکپارچه‌سازی عناصر ساختاری فولادی نمایان با پایان‌های شیشه‌ای مینیمال.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAakiIU728C28wN2JEmkwXwjn9d8DqcRMr1zM242JkxBVAPzcOoDkKl2MNPg-cvbB-EKWslKsiBk8owrpr7tCjLTVmeYh6kZmHB6yJ9_C0S2SaCrrWy92Q6nQ6o-FHMKmdXsGtiD_TAIyFWmH2AM2ENPR81edDKrXRRT7vrK_DxGUSzUTk7pV8BvIQeSS8vpVFInMsbC27v4Z5gum-VNHwWZWyC08AOq_yQCKNqDrkkYRJ8zjf0-Ks057CSjHZCk59h79jh_teCwrjl",
  },
  {
    slug: "concrete-sanctuary",
    number: "۰۲",
    category: "داخلی",
    tag: "مسکونی",
    title: "پناهگاه بتنی",
    description:
      "مطالعه‌ای در صداقت متریال. سطوح بتنی دستی سفارشی همراه با تجهیزات صنعتی مات مشکی فضایی تک‌رنگ و بی‌نقص ایجاد می‌کنند.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBDxcUPhZSKdJrOmdNbNyTimaV9UtNs-M4Akk2Hy9OYPuk4qUPbKZfVyIRJugGiNO6jP15fYDg2LIR9GaWnuQf_RwM7PO9ifoX57T6-8ncA_o2bweZoOznMjBCGUZSMQGys-RTpioqsp6a--qPnq019LyAsmoVixPsNdw7NgfMC6MqV1gExNMkgaXa_aNVg7jKndsA4DwoPajcKy7asSLhOQpWh9Ap_hWpMXSgmEvH34ARg5N6JoxtBwZB3o_uU1KBvxvP5laZZJI6T",
  },
  {
    slug: "heritage-reinforcement",
    number: "۰۳",
    category: "مهندسی",
    tag: "ساختاری",
    title: "تقویت میراث",
    description:
      "تقویت ساختاری فنی یک انبار آجری قرن نوزدهمی. یکپارچه‌سازی سفارشی تیرهای فولادی به عنوان ادای احترام به صداقت مهندسی طراحی شده است.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAjSAd5Ivgmc0vY2gGQWrLSgQPCrhaOPwX4UVeI8HMRo-Ft-3AfKaJoagJ2g9vNHG9r7WJ6WJKSczs9ZSwUnVRTPkGkme-1SHF-zm8pmj2lPNjxtaK3V1NbGWF0RUJpAsUbBZMq3KzZMXDrPR-qZuOL2JdBjQ94tECwxrJEf2e5Xfoe0TL8uPp0Dq4nm2d6mvALH-PCOQumqhikznT2aciOt6r30aSF0lcy-xOXjbp5msa9_XXiotmMiUoqCWCGhBn-cu5u8lnY2-Tf",
  },
];

export default function ProjectsPage() {
  return (
    <main className="pt-20">
      {/* ═══ HERO ═══════════════════════════════════════ */}
      <PageBanner
        image="/banners/Gemini_Generated_Image_4mhpk94mhpk94mhp.png"
        phase="[ نمایش پروژه‌ها ]"
        title="برتری معماری"
        titleSuffix="در حرکت"
        description="مهندسی دقیق با لوکس بودن ظریف ترکیب می‌شود. انتخاب دقیق بازسازی‌های ساختاری و تبدیلات معماری ما را کاوش کنید."
      />

      {/* ═══ PROJECT GALLERY ═══════════════════════════ */}
      <section className="py-24 px-4 md:px-16 bg-surface-container-low">
        <div className="max-w-[1440px] mx-auto">
          <div className="flex justify-between items-end mb-16 border-b border-outline-variant pb-8">
            <div>
              <h2 className="font-[family-name:var(--font-vazirmatn)] text-[24px] md:text-[40px] leading-[36px] md:leading-[56px] font-extrabold mb-2">
                گالری پروژه‌ها
              </h2>
              <p className="font-[family-name:var(--font-vazirmatn)] text-[14px] leading-5 text-on-surface-variant">
                نمایش ۰۳ بازسازی کلیدی
              </p>
            </div>
          </div>

          <div className="grid grid-cols-12 gap-6">
            {PROJECTS.map((project, i) => (
              <a
                href={`/projects/${project.slug}`}
                key={project.number}
                className={`col-span-12 md:col-span-6 lg:col-span-4 group ${
                  i === 1 ? "lg:mt-12" : i === 2 ? "lg:mt-24" : ""
                }`}
              >
                <div className="bg-surface border border-outline-variant overflow-hidden flex flex-col h-full transition-all duration-300 hover:border-secondary rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.04)]">
                  <div className="relative overflow-hidden aspect-[1.49]">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-4 right-4 bg-primary text-white px-4 py-1 font-[family-name:var(--font-vazirmatn)] text-[12px] leading-4">
                      {project.tag}
                    </div>
                  </div>

                  <div className="p-8 flex flex-col flex-grow">
                    <span className="font-[family-name:var(--font-vazirmatn)] text-[12px] leading-4 text-secondary mb-2 block">
                      {project.number} / {project.category}
                    </span>
                    <h3 className="font-[family-name:var(--font-vazirmatn)] text-[24px] leading-[36px] font-extrabold mb-4 group-hover:text-secondary transition-colors">
                      {project.title}
                    </h3>
                    <p className="font-[family-name:var(--font-vazirmatn)] text-[16px] leading-[24px] text-on-surface-variant mb-8 flex-grow">
                      {project.description}
                    </p>
                    <div className="pt-6 border-t border-outline-variant flex justify-between items-center">
                      <span className="font-[family-name:var(--font-vazirmatn)] text-[14px] leading-5">
                        مشاهده جزئیات
                      </span>
                      <svg
                        className="text-secondary group-hover:-translate-x-2 transition-transform rotate-180"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ CTA ═══════════════════════════════════════ */}
      <section className="bg-primary text-white py-24 px-4 md:px-16 overflow-hidden relative">
        <div className="max-w-[1440px] mx-auto grid grid-cols-12 gap-6 relative z-10">
          <div className="col-span-12 md:col-span-6">
            <h2 className="font-[family-name:var(--font-vazirmatn)] text-[24px] md:text-[40px] leading-[36px] md:leading-[56px] font-extrabold mb-8 leading-tight">
              آماده‌اید میراث
              <br />
              خود را بسازید؟
            </h2>
            <p className="font-[family-name:var(--font-vazirmatn)] text-[18px] leading-[28px] text-on-primary-container mb-12 max-w-md">
              هر پروژه با یک خط شروع می‌شود. چشم‌انداز خود را مطرح کنید و
              فضایی بسازید که آزمون زمان را تحمل کند.
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
              <button className="bg-tertiary text-on-tertiary font-[family-name:var(--font-vazirmatn)] text-[14px] leading-5 px-10 py-5 rounded-lg hover:shadow-[0_4px_20px_rgba(99,102,241,0.3)] hover:brightness-110 transition-all">
                شروع مشاوره
              </button>
              <button className="border border-white text-white font-[family-name:var(--font-vazirmatn)] text-[14px] leading-5 px-10 py-5 rounded-lg hover:bg-white/10 transition-all">
                فرآیند ما
              </button>
            </div>
          </div>
          <div className="hidden md:block col-span-6 relative">
            <div className="absolute left-0 top-0 w-64 h-64 border-t-8 border-l-8 border-secondary opacity-50" />
            <div className="absolute left-12 top-12 w-32 h-32 border-b border-r border-white/20" />
          </div>
        </div>
        <div className="absolute bottom-[-10%] left-[-5%] font-black text-[20vw] text-white/5 select-none pointer-events-none">
          STRUCTURA
        </div>
      </section>

      <StructuraFooter />
    </main>
  );
}
