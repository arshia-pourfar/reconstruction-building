export default function StructuraHero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-primary">
      {/* Content */}
      <div className="relative z-10 max-w-[1440px] mx-auto px-4 md:px-16 text-center">
        <span className="inline-block font-[family-name:var(--font-vazirmatn)] text-[14px] leading-5 text-secondary-fixed-dim border border-outline-variant px-4 py-1 mb-6 rounded-lg">
          بازسازی ساختاری لوکس
        </span>

        <h1 className="font-[family-name:var(--font-vazirmatn)] text-[32px] leading-[48px] md:text-[48px] md:leading-[64px] lg:text-[64px] lg:leading-[80px] font-extrabold text-on-primary mb-8 max-w-4xl mx-auto">
          بازآفرینی فضای شما با دقت مهندسی.
        </h1>

        <div className="flex flex-col md:flex-row items-center justify-center gap-6">
          <button className="bg-tertiary text-on-tertiary font-[family-name:var(--font-vazirmatn)] text-[14px] leading-5 px-10 py-4 rounded-lg hover:shadow-[0_4px_20px_rgba(99,102,241,0.3)] hover:brightness-110 transition-all">
            مشاهده نمونه کارها
          </button>
          <button className="border border-on-primary text-on-primary font-[family-name:var(--font-vazirmatn)] text-[14px] leading-5 px-10 py-4 rounded-lg hover:bg-on-primary hover:text-primary transition-all">
            فرآیند ما
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-on-primary/50">
        <span className="font-[family-name:var(--font-vazirmatn)] text-[12px] leading-4 font-medium">
          اسکرول کنید
        </span>
        <svg
          className="animate-bounce"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 5v14M19 12l-7 7-7-7" />
        </svg>
      </div>
    </section>
  );
}
