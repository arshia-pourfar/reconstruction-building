import Link from "next/link";

const styles = [
  { id: "minimalist", name: "Minimalist", description: "Clean lines, muted palettes, and intentional negative space.", href: "/contact", swatch: { background: "linear-gradient(160deg, #E8E4DF 0%, #D4D0CB 40%, #C8C4BF 70%, #BCB8B3 100%)" } },
  { id: "modern-luxury", name: "Modern Luxury", description: "Deep tones, bronze accents, and rich material contrasts.", href: "/contact", swatch: { background: "linear-gradient(160deg, #3B4049 0%, #2A2D33 35%, #1F2127 65%, #B8956A 100%)" } },
  { id: "japandi", name: "Japandi", description: "Warm oak tones balanced with wabi-sabi simplicity.", href: "/contact", swatch: { background: "linear-gradient(160deg, #D4C4A8 0%, #C4A77D 35%, #B8956A 65%, #A89070 100%)" } },
];

export default function StyleCards() {
  return (
    <section className="w-full" style={{ padding: "var(--section-pad) var(--side-pad)", maxWidth: "var(--container-max)", margin: "0 auto" }}>
      <div className="flex flex-col items-center" style={{ marginBottom: "var(--heading-gap)" }}>
        <div className="inline-flex items-center h-8 px-[18px] rounded-full mb-6 bg-[var(--matte-slate)]">
          <span className="text-xs font-semibold tracking-[1.5px] uppercase text-[var(--oak)]">Choose Your Aesthetic</span>
        </div>
        <h2 className="text-[40px] font-semibold leading-[1.15] tracking-tight text-center mb-4 text-[var(--foreground)]">Find Your Signature Style</h2>
      </div>

      <div className="grid gap-7 grid-cols-3">
        {styles.map((style) => (
          <Link key={style.id} href={style.href} className="rounded-[20px] overflow-hidden transition-all duration-300 flex flex-col no-underline bg-white group hover:-translate-y-1" style={{ border: "1px solid rgba(0,0,0,0.06)", boxShadow: "0 20px 48px rgba(0,0,0,0.08)" }}>
            <div className="w-full h-[260px] shrink-0" style={style.swatch} />
            <div className="flex flex-col p-6" style={{ background: "rgba(255,255,255,0.55)", backdropFilter: "blur(8px)", borderTop: "1px solid rgba(255,255,255,0.6)" }}>
              <h3 className="text-[22px] font-semibold leading-[1.2] m-0 mb-1.5 text-[var(--foreground)]">{style.name}</h3>
              <p className="text-sm font-normal leading-[1.55] m-0 mb-4 text-[var(--concrete)]">{style.description}</p>
              <span className="inline-flex items-center gap-1.5 text-sm font-semibold transition-all duration-200 text-[var(--oak)] group-hover:gap-[10px]">
                Explore Style
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 3L9 7L5 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
