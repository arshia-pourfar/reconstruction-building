"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const STEPS = [
  {
    num: "۰۱",
    title: "ممیزی ساختاری",
    desc: "تحلیل و ارزیابی فضای موجود",
  },
  {
    num: "۰۲",
    title: "طراحی و مهندسی",
    desc: "طراحی دقیق و مدل‌سازی سه‌بعدی",
  },
  {
    num: "۰۳",
    title: "اجرا",
    desc: "ساخت با دقت مهندسی",
  },
];

export default function RoadmapLine() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const tracerRef = useRef<HTMLDivElement>(null);
  const dotRefs = useRef<HTMLDivElement[]>([]);
  const glowRefs = useRef<HTMLDivElement[]>([]);
  const cardRefs = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const section = sectionRef.current;
    const line = lineRef.current;
    if (!section || !line) return;

    // Header entrance
    const header = section.querySelector(".roadmap-header");
    if (header) {
      gsap.fromTo(header,
        { opacity: 0, y: 30 },
        {
          opacity: 1, y: 0, duration: 0.8, ease: "power2.out",
          scrollTrigger: { trigger: section, start: "top 75%", toggleActions: "play none none none" },
        },
      );
    }

    // Line fill animation
    gsap.fromTo(line,
      { scaleY: 0 },
      {
        scaleY: 1, ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top 65%",
          end: "bottom 35%",
          scrub: 0.6,
        },
      },
    );

    // Tracer dot moving along the line
    if (tracerRef.current) {
      gsap.fromTo(tracerRef.current,
        { top: "0%" },
        {
          top: "100%", ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top 65%",
            end: "bottom 35%",
            scrub: 0.6,
          },
        },
      );
    }

    // Each step activation
    STEPS.forEach((_, i) => {
      const dot = dotRefs.current[i];
      const glow = glowRefs.current[i];
      const card = cardRefs.current[i];
      if (!dot || !card) return;

      const startPct = 12 + i * 30;
      const midPct = startPct + 10;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: `${startPct}% 70%`,
          toggleActions: "play none none none",
        },
      });

      // Dot bounce in
      tl.fromTo(dot,
        { scale: 0.3, opacity: 0.2 },
        { scale: 1, opacity: 1, duration: 0.5, ease: "back.out(3)" },
        0,
      );

      // Glow pulse
      if (glow) {
        tl.fromTo(glow,
          { scale: 1, opacity: 0 },
          { scale: 1.8, opacity: 0.4, duration: 0.6, ease: "power2.out" },
          0,
        );
        tl.to(glow,
          { scale: 2.2, opacity: 0, duration: 0.8, ease: "power1.out" },
          0.3,
        );
      }

      // Card slide in
      tl.fromTo(card,
        { opacity: 0, x: 40, filter: "blur(4px)" },
        { opacity: 1, x: 0, filter: "blur(0px)", duration: 0.6, ease: "power2.out" },
        0.15,
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <section ref={sectionRef} className="py-24 md:py-32 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-16 max-w-[1280px]">
        {/* Header */}
        <div className="roadmap-header mb-20 md:mb-28 opacity-0">
          <span className="text-[13px] text-tertiary/60 block mb-3"
            style={{ fontFamily: "Vazirmatn, sans-serif", fontWeight: 400 }}
          >
            فاز ۰۴ // مسیر اجرا
          </span>
          <h2 className="text-[28px] md:text-[44px] leading-[40px] md:leading-[56px] font-extrabold"
            style={{ fontFamily: "Vazirmatn, sans-serif" }}
          >
            نقشه راه تا واقعیت
          </h2>
        </div>

        {/* Roadmap */}
        <div className="relative flex flex-col gap-0">
          {/* Track line — background */}
          <div className="absolute right-[19px] md:right-[23px] top-0 bottom-0 w-[2px] bg-outline-variant/20">
            {/* Filled line */}
            <div
              ref={lineRef}
              className="absolute top-0 left-0 w-full bg-gradient-to-b from-tertiary/60 via-tertiary to-tertiary origin-top"
              style={{ height: "100%" }}
            />
            {/* Tracer dot */}
            <div
              ref={tracerRef}
              className="absolute left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-tertiary shadow-[0_0_12px_rgba(99,102,241,0.6)]"
              style={{ top: "0%" }}
            />
          </div>

          {/* Steps */}
          <div className="flex flex-col gap-16 md:gap-24">
            {STEPS.map((step, i) => (
              <div key={step.num} className="relative flex items-start gap-6 md:gap-10">
                {/* Dot with glow */}
                <div className="relative z-10 flex-shrink-0">
                  {/* Glow ring */}
                  <div
                    ref={(el) => { if (el) glowRefs.current[i] = el; }}
                    className="absolute inset-0 rounded-full bg-tertiary/30 opacity-0"
                    style={{ margin: "-6px" }}
                  />
                  {/* Dot */}
                  <div
                    ref={(el) => { if (el) dotRefs.current[i] = el; }}
                    className="relative w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-tertiary bg-background flex items-center justify-center opacity-20"
                  >
                    <span className="text-[12px] md:text-[13px] text-tertiary"
                      style={{ fontFamily: "Vazirmatn, sans-serif", fontWeight: 600 }}
                    >
                      {step.num}
                    </span>
                  </div>
                </div>

                {/* Card */}
                <div
                  ref={(el) => { if (el) cardRefs.current[i] = el; }}
                  className="flex-1 opacity-0 pt-1 md:pt-2"
                >
                  <div className="bg-surface-container-low border border-outline-variant/50 rounded-2xl p-6 md:p-8 hover:border-tertiary/30 transition-colors duration-300"
                    style={{ boxShadow: "0 2px 12px rgba(0,0,0,0.04)" }}
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-[11px] text-tertiary/50"
                        style={{ fontFamily: "Vazirmatn, sans-serif", fontWeight: 400 }}
                      >
                        مرحله {step.num}
                      </span>
                      {i === STEPS.length - 1 && (
                        <span className="text-[10px] text-tertiary bg-tertiary/10 px-2 py-0.5 rounded-full"
                          style={{ fontFamily: "Vazirmatn, sans-serif", fontWeight: 500 }}
                        >
                          هدف نهایی
                        </span>
                      )}
                    </div>
                    <h3 className="text-[20px] md:text-[24px] leading-[32px] md:leading-[36px] font-bold mb-2"
                      style={{ fontFamily: "Vazirmatn, sans-serif" }}
                    >
                      {step.title}
                    </h3>
                    <p className="text-[14px] md:text-[15px] leading-[24px] text-on-surface-variant"
                      style={{ fontFamily: "Vazirmatn, sans-serif", fontWeight: 400 }}
                    >
                      {step.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
