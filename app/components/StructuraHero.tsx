export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-primary">
      {/* Content */}
      <div className="relative z-10 max-w-[1440px] mx-auto px-4 md:px-16 text-center">
        <span className="inline-block font-[family-name:var(--font-label-md)] text-[14px] leading-5 tracking-[0.05em] text-secondary-fixed-dim border border-secondary-fixed-dim px-4 py-1 mb-6">
          PREMIER STRUCTURAL RENOVATIONS
        </span>

        <h1 className="font-[family-name:var(--font-display-lg)] text-[32px] leading-[40px] md:text-[40px] md:leading-[48px] lg:text-[64px] lg:leading-[72px] lg:tracking-[-0.02em] font-bold text-on-primary mb-8 max-w-4xl mx-auto">
          Reinventing Your Space with Precision.
        </h1>

        <div className="flex flex-col md:flex-row items-center justify-center gap-6">
          <button className="bg-secondary-container text-on-secondary-container font-[family-name:var(--font-label-md)] text-[14px] leading-5 tracking-[0.05em] px-10 py-4 uppercase hover:brightness-110 transition-all">
            View Portfolio
          </button>
          <button className="border border-on-primary text-on-primary font-[family-name:var(--font-label-md)] text-[14px] leading-5 tracking-[0.05em] px-10 py-4 uppercase hover:bg-on-primary hover:text-primary transition-all">
            Our Process
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-on-primary/50">
        <span className="font-[family-name:var(--font-label-sm)] text-[12px] leading-4 font-medium uppercase tracking-[0.05em]">
          Scroll to Explore
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
