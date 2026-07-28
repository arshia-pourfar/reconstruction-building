import StructuraFooter from "../components/StructuraFooter";

const SERVICES = [
  {
    number: "01",
    title: "Structural Engineering",
    badge: "Technical Core",
    description:
      "The foundation of every masterpiece is its structural integrity. We provide comprehensive engineering solutions that allow for daring architectural spans and complex reconfigurations while ensuring absolute stability and code compliance.",
    specs: [
      "Load-Bearing Analysis",
      "Seismic Retrofitting",
      "Steel Framing Systems",
      "Foundation Reinforcement",
    ],
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuA7nrAiY9BAmU2i1JI2VhHPIsmqab-gWo4OAuAhMByg8NhBKRzHE_-4qGZrjZ9iOp5zum4PszirlUwPCmA7kZcIOXhkFCFP_3i0pqiDtaLB21l7c_bUZthBdOifXDVc6LcjWEnMajjCSjDC7F7VqZgAzi33DIQw3owjd2DPBA483XRJLiZDAEefb_7SdUvwcAhE9nc2ZSUcaJTYy8kqFuWsOnRkr2nqAFg9hACVVQG2bNV0APyASUKPGaKuML3y2r7QORX4Wqj47oPe",
  },
  {
    number: "02",
    title: "Architectural Design",
    badge: "Creative Blueprint",
    description:
      "Bridging the gap between conceptual vision and buildable reality. Our design team creates spaces that balance aesthetic audacity with functional precision, utilizing advanced 3D modeling and sustainable material sourcing.",
    specs: [
      "Spatial Optimization",
      "Permit Expediting",
      "BIM Integration",
      "Material Specifications",
    ],
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCMeCqMA87v-CyT0XIGP2olQWVMVWR5WuvtpIgdLHcoqnRgPeTeGdzo-eivg19ix3ErlxzHbVdaC1d_ooxBrIGlUALcKHBHlVbpOcmim5YWZEHcDXR5PP4FWzD0p57bzDfgeQN7p-ywSFhHfNCTw1zMi0sRC2pneLJSvDpT865aqvFfKG29Avg2V-P4WHcVYA-6GCe8MeEgWmXhDZDFZLuGKdSMrW9N0Bwx4JLdU4GUgLcNL7SstPQolyNEwQfjD3iu7r2F038HgrSA",
  },
  {
    number: "03",
    title: "Kitchen & Bath",
    badge: "Precision Craft",
    description:
      "The most technical rooms in any residence require surgical precision. We combine complex plumbing and electrical systems with high-end finishes, resulting in spaces that are as technically flawless as they are visually stunning.",
    specs: [
      "Hydronic Sub-Flooring",
      "Custom Millwork",
      "Smart System Hookups",
      "Stone Fabrication",
    ],
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBidKUwVMNCjp4qzK4gnbvCADgzFxMvD3_nMwX1GHB1p4EDHY2udn0KvMf4BRsnVjEqecvmA0PgCEteDxhrcDvGnHP1nPB4aflXQ8aN2fRvuttsPTwc9xyFgOyQYLRscTnXEQw-RTgctEIAXJjNFi7eUaCfdJo_fA4Xw9JXasjHKNDJi8_s-4ewM1Qj-6NgbjNd4OuqPU0jRShkOtDtMwVDz1cfLut1Wxd52kjbmal-e9dDkgzr68Vq8Tk1zKekjPVP6wLmv26vNAlX",
  },
  {
    number: "04",
    title: "Bespoke Interiors",
    badge: "Unique Assembly",
    description:
      "Elevating the everyday through custom-engineered interior elements. From cantilevered staircases to integrated gallery lighting systems, we deliver one-of-a-kind environments that define the character of a property.",
    specs: [
      "Acoustic Engineering",
      "Artisan Metalwork",
      "Custom Lighting Plans",
      "Textured Wall Systems",
    ],
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBvWT4LD2JSEfVZySZiqd4CDNNBPAQW81kzR5xZ4p9h1okyfLCzbA3PYnDZOKg9aNYhKyyVfegdgLhlaapArsky0u9u_OTyJXQIz2F8WBdy_8_KfTwZnRhk-EyDn1bjwpoLDMMSYuDM2fKVB2ZqvRAiYVCCbSFoLFWYAo83mxzhUzWL4egGT5m4Dy4R10jBEOyC-xclrqHrBsmL3JIBtOxCQBB2l8BceH1QyUx1mZ4xZWsLbjvP4hCbTrrKVs-XzufDSGBjRTdRdEXu",
  },
];

