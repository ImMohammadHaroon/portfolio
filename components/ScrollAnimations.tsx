"use client";

import { useRef, type ReactNode } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, SplitText, useGSAP);

/**
 * Every ScrollTrigger below uses the same bidirectional contract:
 *  - scrolling down into a group  → play
 *  - scrolling down past it       → reverse (off-screen, resets the group)
 *  - scrolling back up into it    → play again
 *  - scrolling up past it         → reverse
 * `clamp()` keeps the start inside the scrollable range so the last groups
 * (contact footer, page footer) still fire on short viewports.
 */
const START = "clamp(top 85%)";
const TOGGLE = "play reverse play reverse";
const EASE = "power3.out";

function st(trigger: Element, extra: ScrollTrigger.Vars = {}): ScrollTrigger.Vars {
  return { trigger, start: START, toggleActions: TOGGLE, ...extra };
}

/** Masked line-by-line heading reveal. Re-splits on resize / font load. */
function revealLines(
  target: Element | null,
  trigger: Element,
  vars: gsap.TweenVars = {}
) {
  if (!target) return;
  SplitText.create(target, {
    type: "lines",
    mask: "lines",
    linesClass: "split-line",
    autoSplit: true,
    onSplit: (self) =>
      gsap.from(self.lines, {
        yPercent: 110,
        duration: 1.1,
        ease: "power4.out",
        stagger: 0.1,
        scrollTrigger: st(trigger),
        ...vars,
      }),
  });
}

/** Tween a number and write it into a DOM text node. */
function countTo(
  node: ChildNode | null,
  from: number,
  to: number,
  format: (n: number) => string,
  vars: gsap.TweenVars = {}
) {
  if (!node) return gsap.to({}, { duration: 0 });
  const proxy = { v: from };
  node.nodeValue = format(from);
  return gsap.to(proxy, {
    v: to,
    duration: 1.4,
    ease: "power2.out",
    ...vars,
    onUpdate: () => {
      node.nodeValue = format(proxy.v);
    },
  });
}

