"use client";

import Link from "next/link";
import Footer from "../components/Footer";

const milestones = [
  {
    year: "2019",
    label: "Founded on a simple idea",
    text: "RENO3D started in a small studio with one belief: every homeowner deserves to see their future space before a single wall is touched. We paired architectural expertise with real-time 3D visualization to make that possible.",
    side: "left" as const,
  },
  {
    year: "2021",
    label: "First 3D-interactive renovation launched",
    text: "We shipped our first fully interactive renovation project — clients could walk through their future kitchen in real time, swap materials on the fly, and make decisions with confidence.",
    side: "right" as const,
  },
  {
    year: "2023",
    label: "200+ homes transformed",
    text: "Two hundred projects in, our portfolio spans minimalist apartments, luxury villas, and everything in between. Each one started with a conversation and a 3D render.",
    side: "left" as const,
  },
  {
    year: "2025",
    label: "Real-time client walkthroughs introduced",
    text: "We launched live walkthrough sessions — clients join a virtual tour of their renovation from anywhere in the world, guiding our team through their vision in real time.",
    side: "right" as const,
  },
  {
    year: "Today",
    label: "Building the future of renovation",
    text: "We're pushing the boundary of what's possible: AI-assisted material matching, AR site previews, and a platform that makes high-end renovation accessible to more homeowners.",
    side: "left" as const,
  },
];

const values = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="14" cy="14" r="12" />
        <path d="M14 8v6l4 2" />
      </svg>
    ),
    title: "Transparency First",
    desc: "No surprises. Real-time 3D visuals keep you informed at every stage.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 24L14 4l10 20" />
        <path d="M7.5 18h13" />
      </svg>
    ),
    title: "Craft Over Speed",
    desc: "Quality materials, skilled hands, and the patience to get it right.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="4" y="4" width="20" height="20" rx="3" />
        <path d="M4 12h20" />
        <path d="M12 12v12" />
      </svg>
    ),
    title: "Technology as a Tool",
    desc: "3D serves your vision — it never replaces the conversation.",
  },
];

const team = [
  {
    name: "Alireza Hosseini",
    role: "Founder & Lead Designer",
    note: "Believes every floor plan tells a story worth visualizing.",
  },
  {
    name: "Sara Mohammadi",
    role: "3D Visualization Director",
    note: "Turns abstract ideas into photorealistic worlds.",
  },
  {
    name: "Dariush Karimi",
    role: "Head of Construction",
    note: "20 years of building — the bridge between render and reality.",
  },
  {
    name: "Neda Abbasi",
    role: "Client Experience Lead",
    note: "Makes sure every homeowner feels heard, not hurried.",
  },
];

export default function AboutPage() {
  return (
    <div className="about-page">
      {/* ── Origin Statement (off-white) ─────────────────── */}
      <header className="about-intro">
        <h1 className="about-intro-headline">
          Every Space Has a Story.
          <br />
          We Just Help You <span className="about-oak">See It</span>.
        </h1>
        <p className="about-intro-sub">
          RENO3D was founded on one belief: renovation shouldn&apos;t start with
          a leap of faith. We use real-time 3D visualization to help homeowners
          see, touch, and decide on their future space — before a single wall is
          touched.
        </p>
      </header>

      {/* ── Journey Timeline (dark matte slate) ──────────── */}
      <section className="about-timeline-section">
        <div className="about-timeline-header">
          <div className="eyebrow" style={{ background: "rgba(255,255,255,0.1)" }}>
            <span className="eyebrow-text">Our Journey</span>
          </div>
          <h2 className="about-timeline-headline">How We Got Here</h2>
        </div>
        <div className="about-timeline-line" />
        <div className="about-timeline">
          {milestones.map((m) => (
            <div
              key={m.year}
              className={`about-milestone about-milestone--${m.side}`}
            >
              <div className="about-milestone-dot" />
              <div className="about-milestone-content">
                <div className="about-milestone-meta">
                  <span className="about-milestone-year">{m.year}</span>
                  <span className="about-milestone-label">{m.label}</span>
                </div>
                <p className="about-milestone-text">{m.text}</p>
                <div className="about-milestone-visual">
                  <div className="about-milestone-placeholder" />
                </div>
              </div>
              <div className="about-milestone-spacer" />
            </div>
          ))}
        </div>
      </section>

      {/* ── Philosophy / Values (off-white) ──────────────── */}
      <section className="about-values-section">
        <div className="about-values-header">
          <div className="eyebrow">
            <span className="eyebrow-text">Our Philosophy</span>
          </div>
          <h2 className="section-headline">What We Stand For</h2>
        </div>
        <div className="about-values-grid">
          {values.map((v) => (
            <div key={v.title} className="about-value-card">
              <div className="about-value-icon">{v.icon}</div>
              <h3 className="about-value-title">{v.title}</h3>
              <p className="about-value-desc">{v.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── The People Behind It (warm gray) ─────────────── */}
      <section className="about-team-section">
        <div className="about-team-header">
          <div className="eyebrow" style={{ background: "var(--matte-slate)" }}>
            <span className="eyebrow-text">The Team</span>
          </div>
          <h2 className="section-headline">The People Behind It</h2>
        </div>
        <div className="about-team-grid">
          {team.map((t) => (
            <div key={t.name} className="about-team-card">
              <div className="about-team-avatar" />
              <h3 className="about-team-name">{t.name}</h3>
              <span className="about-team-role">{t.role}</span>
              <p className="about-team-note">{t.note}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Closing Statement (dark matte slate) ─────────── */}
      <section className="about-closing">
        <blockquote className="about-closing-quote">
          We don&apos;t just renovate spaces — we help you{" "}
          <span className="about-oak">see the life inside them</span> before
          it begins.
        </blockquote>
        <Link href="/contact" className="btn-pill">
          Start Your Project
        </Link>
      </section>

      <Footer />
    </div>
  );
}
