"use client";

import { useEffect, useRef, useCallback } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// ─── Configuration ──────────────────────────────────────────
const FRAME_COUNT = 240;
const FRAME_PATH = "/heroSection/frames/frame_";
const FRAME_DIGITS = 4;
const FRAME_EXT = ".webp";
const HERO_HEIGHT = 140;

// Adaptive smoothing — higher = snappier, lower = smoother
const LERP_BASE = 0.1;        // Base lerp factor (at rest)
const LERP_FAST = 0.18;       // Lerp factor when scrolling fast
const VELOCITY_THRESHOLD = 2; // Frame index speed threshold for "fast"
const CROSSFADE_MIN = 0.004;  // Minimum alpha to bother cross-fading

// ─── Content stages mapped to scroll progress ───────────────
interface StageDef {
  label: string;
  phaseLabel: string;
  headline: string;
  desc: string;
  range: readonly [number, number];
}

const STAGES: StageDef[] = [
  {
    label: "EDITORIAL",
    phaseLabel: "",
    headline: "بازآفرینی\nشیوه‌ی\nزندگی ما.",
    desc: "از فضاهای فراموش‌شده تا مکان‌های خارق‌العاده.\nتحول خانه‌ی خود را از طریق معماری،\nطراحی و جزئیات دقیق کاوش کنید.",
    range: [0, 0.08] as const,
  },
  {
    label: "BEFORE",
    phaseLabel: "۰۱ / فضای موجود",
    headline: "قبل",
    desc: "هر تحولی با درک فضا\nشروع می‌شود.",
    range: [0.08, 0.45] as const,
  },
  {
    label: "TRANSFORMATION",
    phaseLabel: "۰۲ / بازآفرینی",
    headline: "تحول",
    desc: "معماری فقط تغییر یک فضا نیست.\nتغییر نحوه‌ی تجربه‌ی آن فضاست.",
    range: [0.45, 0.65] as const,
  },
  {
    label: "AFTER",
    phaseLabel: "۰۳ / نتیجه",
    headline: "بعد",
    desc: "یک دیدگاه جدید.\nیک فضای جدید.\nیک شیوه‌ی زندگی جدید.",
    range: [0.65, 1] as const,
  },
];

function pad(n: number): string {
  return String(n).padStart(FRAME_DIGITS, "0");
}

function frameSrc(n: number): string {
  return `${FRAME_PATH}${pad(n)}${FRAME_EXT}`;
}

function drawCover(
  ctx: CanvasRenderingContext2D,
  img: HTMLImageElement,
  cw: number,
  ch: number,
) {
  const imgAspect = img.naturalWidth / img.naturalHeight;
  const canvasAspect = cw / ch;
  let sx: number, sy: number, sw: number, sh: number;
  if (imgAspect > canvasAspect) {
    sh = img.naturalHeight;
    sw = sh * canvasAspect;
    sx = (img.naturalWidth - sw) / 2;
    sy = 0;
  } else {
    sw = img.naturalWidth;
    sh = sw / canvasAspect;
    sx = 0;
    sy = (img.naturalHeight - sh) / 2;
  }
  ctx.drawImage(img, sx, sy, sw, sh, 0, 0, cw, ch);
}

function getStageIndex(p: number): number {
  for (let i = STAGES.length - 1; i >= 0; i--) {
    if (p >= STAGES[i].range[0]) return i;
  }
  return 0;
}

