import StructuraFooter from "../components/StructuraFooter";

const TEAM = [
  {
    role: "Lead Structural Engineer",
    name: "Marcus Thorne, P.E.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAFBlleif_bBoyZCOnv6xd4mBDSwIoyRHaVuZVncrkzqC0RKlw8nuiZROvx5epP9e5UFvMrPXIj5twrnhd3tXTvbdoCzBYY-mBq6QogX3yb_AO8W8H1S_9UOJfsFL2mB5U4hXQ1_rf3sG0arIaJDRboBmLiBJPYvy7rAzkE8XJUi7sboKvLYAzGvVT-zNt2sE5zFpTvZwa4AySQLOeiHk-B2837P1oB7OzBIjYOQjx0LNaDSuc_eIaz8YBBV3kRhG2lwHvM7wESWQUy",
  },
  {
    role: "Principal Architect",
    name: "Elena Voss, AIA",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuB890alIgxBuvvlnx8ua3BgLvehz_5wEQgsMKajkzt3NT4Xtj4udgIbAdUtlbwDd0k6MXwemQ7zmBdMfyHVtv-dobbYwFbLZ6xfTQBdYBjCm6ieXXMqgcdNxKuNm1FUf2DGKrY3niigRBIlprqJtb_qIUsXj0loWcdutnjRwZ_N273WzW-7V36kMVkk3I66Z7BC7uswwtnOCuJiPeo05Tz8Ceb96xfrZ67DCsNozK4Km9_tRvv-iB3vF9JhKjzHrGu51Ut57yM1vL8x",
  },
  {
    role: "Master Fabricator",
    name: "Julian Marek",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuB17cLBB7-vkJ8d01YiunRMGbXrlfr4DUKy31qA9SQbW6XdCCGYKvM3nUAJ-4-Ti0Jyrl5sFXsijf6jxqafbKpsOG2fqaCfd9mRrpndFSS1QZI7ifVYbBcBqb6ABfgRGy0cb40uahMcxKeMpxBSvpekAq7rj0BOuYMu9mECEcMqDtFAiIPMph4-H6gFWJf-pb5JeYjxD6sRHs8W_rdKRzbL7tKYIzKz_6Tvp09e94aQ_5KeTqnSjADLRzmclBVBskK_1t8uYOlBtM3N",
  },
];

const PRINCIPLES = [
  {
    number: "01",
    label: "HONESTY",
    title: "Material Honesty",
    description:
      "We celebrate raw materials. Steel should feel like steel; stone should feel like stone. We reject faux finishes in favor of the authentic weight and texture of industrial components.",
  },
  {
    number: "02",
    label: "LOGIC",
    title: "Structural Logic",
    description:
      "Every design choice must be supported by engineering logic. If a beam is visible, it is there to perform. We believe that true beauty emerges from functional perfection.",
  },
];

