"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    num: "۰۱",
    title: "اسکن سه‌بعدی و مشاوره",
    desc: "بازدید رایگان از محل، اسکن سه‌بعدی فضا و بررسی نیازها و بودجه شما.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
  },
  {
    num: "۰۲",
    title: "طراحی و رندر VR",
    desc: "ارائه رندر فوتورئالیستیک و پیش‌نمایش واقعیت مجازی قبل از شروع اجرا.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
  },
  {
    num: "۰۳",
    title: "اجرای فنی",
    desc: "اجرای دقیق با نظارت مستمر بر کیفیت متریال و اجرا توسط تیم متخصص.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
      </svg>
    ),
  },
  {
    num: "۰۴",
    title: "تحویل هوشمند",
    desc: "تحویل نهایی با گارانتی ۲۴ ماهه، آموزش سیستم‌های هوشمند و پشتیبانی مستمر.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="20 6 9 17 4 12" />
      </svg>
    ),
  },
];


export default function ProcessTimeline() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const lineFillRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const cards = section.querySelectorAll("[data-step-card]");
    const lineDots = section.querySelectorAll("[data-line-dot]");
    const progressDots = section.querySelectorAll("[data-progress-dot]");

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top 75%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
      });

      tl.fromTo(
        lineFillRef.current,
        { width: "0%" },
        { width: "100%", duration: 1.2, ease: "power3.inOut" }
      );

      tl.fromTo(
        lineDots,
        { scale: 0, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.3, stagger: 0.25, ease: "back.out(2.5)" },
        "-=0.6"
      );

      cards.forEach((card, i) => {
        const numBg = card.querySelector("[data-step-num-bg]");
        const numLabel = card.querySelector("[data-step-num-label]");
        const dot = card.querySelector("[data-step-dot]");
        const title = card.querySelector("[data-step-title]");
        const desc = card.querySelector("[data-step-desc]");

        tl.fromTo(
          card,
          { y: 50, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.7, ease: "power3.out" },
          `-=${i === 0 ? 0.5 : 0.25}`
        );

        if (numBg) {
          tl.fromTo(
            numBg,
            { scale: 0.6, opacity: 0 },
            { scale: 1, opacity: 1, duration: 0.6, ease: "back.out(2)" },
            "-=0.4"
          );
        }

        if (numLabel) {
          tl.fromTo(
            numLabel,
            { y: -8, opacity: 0 },
            { y: 0, opacity: 0.6, duration: 0.3, ease: "power2.out" },
            "-=0.15"
          );
        }

        if (dot) {
          tl.fromTo(
            dot,
            { scale: 0, rotation: -180 },
            { scale: 1, rotation: 0, duration: 0.5, ease: "back.out(2.5)" },
            "-=0.25"
          );
        }

        if (title) {
          tl.fromTo(
            title,
            { y: 10, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.35, ease: "power2.out" },
            "-=0.1"
          );
        }

        if (desc) {
          tl.fromTo(
            desc,
            { y: 8, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.35, ease: "power2.out" },
            "-=0.05"
          );
        }

        if (progressDots[i]) {
          tl.to(
            progressDots[i],
            {
              backgroundColor: "var(--blue-cta)",
              width: "28px",
              borderRadius: "4px",
              boxShadow: "0 0 12px rgba(37,99,235,0.4)",
              duration: 0.35,
              ease: "power2.out",
            },
            "-=0.25"
          );
        }
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="process-section">
      <div className="process-inner">
        <div data-aos="fade-up" className="process-header">
          <div className="eyebrow" style={{ background: "rgba(255,255,255,0.1)" }}>
            <span className="eyebrow-text">فرآیند کار</span>
          </div>
          <h2 className="section-headline" style={{ color: "var(--off-white)" }}>
            از ایده تا اجرا
          </h2>
        </div>

        <div className="process-timeline">
          <div className="process-line-track">
            <div ref={lineFillRef} className="process-line-fill" />
          </div>

          {steps.map((step) => (
            <div
              key={step.num}
              data-step-card
              className="process-step"
              style={{ opacity: 0 }}
            >
              <div className="process-step-card">
                <div className="process-step-number">
                  <div className="process-step-number-text" data-step-num-bg>
                    {step.num}
                  </div>
                  <div className="process-step-number-label" data-step-num-label>
                    مرحله
                  </div>
                </div>

                <div className="process-step-dot" data-step-dot>
                  <div className="process-step-icon">{step.icon}</div>
                </div>

                <h3 className="process-step-title" data-step-title>
                  {step.title}
                </h3>
                <p className="process-step-desc" data-step-desc>
                  {step.desc}
                </p>
              </div>
            </div>
          ))}

          {/* {lineDotPositions.map((pct, idx) => (
            <span
              key={idx}
              data-line-dot
              className="process-line-dot"
              style={{ right: `${pct}%`, opacity: 0, scale: 0 }}
            />
          ))} */}
        </div>

        <div ref={progressRef} className="process-progress" data-aos="fade-up" data-aos-delay="200">
          {steps.map((s) => (
            <span
              key={s.num}
              data-progress-dot
              className="process-progress-dot"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
