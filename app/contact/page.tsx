"use client";

import { useState, useCallback } from "react";
import Footer from "../components/Footer";

const projectTypes = [
  "Full Renovation",
  "Partial Renovation",
  "Interior Design Only",
  "3D Consultation Only",
];

const faqs = [
  {
    q: "Do you offer free consultations?",
    a: "Yes. Our initial 30-minute consultation is complimentary — we visit your space, discuss your vision, and provide a preliminary estimate with no obligation.",
  },
  {
    q: "How long does a typical renovation take?",
    a: "A full renovation typically takes 8–14 weeks depending on scope. Partial renovations and interior design projects are usually completed in 3–6 weeks. We provide a detailed timeline after the initial consultation.",
  },
  {
    q: "Can I see a 3D preview before committing?",
    a: "Absolutely. We create photorealistic 3D renders of your proposed renovation before any construction begins. You can review, request revisions, and approve the design at your own pace.",
  },
  {
    q: "Do you work outside the city?",
    a: "Yes, we work on projects throughout the region. Travel and accommodation costs are factored into the project quote transparently. Remote 3D consultations are also available for clients further afield.",
  },
];

export default function ContactPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = useCallback((i: number) => {
    setOpenFaq((prev) => (prev === i ? null : i));
  }, []);

  return (
    <div className="contact-page">
      {/* ── Header (off-white) ───────────────────────────── */}
      <header className="contact-header">
        <div className="eyebrow">
          <span className="eyebrow-text">Get in Touch</span>
        </div>
        <h1 className="contact-headline">Let&apos;s Design Your Next Chapter</h1>
        <p className="contact-sub">
          Tell us about your space — we&apos;ll respond within 24 hours.
        </p>
      </header>

      {/* ── Two-Column Split (warm gray) ─────────────────── */}
      <section className="contact-split">
        {/* Left: Form Card (dark matte slate) */}
        <div className="contact-form-card">
          <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
            <div className="contact-field">
              <label htmlFor="name" className="contact-label">Full Name</label>
              <input
                id="name"
                type="text"
                placeholder="Alireza Hosseini"
                className="contact-input"
                required
              />
            </div>

            <div className="contact-field-row">
              <div className="contact-field">
                <label htmlFor="email" className="contact-label">Email</label>
                <input
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  className="contact-input"
                  required
                />
              </div>
              <div className="contact-field">
                <label htmlFor="phone" className="contact-label">Phone</label>
                <input
                  id="phone"
                  type="tel"
                  placeholder="+1 (415) 555-0192"
                  className="contact-input"
                />
              </div>
            </div>

            <div className="contact-field">
              <label htmlFor="project-type" className="contact-label">Project Type</label>
              <select id="project-type" className="contact-input contact-select">
                {projectTypes.map((t) => (
                  <option key={t} value={t}>{t}</option>
                ))}
              </select>
            </div>

            <div className="contact-field">
              <label htmlFor="message" className="contact-label">Message</label>
              <textarea
                id="message"
                rows={5}
                placeholder="Tell us about your space, your vision, and any questions you have..."
                className="contact-input contact-textarea"
              />
            </div>

            <button type="submit" className="contact-submit">Send Message</button>
          </form>
        </div>

        {/* Right: Direct Info */}
        <div className="contact-info">
          {/* Map placeholder */}
          <div className="contact-map">
            <div className="contact-map-inner">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              <span>Studio Location</span>
            </div>
          </div>

          {/* Contact details */}
          <div className="contact-details">
            <div className="contact-detail-block">
              <span className="contact-detail-label">Studio Address</span>
              <p className="contact-detail-text">
                142 Oak Street, Suite 300<br />
                San Francisco, CA 94102
              </p>
            </div>

            <div className="contact-detail-block">
              <span className="contact-detail-label">Direct Contact</span>
              <a href="tel:+14155550192" className="contact-detail-link">+1 (415) 555-0192</a>
              <a href="mailto:hello@reno3d.studio" className="contact-detail-link">hello@reno3d.studio</a>
            </div>

            <div className="contact-detail-block">
              <span className="contact-detail-label">Messaging</span>
              <div className="contact-messaging">
                <a href="https://wa.me/14155550192" className="contact-msg-icon" aria-label="WhatsApp" target="_blank" rel="noopener noreferrer">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                </a>
                <a href="https://t.me/reno3d" className="contact-msg-icon" aria-label="Telegram" target="_blank" rel="noopener noreferrer">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.479.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
                  </svg>
                </a>
              </div>
            </div>

            <div className="contact-detail-block">
              <span className="contact-detail-label">Studio Hours</span>
              <p className="contact-detail-text">Mon – Sat, 9:00 AM – 7:00 PM</p>
            </div>

            <div className="contact-detail-block">
              <span className="contact-detail-label">Follow Us</span>
              <div className="contact-socials">
                <a href="https://instagram.com" className="contact-social-icon" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" />
                    <circle cx="12" cy="12" r="5" />
                    <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" />
                  </svg>
                </a>
                <a href="https://pinterest.com" className="contact-social-icon" aria-label="Pinterest" target="_blank" rel="noopener noreferrer">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0C5.373 0 0 5.372 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 0 1 .083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z" />
                  </svg>
                </a>
                <a href="https://linkedin.com" className="contact-social-icon" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ Strip (off-white) ────────────────────────── */}
      <section className="contact-faq-section">
        <div className="contact-faq-header">
          <div className="eyebrow">
            <span className="eyebrow-text">FAQ</span>
          </div>
          <h2 className="section-headline">Common Questions</h2>
        </div>
        <div className="contact-faq-list">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className={`contact-faq-item ${openFaq === i ? "contact-faq-item--open" : ""}`}
            >
              <button
                className="contact-faq-trigger"
                onClick={() => toggleFaq(i)}
                aria-expanded={openFaq === i}
              >
                <span className="contact-faq-question">{faq.q}</span>
                <svg className="contact-faq-chevron" width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 7l4 4 4-4" />
                </svg>
              </button>
              <div className="contact-faq-answer">
                <p>{faq.a}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}
