"use client";

import { useEffect } from "react";

export default function ScrollReveal({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Reveal animation on scroll
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
          }
        });
      },
      { threshold: 0.1 },
    );

    document.querySelectorAll(".reveal").forEach((el) => revealObserver.observe(el));

    // Step cards sequential reveal
    const stepRevealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const step = entry.target.getAttribute("data-step");
            const delay = (Number(step) - 1) * 200;
            setTimeout(() => {
              entry.target.classList.add("active-reveal");
            }, delay);
            stepRevealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 },
    );

    // Step cards active state
    const stepActiveObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
          } else {
            entry.target.classList.remove("in-view");
          }
        });
      },
      { threshold: 0.6 },
    );

    document.querySelectorAll(".step-card").forEach((card) => {
      stepRevealObserver.observe(card);
      stepActiveObserver.observe(card);
    });

    return () => {
      revealObserver.disconnect();
      stepRevealObserver.disconnect();
      stepActiveObserver.disconnect();
    };
  }, []);

  return <>{children}</>;
}
