const SERVICES = [
  "بازسازی آشپزخانه",
  "سوئیت‌های حمام",
  "مهندسی ساختاری",
];

const COMPANY = ["گالری پروژه‌ها", "پورتال مشتری", "حریم خصوصی"];

export default function StructuraFooter() {
  return (
    <footer className="bg-primary border-t border-outline-variant">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 px-4 md:px-16 py-16 max-w-[1440px] mx-auto">
        {/* Brand */}
        <div className="col-span-1">
          <div className="font-[family-name:var(--font-headline-lg)] text-[24px] md:text-[40px] leading-[36px] md:leading-[56px] font-extrabold text-on-primary mb-6">
            STRUCTURA
          </div>
          <p className="font-[family-name:var(--font-vazirmatn)] text-[16px] leading-[24px] text-on-primary-container/70 mb-8">
            مهندسی شده برای زیبایی. خدمات بازسازی دقیق برای چشم‌انداز معماری
            مدرن.
          </p>
          <div className="flex gap-4">
            <a
              href="#"
              className="w-10 h-10 border border-on-primary-container/30 rounded-lg flex items-center justify-center hover:bg-secondary transition-colors"
            >
              <svg
                className="text-on-primary"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <circle cx="18" cy="5" r="3" />
                <circle cx="6" cy="12" r="3" />
                <circle cx="18" cy="19" r="3" />
                <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
                <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
              </svg>
            </a>
            <a
              href="#"
              className="w-10 h-10 border border-on-primary-container/30 rounded-lg flex items-center justify-center hover:bg-secondary transition-colors"
            >
              <svg
                className="text-on-primary"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
            </a>
          </div>
        </div>

        {/* Services */}
        <div>
          <h4 className="font-[family-name:var(--font-vazirmatn)] text-[14px] leading-5 text-on-primary mb-6">
            خدمات
          </h4>
          <ul className="space-y-4">
            {SERVICES.map((item) => (
              <li key={item}>
                <a
                  href="#"
                  className="font-[family-name:var(--font-vazirmatn)] text-[12px] leading-4 text-on-primary-container/70 hover:text-secondary-fixed transition-colors"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Company */}
        <div>
          <h4 className="font-[family-name:var(--font-vazirmatn)] text-[14px] leading-5 text-on-primary mb-6">
            شرکت
          </h4>
          <ul className="space-y-4">
            {COMPANY.map((item) => (
              <li key={item}>
                <a
                  href="#"
                  className="font-[family-name:var(--font-vazirmatn)] text-[12px] leading-4 text-on-primary-container/70 hover:text-secondary-fixed transition-colors"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h4 className="font-[family-name:var(--font-vazirmatn)] text-[14px] leading-5 text-on-primary mb-6">
            خبرنامه
          </h4>
          <p className="font-[family-name:var(--font-vazirmatn)] text-[16px] leading-[24px] text-on-primary-container/70 mb-4">
            با آخرین پروژه‌ها و بینش‌های ساختاری ما به‌روز باشید.
          </p>
          <div className="flex flex-col gap-2">
            <input
              type="email"
              placeholder="ایمیل شما"
              className="bg-transparent border border-on-primary-container/30 p-3 rounded-lg font-[family-name:var(--font-vazirmatn)] text-[12px] leading-4 text-on-primary focus:ring-1 focus:ring-secondary focus:border-secondary outline-none"
            />
            <button className="bg-tertiary text-on-tertiary font-[family-name:var(--font-vazirmatn)] text-[14px] leading-5 py-3 rounded-lg hover:shadow-[0_4px_20px_rgba(99,102,241,0.25)] hover:brightness-110 transition-all">
              عضویت
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="px-4 md:px-16 py-8 max-w-[1440px] mx-auto border-t border-on-primary-container/10">
        <p className="font-[family-name:var(--font-vazirmatn)] text-[12px] leading-4 text-on-primary-container/50 text-center">
          © ۲۰۲۴ ساختارا. تمامی حقوق محفوظ است.
        </p>
      </div>
    </footer>
  );
}