const PROCESS_STEPS = [
  {
    number: "01",
    title: "Analysis",
    description:
      "We begin with a rigorous structural audit and feasibility study, identifying the mechanical constraints of the existing frame.",
  },
  {
    number: "02",
    title: "Execution",
    description:
      "Our master builders and engineers execute the transformation with millimeter precision, prioritizing structural safety.",
  },
  {
    number: "03",
    title: "Verification",
    description:
      "Every joint, weld, and finish undergoes a stringent multi-point inspection to ensure the vision is flawlessly realized.",
  },
];

const FEATURES = [
  { label: "Technical", value: "Structural Audits" },
  { label: "Timeline", value: "Fast-Track Options" },
  { label: "Support", value: "24/7 Project Hub" },
  { label: "Location", value: "Global Mobility" },
];

export default function ServicesPage() {
  return (
    <main className="pt-20">
      {/* ═══ HERO ═══════════════════════════════════════ */}
      <section className="relative min-h-[614px] flex flex-col justify-center border-b-2 border-primary overflow-hidden"
        style={{
          backgroundImage:
            "linear-gradient(to right, #e0e0e0 1px, transparent 1px), linear-gradient(to bottom, #e0e0e0 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      >
        <div className="px-4 md:px-16 max-w-[1440px] mx-auto w-full py-24 relative">
          {/* Decorative watermark */}
          <div className="absolute top-12 right-12 hidden lg:block opacity-10 pointer-events-none">
            <span className="text-[120px] font-black leading-none select-none">
              PRECISION
            </span>
          </div>

          <div className="max-w-3xl">
            <div className="flex items-center gap-4 mb-6">
              <div className="h-1 w-12 bg-secondary-container" />
              <span className="font-[family-name:var(--font-label-md)] text-[14px] leading-5 tracking-[0.2em] text-secondary-container uppercase">
                Our Expertise
              </span>
            </div>

            <h1 className="font-[family-name:var(--font-display-lg)] text-[32px] md:text-[64px] leading-[40px] md:leading-[72px] tracking-[-0.02em] font-extrabold text-primary mb-8">
              PRECISION
              <br />
              SERVICES
            </h1>

            <p className="font-[family-name:var(--font-body-lg)] text-[18px] leading-[28px] text-on-surface-variant max-w-xl leading-relaxed">
              Engineering excellence meets architectural vision. We specialize
              in the meticulous transformation of high-end residential and
              commercial spaces through structural mastery and uncompromising
              design integrity.
            </p>
          </div>
        </div>

        {/* Structural divider line */}
        <div className="absolute bottom-0 right-0 w-1/3 h-px bg-primary hidden md:block" />
      </section>

      {/* ═══ SERVICE GRID ══════════════════════════════ */}
      <section className="py-24 bg-surface-container-lowest">
        <div className="px-4 md:px-16 max-w-[1440px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-x-6 md:gap-y-32">
            {SERVICES.map((service, i) => (
              <div
                key={service.number}
                className={`group ${i % 2 === 1 ? "md:mt-24" : ""}`}
              >
                {/* Number + Title */}
                <div className="flex items-start gap-6 mb-8">
                  <span className="font-[family-name:var(--font-label-md)] text-[24px] leading-[32px] font-bold text-outline-variant">
                    {service.number}
                  </span>
                  <div className="flex-1">
                    <h2 className="font-[family-name:var(--font-headline-lg)] text-[24px] md:text-[40px] leading-[32px] md:leading-[48px] tracking-[-0.01em] font-bold mb-6 group-hover:text-secondary-container transition-colors">
                      {service.title}
                    </h2>

                    {/* Image */}
                    <div className="w-full aspect-video relative overflow-hidden mb-8 border border-outline">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                      />
                      <div className="absolute bottom-0 left-0 bg-primary text-on-primary p-4 font-[family-name:var(--font-label-sm)] text-[12px] leading-4 font-medium uppercase">
                        {service.badge}
                      </div>
                    </div>

                    {/* Description */}
                    <p className="font-[family-name:var(--font-body-md)] text-[16px] leading-[24px] text-on-surface-variant mb-8 leading-relaxed">
                      {service.description}
                    </p>

                    {/* Specs */}
                    <div className="border-t border-outline py-6">
                      <h4 className="font-[family-name:var(--font-label-md)] text-[14px] leading-5 tracking-[0.05em] uppercase mb-4 text-primary">
                        {i === 0
                          ? "Technical Specifications"
                          : i === 1
                            ? "Design Protocols"
                            : i === 2
                              ? "Technical Systems"
                              : "Specialized Details"}
                      </h4>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 font-[family-name:var(--font-label-sm)] text-[12px] leading-4 font-medium text-on-surface-variant uppercase tracking-wider">
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

                    {/* Link */}
                    <a
                      href="#"
                      className="inline-flex items-center gap-3 font-[family-name:var(--font-label-md)] text-[14px] leading-5 tracking-[0.05em] text-primary uppercase border-b-2 border-primary pb-1 group-hover:border-secondary-container group-hover:text-secondary-container transition-all mt-4"
                    >
                      View Projects
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
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
        {/* Decorative vertical text */}
        <div className="absolute top-0 right-0 h-full flex items-center justify-center opacity-5 pointer-events-none">
          <span
            className="text-[300px] font-black leading-none"
            style={{ writingMode: "vertical-rl", textOrientation: "mixed" }}
          >
            SYSTEMS
          </span>
        </div>

        <div className="px-4 md:px-16 max-w-[1440px] mx-auto relative z-10">
          <div className="max-w-4xl">
            <div className="flex items-center gap-4 mb-12">
              <div className="h-px w-16 bg-secondary-container" />
              <span className="font-[family-name:var(--font-label-md)] text-[14px] leading-5 tracking-[0.3em] text-secondary-container uppercase">
                The Framework
              </span>
            </div>

            <h2 className="font-[family-name:var(--font-headline-lg)] text-[24px] md:text-[40px] leading-[32px] md:leading-[48px] tracking-[-0.01em] font-bold mb-16 max-w-2xl">
              A CONSTRUCTED PROCESS: BLUEPRINT TO REALITY
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {PROCESS_STEPS.map((step) => (
                <div key={step.number} className="relative group">
                  <span className="absolute -top-6 -left-4 text-6xl font-black text-on-primary-container opacity-20 group-hover:opacity-100 group-hover:text-secondary-container transition-all duration-500">
                    {step.number}
                  </span>
                  <h3 className="font-[family-name:var(--font-headline-md)] text-[24px] leading-[32px] font-bold mb-4 relative">
                    {step.title}
                  </h3>
                  <p className="font-[family-name:var(--font-body-md)] text-[16px] leading-[24px] text-on-primary-container leading-relaxed">
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
            className="border-2 border-primary p-12 md:p-20 relative bg-surface-bright overflow-hidden"
            style={{ boxShadow: "8px 8px 0px #1c1b1b" }}
          >
            {/* Grid background */}
            <div
              className="absolute inset-0 opacity-20 pointer-events-none"
              style={{
                backgroundImage:
                  "linear-gradient(to right, #e0e0e0 1px, transparent 1px), linear-gradient(to bottom, #e0e0e0 1px, transparent 1px)",
                backgroundSize: "40px 40px",
              }}
            />

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              {/* Left */}
              <div>
                <h2 className="font-[family-name:var(--font-display-lg)] text-[32px] md:text-[64px] leading-[40px] md:leading-[72px] tracking-[-0.02em] font-extrabold text-primary mb-8 uppercase">
                  READY TO
                  <br />
                  CONSTRUCT?
                </h2>
                <p className="font-[family-name:var(--font-body-lg)] text-[18px] leading-[28px] text-on-surface-variant max-w-md mb-12">
                  Every structural transformation begins with a single
                  conversation. Secure a consultation with our lead engineers
                  today.
                </p>
                <button className="bg-primary text-on-primary px-12 py-5 font-[family-name:var(--font-label-md)] text-[14px] leading-5 tracking-[0.05em] uppercase hover:bg-secondary-container transition-all active:scale-95">
                  Start Your Project
                </button>
              </div>

              {/* Right — Feature grid */}
              <div className="grid grid-cols-2 gap-8">
                {FEATURES.map((f) => (
                  <div
                    key={f.label}
                    className="border-l-2 border-primary pl-6 py-4"
                  >
                    <span className="font-[family-name:var(--font-label-md)] text-[14px] leading-5 tracking-[0.05em] text-secondary-container block mb-2">
                      {f.label}
                    </span>
                    <p className="font-[family-name:var(--font-body-md)] text-[16px] leading-[24px] font-bold">
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
