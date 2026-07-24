"use client";

import { useState, useCallback } from "react";
import Link from "next/link";
import Footer from "../components/Footer";

const sections = [
  {
    id: "project-process",
    chip: "Project Process",
    title: "Project Process",
    content: {
      intro:
        "Every RENO3D project follows a structured four-phase process designed to keep timelines tight and expectations aligned.",
      steps: [
        { label: "Consultation", desc: "We visit your space, discuss your vision, and define scope, budget, and timeline." },
        { label: "3D Concept", desc: "Our designers create photorealistic 3D renders of your proposed renovation for review." },
        { label: "Approval", desc: "You review the concept, request revisions if needed, and sign off on the final design." },
        { label: "Build", desc: "Our construction team executes the approved plan with weekly progress updates." },
      ],
    },
  },
  {
    id: "payments",
    chip: "Payments",
    title: "Payment Terms",
    content: {
      intro: "We keep payments milestone-based so you only pay as work is completed.",
      bullets: [
        "30% deposit due upon signing the project agreement.",
        "40% due after 3D concept approval and before construction begins.",
        "20% due at the midpoint of the build phase.",
        "10% final balance due upon project completion and walkthrough.",
      ],
      note: "All invoices are due within 14 days. Late payments incur a 1.5% monthly fee.",
    },
  },
  {
    id: "revisions",
    chip: "Revisions",
    title: "3D Design Revisions",
    content: {
      intro: "We want you to love the design before a single wall is touched.",
      bullets: [
        "Two rounds of 3D revisions are included in every project at no extra cost.",
        "Additional revision rounds are billed at $350 per round.",
        "Major scope changes (new rooms, structural alterations) are quoted separately.",
        "Revision turn-around is typically 3–5 business days.",
      ],
    },
  },
  {
    id: "materials",
    chip: "Materials & Sourcing",
    title: "Materials & Sourcing",
    content: {
      intro: "Transparency on what's included and what's on you.",
      bullets: [
        "Standard material sourcing (tile, paint, basic fixtures) is included in our service fee.",
        "Premium or specialty materials (imported stone, custom millwork) are quoted separately.",
        "You're welcome to supply your own materials — we'll adjust the quote accordingly.",
        "All material costs are passed through at cost with no markup.",
      ],
    },
  },
  {
    id: "cancellations",
    chip: "Cancellations",
    title: "Cancellation & Refund Policy",
    content: {
      intro: "Plans change. Here's how we handle them.",
      bullets: [
        "Cancellations before 3D concept delivery: full refund minus a $500 admin fee.",
        "Cancellations after concept approval: deposit is non-refundable; milestone payments for completed work are retained.",
        "Cancellations during the build phase: all completed work is billed; remaining prepaid amounts are refunded within 30 days.",
      ],
    },
  },
  {
    id: "warranty",
    chip: "Warranty",
    title: "Warranty on Workmanship",
    content: {
      intro: "We stand behind what we build.",
      bullets: [
        "All structural and finish work carries a 5-year workmanship warranty.",
        "Plumbing and electrical work is covered for 3 years.",
        "Warranty claims are assessed within 5 business days of submission.",
        "Damage from misuse, unauthorized modifications, or normal wear is not covered.",
      ],
    },
  },
];

export default function RulesPage() {
  const [active, setActive] = useState("project-process");

  const handleChipClick = useCallback((id: string) => {
    setActive(id);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, []);

  return (
    <div className="rules-page">
      {/* ── Header ──────────────────────────────────────── */}
      <header className="rules-header">
        <div className="eyebrow">
          <span className="eyebrow-text">Studio Policies</span>
        </div>
        <h1 className="rules-headline">How We Work Together</h1>
        <p className="rules-sub">
          Clear terms, honest process — everything you should know before
          starting a project with RENO3D.
        </p>
      </header>

      {/* ── Chip Nav ────────────────────────────────────── */}
      <nav className="rules-nav" aria-label="Section navigation">
        <div className="rules-nav-inner">
          {sections.map((s) => (
            <button
              key={s.id}
              className={`rules-chip ${active === s.id ? "rules-chip--active" : ""}`}
              onClick={() => handleChipClick(s.id)}
            >
              {s.chip}
            </button>
          ))}
        </div>
      </nav>

      {/* ── Rule Sections ───────────────────────────────── */}
      <div className="rules-content">
        {sections.map((s, i) => (
          <section
            key={s.id}
            id={s.id}
            className={`rules-card ${i % 2 === 1 ? "rules-card--alt" : ""}`}
          >
            <div className="rules-card-num">
              {String(i + 1).padStart(2, "0")}
            </div>
            <div className="rules-card-body">
              <h2 className="rules-card-title">{s.title}</h2>
              <p className="rules-card-intro">{s.content.intro}</p>

              {s.content.steps && (
                <ol className="rules-steps">
                  {s.content.steps.map((step) => (
                    <li key={step.label} className="rules-step">
                      <span className="rules-step-label">{step.label}</span>
                      <span className="rules-step-desc">{step.desc}</span>
                    </li>
                  ))}
                </ol>
              )}

              {s.content.bullets && (
                <ul className="rules-bullets">
                  {s.content.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              )}

              {s.content.note && (
                <p className="rules-card-note">{s.content.note}</p>
              )}
            </div>
          </section>
        ))}
      </div>

      {/* ── CTA Banner ──────────────────────────────────── */}
      <section className="rules-cta">
        <div className="rules-cta-inner">
          <p className="rules-cta-text">Questions about our process?</p>
          <Link href="/contact" className="btn-pill">
            Talk to Our Team
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
