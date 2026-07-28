"use client";

import { useRef, useEffect } from "react";
import StructuraFooter from "../../components/StructuraFooter";

const HIGHLIGHTS = [
  {
    number: "01",
    title: "Sleek Charcoal Cabinetry",
    description:
      "Fingerprint-resistant matte finish with integrated precision hardware.",
    hoverBg: "hover:bg-primary-container",
    hoverText: "group-hover:text-white",
  },
  {
    number: "02",
    title: "Marble Countertops",
    description:
      "Honed Calacatta Borghini slabs with book-matched mitered edges.",
    hoverBg: "hover:bg-secondary-container",
    hoverText: "group-hover:text-white",
  },
  {
    number: "03",
    title: "Pro-Grade Appliances",
    description:
      "Sub-Zero and Wolf integration for uncompromising culinary performance.",
    hoverBg: "hover:bg-primary",
    hoverText: "group-hover:text-white/80",
  },
  {
    number: "04",
    title: "Industrial Lighting",
    description:
      "Custom-fabricated steel pendants with warm Kelvin-tuned LED arrays.",
    hoverBg: "",
    hoverText: "",
  },
];

const SPECS = [
  { label: "Dimensions", value: "480 SQ FT // 12' CEILING" },
  { label: "Structure", value: "EXPOSED STEEL I-BEAMS" },
  { label: "Materials", value: "CONCRETE / QUARTZ / STEEL" },
  { label: "Hardware", value: "BLUM TANDEMBOX SYSTEMS" },
  { label: "Duration", value: "14 WEEKS START-TO-FINISH" },
];

const STEPS = [
  {
    number: "01. Objective",
    text: "Strip away structural clutter to expose volumetric potential and maximize utility.",
  },
  {
    number: "02. Execution",
    text: "Installation of structural steel headers and integrated cabinetry systems.",
  },
  {
    number: "03. Result",
    text: "A high-performance environment with 45% increased workspace efficiency.",
  },
];

