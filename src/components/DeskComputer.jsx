/*
 * Desk Computer — an isometric late-90s desk computer you can use.
 * Ported to JSX from Pin UI: https://github.com/Rachit315/Pin-UI
 *
 * The drawing (~480KB of SVG) is fetched at mount from `src` so it stays out
 * of the bundle; desk-computer-engine.ts is everything it does: the keyboard
 * types into the CRT search box, the mouse drags on its pad, the CD loads,
 * and while nobody touches it the machine gives itself a silent tour.
 */

import { useEffect, useRef, useState } from "react";
import { mountDeskComputer } from "./desk-computer-engine";
import "./desk-computer.css";

const DeskComputer = ({
  theme = "light",
  sound = true,
  fill = false,
  src = "/library/desk-computer.svg",
}) => {
  const stageRef = useRef(null);
  const artRef = useRef(null);
  const statusRef = useRef(null);
  const engineRef = useRef(null);
  const soundRef = useRef(sound);
  soundRef.current = sound;
  const [state, setState] = useState("loading");

  /* fetch the drawing, inline it, and start the engine on it */
  useEffect(() => {
    const stage = stageRef.current;
    const art = artRef.current;
    const status = statusRef.current;
    if (!stage || !art || !status) return;
    const abort = new AbortController();
    let engine = null;
    setState("loading");
    fetch(src, { signal: abort.signal })
      .then((r) => {
        if (!r.ok) throw new Error(`${r.status} ${r.statusText}`);
        return r.text();
      })
      .then((markup) => {
        if (abort.signal.aborted) return;
        art.innerHTML = markup;
        const svg = art.querySelector("svg");
        if (!svg) throw new Error("the drawing has no <svg>");
        engine = mountDeskComputer({ stage, svg, status, muted: !soundRef.current });
        engineRef.current = engine;
        setState("ready");
      })
      .catch((err) => {
        if (abort.signal.aborted) return;
        console.error("[DeskComputer]", err);
        setState("failed");
      });
    return () => {
      abort.abort();
      engine?.destroy();
      engineRef.current = null;
      art.innerHTML = "";
    };
  }, [src]);

  useEffect(() => {
    engineRef.current?.setMuted(!sound);
  }, [sound]);

  /* the system assembles itself again under the new light, as the figure always has */
  const firstTheme = useRef(true);
  useEffect(() => {
    if (firstTheme.current) {
      firstTheme.current = false;
      return;
    }
    engineRef.current?.replayIntro();
  }, [theme]);

  return (
    <div className="pdesk" data-theme={theme} data-fill={fill || undefined} data-ready={state === "ready" || undefined}>
      <div
        ref={stageRef}
        className="pdesk__stage"
        tabIndex={0}
        role="group"
        aria-label="Desk computer. Type to search on its screen; Enter searches; Escape or the monitor's power button switches the screen. Drag the mouse; click the CD to load it."
      >
        <div ref={artRef} />
        <span ref={statusRef} className="pdesk__sr" role="status" aria-live="polite" />
      </div>

      {state === "failed" && (
        <p className="pdesk__error">The drawing couldn&rsquo;t be loaded from {src}.</p>
      )}
    </div>
  );
};

export default DeskComputer;
