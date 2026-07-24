import Link from "next/link";

const styles = [
  {
    id: "minimalist",
    name: "Minimalist",
    description: "Clean lines, muted palettes, and intentional negative space.",
    href: "/contact",
    swatch: {
      background:
        "linear-gradient(160deg, #E8E4DF 0%, #D4D0CB 40%, #C8C4BF 70%, #BCB8B3 100%)",
    },
  },
  {
    id: "modern-luxury",
    name: "Modern Luxury",
    description: "Deep tones, bronze accents, and rich material contrasts.",
    href: "/contact",
    swatch: {
      background:
        "linear-gradient(160deg, #3B4049 0%, #2A2D33 35%, #1F2127 65%, #B8956A 100%)",
    },
  },
  {
    id: "japandi",
    name: "Japandi",
    description: "Warm oak tones balanced with wabi-sabi simplicity.",
    href: "/contact",
    swatch: {
      background:
        "linear-gradient(160deg, #D4C4A8 0%, #C4A77D 35%, #B8956A 65%, #A89070 100%)",
    },
  },
];

export default function StyleCards() {
  return (
    <section className="styles-section">
      {/* Heading */}
      <div className="styles-header">
        <div className="eyebrow">
          <span className="eyebrow-text">Choose Your Aesthetic</span>
        </div>
        <h2 className="section-headline">Find Your Signature Style</h2>
      </div>

      {/* Card grid */}
      <div className="styles-grid">
        {styles.map((style) => (
          <Link
            key={style.id}
            href={style.href}
            className="style-card"
          >
            {/* Tonal preview swatch */}
            <div className="style-card-swatch" style={style.swatch} />

            {/* Glass info panel */}
            <div className="style-card-info">
              <h3 className="style-card-name">{style.name}</h3>
              <p className="style-card-desc">{style.description}</p>
              <span className="style-card-link">
                Explore Style
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5 3L9 7L5 11"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