// ─── Component ──────────────────────────────────────────────
export default function ScrollRenovationHero() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const ctxRef = useRef<CanvasRenderingContext2D | null>(null);
  const imagesRef = useRef<(HTMLImageElement | null)[]>([]);
  const loadedRef = useRef(0);
  const rafRef = useRef(0);
  const dprRef = useRef(1);
  const targetRef = useRef(0);
  const smoothRef = useRef(0);
  const velocityRef = useRef(0);
  const endFadeRef = useRef<HTMLDivElement>(null);

  // UI refs
  const navRef = useRef<HTMLDivElement>(null);
  const scrollHintRef = useRef<HTMLDivElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const stageIndexRef = useRef(0);
  const contentRefs = useRef<(HTMLDivElement | null)[]>(STAGES.map(() => null));
  const ctaRef = useRef<HTMLButtonElement>(null);
  const ctaArrowRef = useRef<HTMLSpanElement>(null);
  const heroContentRef = useRef<HTMLDivElement>(null);
  const gradientOverlayRef = useRef<HTMLDivElement>(null);

  const setContentRef = useCallback(
    (i: number) => (el: HTMLDivElement | null) => {
      contentRefs.current[i] = el;
    },
    [],
  );

  // ─── Preload images ─────────────────────────────────
  useEffect(() => {
    const imgs: (HTMLImageElement | null)[] = new Array(FRAME_COUNT).fill(null);
    imagesRef.current = imgs;
    let cancelled = false;

    const loadOne = (i: number) => {
      if (cancelled) return;
      const img = new Image();
      img.onload = () => {
        if (!cancelled) imgs[i] = img;
        loadedRef.current++;
      };
      img.onerror = () => {
        imgs[i] = null;
      };
      img.src = frameSrc(i + 1);
    };

    for (let i = 0; i < 12; i++) loadOne(i);

    let nextIndex = 12;
    function loadBatch() {
      if (cancelled) return;
      const end = Math.min(nextIndex + 20, FRAME_COUNT);
      for (let i = nextIndex; i < end; i++) loadOne(i);
      nextIndex = end;
      if (nextIndex < FRAME_COUNT) setTimeout(loadBatch, 60);
    }
    const timer = setTimeout(loadBatch, 100);

    return () => {
      cancelled = true;
      clearTimeout(timer);
    };
  }, []);

  // ─── Canvas setup ────────────────────────────────────
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    ctxRef.current = ctx;

    function getEffectiveDPR(): number {
      const dpr = window.devicePixelRatio || 1;
      if (window.innerWidth < 768) return Math.min(dpr, 1.5);
      if (window.innerWidth < 1024) return Math.min(dpr, 2);
      return dpr;
    }

    function resize() {
      if (!canvas || !ctx) return;
      const dpr = getEffectiveDPR();
      dprRef.current = dpr;
      const w = window.innerWidth;
      const h = window.innerHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    resize();
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, []);

  // ─── GSAP — ScrollTrigger + all animations ──────────
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    const ctx = gsap.context(() => {
      // Main ScrollTrigger — pin + scrub
      ScrollTrigger.create({
        trigger: section,
        start: "top top",
        end: `+=${HERO_HEIGHT}vh`,
        pin: true,
        scrub: reducedMotion ? 0 : 0.8,
        anticipatePin: 1,
        invalidateOnRefresh: true,
        onUpdate: (self) => {
          const p = Math.min(1, Math.max(0, self.progress));
          targetRef.current = p * (FRAME_COUNT - 1);

          const newStage = getStageIndex(p);
          if (newStage !== stageIndexRef.current) {
            stageIndexRef.current = newStage;
            // Update progress indicator
            if (stageRef.current) {
              const items = stageRef.current.querySelectorAll("[data-stage]");
              items.forEach((item, idx) => {
                const el = item as HTMLElement;
                if (idx === newStage) {
                  el.style.opacity = "1";
                  el.style.transform = "translateX(0)";
                } else if (idx < newStage) {
                  el.style.opacity = "0.3";
                  el.style.transform = "translateX(0)";
                } else {
                  el.style.opacity = "0.15";
                  el.style.transform = "translateX(0)";
                }
              });
              // Active line
              const lines = stageRef.current.querySelectorAll("[data-line]");
              lines.forEach((line, idx) => {
                (line as HTMLElement).style.width =
                  idx === newStage ? "20px" : "0px";
                (line as HTMLElement).style.opacity =
                  idx === newStage ? "0.6" : "0";
              });
            }
          }

          // Fade out scroll hint
          if (p > 0.02) {
            scrollHintRef.current?.style.setProperty("opacity", "0");
            scrollHintRef.current?.style.setProperty(
              "pointer-events",
              "none",
            );
          } else {
            scrollHintRef.current?.style.setProperty("opacity", "1");
            scrollHintRef.current?.style.setProperty(
              "pointer-events",
              "auto",
            );
          }

          // Dynamic gradient — stronger during bright mid-frames, softer at extremes
          if (gradientOverlayRef.current) {
            // Frames 60-180 tend to be brighter (mid-renovation)
            const midBoost = Math.sin(p * Math.PI); // peaks at 0.5
            const opacity = 0.85 + midBoost * 0.15; // 0.85 → 1.0
            gradientOverlayRef.current.style.opacity = String(opacity);
          }
        },
      });

      // Nav background fade
      if (navRef.current) {
        gsap.fromTo(
          navRef.current,
          { background: "rgba(0,0,0,0)", backdropFilter: "blur(0px)" },
          {
            scrollTrigger: {
              trigger: section,
              start: "top top",
              end: "+=10vh",
              scrub: 0.8,
            },
            background: "rgba(0,0,0,0.25)",
            backdropFilter: "blur(16px)",
            ease: "power1.out",
          },
        );
      }

      // Content phase animations
      STAGES.forEach((stage, i) => {
        const el = contentRefs.current[i];
        if (!el) return;

        const [start, end] = stage.range;
        const inStart = i === 0 ? start : start - 0.04;
        const inEnd = start + 0.06;
        const outStart = end - 0.06;
        const outEnd = end;

        // Fade in
        gsap.fromTo(
          el,
          { opacity: 0, y: 30, filter: "blur(8px)", scale: 0.97 },
          {
            scrollTrigger: {
              trigger: section,
              start: `+=${inStart * HERO_HEIGHT}vh`,
              end: `+=${inEnd * HERO_HEIGHT}vh`,
              scrub: 1,
            },
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            scale: 1,
            ease: "power2.out",
          },
        );

        // Hold visible
        if (end - start > 0.1) {
          gsap.to(el, {
            scrollTrigger: {
              trigger: section,
              start: `+=${(start + 0.06) * HERO_HEIGHT}vh`,
              end: `+=${outStart * HERO_HEIGHT}vh`,
              scrub: 1,
            },
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            scale: 1,
          });
        }

        // Fade out (skip last stage)
        if (i < STAGES.length - 1) {
          gsap.to(el, {
            scrollTrigger: {
              trigger: section,
              start: `+=${outStart * HERO_HEIGHT}vh`,
              end: `+=${outEnd * HERO_HEIGHT}vh`,
              scrub: 1,
            },
            opacity: 0,
            y: -20,
            filter: "blur(6px)",
            scale: 0.98,
            ease: "power2.in",
          });
        }
      });

      // Fade editorial eyebrow + CTA out before phase 1
      if (heroContentRef.current) {
        gsap.to(heroContentRef.current, {
          scrollTrigger: {
            trigger: section,
            start: `+=${0.04 * HERO_HEIGHT}vh`,
            end: `+=${0.09 * HERO_HEIGHT}vh`,
            scrub: 1,
          },
          opacity: 0,
          y: -20,
          filter: "blur(4px)",
          ease: "power2.in",
        });
      }

      // End fade
      gsap.to(endFadeRef.current, {
        scrollTrigger: {
          trigger: section,
          start: `+=${0.8 * HERO_HEIGHT}vh`,
          end: `+=${HERO_HEIGHT}vh`,
          scrub: 1,
        },
        opacity: 1,
        ease: "power2.inOut",
      });
    });

    return () => ctx.revert();
  }, []);

  // ─── Canvas render loop — adaptive velocity smoothing ──
  useEffect(() => {
    let running = true;
    let prevFrameIdx = -1;

    function render() {
      if (!running) return;

      const target = targetRef.current;

      // Track velocity (change in target per frame)
      const rawVelocity = Math.abs(target - smoothRef.current);
      velocityRef.current = rawVelocity;

      // Adaptive lerp: snappier when scrolling fast, smoother when slow
      const lerpFactor =
        rawVelocity > VELOCITY_THRESHOLD ? LERP_FAST : LERP_BASE;

      // Exponential smoothing
      smoothRef.current += (target - smoothRef.current) * lerpFactor;

      const f = smoothRef.current;
      const floorIdx = Math.max(0, Math.min(Math.floor(f), FRAME_COUNT - 1));
      const ceilIdx = Math.min(floorIdx + 1, FRAME_COUNT - 1);
      const frac = f - floorIdx;

      // Only redraw when the visible frame actually changes
      const frameKey = floorIdx * 1000 + Math.round(frac * 1000);
      if (frameKey === prevFrameIdx) {
        rafRef.current = requestAnimationFrame(render);
        return;
      }
      prevFrameIdx = frameKey;

      const ctx = ctxRef.current;
      const canvas = canvasRef.current;
      if (!canvas || !ctx) {
        rafRef.current = requestAnimationFrame(render);
        return;
      }

      const cw = window.innerWidth;
      const ch = window.innerHeight;

      // Dark base
      ctx.fillStyle = "#0E0D0C";
      ctx.fillRect(0, 0, cw, ch);

      // Draw floor frame
      const img1 = imagesRef.current[floorIdx];
      if (img1 && img1.complete && img1.naturalWidth) {
        drawCover(ctx, img1, cw, ch);
      }

      // Cross-fade to ceil frame for sub-frame smoothness
      if (frac > CROSSFADE_MIN) {
        const img2 = imagesRef.current[ceilIdx];
        if (img2 && img2.complete && img2.naturalWidth && img2 !== img1) {
          // Ease the cross-fade curve for smoother feel
          const easedFrac = frac * frac * (3 - 2 * frac); // smoothstep
          ctx.globalAlpha = easedFrac;
          drawCover(ctx, img2, cw, ch);
          ctx.globalAlpha = 1;
        }
      }

      rafRef.current = requestAnimationFrame(render);
    }

    rafRef.current = requestAnimationFrame(render);
    return () => {
      running = false;
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  // ─── Mouse parallax ──────────────────────────────────
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    function onMove(e: MouseEvent) {
      const rect = section!.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      if (stageRef.current) {
        gsap.to(stageRef.current, {
          x: x * 6,
          y: y * 3,
          duration: 1.4,
          ease: "power2.out",
          overwrite: "auto",
        });
      }
    }

    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  // ─── CTA click handler ──────────────────────────────
  const handleCTAClick = useCallback(() => {
    const section = sectionRef.current;
    if (!section) return;
    gsap.to(window, {
      scrollTo: { y: section, offsetY: 0 },
      duration: 1.8,
      ease: "power3.inOut",
    });
  }, []);

  // ─── Render ──────────────────────────────────────────
  return (
    <div
      ref={sectionRef}
      className="relative w-full overflow-hidden -mb-32"
      style={{ height: `${HERO_HEIGHT}vh` }}
    >
      <div
        className="absolute top-0 left-0 right-0 overflow-hidden"
        style={{ height: "100dvh" }}
      >
        {/* ═══ CANVAS ═══════════════════════════════════ */}
        <div
          className="absolute inset-0"
          style={{ background: "#0E0D0C", zIndex: 0 }}
        >
          <canvas
            ref={canvasRef}
            className="block w-full h-full"
            style={{ objectFit: "cover", willChange: "transform" }}
          />
        </div>

        {/* ═══ CINEMATIC OVERLAYS ═══════════════════════ */}
        {/* Left-to-right gradient — strongest at text zone */}
        <div
          ref={gradientOverlayRef}
          className="absolute inset-0 pointer-events-none"
          style={{
            zIndex: 1,
            background:
              "linear-gradient(to right, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.45) 25%, rgba(0,0,0,0.18) 50%, transparent 70%)",
          }}
        />
        {/* Vignette */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            zIndex: 1,
            background:
              "radial-gradient(ellipse at center, transparent 50%, rgba(0,0,0,0.35) 100%)",
          }}
        />
        {/* Bottom edge gradient */}
        <div
          className="absolute bottom-0 left-0 right-0 pointer-events-none"
          style={{
            zIndex: 1,
            height: "35%",
            background:
              "linear-gradient(to top, rgba(0,0,0,0.4), transparent)",
          }}
        />
        {/* Film grain overlay */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            zIndex: 2,
            opacity: 0.035,
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E\")",
            backgroundRepeat: "repeat",
            backgroundSize: "128px 128px",
          }}
        />

        {/* ═══ TOP NAVIGATION ═══════════════════════════ */}
        <div
          ref={navRef}
          className="absolute top-0 left-0 right-0 flex items-center justify-between"
          style={{
            zIndex: 20,
            height: "72px",
            padding: "0 clamp(20px, 4vw, 48px)",
            fontFamily: "var(--font-inter), sans-serif",
          }}
        >
          <span
            className="text-white/70"
            style={{
              fontSize: "11px",
              fontWeight: 600,
              letterSpacing: "2px",
            }}
          >
            استودیو / ۰۱
          </span>

          <div className="hidden md:flex items-center gap-8">
            {[
              { fa: "پروژه‌ها", href: "/projects" },
              { fa: "درباره ما", href: "/about" },
              { fa: "تماس", href: "/contact" },
            ].map((item) => (
              <a
                key={item.fa}
                href={item.href}
                className="text-white/50 no-underline transition-all duration-300 hover:text-white/90 relative group"
                style={{
                  fontSize: "11px",
                  fontWeight: 500,
                  letterSpacing: "1px",
                  fontFamily: "var(--font-persian), sans-serif",
                }}
              >
                {item.fa}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-white/40 transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>

          <span
            className="text-white/70 cursor-pointer hover:text-white/90 transition-colors duration-300"
            style={{
              fontSize: "11px",
              fontWeight: 600,
              letterSpacing: "2px",
              fontFamily: "var(--font-persian), sans-serif",
            }}
          >
            منو
          </span>
        </div>

        {/* ═══ EDITORIAL HERO CONTENT ═══════════════════ */}
        <div
          ref={heroContentRef}
          className="absolute flex flex-col justify-center pointer-events-none"
          style={{
            zIndex: 10,
            inset: 0,
            padding: "clamp(80px, 10vh, 120px) clamp(24px, 5vw, 64px)",
            fontFamily: "var(--font-persian), sans-serif",
          }}
        >
          <div style={{ maxWidth: "clamp(380px, 42vw, 640px)" }}>
            {/* Eyebrow */}
            <div style={{ marginBottom: "clamp(12px, 2vh, 24px)" }}>
              <span
                style={{
                  fontSize: "11px",
                  fontWeight: 600,
                  letterSpacing: "1px",
                  color: "rgba(245,243,238,0.55)",
                }}
              >
                معماری / بازسازی / ۲۰۲۶
              </span>
            </div>

            {/* Headline — no glass card, just text shadow */}
            <h1
              className="m-0 whitespace-pre-line"
              style={{
                fontSize: "clamp(34px, 5vw, 72px)",
                lineHeight: "1.08",
                letterSpacing: "-0.01em",
                fontWeight: 700,
                color: "#F5F3EE",
                textShadow: "0 2px 24px rgba(0,0,0,0.3), 0 1px 4px rgba(0,0,0,0.15)",
                marginBottom: "clamp(16px, 2.5vh, 32px)",
              }}
            >
              {"بازآفرینی\nشیوه‌ی\nزندگی ما."}
            </h1>

            {/* Description — subtle glass container */}
            <div
              style={{
                display: "inline-block",
                padding: "clamp(12px, 1.5vh, 18px) clamp(16px, 2vw, 24px)",
                borderRadius: "12px",
                background: "rgba(0,0,0,0.2)",
                backdropFilter: "blur(12px)",
                WebkitBackdropFilter: "blur(12px)",
                border: "1px solid rgba(255,255,255,0.06)",
                marginBottom: "clamp(20px, 3.5vh, 40px)",
                maxWidth: "100%",
              }}
            >
              <p
                className="m-0"
                style={{
                  fontSize: "clamp(13px, 1.1vw, 16px)",
                  lineHeight: "1.75",
                  fontWeight: 400,
                  color: "rgba(245,243,238,0.65)",
                  textShadow: "0 1px 12px rgba(0,0,0,0.2)",
                }}
              >
                {"از فضاهای فراموش‌شده تا مکان‌های خارق‌العاده.\nتحول خانه‌ی خود را از طریق معماری، طراحی و جزئیات دقیق کاوش کنید."}
              </p>
            </div>

            {/* CTA — premium minimal button */}
            <div style={{ pointerEvents: "auto" }}>
              <button
                ref={ctaRef}
                onClick={handleCTAClick}
                className="group inline-flex items-center gap-3 cursor-pointer transition-all duration-400"
                style={{
                  fontSize: "12px",
                  fontWeight: 600,
                  letterSpacing: "1px",
                  fontFamily: "var(--font-persian), sans-serif",
                  color: "#F5F3EE",
                  background: "rgba(255,255,255,0.08)",
                  border: "1px solid rgba(255,255,255,0.12)",
                  borderRadius: "8px",
                  padding: "12px 20px",
                  backdropFilter: "blur(8px)",
                  WebkitBackdropFilter: "blur(8px)",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.background = "rgba(255,255,255,0.14)";
                  el.style.borderColor = "rgba(255,255,255,0.22)";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.background = "rgba(255,255,255,0.08)";
                  el.style.borderColor = "rgba(255,255,255,0.12)";
                }}
              >
                <span>کاوش در تحول</span>
                <span
                  ref={ctaArrowRef}
                  className="inline-flex items-center transition-transform duration-400"
                  style={{ transform: "translateX(0)" }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.transform =
                      "translateX(-4px)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.transform =
                      "translateX(0)";
                  }}
                >
                  <svg
                    width="18"
                    height="12"
                    viewBox="0 0 18 12"
                    fill="none"
                  >
                    <path
                      d="M12 1l5 5-5 5M17 6H1"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* ═══ PHASE CONTENT — dynamic scroll text ═════ */}
        <div
          className="absolute flex flex-col justify-center pointer-events-none"
          style={{
            zIndex: 10,
            inset: 0,
            padding: "clamp(80px, 10vh, 120px) clamp(24px, 5vw, 64px)",
            fontFamily: "var(--font-persian), sans-serif",
          }}
        >
          <div
            className="relative"
            style={{
              maxWidth: "clamp(360px, 38vw, 600px)",
              minHeight: "clamp(140px, 18vh, 240px)",
              width: "100%",
            }}
          >
            {STAGES.map((s, i) => (
              <div
                key={s.label}
                ref={setContentRef(i)}
                className={i === 0 ? "opacity-100" : "opacity-0"}
                style={
                  i > 0 ? { position: "absolute", inset: 0 } : undefined
                }
              >
                {/* Glass card — subtle */}
                <div
                  style={{
                    padding: "clamp(18px, 2.5vw, 32px)",
                    borderRadius: "12px",
                    background: "rgba(0,0,0,0.25)",
                    backdropFilter: "blur(14px)",
                    WebkitBackdropFilter: "blur(14px)",
                    border: "1px solid rgba(255,255,255,0.06)",
                  }}
                >
                  {/* Phase label */}
                  {s.phaseLabel && (
                    <div
                      style={{
                        marginBottom: "clamp(10px, 1.5vh, 16px)",
                        height: "16px",
                      }}
                    >
                      <span
                        style={{
                          fontSize: "11px",
                          fontWeight: 600,
                          letterSpacing: "1px",
                          color: "rgba(245,243,238,0.5)",
                        }}
                      >
                        {s.phaseLabel}
                      </span>
                    </div>
                  )}

                  {/* Headline */}
                  <h2
                    className="m-0 whitespace-pre-line"
                    style={{
                      fontSize:
                        s.label === "EDITORIAL"
                          ? "clamp(34px, 5vw, 72px)"
                          : "clamp(32px, 4.5vw, 64px)",
                      lineHeight: "1.08",
                      letterSpacing: "-0.01em",
                      fontWeight: 700,
                      color: "#F5F3EE",
                      textShadow: "0 2px 20px rgba(0,0,0,0.25), 0 1px 4px rgba(0,0,0,0.12)",
                      marginBottom: "clamp(10px, 1.5vh, 16px)",
                    }}
                  >
                    {s.headline}
                  </h2>

                  {/* Description */}
                  <p
                    className="m-0 max-w-xl"
                    style={{
                      fontSize: "clamp(13px, 1.1vw, 16px)",
                      lineHeight: "1.7",
                      fontWeight: 400,
                      color: "rgba(245,243,238,0.6)",
                      textShadow: "0 1px 10px rgba(0,0,0,0.15)",
                    }}
                  >
                    {s.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ═══ SCROLL INDICATOR — bottom-center ═════════ */}
        <div
          ref={scrollHintRef}
          className="absolute left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
          style={{
            zIndex: 20,
            bottom: "clamp(20px, 4vh, 48px)",
            transition: "opacity 0.8s ease",
            opacity: 1,
          }}
        >
          <div
            className="flex flex-col items-center gap-2"
            style={{
              padding: "10px 20px",
              borderRadius: "9999px",
              background: "rgba(0,0,0,0.25)",
              backdropFilter: "blur(6px)",
              WebkitBackdropFilter: "blur(6px)",
              border: "1px solid rgba(255,255,255,0.06)",
              fontFamily: "var(--font-persian), sans-serif",
            }}
          >
            <span
              style={{
                fontSize: "9px",
                fontWeight: 600,
                letterSpacing: "1px",
                color: "rgba(245,243,238,0.4)",
              }}
            >
              اسکرول کنید
            </span>
            {/* Animated line */}
            <div
              style={{
                width: "1px",
                height: "24px",
                background: "rgba(245,243,238,0.25)",
                animation: "scrollPulse 2s ease-in-out infinite",
              }}
            />
          </div>
        </div>

        {/* ═══ PROGRESS INDICATOR — right side ═══════════ */}
        <div
          ref={stageRef}
          className="absolute hidden md:flex flex-col pointer-events-none"
          style={{
            zIndex: 20,
            right: "clamp(16px, 3vw, 40px)",
            top: "50%",
            transform: "translateY(-50%)",
            fontFamily: "var(--font-persian), sans-serif",
            direction: "ltr",
            gap: "20px",
          }}
        >
          {STAGES.slice(1).map((s, i) => {
            const realIdx = i + 1;
            return (
              <div
                key={s.label}
                data-stage
                className="flex items-center gap-3"
                style={{
                  opacity: realIdx === 1 ? 1 : 0.15,
                  transition: "opacity 0.8s ease, transform 0.8s ease",
                  transform: "translateX(0)",
                }}
              >
                <span
                  className="text-white/40"
                  style={{
                    fontSize: "10px",
                    fontWeight: 600,
                    letterSpacing: "2px",
                  }}
                >
                  {String(realIdx).padStart(2, "0")}
                </span>
                <span
                  className="text-white/30"
                  style={{
                    fontSize: "10px",
                    fontWeight: 500,
                    letterSpacing: "1px",
                    fontFamily: "var(--font-persian), sans-serif",
                  }}
                >
                  {s.label === "TRANSFORMATION" ? "تحول" : s.label === "BEFORE" ? "قبل" : "بعد"}
                </span>
                <span
                  data-line
                  className="h-px bg-white/60"
                  style={{
                    width: realIdx === 1 ? "20px" : "0px",
                    opacity: realIdx === 1 ? 0.6 : 0,
                    transition: "width 0.6s ease, opacity 0.6s ease",
                  }}
                />
              </div>
            );
          })}
        </div>

        {/* ═══ END FADE ═════════════════════════════════ */}
        <div
          ref={endFadeRef}
          className="absolute inset-0 pointer-events-none"
          style={{
            zIndex: 30,
            background: "#0E0D0C",
            opacity: 0,
          }}
        />
      </div>

      {/* Scroll pulse keyframes */}
      <style>{`
        @keyframes scrollPulse {
          0%, 100% { opacity: 0.3; transform: scaleY(1); }
          50% { opacity: 0.7; transform: scaleY(1.2); }
        }
      `}</style>
    </div>
  );
}
