import StructuraFooter from "../components/StructuraFooter";

const PROJECTS = [
  {
    number: "01",
    category: "RECONSTRUCTION",
    tag: "Residential",
    title: "Skyline Penthouse",
    description:
      "Complete interior overhaul of a 4,500 sq ft penthouse. Integration of exposed steel structural elements with minimalist glass finishes to emphasize the urban panoramic views.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAakiIU728C28wN2JEmkwXwjn9d8DqcRMr1zM242JkxBVAPzcOoDkKl2MNPg-cvbB-EKWslKsiBk8owrpr7tCjLTVmeYh6kZmHB6yJ9_C0S2SaCrrWy92Q6nQ6o-FHMKmdXsGtiD_TAIyFWmH2AM2ENPR81edDKrXRRT7vrK_DxGUSzUTk7pV8BvIQeSS8vpVFInMsbC27v4Z5gum-VNHwWZWyC08AOq_yQCKNqDrkkYRJ8zjf0-Ks057CSjHZCk59h79jh_teCwrjl",
  },
  {
    number: "02",
    category: "INTERIOR",
    tag: "Residential",
    title: "Concrete Sanctuary",
    description:
      "A study in material honesty. Custom hand-poured concrete surfaces paired with matte black industrial fixtures create a monochromatic space of absolute precision.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBDxcUPhZSKdJrOmdNbNyTimaV9UtNs-M4Akk2Hy9OYPuk4qUPbKZfVyIRJugGiNO6jP15fYDg2LIR9GaWnuQf_RwM7PO9ifoX57T6-8ncA_o2bweZoOznMjBCGUZSMQGys-RTpioqsp6a--qPnq019LyAsmoVixPsNdw7NgfMC6MqV1gExNMkgaXa_aNVg7jKndsA4DwoPajcKy7asSLhOQpWh9Ap_hWpMXSgmEvH34ARg5N6JoxtBwZB3o_uU1KBvxvP5laZZJI6T",
  },
  {
    number: "03",
    category: "ENGINEERING",
    tag: "Structural",
    title: "Heritage Reinforce",
    description:
      "Technical structural reinforcement of a 19th-century brick warehouse. Custom steel beam integration designed to remain visible as a tribute to engineering honesty.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAjSAd5Ivgmc0vY2gGQWrLSgQPCrhaOPwX4UVeI8HMRo-Ft-3AfKaJoagJ2g9vNHG9r7WJ6WJKSczs9ZSwUnVRTPkGkme-1SHF-zm8pmj2lPNjxtaK3V1NbGWF0RUJpAsUbBZMq3KzZMXDrPR-qZuOL2JdBjQ94tECwxrJEf2e5Xfoe0TL8uPp0Dq4nm2d6mvALH-PCOQumqhikznT2aciOt6r30aSF0lcy-xOXjbp5msa9_XXiotmMiUoqCWCGhBn-cu5u8lnY2-Tf",
  },
];

