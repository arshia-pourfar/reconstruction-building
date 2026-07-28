"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const STEPS = [
  {
    number: "۰۱",
    title: "ممیزی ساختاری",
    description:
      "تحلیل استخوان‌های سایت از طریق تصویربرداری حرارتی و اسکن‌های ساختاری. پتانسیل باربری و محدودیت‌های پنهان را شناسایی می‌کنیم.",
  },
  {
    number: "۰۲",
    title: "طراحی و ساخت",
    description:
      "تهیه نقشه‌های دقیق و مدل‌های سه‌بعدی. تغییرات ساختاری را در یک محیط مجازی شبیه‌سازی می‌کنیم.",
  },
  {
    number: "۰۳",
    title: "تخریب دقیق",
    description:
      "حذف دقیق عناصر قدیمی. فضا را با دقت جراحی به اصل آن برمی‌گردانیم.",
  },
  {
    number: "۰۴",
    title: "مونتاژ صنعتی",
    description:
      "ساخت و نازک‌کاری نهایی. اجزای پیش‌ساخته فولادی و مasonry سفارشی را با پایان درجه صنعتی نصب می‌کنیم.",
  },
];

export default function WorkflowSteps() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const stepRefs = useRef<HTMLDivElement[]>([]);
  const numRefs = useRef<HTMLDivElement[]>([]);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    // Header entrance
    const header = section.querySelector(".workflow-header");
    if (header) {
      gsap.fromTo(header,
        { opacity: 0, y: 30 },
        {
          opacity: 1, y: 0, duration: 0.8, ease: "power2.out",
          scrollTrigger: { trigger: section, start: "top 75%", toggleActions: "play none none none" },
        },
      );
    }

    // Vertical line fill
    if (lineRef.current) {
      gsap.fromTo(lineRef.current,
        { scaleY: 0 },
        {
          scaleY: 1, ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top 65%",
            end: "bottom 40%",
            scrub: 0.6,
          },
        },
      );
    }

    // Each step stagger reveal
    STEPS.forEach((_, i) => {
      const step = stepRefs.current[i];
      const num = numRefs.current[i];
      if (!step) return;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: `${10 + i * 20}% 70%`,
          toggleActions: "play none none none",
        },
      });

      // Number pop
      if (num) {
        tl.fromTo(num,
          { scale: 0, opacity: 0 },
          { scale: 1, opacity: 1, duration: 0.4, ease: "back.out(3)" },
          0,
        );
      }

      // Step card slide in
      tl.fromTo(step,
        { opacity: 0, x: 40, filter: "blur(4px)" },
        { opacity: 1, x: 0, filter: "blur(0px)", duration: 0.6, ease: "power2.out" },
        0.1,
      );
    });

    // Image reveal
    if (imageRef.current) {
      gsap.fromTo(imageRef.current,
        { opacity: 0, scale: 0.95, y: 40 },
        {
          opacity: 1, scale: 1, y: 0, duration: 1, ease: "power2.out",
          scrollTrigger: {
            trigger: imageRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        },
      );
    }

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <section ref={sectionRef} className="py-24 md:py-32 bg-surface-container-low">
      <div className="container mx-auto px-4 md:px-16 max-w-[1280px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24 items-start">
          {/* Left — Steps */}
          <div>
            <div className="workflow-header mb-12 md:mb-16">
              <span className="text-[13px] text-tertiary/60 block mb-3"
                style={{ fontFamily: "Vazirmatn, sans-serif", fontWeight: 400 }}
              >
                خط لوله گردش کار
              </span>
              <h2 className="text-[28px] md:text-[40px] leading-[40px] md:leading-[56px] font-extrabold"
                style={{ fontFamily: "Vazirmatn, sans-serif" }}
              >
                مراحل تبدیل
              </h2>
            </div>

            <div className="relative">
              {/* Animated vertical line */}
              <div className="absolute right-5 top-5 bottom-0 w-px bg-outline-variant/40">
                <div
                  ref={lineRef}
                  className="absolute top-0 left-0 w-full bg-tertiary origin-top"
                  style={{ height: "100%" }}
                />
              </div>

              {/* Steps */}
              <div className="space-y-12">
                {STEPS.map((step, i) => (
                  <div
                    key={step.number}
                    ref={(el) => { if (el) stepRefs.current[i] = el; }}
                    className="relative pr-16 opacity-0"
                  >
                    {/* Number badge */}
                    <div
                      ref={(el) => { if (el) numRefs.current[i] = el; }}
                      className="absolute right-0 top-0 w-10 h-10 border border-outline-variant rounded-lg bg-background flex items-center justify-center text-[14px] z-10 opacity-0"
                      style={{ fontFamily: "Vazirmatn, sans-serif" }}
                    >
                      {step.number}
                    </div>

                    {/* Content */}
                    <div className="pt-1">
                      <h4 className="text-[20px] md:text-[24px] leading-[32px] md:leading-[36px] font-bold mb-2"
                        style={{ fontFamily: "Vazirmatn, sans-serif" }}
                      >
                        {step.title}
                      </h4>
                      <p className="text-[14px] md:text-[15px] leading-[24px] text-on-surface-variant"
                        style={{ fontFamily: "Vazirmatn, sans-serif", fontWeight: 400 }}
                      >
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right — Image */}
          <div ref={imageRef} className="relative opacity-0">
            <div
              className="aspect-[4/5] bg-surface-container overflow-hidden rounded-2xl border border-outline-variant"
              style={{ boxShadow: "0 2px 8px rgba(0,0,0,0.08)" }}
            >
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDkP_JwtttTsf8FIRPKao9nqL6UykrluSRTqdDnDDnZtEZBUmn_5vC1v-VlTqBJq8QbFkkiLgScl498NmP3U5PMvvI2PGAIxKrAxvs9ss7mB-5ig5e8GBLqd9itjCiyLOl6GLvjpXGDiBrSYCKfE-QuqogzcvuPOideBaw5vpH7UejVDxLvlOHczoY0jFph1rKqJnOf5zfE02dBEWlgiDnX1xTci9egQ7XtuAcvBo9Peot6Vo9qGbl3LCNotH_uyzo2KBP5L9jiq-tG"
                alt="تقویت ساختاری"
                className="w-full h-full object-cover grayscale-[50%] hover:grayscale-0 transition-all duration-700"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-tertiary text-on-primary p-6 md:p-8 max-w-xs rounded-2xl">
              <div className="text-[13px] text-on-primary/60 mb-2"
                style={{ fontFamily: "Vazirmatn, sans-serif", fontWeight: 400 }}
              >
                شکل_۰۶A
              </div>
              <p className="text-[13px] md:text-[14px] leading-[22px] italic opacity-80"
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