export default function ProjectDetailPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const afterImageRef = useRef<HTMLDivElement>(null);
  const handleRef = useRef<HTMLDivElement>(null);
  const afterImgRef = useRef<HTMLImageElement>(null);
  const isResizing = useRef(false);

  useEffect(() => {
    const container = containerRef.current;
    const afterImage = afterImageRef.current;
    const handle = handleRef.current;
    const afterImg = afterImgRef.current;

    if (!container || !afterImage || !handle || !afterImg) return;

    const updateSlider = (clientX: number) => {
      const rect = container.getBoundingClientRect();
      let x = clientX - rect.left;
      if (x < 0) x = 0;
      if (x > rect.width) x = rect.width;
      const percentage = (x / rect.width) * 100;
      afterImage.style.width = `${percentage}%`;
      handle.style.left = `${percentage}%`;
      afterImg.style.width = `${rect.width}px`;
    };

    const onMove = (e: MouseEvent | TouchEvent) => {
      if (!isResizing.current) return;
      const clientX =
        "clientX" in e ? e.clientX : e.touches[0]?.clientX;
      if (clientX !== undefined) updateSlider(clientX);
    };

    const start = () => {
      isResizing.current = true;
      container.classList.add("interacting");
    };
    const stop = () => {
      isResizing.current = false;
      container.classList.remove("interacting");
    };

    const initResize = () => {
      afterImg.style.width = `${container.getBoundingClientRect().width}px`;
    };
    window.addEventListener("resize", initResize);
    initResize();

    container.addEventListener("mousedown", start);
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseup", stop);
    container.addEventListener("touchstart", start);
    window.addEventListener("touchmove", onMove);
    window.addEventListener("touchend", stop);

    afterImage.style.width = "50%";
    handle.style.left = "50%";

    return () => {
      window.removeEventListener("resize", initResize);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseup", stop);
      window.removeEventListener("touchmove", onMove);
      window.removeEventListener("touchend", stop);
    };
  }, []);

  return (
    <main className="pt-20">
      {/* ═══ PROJECT HEADER ═══════════════════════════ */}
      <section className="max-w-[1440px] mx-auto px-4 md:px-16 py-12 md:py-20 border-b border-on-surface-variant">
        <div className="flex flex-col md:flex-row justify-between items-end gap-6">
          <div className="max-w-2xl">
            <span className="font-[family-name:var(--font-label-sm)] text-[12px] leading-4 font-medium text-secondary uppercase tracking-[0.2em] mb-4 block">
              Residential Renovation // 042
            </span>
            <h1 className="font-[family-name:var(--font-display-lg)] text-[32px] md:text-[64px] leading-[40px] md:leading-[72px] tracking-[-0.02em] font-extrabold uppercase mb-6 leading-[0.9]">
              Monolithic Kitchen Assembly
            </h1>
            <p className="font-[family-name:var(--font-body-lg)] text-[18px] leading-[28px] text-on-surface-variant leading-relaxed">
              A precision-engineered culinary environment defined by structural
              honesty and material contrast. This project transitioned a dated
              residential workspace into an industrial-grade kitchen laboratory.
            </p>
          </div>
          <a
            href="/projects"
            className="flex items-center gap-2 font-[family-name:var(--font-label-md)] text-[14px] leading-5 tracking-[0.05em] uppercase tracking-widest text-on-surface hover:text-secondary transition-colors group"
          >
            <svg
              className="transition-transform group-hover:-translate-x-1"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
            Back to Portfolio
          </a>
        </div>
      </section>

      {/* ═══ BEFORE/AFTER SLIDER ══════════════════════ */}
      <section className="bg-surface-container-low py-16 overflow-hidden">
        <div className="max-w-[1440px] mx-auto px-4 md:px-16">
          <div className="mb-8 flex justify-between items-baseline border-l-2 border-secondary pl-6">
            <h2 className="font-[family-name:var(--font-headline-lg)] text-[24px] md:text-[40px] leading-[32px] md:leading-[48px] tracking-[-0.01em] font-bold uppercase">
              Structural Evolution
            </h2>
            <span className="font-[family-name:var(--font-label-sm)] text-[12px] leading-4 font-medium uppercase text-on-surface-variant">
              Interactive Comparison
            </span>
          </div>

          {/* Slider */}
          <div
            ref={containerRef}
            className="comparison-slider w-full aspect-[1.79] cursor-ew-resize"
            style={{ border: "1px solid #1A1A1A", position: "relative", overflow: "hidden", userSelect: "none" }}
          >
            {/* Before */}
            <img
              alt="Before State"
              className="w-full h-full object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBFN4H-UVOZ3tCo4amRG7U_v1D_tS-bB8PBY2zQH3HO6huJMyjdzmATbuOd8irCPkBHGw8DTO1UThly4b3XanTf8H6ppq_ljuGxfDP_-9xX6hO9sk7O38k_eRAMBVzakAhP4zjIcKQmd4a4Nsq70VU-oCpjOx_QrXtA1PsGe58UB1N1WNsUrJ5p4XH5pvrFKb6xK4zq8CJZ_XqO4tPK_VWnJV1m_Nb5YXmTB3H2Zt_rfHJGInyqgRKTD1SLVaR_gqpz02Xxfy9FTg7g"
            />
            {/* After overlay */}
            <div
              ref={afterImageRef}
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                height: "100%",
                width: "50%",
                overflow: "hidden",
                borderRight: "2px solid #ff5722",
              }}
            >
              <img
                ref={afterImgRef}
                alt="After State"
                className="absolute top-0 left-0 w-full h-full object-cover max-w-none"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBLiZ_hxL0-I6H0zsl8WzUQ2Zclr7bsYmMIH6lLsjdM2cR_gRvW_rrRerOXoKiEtXh4T8p2781kMYaafb1PyKB0wGxSg4Ar8UB_KzqqStuPaP8I-VqtY4wysLTVql69NoFHy7D73S0etLlnNwmRg8AH28CYnhaY4gGnvg7B0imBwtw1G6puw-EqETUHPrZI-U2c8YM6_nuqsth6h8oYEM82SpEpafYmezxQqUikvEPnHVAvzYk1Hb_yGVaHemtgXk9TTp0CcXCBLzON"
              />
            </div>
            {/* Handle */}
            <div
              ref={handleRef}
              style={{
                position: "absolute",
                top: 0,
                left: "50%",
                bottom: 0,
                width: "4px",
                background: "#ff5722",
                cursor: "ew-resize",
                zIndex: 10,
                transform: "translateX(-50%)",
              }}
            >
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-secondary flex items-center justify-center border-2 border-primary">
                <svg
                  className="text-white text-sm"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M12 5v14M5 12l7-7 7 7M5 12l7 7 7-7" />
                </svg>
              </div>
            </div>
            {/* Labels */}
            <div className="absolute top-6 left-6 z-20 bg-primary/80 backdrop-blur-sm text-white px-4 py-1 font-[family-name:var(--font-label-sm)] text-[12px] leading-4 font-medium uppercase tracking-widest pointer-events-none">
              Before
            </div>
            <div className="absolute top-6 right-6 z-20 bg-secondary/90 backdrop-blur-sm text-white px-4 py-1 font-[family-name:var(--font-label-sm)] text-[12px] leading-4 font-medium uppercase tracking-widest pointer-events-none">
              After
            </div>
          </div>

          {/* Step cards */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            {STEPS.map((step) => (
              <div
                key={step.number}
                className="p-6 bg-surface"
                style={{ border: "1px solid #1A1A1A" }}
              >
                <h4 className="font-[family-name:var(--font-label-md)] text-[14px] leading-5 tracking-[0.05em] uppercase mb-2 text-secondary">
                  {step.number}
                </h4>
                <p className="font-[family-name:var(--font-body-md)] text-[16px] leading-[24px] text-on-surface-variant italic">
                  {step.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ HIGHLIGHTS + SPECS ═══════════════════════ */}
      <section className="max-w-[1440px] mx-auto px-4 md:px-16 py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Highlights */}
          <div className="md:col-span-8 space-y-6">
            <h3 className="font-[family-name:var(--font-headline-md)] text-[24px] leading-[32px] font-bold uppercase mb-8 flex items-center gap-4">
              <span className="w-12 h-1 bg-primary" />
              Project Highlights
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {HIGHLIGHTS.map((h) => (
                <div
                  key={h.number}
                  className={`group relative aspect-square bg-surface overflow-hidden p-8 flex flex-col justify-end transition-all ${h.hoverBg}`}
                  style={{ border: "1px solid #1A1A1A" }}
                >
                  <span
                    className={`absolute top-8 left-8 font-[family-name:var(--font-display-lg)] text-[32px] md:text-[64px] leading-[40px] md:leading-[72px] tracking-[-0.02em] font-extrabold text-surface-variant ${h.hoverText} transition-colors`}
                  >
                    {h.number}
                  </span>
                  <div className="relative z-10">
                    <h4
                      className={`font-[family-name:var(--font-headline-md)] text-[24px] leading-[32px] font-bold uppercase mb-2 ${h.hoverText} transition-colors`}
                    >
                      {h.title}
                    </h4>
                    <p
                      className={`font-[family-name:var(--font-body-md)] text-[16px] leading-[24px] text-on-surface-variant ${h.hoverText} transition-colors`}
                    >
                      {h.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Specs Sidebar */}
          <div className="md:col-span-4 bg-primary p-10 text-on-primary h-fit sticky top-28">
            <h3 className="font-[family-name:var(--font-label-md)] text-[14px] leading-5 tracking-[0.3em] uppercase mb-10 border-b border-on-primary-container pb-4">
              Technical Specs
            </h3>
            <ul className="space-y-6">
              {SPECS.map((spec) => (
                <li key={spec.label} className="flex flex-col gap-1">
                  <span className="font-[family-name:var(--font-label-sm)] text-[12px] leading-4 font-medium text-on-primary-container uppercase">
                    {spec.label}
                  </span>
                  <span className="font-[family-name:var(--font-label-md)] text-[14px] leading-5 tracking-[0.05em] font-medium">
                    {spec.value}
                  </span>
                </li>
              ))}
            </ul>
            <div className="mt-12 pt-8 border-t border-on-primary-container">
              <button className="w-full bg-secondary text-white py-4 font-[family-name:var(--font-label-md)] text-[14px] leading-5 tracking-[0.05em] uppercase tracking-widest hover:brightness-110 transition-all">
                Inquire for Project
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ NEXT PROJECT ═════════════════════════════ */}
      <section className="max-w-[1440px] mx-auto px-4 md:px-16 mb-24">
        <div
          className="group relative flex flex-col md:flex-row overflow-hidden hover:border-secondary transition-colors"
          style={{ border: "1px solid #1A1A1A" }}
        >
          <div className="md:w-1/2 p-12 flex flex-col justify-center">
            <span className="font-[family-name:var(--font-label-sm)] text-[12px] leading-4 font-medium uppercase text-secondary mb-4">
              Next Project
            </span>
            <h2 className="font-[family-name:var(--font-headline-lg)] text-[24px] md:text-[40px] leading-[32px] md:leading-[48px] tracking-[-0.01em] font-bold uppercase mb-6 group-hover:translate-x-2 transition-transform">
              Brutalist Penthouse Loft
            </h2>
            <a
              href="#"
              className="font-[family-name:var(--font-label-md)] text-[14px] leading-5 tracking-[0.05em] uppercase border-b-2 border-primary w-fit pb-1 hover:border-secondary"
            >
              View Details
            </a>
          </div>
          <div className="md:w-1/2 h-64 md:h-auto bg-surface-container-highest relative overflow-hidden">
            <div
              className="bg-cover bg-center absolute inset-0 grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
              style={{
                backgroundImage:
                  "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAw-y7w8Xy4hkMW3qI-kcZlaAG5lc-VqDBZEvHipLEUixd63YUPDUAI3Mtsb8yFKA_mJaXWK85-4WAHYCeMAefe-R3rIsYENYnFnpaUKTSzWDNC5mm1EJxqjdtAYuX6VeznYWY1n-17GOM__jUtVjckev_QmDhkfsEi_k30YjX-q-DXSkN4uUaHRHTC4Wgvhu7fUYZTJTySF9ZDOug-Fj_SorCBJbCVIBODyrq65u4lGbY7ENMA1PNoR4a_H627coMrwmsOtGsGyG44')",
              }}
            />
          </div>
        </div>
      </section>

      <StructuraFooter />
    </main>
  );
}
