"use client";

import { useEffect } from "react";

export default function ProjectDetailMotion() {
  useEffect(() => {
    const root = document.querySelector<HTMLElement>(".project-detail");
    const bar = document.querySelector<HTMLElement>(".project-scroll-progress");
    if (!root || !bar) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const onScroll = () => {
      const max = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
      const progress = Math.min(1, Math.max(0, window.scrollY / max));
      bar.style.transform = `scaleX(${progress})`;
      root.style.setProperty("--scroll-progress", progress.toFixed(3));
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    let observer: IntersectionObserver | null = null;

    if (!reduced && "IntersectionObserver" in window) {
      observer = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (entry.isIntersecting) {
              entry.target.classList.add("is-visible");
              observer?.unobserve(entry.target);
            }
          }
        },
        { threshold: 0.14, rootMargin: "0px 0px -8% 0px" }
      );

      document
        .querySelectorAll(".project-detail-reveal")
        .forEach((el) => observer?.observe(el));
    } else {
      document
        .querySelectorAll(".project-detail-reveal")
        .forEach((el) => el.classList.add("is-visible"));
    }

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      observer?.disconnect();
    };
  }, []);

  return <div className="project-scroll-progress" aria-hidden="true" />;
}
