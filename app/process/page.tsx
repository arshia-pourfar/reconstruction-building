import StructuraFooter from "../components/StructuraFooter";

const RULES = [
  {
    code: "RULE_01",
    title: "Structural Integrity",
    description:
      "Every renovation begins with engineering excellence. We stabilize before we stylize, ensuring the bones of your home are built for the next century.",
  },
  {
    code: "RULE_02",
    title: "Material Honesty",
    description:
      "We celebrate raw steel, concrete, and timber. Authenticity is our finish of choice—we showcase the strength and texture of the elements that hold the space.",
  },
  {
    code: "RULE_03",
    title: "Precision Engineering",
    description:
      "Millimeter-perfect execution is not a goal; it's our baseline. Our fabrication process uses high-spec modeling to ensure zero-tolerance fit and finish.",
  },
];

const STEPS = [
  {
    number: "01",
    title: "Structural Audit",
    description:
      "Analyzing the site's bones through thermal imaging and structural scans. We identify load-bearing potential and hidden constraints.",
  },
  {
    number: "02",
    title: "Design Fabrication",
    description:
      "Drafting high-fidelity blueprints and 3D models. We simulate structural changes in a virtual environment before a single brick is moved.",
  },
  {
    number: "03",
    title: "Precision Deconstruction",
    description:
      "Careful removal of dated elements. We surgical strip the space to its essence, salvaging historical materials where possible.",
  },
  {
    number: "04",
    title: "Industrial Assembly",
    description:
      "Construction and final fit-out. We install pre-fabricated steel components and custom masonry with industrial-grade finish.",
  },
];

