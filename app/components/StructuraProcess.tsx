"use client";

const STEPS = [
  {
    number: "01",
    title: "Consult",
    description:
      "We begin with a rigorous site analysis and feasibility study. Understanding your lifestyle and the site's structural potential is the foundation of our work.",
  },
  {
    number: "02",
    title: "Design",
    description:
      "Technical precision meets creative vision. We produce detailed BIM models and material specifications that ensure every millimeter is accounted for.",
  },
  {
    number: "03",
    title: "Execute",
    description:
      "Our construction teams operate with engineering discipline. We manage all structural logistics and artisanal finishing to deliver perfection on schedule.",
  },
];

export default function Process() {
  return (
    <section
      className="py-24 bg-primary text-on-primary relative overflow-hidden"
      id="process"
    >
      {/* Blueprint Grid Background */}
      <div className="absolute inset-0 pointer-events-none opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)",
            backgroundSize: "400px 400px",
            border: "1px solid rgba(255,255,255,0.2)",
          }}
        />
      </div>

      <div className="max-w-[1440px] mx-auto px-4 md:px-16 relative z-10">
        {/* Header */}
        <div className="mb-20 reveal">
          <span className="font-[family-name:var(--font-label-md)] text-[14px] leading-5 tracking-[0.05em] text-secondary-fixed-dim uppercase">
            Workflow
          </span>
          <h2 className="font-[family-name:var(--font-headline-lg)] text-[24px] md:text-[40px] leading-[32px] md:leading-[48px] tracking-[-0.01em] font-bold mt-4">
            The Blueprint to Reality
          </h2>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          {STEPS.map((step, i) => (
            <div
              key={step.number}
              className="step-card border-l border-on-primary-container/20 pl-8 py-8 transition-all duration-500"
              data-step={i + 1}
            >
              <div className="font-[family-name:var(--font-display-lg)] text-[32px] md:text-[64px] leading-[72px] tracking-[-0.02em] font-extrabold text-secondary opacity-50 mb-4">
                {step.number}
              </div>
              <h3 className="font-[family-name:var(--font-headline-md)] text-[24px] leading-[32px] font-bold mb-6 uppercase">
                {step.title}
              </h3>
              <p className="font-[family-name:var(--font-body-lg)] text-[18px] leading-[28px] text-on-primary-container">
                {step.description}
              </p>
              <div className="mt-8 h-px bg-secondary w-20" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
