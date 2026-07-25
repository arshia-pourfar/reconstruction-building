import Link from "next/link";

const services = [
  {
    id: "modern",
    title: "بازسازی مدرن",
    desc: "طراحی مینیمال، میکروسمنت و نورپردازی توکار",
    gradient: "linear-gradient(160deg, #E8E4DF 0%, #D4D0CB 40%, #BCB8B3 100%)",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
  },
  {
    id: "kitchen",
    title: "بازسازی آشپزخانه",
    desc: "کابینت مدرن، جزیره و تجهیزات توکار",
    gradient: "linear-gradient(160deg, #D4C4A8 0%, #C4A77D 35%, #B8956A 100%)",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
        <line x1="3" y1="9" x2="21" y2="9" />
        <line x1="9" y1="21" x2="9" y2="9" />
      </svg>
    ),
  },
  {
    id: "bathroom",
    title: "حمام اسپا",
    desc: "سنگ طبیعی، دوش بارانی و سیستم گرمایش کف",
    gradient: "linear-gradient(160deg, #3B4049 0%, #2A2D33 35%, #1F2127 100%)",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22a8 8 0 0 0 8-8V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8a8 8 0 0 0 8 8z" />
        <path d="M8 14v4" />
        <path d="M12 14v4" />
        <path d="M16 14v4" />
      </svg>
    ),
  },
  {
    id: "bms",
    title: "هوشمندسازی BMS",
    desc: "کنترل نور، دما و امنیت هوشمند",
    gradient: "linear-gradient(160deg, #2A2D33 0%, #1B1D1F 35%, #2563EB 100%)",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="4" y="4" width="16" height="16" rx="2" />
        <rect x="9" y="9" width="6" height="6" />
        <line x1="9" y1="1" x2="9" y2="4" />
        <line x1="15" y1="1" x2="15" y2="4" />
        <line x1="9" y1="20" x2="9" y2="23" />
        <line x1="15" y1="20" x2="15" y2="23" />
      </svg>
    ),
  },
];

const materials = [
  { id: "micro", name: "میکروسمنت", color: "#C8C4BF" },
  { id: "oak", name: "چوب بلوط", color: "#B8956A" },
  { id: "quartz", name: "کوارتز", color: "#E8E4DF" },
  { id: "marble", name: "سنگ مرمر", color: "#F6F4F1" },
  { id: "concrete", name: "بتن اکسپوز", color: "#8A8A82" },
  { id: "bronze", name: "برنز", color: "#8B6914" },
];

export default function ServicesMaterialGrid() {
  return (
    <section className="w-full" style={{ padding: "var(--section-pad) var(--side-pad)", background: "var(--warm-gray)" }}>
      <div className="mx-auto max-w-[var(--container-max)]">
        {/* Services grid */}
        <div className="flex flex-col items-center" style={{ marginBottom: "var(--heading-gap)" }}>
          <div className="inline-flex items-center h-8 px-[18px] rounded-full mb-6 bg-[var(--matte-slate)]">
            <span className="text-xs font-semibold tracking-[1.5px] uppercase text-[var(--oak)]">خدمات و متریال</span>
          </div>
          <h2 className="text-[40px] font-semibold leading-[1.15] tracking-tight text-center mb-4 text-[var(--foreground)]">خدمات تخصصی و پالت متریال</h2>
        </div>

        <div className="grid gap-5 mb-14 grid-cols-4">
          {services.map((s) => (
            <Link key={s.id} href="/services" className="rounded-[20px] overflow-hidden transition-all duration-300 flex flex-col no-underline bg-white group hover:-translate-y-1" style={{ border: "1px solid rgba(0,0,0,0.06)", boxShadow: "0 20px 48px rgba(0,0,0,0.08)" }}>
              <div className="w-full h-[140px]" style={{ background: s.gradient }} />
              <div className="p-5">
                <div className="flex items-center justify-center w-10 h-10 rounded-xl mb-3" style={{ background: "rgba(37,99,235,0.06)", color: "var(--blue-cta)" }}>{s.icon}</div>
                <h3 className="text-[15px] font-bold m-0 mb-1.5 text-[var(--foreground)]">{s.title}</h3>
                <p className="text-xs leading-[1.6] m-0 text-[var(--concrete)]">{s.desc}</p>
              </div>
            </Link>
          ))}
        </div>

        {/* Material palette */}
        <div className="text-center">
          <h3 className="text-xl font-bold m-0 mb-6 text-[var(--foreground)]">پالت متریال</h3>
          <div className="flex justify-center gap-6 flex-wrap">
            {materials.map((m) => (
              <div key={m.id} className="flex flex-col items-center gap-2.5">
                <div
                  className="w-14 h-14 rounded-full shadow-[0_2px_8px_rgba(0,0,0,0.1)]"
                  style={{ background: m.color, border: "3px solid #fff" }}
                />
                <span className="text-xs font-medium text-[var(--concrete)]">{m.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