export default function ProcessPage() {
  return (
    <main className="pt-20">
      {/* ═══ HERO ═══════════════════════════════════════ */}
      <section className="relative h-[70vh] flex items-center overflow-hidden border-b border-primary">
        {/* Blueprint grid */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "radial-gradient(circle, #e3e2e2 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />
        {/* Technical motifs */}
        <div className="absolute top-0 right-0 w-1/3 h-full border-l border-primary/20 pointer-events-none">
          <div className="absolute top-1/4 left-0 w-full h-px bg-primary/20" />
          <div className="absolute top-3/4 left-0 w-full h-px bg-primary/20" />
        </div>

        <div className="container mx-auto px-4 md:px-16 max-w-[1440px] z-10">
          <div className="max-w-3xl">
            <span className="font-[family-name:var(--font-label-md)] text-[14px] leading-5 text-secondary uppercase mb-4 block tracking-widest">
              Phase 00 // Methodology
            </span>
            <h1 className="font-[family-name:var(--font-display-lg)] text-[32px] md:text-[64px] leading-[40px] md:leading-[72px] tracking-[-0.02em] font-extrabold mb-8">
              THE STRUCTURA METHOD
            </h1>
            <p className="font-[family-name:var(--font-body-lg)] text-[18px] leading-[28px] text-on-surface-variant max-w-xl mb-12">
              Engineering precision meets architectural vision. We don&apos;t
              just renovate; we re-engineer spaces from the core out,
              celebrating the raw beauty of structural necessity.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 items-center">
              <button
                className="bg-primary text-on-primary px-10 py-4 font-[family-name:var(--font-label-md)] text-[14px] leading-5 tracking-[0.05em] uppercase tracking-widest hover:bg-secondary transition-all"
                style={{ boxShadow: "4px 4px 0px #000000" }}
              >
                View Specs
              </button>
              <div className="flex items-center gap-4 text-primary font-[family-name:var(--font-label-md)] text-[14px] leading-5 tracking-[0.05em] uppercase py-4">
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
                Technical Excellence Guaranteed
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ CORE PRINCIPLES ═══════════════════════════ */}
      <section className="py-24 border-b border-primary">
        <div className="container mx-auto px-4 md:px-16 max-w-[1440px]">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <h2 className="font-[family-name:var(--font-headline-lg)] text-[24px] md:text-[40px] leading-[32px] md:leading-[48px] tracking-[-0.01em] font-bold uppercase">
              CORE
              <br />
              PRINCIPLES
            </h2>
            <div className="w-full md:w-1/2 h-px bg-primary mb-4" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-l border-t border-primary">
            {RULES.map((rule) => (
              <div
                key={rule.code}
                className="p-10 border-r border-b border-primary group hover:bg-surface-container-low transition-colors"
              >
                <div className="text-secondary font-[family-name:var(--font-label-md)] text-[14px] leading-5 tracking-[0.05em] mb-8">
                  {rule.code}
                </div>
                <h3 className="font-[family-name:var(--font-headline-md)] text-[24px] leading-[32px] font-bold mb-4 uppercase">
                  {rule.title}
                </h3>
                <p className="font-[family-name:var(--font-body-md)] text-[16px] leading-[24px] text-on-surface-variant">
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
            {/* Left: Steps */}
            <div>
              <span className="font-[family-name:var(--font-label-md)] text-[14px] leading-5 tracking-[0.05em] text-secondary uppercase mb-4 block tracking-widest">
                Workflow Pipeline
              </span>
              <h2 className="font-[family-name:var(--font-headline-lg)] text-[24px] md:text-[40px] leading-[32px] md:leading-[48px] tracking-[-0.01em] font-bold uppercase mb-12">
                STEPS TO
                <br />
                TRANSFORMATION
              </h2>
              <div className="space-y-12">
                {STEPS.map((step, i) => (
                  <div
                    key={step.number}
                    className="relative pl-16 group"
                    style={
                      i < STEPS.length - 1
                        ? {
                            position: "relative",
                          }
                        : undefined
                    }
                  >
                    {/* Connector line */}
                    {i < STEPS.length - 1 && (
                      <div
                        className="absolute left-5 top-10 bottom-[-24px] w-px bg-primary"
                        style={{ left: "20px" }}
                      />
                    )}
                    <div
                      className="absolute left-0 top-0 w-10 h-10 border border-primary bg-background flex items-center justify-center font-[family-name:var(--font-label-md)] text-[14px] leading-5 tracking-[0.05em] z-10 group-hover:bg-secondary group-hover:text-white transition-colors"
                    >
                      {step.number}
                    </div>
                    <h4 className="font-[family-name:var(--font-headline-md)] text-[24px] leading-[32px] font-bold uppercase mb-2">
                      {step.title}
                    </h4>
                    <p className="font-[family-name:var(--font-body-md)] text-[16px] leading-[24px] text-on-surface-variant">
                      {step.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Image */}
            <div className="relative">
              <div
                className="aspect-[4/5] bg-surface-container overflow-hidden border border-primary"
                style={{ boxShadow: "4px 4px 0px #000000" }}
              >
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDkP_JwtttTsf8FIRPKao9nqL6UykrluSRTqdDnDDnZtEZBUmn_5vC1v-VlTqBJq8QbFkkiLgScl498NmP3U5PMvvI2PGAIxKrAxvs9ss7mB-5ig5e8GBLqd9itjCiyLOl6GLvjpXGDiBrSYCKfE-QuqogzcvuPOideBaw5vpH7UejVDxLvlOHczoY0jFph1rKqJnOf5zfE02dBEWlgiDnX1xTci9egQ7XtuAcvBo9Peot6Vo9qGbl3LCNotH_uyzo2KBP5L9jiq-tG"
                  alt="Structural reinforcement"
                  className="w-full h-full object-cover grayscale-[50%] hover:grayscale-0 transition-all duration-700"
                />
              </div>
              {/* Overlay label */}
              <div className="absolute -bottom-6 -left-6 bg-primary text-on-primary p-8 max-w-xs">
                <div className="font-[family-name:var(--font-label-md)] text-[14px] leading-5 tracking-[0.05em] text-secondary mb-2">
                  FIG_06A
                </div>
                <p className="font-[family-name:var(--font-body-md)] text-[14px] leading-[20px] leading-tight italic opacity-80">
                  &quot;Structural reinforcement phase utilizing reinforced
                  steel girders and lateral bracing systems.&quot;
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ CTA ═══════════════════════════════════════ */}
      <section className="py-24 border-y border-primary">
        <div className="container mx-auto px-4 md:px-16 max-w-[1440px] text-center">
          <h2 className="font-[family-name:var(--font-display-lg)] text-[32px] md:text-[64px] leading-[40px] md:leading-[72px] tracking-[-0.02em] font-extrabold uppercase mb-8">
            BUILD TO LAST
          </h2>
          <p className="font-[family-name:var(--font-body-lg)] text-[18px] leading-[28px] max-w-2xl mx-auto mb-12">
            Ready to transform your space with engineering-first design? Start
            your structural audit today.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <button className="bg-secondary text-white px-12 py-5 font-[family-name:var(--font-label-md)] text-[14px] leading-5 tracking-[0.05em] uppercase tracking-widest hover:bg-primary transition-all">
              Start Consultation
            </button>
            <button className="border border-primary text-primary px-12 py-5 font-[family-name:var(--font-label-md)] text-[14px] leading-5 tracking-[0.05em] uppercase tracking-widest hover:bg-surface-container-highest transition-all">
              Download Brochure
            </button>
          </div>
        </div>
      </section>

      <StructuraFooter />
    </main>
  );
}
