/* Console chrome: the fixed instrument layer — scroll progress under the
   nav, a micro telemetry HUD, and the halo cursor. All additive light on
   top of an untouched DOM; nothing here intercepts input. */

import { useEffect, useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import "../styles/atmosphere.css";

const SECTIONS = ["intro", "skills", "projects", "progression", "contact"];

const pad = (n) => String(n).padStart(2, "0");

const ConsoleChrome = () => {
  const barRef = useRef(null);
  const clockRef = useRef(null);
  const sectionRef = useRef(null);
  const scrollRef = useRef(null);
  const glowRef = useRef(null);
  const dotRef = useRef(null);

  /* progress bar, scrubbed to the document */
  useGSAP(() => {
    gsap.fromTo(
      barRef.current,
      { scale: "0 1" },
      {
        scale: "1 1",
        ease: "none",
        scrollTrigger: { start: 0, end: "max", scrub: 0.4 },
      },
    );
  }, { dependencies: [] });

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    /* UTC clock — the console is always on */
    const setClock = () => {
      const d = new Date();
      clockRef.current.textContent = `${pad(d.getUTCHours())}:${pad(
        d.getUTCMinutes(),
      )}:${pad(d.getUTCSeconds())} UTC`;
    };
    setClock();
    const clockId = setInterval(setClock, 1000);

    /* which section the user is standing in */
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const pct = max > 0 ? Math.round((window.scrollY / max) * 100) : 0;
      if (scrollRef.current) scrollRef.current.textContent = `${pct}%`;
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting && sectionRef.current) {
            sectionRef.current.textContent = entry.target.id.toUpperCase();
          }
        }
      },
      { rootMargin: "-40% 0px -55% 0px" },
    );
    SECTIONS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    /* halo cursor, desktop pointers only */
    const finePointer =
      window.matchMedia("(pointer: fine)").matches && !reduced;
    let cursorRaf = 0;
    let mouse = null;
    let glow = { x: -200, y: -200 };
    let dot = { x: -200, y: -200 };
    let active = false;
    let shown = false;

    const moveCursor = () => {
      glow.x += (mouse.x - glow.x) * 0.1;
      glow.y += (mouse.y - glow.y) * 0.1;
      dot.x += (mouse.x - dot.x) * 0.45;
      dot.y += (mouse.y - dot.y) * 0.45;
      if (glowRef.current) {
        glowRef.current.style.transform = `translate3d(${glow.x}px, ${glow.y}px, 0)`;
        glowRef.current.style.opacity = shown ? "1" : "0";
        glowRef.current.dataset.active = active;
      }
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${dot.x}px, ${dot.y}px, 0)`;
        dotRef.current.style.opacity = shown ? "0.9" : "0";
      }
      cursorRaf = requestAnimationFrame(moveCursor);
    };

    const onMove = (e) => {
      mouse = { x: e.clientX, y: e.clientY };
      if (!shown) {
        shown = true;
        glow.x = dot.x = e.clientX;
        glow.y = dot.y = e.clientY;
      }
      active = Boolean(e.target.closest?.("a, button, [role='button'], input, textarea"));
      if (!cursorRaf) cursorRaf = requestAnimationFrame(moveCursor);
    };
    const onLeave = () => {
      shown = false;
    };

    if (finePointer) {
      window.addEventListener("mousemove", onMove, { passive: true });
      document.documentElement.addEventListener("mouseleave", onLeave);
    }

    return () => {
      clearInterval(clockId);
      window.removeEventListener("scroll", onScroll);
      observer.disconnect();
      cancelAnimationFrame(cursorRaf);
      window.removeEventListener("mousemove", onMove);
      document.documentElement.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return (
    <>
      <div ref={barRef} className="atmo-progress" aria-hidden="true" />
      <div className="atmo-hud" aria-hidden="true">
        <span>
          SYS.OBS <strong ref={clockRef}>--:--:-- UTC</strong>
        </span>
        <span>
          SEC.LOADED <strong ref={sectionRef}>INTRO</strong>
        </span>
        <span>
          SCROLL.PCT <strong className="hud-accent" ref={scrollRef}>0%</strong>
        </span>
      </div>
      <div ref={glowRef} className="atmo-cursor-glow" aria-hidden="true" />
      <div ref={dotRef} className="atmo-cursor-dot" aria-hidden="true" />
    </>
  );
};

export default ConsoleChrome;
