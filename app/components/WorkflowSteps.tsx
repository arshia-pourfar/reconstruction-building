"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const STEPS = [
  {
    number: "۰۱",
    title: "مشاوره",
    description:
      "با یک تحلیل دقیق سایت و مطالعه امکان‌سنجی شروع می‌کنیم. درک سبک زندگی شما و پتانسیل ساختاری سایت، پایه کار ماست.",
  },
  {
    number: "۰۲",
    title: "طراحی",
    description:
      "دقت فنی با دید خلاقانه ترکیب می‌شود. ما مدل‌های BIM دقیق و مشخصات متریال تولید می‌کنیم تا هر میلی‌متر مشخص باشد.",
  },
  {
    number: "۰۳",
    title: "اجرا",
    description:
      "تیم‌های ساخت ما با انضباط مهندسی عمل می‌کنند. تمام لجستیک ساختاری و نازک‌کاری را مدیریت می‌کنیم تا کمال را به موقع تحویل دهیم.",
  },
];

export default function WorkflowSteps() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const tracerRef = useRef<HTMLDivElement>(null);
  const stepRefs = useRef<HTMLDivElement[]>([]);
  const numRefs = useRef<HTMLDivElement[]>([]);
  const glowRefs = useRef<HTMLDivElement[]>([]);
  const contentRefs = useRef<HTMLDivElement[]>([]);
  const imageRef = useRef<HTMLDivElement>(null);
  const captionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const ctx = gsap.context(() => {
      // ── Header entrance ─────────────────────────────
      const header = section.querySelector(".wf-header");
      if (header && !prefersReduced) {
        const label = header.querySelector(".wf-label");
        const title = header.querySelector(".wf-title");
        const sub = header.querySelector(".wf-sub");
        const tl = gsap.timeline({
          scrollTrigger: { trigger: section, start: "top 78%", toggleActions: "play none none none" },
        });
        if (label) tl.fromTo(label, { opacity: 0, y: 14 }, { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" }, 0);
        if (title) tl.fromTo(title, { opacity: 0, y: 24, filter: "blur(4px)" }, { opacity: 1, y: 0, filter: "blur(0px)", duration: 0.7, ease: "power2.out" }, 0.1);
        if (sub) tl.fromTo(sub, { opacity: 0, y: 16 }, { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" }, 0.25);
      } else if (header) {
        gsap.set(header, { opacity: 1 });
      }

      // ── Vertical line + tracer ──────────────────────
      const line = lineRef.current;
      const tracer = tracerRef.current;
      if (line && !prefersReduced) {
        gsap.fromTo(line,
          { scaleY: 0 },
          {
            scaleY: 1, ease: "none",
            scrollTrigger: { trigger: section, start: "top 55%", end: "bottom 30%", scrub: 0.5 },
          },
        );
      } else if (line) {
        gsap.set(line, { scaleY: 1 });
      }

      if (tracer && !prefersReduced) {
        gsap.fromTo(tracer,
          { top: "0%" },
          {
            top: "100%", ease: "none",
            scrollTrigger: { trigger: section, start: "top 55%", end: "bottom 30%", scrub: 0.5 },
          },
        );
      }

      // ── Steps ───────────────────────────────────────
      STEPS.forEach((_, i) => {
        const step = stepRefs.current[i];
        const num = numRefs.current[i];
        const glow = glowRefs.current[i];
        const content = contentRefs.current[i];
        if (!step || !num) return;

        const startPct = 10 + i * 25;

        if (prefersReduced) {
          gsap.set([step, num], { opacity: 1 });
          if (content) gsap.set(content, { opacity: 1 });
          return;
        }

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: section,
            start: `${startPct}% 70%`,
            toggleActions: "play none none none",
          },
        });

        // Number badge: scale + rotation
        tl.fromTo(num,
          { scale: 0, opacity: 0, rotation: -20 },
          { scale: 1, opacity: 1, rotation: 0, duration: 0.5, ease: "back.out(3)" },
          0,
        );

        // Glow pulse
        if (glow) {
          tl.fromTo(glow,
            { scale: 0.5, opacity: 0 },
            { scale: 2, opacity: 0.3, duration: 0.55, ease: "power2.out" },
            0,
          );
          tl.to(glow,
            { scale: 2.8, opacity: 0, duration: 0.8, ease: "power1.out" },
            0.2,
          );
        }

        // Step card slide
        tl.fromTo(step,
          { opacity: 0, x: 40, filter: "blur(5px)" },
          { opacity: 1, x: 0, filter: "blur(0px)", duration: 0.65, ease: "power2.out" },
          0.06,
        );

        // Description
        if (content) {
          tl.fromTo(content,
            { opacity: 0, y: 12 },
            { opacity: 1, y: 0, duration: 0.55, ease: "power2.out" },
            0.18,
          );
        }
      });

      // ── Image reveal ────────────────────────────────
      const img = imageRef.current;
      const cap = captionRef.current;
      if (img && !prefersReduced) {
        const imgTl = gsap.timeline({
          scrollTrigger: { trigger: img, start: "top 85%", toggleActions: "play none none none" },
        });
        imgTl.fromTo(img,
          { opacity: 0, scale: 0.93, y: 60, filter: "blur(8px)" },
          { opacity: 1, scale: 1, y: 0, filter: "blur(0px)", duration: 1.1, ease: "power2.out" },
          0,
        );
        if (cap) {
          imgTl.fromTo(cap,
            { opacity: 0, y: 24 },
            { opacity: 1, y: 0, duration: 0.7, ease: "power2.out" },
            0.35,
          );
        }
      } else if (img) {
        gsap.set(img, { opacity: 1 });
        if (cap) gsap.set(cap, { opacity: 1 });
      }
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 md:py-36 bg-surface-container-low overflow-hidden">
      <div className="container mx-auto px-4 md:px-16 max-w-[1280px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-28 items-start">

          {/* ── Left: Steps ──────────────────────────── */}
          <div>
            <div className="wf-header mb-14 md:mb-20 opacity-0">
              <span className="wf-label text-[11px] text-tertiary/50 block mb-3 tracking-[0.2em] uppercase"
                style={{ fontFamily: "Vazirmatn, sans-serif", fontWeight: 400 }}
              >
                خط لوله گردش کار
              </span>
              <h2 className="wf-title text-[28px] md:text-[42px] leading-[40px] md:leading-[56px] font-extrabold mb-3"
                style={{ fontFamily: "Vazirmatn, sans-serif" }}
              >
                گردش کار
              </h2>
              <p className="wf-sub text-[13px] md:text-[14px] leading-[22px] text-on-surface-variant/60 max-w-sm"
                style={{ fontFamily: "Vazirmatn, sans-serif", fontWeight: 400 }}
              >
                نقشه راه تا واقعیت
              </p>
            </div>

            <div className="relative">
              {/* Animated vertical line */}
              <div className="absolute right-[18px] top-[18px] bottom-0 w-px bg-outline-variant/25">
                <div
                  ref={lineRef}
                  className="absolute top-0 left-0 w-full origin-top"
                  style={{
                    height: "100%",
                    background: "linear-gradient(180deg, rgba(99,102,241,0.1), rgba(99,102,241,0.5), #6366f1)",
                  }}
                />
                {/* Tracer */}
                <div
                  ref={tracerRef}
                  className="absolute left-1/2 -translate-x-1/2 w-[5px] h-[5px] rounded-full bg-tertiary z-10"
                  style={{
                    boxShadow: "0 0 8px rgba(99,102,241,0.5), 0 0 20px rgba(99,102,241,0.15)",
                    top: "0%",
                  }}
                />
              </div>

              {/* Steps */}
              <div className="space-y-14">
                {STEPS.map((step, i) => (
                  <div
                    key={step.number}
                    ref={(el) => { if (el) stepRefs.current[i] = el; }}
                    className="relative pr-[52px] opacity-0 group"
                  >
                    {/* Number badge */}
                    <div className="absolute right-0 top-0 z-10">
                      {/* Glow ring */}
                      <div
                        ref={(el) => { if (el) glowRefs.current[i] = el; }}
                        className="absolute rounded-full bg-tertiary/15 opacity-0 pointer-events-none"
                        style={{ inset: "-10px" }}
                      />
                      {/* Badge */}
                      <div
                        ref={(el) => { if (el) numRefs.current[i] = el; }}
                        className="relative w-[36px] h-[36px] rounded-full border border-outline-variant/50 bg-background flex items-center justify-center text-[13px] opacity-0 transition-all duration-300 group-hover:border-tertiary/40 group-hover:bg-tertiary/5 group-hover:shadow-[0_0_16px_rgba(99,102,241,0.08)]"
                        style={{ fontFamily: "Vazirmatn, sans-serif", fontWeight: 600 }}
                      >
                        {step.number}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="pt-0.5 transition-transform duration-300 group-hover:translate-x-[-2px]">
                      <h4 className="text-[18px] md:text-[21px] leading-[28px] md:leading-[32px] font-bold mb-2.5"
                        style={{ fontFamily: "Vazirmatn, sans-serif" }}
                      >
                        {step.title}
                      </h4>
                      <div
                        ref={(el) => { if (el) contentRefs.current[i] = el; }}
                        className="text-[13px] md:text-[14px] leading-[22px] md:leading-[24px] text-on-surface-variant/70 opacity-0"
                        style={{ fontFamily: "Vazirmatn, sans-serif", fontWeight: 400 }}
                      >
                        {step.description}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ── Right: Image ──────────────────────────── */}
          <div className="relative lg:mt-8">
            <div ref={imageRef} className="opacity-0">
              <div
                className="aspect-[4/5] bg-surface-container overflow-hidden rounded-2xl border border-outline-variant/50"
                style={{ boxShadow: "0 4px 28px rgba(0,0,0,0.07)" }}
              >
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDkP_JwtttTsf8FIRPKao9nqL6UykrluSRTqdDnDDnZtEZBUmn_5vC1v-VlTqBJq8QbFkkiLgScl498NmP3U5PMvvI2PGAIxKrAxvs9ss7mB-5ig5e8GBLqd9itjCiyLOl6GLvjpXGDiBrSYCKfE-QuqogzcvuPOideBaw5vpH7UejVDxLvlOHczoY0jFph1rKqJnOf5zfE02dBEWlgiDnX1xTci9egQ7XtuAcvBo9Peot6Vo9qGbl3LCNotH_uyzo2KBP5L9jiq-tG"
                  alt="تقویت ساختاری"
                  className="w-full h-full object-cover grayscale-[40%] hover:grayscale-0 transition-all duration-700"
                />
              </div>
            </div>
            <div ref={captionRef} className="absolute -bottom-5 -right-5 md:-bottom-7 md:-right-7 bg-tertiary text-on-primary p-5 md:p-6 max-w-[240px] rounded-2xl opacity-0"
              style={{ boxShadow: "0 10px 36px rgba(99,102,241,0.22)" }}
            >
              <div className="text-[11px] text-on-primary/45 mb-1.5 tracking-wider"
                style={{ fontFamily: "Vazirmatn, sans-serif", fontWeight: 400 }}
              >
                شکل_۰۶A
              </div>
              <p className="text-[12px] md:text-[13px] leading-[20px] italic opacity-80"
                style={{ fontFamily: "Vazirmatn, sans-serif", fontWeight: 400 }}
              >
                &quot;فاز تقویت ساختاری با استفاده از تیرهای فولادی تقویت
                شده و سیستم‌های براکتینگ جانبی.&quot;
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