export default function ProjectsPage() {
  return (
    <main className="pt-20">
      {/* ═══ HERO ═══════════════════════════════════════ */}
      <section
        className="relative bg-surface py-24 px-4 md:px-16 border-b border-on-surface"
        style={{
          backgroundImage: "radial-gradient(#e0e0e0 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      >
        <div className="max-w-[1440px] mx-auto grid grid-cols-12 gap-6">
          <div className="col-span-12 md:col-span-8">
            <span className="font-[family-name:var(--font-label-md)] text-[14px] leading-5 text-secondary uppercase mb-4 block tracking-widest">
              [ PROJECT SHOWCASE ]
            </span>
            <h1 className="font-[family-name:var(--font-display-lg)] text-[32px] md:text-[64px] leading-[40px] md:leading-[72px] tracking-[-0.02em] font-extrabold uppercase mb-8">
              Architectural
              <br />
              Excellence In Motion
            </h1>
            <p className="font-[family-name:var(--font-body-lg)] text-[18px] leading-[28px] text-on-surface-variant max-w-2xl border-l-4 border-primary pl-6 py-2">
              Precision engineering meets refined luxury. Explore our curated
              selection of structural renovations and architectural
              transformations.
            </p>
          </div>
        </div>
        {/* Decorative line */}
        <div className="absolute right-0 bottom-0 w-1/4 h-1 bg-primary" />
      </section>

      {/* ═══ PROJECT GALLERY ═══════════════════════════ */}
      <section className="py-24 px-4 md:px-16 bg-surface-container-low">
        <div className="max-w-[1440px] mx-auto">
          <div className="flex justify-between items-end mb-16 border-b-2 border-primary pb-8">
            <div>
              <h2 className="font-[family-name:var(--font-headline-lg)] text-[24px] md:text-[40px] leading-[32px] md:leading-[48px] tracking-[-0.01em] font-bold uppercase mb-2">
                Project Gallery
              </h2>
              <p className="font-[family-name:var(--font-label-md)] text-[14px] leading-5 tracking-[0.05em] text-on-surface-variant">
                DISPLAYING 03 KEY RECONSTRUCTIONS
              </p>
            </div>
            <div className="hidden md:flex space-x-4">
              <button className="p-3 border border-primary hover:bg-primary hover:text-white transition-colors">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M3 6h18M3 12h12M3 18h6" />
                </svg>
              </button>
            </div>
          </div>

          {/* Portfolio Grid */}
          <div className="grid grid-cols-12 gap-6">
            {PROJECTS.map((project, i) => (
              <div
                key={project.number}
                className={`col-span-12 md:col-span-6 lg:col-span-4 group ${
                  i === 1 ? "lg:mt-12" : i === 2 ? "lg:mt-24" : ""
                }`}
              >
                <div className="bg-surface border border-outline-variant overflow-hidden flex flex-col h-full transition-all duration-300 hover:border-secondary">
                  {/* Image */}
                  <div className="relative overflow-hidden aspect-[1.49]">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-4 left-4 bg-primary text-white px-4 py-1 font-[family-name:var(--font-label-sm)] text-[12px] leading-4 font-medium uppercase tracking-widest">
                      {project.tag}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-8 flex flex-col flex-grow">
                    <span className="font-[family-name:var(--font-label-sm)] text-[12px] leading-4 font-medium text-secondary mb-2 block">
                      {project.number} / {project.category}
                    </span>
                    <h3 className="font-[family-name:var(--font-headline-md)] text-[24px] leading-[32px] font-bold uppercase mb-4 group-hover:text-secondary transition-colors">
                      {project.title}
                    </h3>
                    <p className="font-[family-name:var(--font-body-md)] text-[16px] leading-[24px] text-on-surface-variant mb-8 flex-grow">
                      {project.description}
                    </p>
                    <div className="pt-6 border-t border-outline-variant flex justify-between items-center">
                      <span className="font-[family-name:var(--font-label-md)] text-[14px] leading-5 tracking-[0.05em] uppercase">
                        View Blueprint
                      </span>
                      <svg
                        className="text-secondary group-hover:translate-x-2 transition-transform"
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
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ CTA ═══════════════════════════════════════ */}
      <section className="bg-primary text-white py-24 px-4 md:px-16 overflow-hidden relative">
        <div className="max-w-[1440px] mx-auto grid grid-cols-12 gap-6 relative z-10">
          <div className="col-span-12 md:col-span-6">
            <h2 className="font-[family-name:var(--font-headline-lg)] text-[24px] md:text-[40px] leading-[32px] md:leading-[48px] tracking-[-0.01em] font-bold uppercase mb-8 leading-tight">
              Ready to build
              <br />
              your legacy?
            </h2>
            <p className="font-[family-name:var(--font-body-lg)] text-[18px] leading-[28px] text-on-primary-container mb-12 max-w-md">
              Every project starts with a single line. Let's discuss your
              vision and engineer a space that stands the test of time.
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
              <button className="bg-secondary text-white font-[family-name:var(--font-label-md)] text-[14px] leading-5 tracking-[0.05em] uppercase px-10 py-5 hover:bg-white hover:text-primary transition-all">
                Start Consultation
              </button>
              <button className="border border-white text-white font-[family-name:var(--font-label-md)] text-[14px] leading-5 tracking-[0.05em] uppercase px-10 py-5 hover:bg-white/10 transition-all">
                Our Process
              </button>
            </div>
          </div>
          <div className="hidden md:block col-span-6 relative">
            <div className="absolute right-0 top-0 w-64 h-64 border-t-8 border-r-8 border-secondary opacity-50" />
            <div className="absolute right-12 top-12 w-32 h-32 border-b border-l border-white/20" />
          </div>
        </div>
        {/* Background branding */}
        <div className="absolute bottom-[-10%] right-[-5%] font-black text-[20vw] text-white/5 select-none pointer-events-none">
          STRUCTURA
        </div>
      </section>

      <StructuraFooter />
    </main>
  );
}
