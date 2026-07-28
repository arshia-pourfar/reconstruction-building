"use client";

import { useRef, useEffect, useCallback } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const FRAME_COUNT = 298;
const FRAME_PATH = "/hero/frames/frame_";
const FRAME_EXTENSION = ".webp";
const PRELOAD_INITIAL = 20;
const PRELOAD_BATCH = 10;
const SMOOTHING = 0.08;

function padFrame(n: number): string {
  return String(n).padStart(4, "0");
}

const STAGES = [
  {
    num: "۰۱",
    title: "پیش از بازسازی",
    desc: "شناخت فضای موجود.",
  },
  {
    num: "۰۲",
    title: "در حال تبدیل",
    desc: "بازتصور معماری.",
  },
  {
    num: "۰۳",
    title: "پس از بازسازی",
    desc: "فضایی نو، طراحی‌شده با دقت.",
  },
];

export default function CanvasHero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // All mutable state in refs — zero React re-renders during scroll
  const images = useRef<(HTMLImageElement | null)[]>(new Array(FRAME_COUNT).fill(null));
  const loaded = useRef<boolean[]>(new Array(FRAME_COUNT).fill(false));
  const currentFrame = useRef(0);
  const targetFrame = useRef(0);
  const rafId = useRef(0);
  const ctxRef = useRef<CanvasRenderingContext2D | null>(null);
  const dprRef = useRef(1);
  const canvasW = useRef(0);
  const canvasH = useRef(0);
  const preloadIndex = useRef(PRELOAD_INITIAL);
  const lastRendered = useRef(-1);

  // Card content refs
  const cardNumRef = useRef<HTMLSpanElement>(null);
  const cardTitleRef = useRef<HTMLSpanElement>(null);
  const cardDescRef = useRef<HTMLParagraphElement>(null);
  const progressDotsRef = useRef<HTMLDivElement[]>([]);
  const currentStageRef = useRef(0);

  // Scroll indicator ref
  const scrollIndicatorRef = useRef<HTMLDivElement>(null);

  // ── Preload a single frame ─────────────────────────────
  const loadFrame = useCallback((idx: number) => {
    if (idx < 0 || idx >= FRAME_COUNT || loaded.current[idx]) return;
    const img = new Image();
    img.src = `${FRAME_PATH}${padFrame(idx + 1)}${FRAME_EXTENSION}`;
    img.onload = () => {
      loaded.current[idx] = true;
      images.current[idx] = img;
    };
  }, []);

  // ── Progressive preloader ───────────────────────────────
  const preloadBatch = useCallback(() => {
    const start = preloadIndex.current;
    const end = Math.min(start + PRELOAD_BATCH, FRAME_COUNT);
    for (let i = start; i < end; i++) loadFrame(i);
    preloadIndex.current = end;
  }, [loadFrame]);

  // ── Find closest loaded frame ───────────────────────────
  const getClosestLoaded = useCallback((idx: number): number => {
    if (loaded.current[idx]) return idx;
    for (let d = 1; d < FRAME_COUNT; d++) {
      if (idx - d >= 0 && loaded.current[idx - d]) return idx - d;
      if (idx + d < FRAME_COUNT && loaded.current[idx + d]) return idx + d;
    }
    return 0;
  }, []);

  // ── Canvas rendering ────────────────────────────────────
  const renderFrame = useCallback((idx: number) => {
    const canvas = canvasRef.current;
    const ctx = ctxRef.current;
    if (!canvas || !ctx) return;

    const frameIdx = getClosestLoaded(idx);
    if (frameIdx === lastRendered.current) return;
    const img = images.current[frameIdx];
    if (!img) return;

    lastRendered.current = frameIdx;

    const dpr = dprRef.current;
    const cw = canvasW.current;
    const ch = canvasH.current;

    canvas.width = cw * dpr;
    canvas.height = ch * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

    const imgAspect = img.naturalWidth / img.naturalHeight;
    const canvasAspect = cw / ch;
    let sx = 0, sy = 0, sw = img.naturalWidth, sh = img.naturalHeight;
    if (imgAspect > canvasAspect) {
      sw = img.naturalHeight * canvasAspect;
      sx = (img.naturalWidth - sw) / 2;
    } else {
      sh = img.naturalWidth / canvasAspect;
      sy = (img.naturalHeight - sh) / 2;
    }
    ctx.drawImage(img, sx, sy, sw, sh, 0, 0, cw, ch);
  }, [getClosestLoaded]);

  // ── rAF animation loop ─────────────────────────────────
  const tick = useCallback(() => {
    const diff = targetFrame.current - currentFrame.current;
    if (Math.abs(diff) > 0.01) {
      currentFrame.current += diff * SMOOTHING;
      const frame = Math.round(currentFrame.current);
      renderFrame(frame);
    }
    rafId.current = requestAnimationFrame(tick);
  }, [renderFrame]);

  // ── Setup ───────────────────────────────────────────────
  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    ctxRef.current = ctx;
    dprRef.current = Math.min(window.devicePixelRatio || 1, 2);

    const resize = () => {
      const rect = canvas.parentElement?.getBoundingClientRect();
      if (rect) {
        canvasW.current = rect.width;
        canvasH.current = rect.height;
      }
    };
    resize();
    window.addEventListener("resize", resize);

    for (let i = 0; i < PRELOAD_INITIAL; i++) loadFrame(i);

    rafId.current = requestAnimationFrame(tick);

    // GSAP ScrollTrigger → updates targetFrame
    const st = ScrollTrigger.create({
      trigger: container,
      start: "top top",
      end: "bottom bottom",
      scrub: 1.5,
      onUpdate: (self) => {
        targetFrame.current = self.progress * (FRAME_COUNT - 1);
        const nearIdx = Math.round(targetFrame.current);
        const batchStart = Math.max(0, nearIdx - 10);
        const batchEnd = Math.min(FRAME_COUNT, nearIdx + 30);
        for (let i = batchStart; i < batchEnd; i++) loadFrame(i);
        if (preloadIndex.current < batchEnd) {
          preloadIndex.current = batchEnd;
        }
      },
    });

    // ── Stage card content transitions ────────────────────
    const updateCard = (stageIdx: number) => {
      if (stageIdx === currentStageRef.current) return;
      currentStageRef.current = stageIdx;

      const stage = STAGES[stageIdx];

      const tl = gsap.timeline();
      tl.to([cardNumRef.current, cardTitleRef.current, cardDescRef.current], {
        opacity: 0, y: -6, filter: "blur(4px)", duration: 0.2, stagger: 0.02,
        onComplete: () => {
          if (cardNumRef.current) cardNumRef.current.textContent = `${stage.num} / ۰۳`;
          if (cardTitleRef.current) cardTitleRef.current.textContent = stage.title;
          if (cardDescRef.current) cardDescRef.current.textContent = stage.desc;
        },
      });
      tl.fromTo([cardNumRef.current, cardTitleRef.current, cardDescRef.current],
        { opacity: 0, y: 6, filter: "blur(4px)" },
        { opacity: 1, y: 0, filter: "blur(0px)", duration: 0.25, stagger: 0.02 },
      );

      // Update progress dots
      progressDotsRef.current.forEach((dot, i) => {
        if (!dot) return;
        gsap.to(dot, {
          opacity: i === stageIdx ? 1 : 0.3,
          scale: i === stageIdx ? 1 : 0.7,
          duration: 0.3,
          ease: "power2.out",
        });
      });
    };

    // ScrollTrigger for stage transitions
    ScrollTrigger.create({
      trigger: container,
      start: "top top",
      end: "bottom bottom",
      onUpdate: (self) => {
        const p = self.progress;
        if (p < 0.45) updateCard(0);
        else if (p < 0.62) updateCard(1);
        else updateCard(2);
      },
    });

    // Scroll indicator fade out
    if (scrollIndicatorRef.current) {
      gsap.to(scrollIndicatorRef.current, {
        opacity: 0,
        scrollTrigger: {
          trigger: container,
          start: "top top",
          end: "8% top",
          scrub: true,
        },
      });
    }

    // Card entrance animation
    const card = container.querySelector(".stage-card");
    if (card) {
      gsap.fromTo(card,
        { opacity: 0, x: 20 },
        { opacity: 1, x: 0, duration: 0.8, delay: 0.3, ease: "power2.out" },
      );
    }

    return () => {
      cancelAnimationFrame(rafId.current);
      window.removeEventListener("resize", resize);
      st.kill();
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, [loadFrame, tick]);

  return (
    <div ref={containerRef} className="relative" style={{ height: "500vh" }}>
      {/* Sticky canvas viewport */}
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full"
          style={{ display: "block" }}
        />

        {/* Minimal dark vignette — keeps canvas dominant */}
        <div className="absolute inset-0 pointer-events-none" style={{
          background: "radial-gradient(ellipse at center, transparent 50%, rgba(0,0,0,0.3) 100%)",
        }} />

        {/* ── Stage card — right side ────────────────────── */}
        <div className="stage-card absolute top-1/2 -translate-y-1/2 right-8 md:right-12 w-[220px] md:w-[260px] opacity-0 z-10"
          style={{
            background: "rgba(15, 15, 15, 0.45)",
            backdropFilter: "blur(16px)",
            WebkitBackdropFilter: "blur(16px)",
            border: "1px solid rgba(255, 255, 255, 0.12)",
            borderRadius: "16px",
            boxShadow: "0 20px 60px rgba(0, 0, 0, 0.25)",
          }}
        >
          <div className="p-5 md:p-6">
            {/* Label */}
            <p className="text-[10px] md:text-[11px] uppercase tracking-[0.2em] text-white/40 mb-4"
              style={{ fontFamily: "Inter, sans-serif", fontWeight: 500 }}
            >
              پروژه / بازسازی
            </p>

            {/* Stage number */}
            <span ref={cardNumRef}
              className="block text-[13px] md:text-[14px] text-white/50 mb-1"
              style={{ fontFamily: "Inter, sans-serif", fontWeight: 400 }}
            >
              ۰۱ / ۰۳
            </span>

            {/* Stage title */}
            <div className="mb-3">
              <span ref={cardTitleRef}
                className="block text-[18px] md:text-[20px] text-white leading-tight"
                style={{ fontFamily: "Vazirmatn, sans-serif", fontWeight: 600 }}
              >
                پیش از بازسازی
              </span>
            </div>

            {/* Description */}
            <p ref={cardDescRef}
              className="text-[12px] md:text-[13px] text-white/45 leading-relaxed"
              style={{ fontFamily: "Vazirmatn, sans-serif", fontWeight: 400 }}
            >
              شناخت فضای موجود.
            </p>

            {/* Progress indicator */}
            <div className="mt-5 pt-4 border-t border-white/10 flex flex-col gap-2.5">
              {STAGES.map((s, i) => (
                <div key={s.num} className="flex items-center gap-2.5">
                  <div
                    ref={(el) => { if (el) progressDotsRef.current[i] = el; }}
                    className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                    style={{
                      background: i === 0 ? "rgba(255,255,255,0.9)" : "rgba(255,255,255,0.3)",
                    }}
                  />
                  <span className="text-[11px] text-white/50"
                    style={{ fontFamily: "Vazirmatn, sans-serif", fontWeight: 400 }}
                  >
                    {s.num}  {s.title}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── Scroll indicator — bottom center ──────────── */}
        <div ref={scrollIndicatorRef}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-none z-10"
        >
          <span className="text-[11px] text-white/35"
            style={{ fontFamily: "Vazirmatn, sans-serif", fontWeight: 400, letterSpacing: "0.05em" }}
          >
            اسکرول کنید
          </span>
          <svg className="animate-bounce" width="16" height="16" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
            style={{ color: "rgba(255,255,255,0.3)" }}
          >
            <path d="M12 5v14M19 12l-7 7-7-7" />
          </svg>
        </div>
      </div>
    </div>
  );
}
