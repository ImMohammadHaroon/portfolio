"use client";

import { useEffect } from "react";

export default function ProjectDetailReveal() {
  useEffect(() => {
    const root = document.querySelector(".project-detail");
    if (!root) return;

    if (
      !("IntersectionObserver" in window) ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      root
        .querySelectorAll(".pd-reveal, .pd-progress")
        .forEach((el) => el.classList.add("is-visible"));
      return;
    }

    const revealObserver = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          entry.target.classList.add("is-visible");
          revealObserver.unobserve(entry.target);
        }
      },
      { threshold: 0.14, rootMargin: "0px 0px -8% 0px" }
    );

    root.querySelectorAll(".pd-reveal").forEach((el) => revealObserver.observe(el));

    const progress = root.querySelector<HTMLElement>(".pd-progress");
    const onScroll = () => {
      if (!progress) return;
      const rect = root.getBoundingClientRect();
      const total = Math.max(rect.height - window.innerHeight, 1);
      const scrolled = Math.min(Math.max(-rect.top, 0), total);
      const ratio = scrolled / total;
      progress.style.setProperty("--pd-scroll", ratio.toFixed(4));
      progress.classList.toggle("is-visible", ratio > 0.02);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      revealObserver.disconnect();
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return null;
}
