/* Deep-space backdrop for the Observatory: a few hundred stars, one
   amember of telemetry sparks, pointer parallax. Canvas 2D is enough at
   this count and pauses with the tab. */

import { useEffect, useRef } from "react";

const STAR_COUNT = 240;
const SPARK_COUNT = 6;
const DPR_CAP = 1.5;

const Starfield = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let stars = [];
    let width = 0;
    let height = 0;
    let raf = 0;
    let running = !reduced;
    const pointer = { x: 0.5, y: 0.5 };
    const drift = { x: 0.5, y: 0.5 };

    const seed = () => {
      stars = [];
      const count = Math.round(
        (STAR_COUNT * Math.min(width, 1920)) / 1920 || STAR_COUNT,
      );
      for (let i = 0; i < count; i++) {
        const depth = Math.random();
        stars.push({
          x: Math.random() * width,
          y: Math.random() * height,
          r: 0.4 + depth * 1.1,
          a: 0.25 + Math.random() * 0.55,
          phase: Math.random() * Math.PI * 2,
          speed: 0.4 + Math.random() * 0.9,
          depth: 0.25 + depth * 0.75,
        });
      }
      for (let i = 0; i < SPARK_COUNT; i++) {
        stars.push({
          x: Math.random() * width,
          y: Math.random() * height,
          r: 1.4,
          a: 0.75,
          phase: Math.random() * Math.PI * 2,
          speed: 0.8,
          depth: 0.8,
          spark: true,
        });
      }
    };

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, DPR_CAP);
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      seed();
      if (reduced) draw(0);
    };

    const draw = (t) => {
      ctx.clearRect(0, 0, width, height);
      const px = (drift.x - 0.5) * 24;
      const py = (drift.y - 0.5) * 24;
      for (const s of stars) {
        const twinkle = reduced
          ? 1
          : 0.72 + 0.28 * Math.sin(t * 0.001 * s.speed + s.phase);
        const ox = px * s.depth;
        const oy = py * s.depth;
        ctx.beginPath();
        ctx.arc(s.x + ox, s.y + oy, s.r, 0, Math.PI * 2);
        if (s.spark) {
          ctx.fillStyle = `rgba(255, 186, 0, ${s.a * twinkle})`;
        } else {
          ctx.fillStyle = `rgba(255, 255, 255, ${s.a * twinkle})`;
        }
        ctx.fill();
      }
    };

    const tick = (t) => {
      drift.x += (pointer.x - drift.x) * 0.04;
      drift.y += (pointer.y - drift.y) * 0.04;
      draw(t);
      raf = requestAnimationFrame(tick);
    };

    const onPointer = (e) => {
      pointer.x = e.clientX / window.innerWidth;
      pointer.y = e.clientY / window.innerHeight;
    };

    const onVisibility = () => {
      if (reduced) return;
      if (document.hidden) {
        cancelAnimationFrame(raf);
        running = false;
      } else if (!running) {
        running = true;
        raf = requestAnimationFrame(tick);
      }
    };

    resize();
    if (reduced) draw(0);
    else raf = requestAnimationFrame(tick);

    window.addEventListener("resize", resize);
    window.addEventListener("pointermove", onPointer);
    document.addEventListener("visibilitychange", onVisibility);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", onPointer);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, []);

  return (
    <>
      <canvas ref={canvasRef} className="atmo-starfield" aria-hidden="true" />
      <div className="atmo-vignette" aria-hidden="true" />
    </>
  );
};

export default Starfield;