export default function ScrollAnimations({ children }: { children: ReactNode }) {
  const scope = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const root = scope.current;
      if (!root) return;
      const q = <T extends Element = HTMLElement>(sel: string) =>
        root.querySelector<T>(sel);
      const qa = <T extends Element = HTMLElement>(sel: string) =>
        Array.from(root.querySelectorAll<T>(sel));

      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.defaults({ ease: EASE });

        /* ------------------------------------------------------------ */
        /* Header — settles in from above on load                         */
        /* ------------------------------------------------------------ */
        const headerItems = qa(".header .wordmark, .header nav a, .header .hire-me");
        gsap.fromTo(
          headerItems,
          { y: -18, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.9, stagger: 0.07, delay: 0.1 }
        );

        /* ------------------------------------------------------------ */
        /* Hero — cinematic intro on load, parallax drift while scrolling */
        /* ------------------------------------------------------------ */
        const hero = q(".hero");
        const header = q(".header");
        if (hero && header) {
          const heroCopy = q(".hero-copy");
          const h1 = q(".hero h1");
          const portrait = q(".portrait");
          const frame = q(".portrait-frame");
          const portraitImg = q(".portrait-frame img");

          const intro = gsap.timeline({ delay: 0.15 });

          intro.fromTo(
            ".hero .eyebrow",
            { x: -28, opacity: 0 },
            { x: 0, opacity: 1, duration: 0.9 },
            0
          );

          if (h1) {
            let first = true;
            SplitText.create(h1, {
              type: "lines",
              mask: "lines",
              linesClass: "split-line",
              autoSplit: true,
              onSplit: (self) => {
                // The h1 is hidden by CSS until its lines are safely masked.
                gsap.set(h1, { opacity: 1 });
                if (!first) return; // re-split on resize: keep lines settled
                first = false;
                const lines = gsap.from(self.lines, {
                  yPercent: 115,
                  duration: 1.3,
                  ease: "power4.out",
                  stagger: 0.12,
                });
                intro.add(lines, 0.15);
                return lines;
              },
            });
          }

          intro
            .fromTo(
              ".hero-summary",
              { y: 28, opacity: 0 },
              { y: 0, opacity: 1, duration: 1, stagger: 0.12 },
              0.55
            )
            .fromTo(
              ".hero-actions",
              { y: 24, opacity: 0 },
              { y: 0, opacity: 1, duration: 0.9 },
              0.85
            )
            .fromTo(
              ".hero-foot > *",
              { y: 14, opacity: 0 },
              { y: 0, opacity: 1, duration: 0.8, stagger: 0.1 },
              1.1
            );

          if (frame && portraitImg) {
            intro
              .from(frame, { y: 56, rotation: -2.5, duration: 1.5, ease: "expo.out" }, 0.1)
              .from(portraitImg, { scale: 1.22, duration: 1.8, ease: "expo.out" }, 0.1)
              .fromTo(
                ".portrait-label",
                { x: -20, opacity: 0 },
                { x: 0, opacity: 1, duration: 0.8 },
                0.9
              )
              .fromTo(
                ".portrait figcaption span",
                { y: 10, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.7, stagger: 0.1 },
                1.05
              );
          }

          // Parallax: copy drifts up and fades, portrait lags behind the scroll.
          gsap
            .timeline({
              scrollTrigger: {
                trigger: header,
                start: "top top",
                endTrigger: hero,
                end: "bottom top",
                scrub: 1.2,
              },
            })
            .to(heroCopy, { y: -90, opacity: 0.25, ease: "none" }, 0)
            .to(portrait, { y: 80, ease: "none" }, 0)
            .to(".hero-foot", { opacity: 0, ease: "none" }, 0);
        }

        /* ------------------------------------------------------------ */
        /* Work — heading splits in, cards tilt up out of the grid        */
        /* ------------------------------------------------------------ */
        const workHeading = q(".work .section-heading");
        if (workHeading) {
          gsap
            .timeline({ scrollTrigger: st(workHeading) })
            .from(".work .kicker", { x: -24, opacity: 0, duration: 0.8 }, 0)
            .from(".work .section-heading p", { x: 24, opacity: 0, duration: 0.9 }, 0.25);
          revealLines(q(".work h2"), workHeading);
        }

        const slots = qa(".project-card-slot");
        if (slots.length) {
          const hidden = { opacity: 0, y: 70, scale: 0.94, rotateX: 10 };
          gsap.set(slots, hidden);
          const show = (els: Element[]) =>
            gsap.to(els, {
              opacity: 1,
              y: 0,
              scale: 1,
              rotateX: 0,
              duration: 1.1,
              stagger: 0.12,
              ease: "power3.out",
              overwrite: "auto",
            });
          ScrollTrigger.batch(slots, {
            start: "clamp(top 90%)",
            onEnter: show,
            onEnterBack: show,
            // Leaving upward: park cards slightly above so they fall back in.
            onLeave: (els) => gsap.set(els, { ...hidden, y: -50, rotateX: -8 }),
            onLeaveBack: (els) =>
              gsap.to(els, { ...hidden, duration: 0.6, ease: "power2.in", overwrite: "auto" }),
          });
        }

        const github = q(".github-link");
        if (github) {
          gsap.from(github, { x: 30, opacity: 0, duration: 0.9, scrollTrigger: st(github) });
        }

        /* ------------------------------------------------------------ */
        /* About — copy slides in from both sides, cards swing on hinges  */
        /* ------------------------------------------------------------ */
        const aboutIntro = q(".about-intro");
        if (aboutIntro) {
          gsap
            .timeline({ scrollTrigger: st(aboutIntro) })
            .from(".about-intro .kicker", { x: -24, opacity: 0, duration: 0.8 }, 0)
            .from(
              ".about-copy > *",
              { y: 24, opacity: 0, duration: 1, stagger: 0.12 },
              0.3
            );
          revealLines(q(".about-intro h2"), aboutIntro);
        }

        const journey = q(".journey-grid");
        if (journey) {
          const score = q(".score");
          const tl = gsap.timeline({ scrollTrigger: st(journey) });
          tl.from(".career-card", { x: -80, rotateY: -10, opacity: 0, duration: 1.2 }, 0)
            .from(".education-card", { x: 80, rotateY: 10, opacity: 0, duration: 1.2 }, 0.1)
            .from(
              ".journey-highlights li",
              { x: -18, opacity: 0, duration: 0.7, stagger: 0.1 },
              0.5
            )
            .from(
              ".journey-mark",
              { scale: 0, rotation: 120, duration: 0.8, ease: "back.out(2)", stagger: 0.1 },
              0.7
            )
            .from(".journey-bottom", { opacity: 0, duration: 0.8, stagger: 0.1 }, 0.6);
          if (score) {
            tl.add(
              countTo(score.firstChild, 0, 3.62, (n) => n.toFixed(2), { duration: 1.5 }),
              0.5
            );
          }
        }

        /* ------------------------------------------------------------ */
        /* Stack — toolkit rows wipe in from the left, heading drifts     */
        /* ------------------------------------------------------------ */
        const stack = q(".stack");
        const stackHeading = q(".stack > div:first-child");
        const stackList = q(".stack-list");
        if (stack && stackHeading && stackList) {
          gsap.from(".stack .kicker", {
            x: -24,
            opacity: 0,
            duration: 0.8,
            scrollTrigger: st(stackHeading),
          });
          revealLines(q(".stack h2"), stackHeading);

          gsap.to(stackHeading, {
            y: 70,
            ease: "none",
            scrollTrigger: { trigger: stack, start: "top bottom", end: "bottom top", scrub: 1 },
          });

          gsap
            .timeline({ scrollTrigger: st(stackList) })
            .from(".stack-list > div", {
              clipPath: "inset(0 100% 0 0)",
              duration: 1.1,
              ease: "power3.inOut",
              stagger: 0.14,
            })
            .from(
              ".stack-list h3",
              { x: -24, opacity: 0, duration: 0.8, stagger: 0.14 },
              0.3
            )
            .from(
              ".stack-list p",
              { y: 12, opacity: 0, duration: 0.8, stagger: 0.14 },
              0.4
            );
        }

        /* ------------------------------------------------------------ */
        /* Publication — year counts up, paper card is wiped open         */
        /* ------------------------------------------------------------ */
        const pubHeading = q(".publication-heading");
        if (pubHeading) {
          const year = q(".publication-year");
          const tl = gsap.timeline({ scrollTrigger: st(pubHeading) });
          tl.from(".publication .kicker", { x: -24, opacity: 0, duration: 0.8 }, 0);
          if (year) {
            tl.from(year, { y: 30, opacity: 0, duration: 1 }, 0.2).add(
              countTo(year.firstChild, 2016, 2026, (n) => String(Math.round(n)), {
                duration: 1.6,
                ease: "power3.out",
              }),
              0.2
            );
          }
          revealLines(q(".publication h2"), pubHeading);
        }

        const paper = q(".paper");
        if (paper) {
          gsap
            .timeline({ scrollTrigger: st(paper) })
            .from(paper, {
              clipPath: "inset(0 100% 0 0)",
              duration: 1.2,
              ease: "power3.inOut",
            })
            .from(
              ".paper > *",
              { y: 26, opacity: 0, duration: 0.9, stagger: 0.09 },
              0.45
            );
        }

        /* ------------------------------------------------------------ */
        /* Contact — headline rises letter by letter, circle spins in     */
        /* ------------------------------------------------------------ */
        const contact = q(".contact");
        const contactTitle = q(".contact-title");
        if (contact && contactTitle) {
          gsap.from(".contact .kicker", {
            y: 16,
            opacity: 0,
            duration: 0.8,
            scrollTrigger: st(contactTitle),
          });

          const h2 = q(".contact h2");
          if (h2) {
            SplitText.create(h2, {
              type: "lines,chars",
              mask: "lines",
              linesClass: "split-line",
              charsClass: "split-char",
              autoSplit: true,
              onSplit: (self) => {
                gsap.set(self.chars, { transformPerspective: 600 });
                return gsap.from(self.chars, {
                  yPercent: 120,
                  rotateX: -60,
                  opacity: 0,
                  duration: 1,
                  ease: "power4.out",
                  stagger: { each: 0.028, from: "start" },
                  scrollTrigger: st(contactTitle),
                });
              },
            });
          }

          const circle = q(".contact-circle-wrap");
          if (circle) {
            gsap.from(circle, {
              scale: 0,
              opacity: 0,
              duration: 1.1,
              ease: "back.out(1.8)",
              scrollTrigger: st(contactTitle),
            });
            gsap.to(circle, {
              rotation: 360,
              ease: "none",
              scrollTrigger: {
                trigger: contact,
                start: "top bottom",
                end: "bottom top",
                scrub: 1.4,
              },
            });
          }

          const formLayout = q(".contact-form-layout");
          if (formLayout) {
            gsap
              .timeline({ scrollTrigger: st(formLayout) })
              .from(
                ".contact-intro > *",
                { x: -44, opacity: 0, duration: 1, stagger: 0.12 },
                0
              )
              .from("#contact-form", { y: 70, opacity: 0, scale: 0.97, duration: 1.1 }, 0.15)
              .from(
                "#contact-form .form-field, #contact-form .form-submit",
                { y: 22, opacity: 0, duration: 0.8, stagger: 0.09 },
                0.5
              );
          }

          const bottom = q(".contact-bottom");
          if (bottom) {
            gsap
              .timeline({ scrollTrigger: st(bottom, { start: "clamp(top 92%)" }) })
              .from(bottom, {
                clipPath: "inset(0 100% 0 0)",
                duration: 1.1,
                ease: "power3.inOut",
              })
              .from(
                ".contact-bottom .email, .contact-bottom .socials a",
                { y: 14, opacity: 0, duration: 0.7, stagger: 0.1 },
                0.4
              );
          }
        }

        /* ------------------------------------------------------------ */
        /* Footer                                                         */
        /* ------------------------------------------------------------ */
        const footer = q("footer");
        if (footer) {
          gsap.from("footer > *", {
            y: 16,
            opacity: 0,
            duration: 0.8,
            stagger: 0.1,
            scrollTrigger: st(footer, { start: "clamp(top 96%)" }),
          });
        }
      });

      // Reduced motion is handled in CSS: the initial hidden states are lifted
      // under `prefers-reduced-motion: reduce`, so nothing needs to run here.
      return () => mm.revert();
    },
    { scope }
  );

  return (
    <div ref={scope} className="page-motion">
      {children}
    </div>
  );
}
