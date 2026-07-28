"use client";

import { useEffect, useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ScrollProvider({ children }: { children: React.ReactNode }) {
  const initialized = useRef(false);

  useEffect(() => {
    if (initialized.current) return;
    initialized.current = true;

    let lenis: Lenis | null = null;
    try {
      lenis = new Lenis({
        duration: 1.1,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        orientation: "vertical",
        smoothWheel: true,
        wheelMultiplier: 0.9,
        touchMultiplier: 1.2,
      });

      lenis.on("scroll", () => {
        ScrollTrigger.update();
      });

      function raf(time: number) {
        lenis?.raf(time);
        requestAnimationFrame(raf);
      }
      requestAnimationFrame(raf);

      AOS.init({
        duration: 700,
        easing: "ease-out-cubic",
        once: true,
        offset: 100,
        disable: "mobile",
      });

      ScrollTrigger.scrollerProxy(document.body, {
        scrollTop(value) {
          if (arguments.length && lenis) {
            lenis.scrollTo(value!);
          }
          return lenis?.scroll ?? 0;
        },
        getBoundingClientRect() {
          return {
            top: 0,
            left: 0,
            width: window.innerWidth,
            height: window.innerHeight,
          };
        },
        pinType: document.body.style.transform ? "transform" : "fixed",
      });

      lenis.on("scroll", () => {
        AOS.refresh();
      });

      // Recalculate Lenis after entrance animations complete
      setTimeout(() => lenis?.resize(), 2000);
    } catch (e) {
      console.warn("Lenis init failed, fallback to native scroll", e);
    }

    return () => {
      lenis?.destroy();
    };
  }, []);

  return <>{children}</>;
}
