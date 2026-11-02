/* Scroll choreography for the Observatory. One reveal grammar everywhere
   (rise + de-blur, expo-out). Project and timeline items animate
   themselves when they mount after their data fetch; this component only
   covers what exists at mount. Reduced-motion keeps everything visible. */

import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const EASE = "expo.out";

const ScrollChoreo = () => {
  useGSAP(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    /* section title pill: machine pop */
    gsap.utils.toArray(".section-pill").forEach((pill) => {
      gsap.from(pill, {
        opacity: 0,
        y: 26,
        scale: 0.92,
        filter: "blur(6px)",
        duration: 0.9,
        ease: EASE,
        scrollTrigger: { trigger: pill, start: "top 88%", once: true },
      });
    });

    /* contact form rows shift up from blur */
    gsap.utils.toArray("#contact form > div").forEach((row, i) => {
      gsap.from(row, {
        opacity: 0,
        y: 24,
        filter: "blur(5px)",
        duration: 0.8,
        ease: EASE,
        delay: i * 0.04,
        scrollTrigger: { trigger: row, start: "top 92%", once: true },
      });
    });

    /* ScrollTrigger auto-refreshes on window load */
  });

  return null;
};

export default ScrollChoreo;