export default function AboutPage() {
  return (
    <main className="pt-20">
      {/* ═══ HERO ═══════════════════════════════════════ */}
      <section className="relative min-h-[80vh] flex items-center overflow-hidden bg-primary">
        {/* Blueprint grid background */}
        <div className="absolute inset-0 opacity-20">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "linear-gradient(to right, rgba(0,0,0,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,0,0,0.05) 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          />
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "repeating-linear-gradient(45deg, transparent, transparent 40px, rgba(255,255,255,0.05) 40px, rgba(255,255,255,0.05) 80px)",
            }}
          />
        </div>

        {/* Abstract SVG */}
        <div className="absolute right-0 top-0 h-full w-1/2 opacity-30 flex items-center justify-center">
          <svg
            fill="none"
            height="600"
            viewBox="0 0 400 600"
            width="400"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M50 0V600M350 0V600M50 100H350M50 300H350M50 500H350M50 100L350 300M50 300L350 500M350 100L50 300M350 300L50 500"
              stroke="white"
              strokeWidth="2"
            />
          </svg>
        </div>

        <div className="relative w-full px-4 md:px-16 max-w-[1440px] mx-auto">
          <span className="inline-block bg-secondary-container text-white px-3 py-1 font-[family-name:var(--font-label-sm)] text-[12px] leading-4 font-medium mb-6 uppercase tracking-widest">
            About Us
          </span>
          <h1 className="font-[family-name:var(--font-display-lg)] text-[32px] md:text-[64px] leading-[40px] md:leading-[72px] tracking-[-0.02em] font-extrabold text-white max-w-3xl leading-none">
            ENGINEERED
            <br />
            LEGACY
          </h1>
          <div className="mt-12 h-1 w-24 bg-secondary-container" />
          <p className="mt-8 text-on-primary-container font-[family-name:var(--font-body-lg)] text-[18px] leading-[28px] max-w-xl">
            Where heavy structural expertise meets the precision of
            architectural refinement. We build for the next century.
          </p>
        </div>
      </section>

      {/* ═══ OUR STORY ════════════════════════════════ */}
      <section className="py-24 bg-surface">
        <div className="px-4 md:px-16 max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
          <div className="md:col-span-5">
            <h2 className="font-[family-name:var(--font-headline-lg)] text-[24px] md:text-[40px] leading-[32px] md:leading-[48px] tracking-[-0.01em] font-bold text-primary mb-8">
              Our Story
            </h2>
            <div className="space-y-6">
              <p className="font-[family-name:var(--font-body-lg)] text-[18px] leading-[28px] text-on-surface-variant">
                Structura began not in a design studio, but on the dirty,
                high-stakes floor of heavy industrial engineering. We specialized
                in structural failure analysis and reinforcement for critical
                infrastructure.
              </p>
              <p className="font-[family-name:var(--font-body-lg)] text-[18px] leading-[28px] text-on-surface-variant">
                This origin forged our core identity:{" "}
                <strong className="text-primary">Precision as a Standard</strong>
                . As we evolved into high-end architectural renovations, we
                brought the same rigorous engineering protocols to residential
                and commercial spaces.
              </p>
              <div className="flex items-center gap-4 mt-8">
                <div className="w-12 h-px bg-primary" />
                <span className="font-[family-name:var(--font-label-md)] text-[14px] leading-5 tracking-tighter text-secondary uppercase">
                  Est. 2008
                </span>
              </div>
            </div>
          </div>
          <div className="md:col-span-7 relative">
            <div
              className="border overflow-hidden"
              style={{
                borderColor: "#1b1c1c",
                boxShadow: "4px 4px 0px #1b1c1c",
              }}
            >
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAjSAd5Ivgmc0vY2gGQWrLSgQPCrhaOPwX4UVeI8HMRo-Ft-3AfKaJoagJ2g9vNHG9r7WJ6WJKSczs9ZSwUnVRTPkGkme-1SHF-zm8pmj2lPNjxtaK3V1NbGWF0RUJpAsUbBZMq3KzZMXDrPR-qZuOL2JdBjQ94tECwxrJEf2e5Xfoe0TL8uPp0Dq4nm2d6mvALH-PCOQumqhikznT2aciOt6r30aSF0lcy-xOXjbp5msa9_XXiotmMiUoqCWCGhBn-cu5u8lnY2-Tf"
                alt="Structural reinforcement project"
                className="w-full aspect-[1.49] object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
            {/* Overlay tag */}
            <div className="absolute -bottom-6 -right-6 bg-primary text-white p-6 hidden md:block">
              <p className="font-[family-name:var(--font-label-sm)] text-[12px] leading-4 font-medium mb-2 opacity-60">
                PHASE 01 // FOUNDATION
              </p>
              <p className="font-[family-name:var(--font-headline-md)] text-[24px] leading-[32px] font-bold tracking-tight">
                STRUCTURAL
                <br />
                INTEGRITY
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ PHILOSOPHY ═══════════════════════════════ */}
      <section className="py-24 bg-surface-container">
        <div className="px-4 md:px-16 max-w-[1440px] mx-auto">
          <div className="border-l-4 border-secondary-container pl-8 mb-16">
            <h2 className="font-[family-name:var(--font-headline-lg)] text-[24px] md:text-[40px] leading-[32px] md:leading-[48px] tracking-[-0.01em] font-bold text-primary uppercase">
              The Philosophy
            </h2>
            <p className="font-[family-name:var(--font-label-md)] text-[14px] leading-5 tracking-[0.05em] text-on-surface-variant tracking-widest mt-2 uppercase">
              Core Principles of Modern Construct
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-outline">
            {PRINCIPLES.map((p) => (
              <div
                key={p.number}
                className="bg-surface p-12 hover:bg-primary group transition-colors duration-500"
              >
                <span className="text-secondary font-[family-name:var(--font-label-md)] text-[14px] leading-5 tracking-[0.05em] mb-4 block group-hover:text-secondary-container">
                  {p.number} / {p.label}
                </span>
                <h3 className="font-[family-name:var(--font-headline-md)] text-[24px] leading-[32px] font-bold text-primary mb-6 group-hover:text-white">
                  {p.title}
                </h3>
                <p className="font-[family-name:var(--font-body-md)] text-[16px] leading-[24px] text-on-surface-variant group-hover:text-on-primary-container">
                  {p.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ THE COLLECTIVE ═══════════════════════════ */}
      <section className="py-24 bg-surface overflow-hidden">
        <div className="px-4 md:px-16 max-w-[1440px] mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <h2 className="font-[family-name:var(--font-headline-lg)] text-[24px] md:text-[40px] leading-[32px] md:leading-[48px] tracking-[-0.01em] font-bold text-primary">
              The Collective
            </h2>
            <p className="font-[family-name:var(--font-body-md)] text-[16px] leading-[24px] text-on-surface-variant max-w-md">
              A multidisciplinary unit of engineers, architects, and makers
              dedicated to the art of the construct.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TEAM.map((member) => (
              <div key={member.name} className="group">
                <div
                  className="border mb-6 grayscale hover:grayscale-0 transition-all duration-500 h-96 bg-surface-container overflow-hidden"
                  style={{ borderColor: "#1b1c1c" }}
                >
                  <div
                    className="w-full h-full bg-cover bg-center"
                    style={{ backgroundImage: `url('${member.image}')` }}
                  />
                </div>
                <p className="font-[family-name:var(--font-label-sm)] text-[12px] leading-4 font-medium text-secondary-container mb-1 tracking-widest uppercase">
                  {member.role}
                </p>
                <h4 className="font-[family-name:var(--font-headline-md)] text-[24px] leading-[32px] font-bold text-primary">
                  {member.name}
                </h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ MISSION QUOTE ════════════════════════════ */}
      <section className="relative py-32 bg-primary">
        <div
          className="absolute inset-0 opacity-10 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAakiIU728C28wN2JEmkwXwjn9d8DqcRMr1zM242JkxBVAPzcOoDkKl2MNPg-cvbB-EKWslKsiBk8owrpr7tCjLTVmeYh6kZmHB6yJ9_C0S2SaCrrWy92Q6nQ6o-FHMKmdXsGtiD_TAIyFWmH2AM2ENPR81edDKrXRRT7vrK_DxGUSzUTk7pV8BvIQeSS8vpVFInMsbC27v4Z5gum-VNHwWZWyC08AOq_yQCKNqDrkkYRJ8zjf0-Ks057CSjHZCk59h79jh_teCwrjl')",
          }}
        />
        <div className="relative px-4 md:px-16 max-w-4xl mx-auto text-center">
          <svg
            className="text-secondary-container mb-8 mx-auto"
            width="48"
            height="48"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z" />
          </svg>
          <blockquote className="font-[family-name:var(--font-display-lg)] text-[32px] md:text-[64px] leading-[40px] md:leading-[72px] tracking-[-0.02em] font-extrabold text-white leading-tight mb-12">
            &quot;We don&apos;t just renovate; we re-engineer the human
            experience.&quot;
          </blockquote>
          <div className="w-24 h-1 bg-secondary-container mx-auto" />
        </div>
      </section>

      {/* ═══ CTA ═══════════════════════════════════════ */}
      <section className="py-24 bg-surface text-center px-4 md:px-16">
        <h2 className="font-[family-name:var(--font-headline-lg)] text-[24px] md:text-[40px] leading-[32px] md:leading-[48px] tracking-[-0.01em] font-bold text-primary mb-6">
          RECONFIGURE YOUR REALITY
        </h2>
        <p className="font-[family-name:var(--font-body-lg)] text-[18px] leading-[28px] text-on-surface-variant mb-12 max-w-xl mx-auto">
          Ready to transform a space through the lens of structural engineering?
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-6">
          <button className="bg-primary text-on-primary px-10 py-5 font-[family-name:var(--font-label-md)] text-[14px] leading-5 tracking-[0.05em] uppercase tracking-widest transition-all flex items-center justify-center gap-3">
            View Portfolio
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </button>
          <button className="bg-surface border-2 border-primary text-primary px-10 py-5 font-[family-name:var(--font-label-md)] text-[14px] leading-5 tracking-[0.05em] uppercase tracking-widest hover:bg-surface-container transition-all">
            Consultation
          </button>
        </div>
      </section>

      <StructuraFooter />
    </main>
  );
}
