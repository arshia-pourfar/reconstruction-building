"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import gsap from "gsap";

interface PageBannerProps {
  image?: string;
  phase?: string;
  title: string;
  titleSuffix?: string;
  description?: string;
  /** Text alignment based on image composition */
  align?: "left" | "right" | "center";
}

export default function PageBanner({
  image = "/banners/Gemini_Generated_Image_u8qf60u8qf60u8qf.png",
  phase,
  title,
  titleSuffix,
  description,
  align = "left",
}: PageBannerProps) {
  const bannerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!bannerRef.current) return;
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.fromTo(
        bannerRef.current!.querySelector(".banner-img"),
        { opacity: 0, scale: 1.08 },
        { opacity: 1, scale: 1, duration: 1.2 }
      )
        .fromTo(
          bannerRef.current!.querySelector(".banner-phase"),
          { opacity: 0, y: 10 },
          { opacity: 1, y: 0, duration: 0.5 },
          "-=0.6"
        )
        .fromTo(
          bannerRef.current!.querySelector(".banner-title"),
          { opacity: 0, y: 24, filter: "blur(8px)" },
          { opacity: 1, y: 0, filter: "blur(0px)", duration: 0.7 },
          "-=0.4"
        )
        .fromTo(
          bannerRef.current!.querySelector(".banner-suffix"),
          { opacity: 0, y: 24, filter: "blur(8px)" },
          { opacity: 1, y: 0, filter: "blur(0px)", duration: 0.7 },
          "-=0.5"
        )
        .fromTo(
          bannerRef.current!.querySelector(".banner-desc"),
          { opacity: 0, y: 16 },
          { opacity: 1, y: 0, duration: 0.6 },
          "-=0.4"
        )
        .fromTo(
          bannerRef.current!.querySelector(".banner-line"),
          { scaleX: 0, transformOrigin: "left" },
          { scaleX: 1, duration: 0.8, ease: "power2.inOut" },
          "-=0.3"
        );
    }, bannerRef);

    return () => ctx.revert();
  }, []);

  const alignmentClasses = {
    left: "items-center",
    right: "items-center justify-end text-right",
    center: "items-center justify-center text-center",
  };

  const textClasses = {
    left: "max-w-3xl",
    right: "max-w-3xl",
    center: "max-w-3xl mx-auto text-center",
  };

  return (
    <section
      ref={bannerRef}
      className="relative h-[50vh] md:h-[55vh] flex overflow-hidden"
    >
      {/* Banner image */}
      <div className="banner-img absolute inset-0 opacity-0">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
          sizes="100vw"
          priority
        />
      </div>

      {/* Dark gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/10" />
      {/* Extra side gradient for text readability */}
      {align === "left" && (
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-transparent" />
      )}
      {align === "right" && (
        <div className="absolute inset-0 bg-gradient-to-l from-black/60 via-transparent to-transparent" />
      )}

      {/* Content */}
      <div
        className={`relative z-10 w-full flex ${alignmentClasses[align]} px-4 md:px-16 max-w-[1280px] mx-auto py-20 md:py-28`}
      >
        <div className={textClasses[align]}>
          {phase && (
            <span
              className="banner-phase text-[12px] text-white/50 block mb-4 tracking-wider opacity-0"
              style={{ fontFamily: "JetBrains Mono, monospace", fontWeight: 500 }}
            >
              {phase}
            </span>
          )}
          <h1
            className="banner-title text-[32px] md:text-[56px] leading-[44px] md:leading-[72px] font-bold mb-4 text-white opacity-0"
            style={{ fontFamily: "Space Grotesk, sans-serif", letterSpacing: "-0.02em" }}
          >
            {title}
            {titleSuffix && (
              <>
                <br />
                <span className="banner-suffix text-secondary opacity-0">{titleSuffix}</span>
              </>
            )}
          </h1>
          {description && (
            <p
              className="banner-desc text-[16px] md:text-[18px] leading-[28px] text-white/70 max-w-xl opacity-0"
              style={{ fontFamily: "Vazirmatn, sans-serif", fontWeight: 400 }}
            >
              {description}
            </p>
          )}
          <div className="banner-line mt-8 h-px w-20 bg-secondary/60 origin-left" />
        </div>
      </div>
    </section>
  );
}
