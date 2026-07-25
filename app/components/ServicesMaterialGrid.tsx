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
    <section className="sm-section">
      <div className="sm-inner">
        {/* Services grid */}
        <div className="sm-header">
          <div className="eyebrow">
            <span className="eyebrow-text">خدمات و متریال</span>
          </div>
          <h2 className="section-headline">خدمات تخصصی و پالت متریال</h2>
        </div>

        <div className="sm-services-grid">
          {services.map((s) => (
            <Link key={s.id} href="/services" className="sm-service-card">
              <div className="sm-service-swatch" style={{ background: s.gradient }} />
              <div className="sm-service-body">
                <div className="sm-service-icon">{s.icon}</div>
                <h3 className="sm-service-title">{s.title}</h3>
                <p className="sm-service-desc">{s.desc}</p>
              </div>
            </Link>
          ))}
        </div>

        {/* Material palette */}
        <div className="sm-materials">
          <h3 className="sm-materials-title">پالت متریال</h3>
          <div className="sm-materials-grid">
            {materials.map((m) => (
              <div key={m.id} className="sm-material-swatch">
                <div
                  className="sm-material-color"
                  style={{ background: m.color }}
                />
                <span className="sm-material-name">{m.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
