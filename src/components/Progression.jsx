import { useEffect, useState } from "react";

import ProgressionItem from "./ProgressionItem";
// import Spinner from "./Spinner";
import SkeletonProgression from "./SkeletonProgression";
import Title from "./Title";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

const Progression = () => {
  const [timelines, setTimelines] = useState([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const API_TIMELINES_URL = `${import.meta.env.BASE_URL}data/timelines.json`;
  const API_OPTIONS = {
    method: "GET",
    headers: {
      accept: "application/json",
    },
  };

  const fetchTimelines = async () => {
    setIsLoading(true);
    setError("");

    try {
      const response = await fetch(API_TIMELINES_URL, API_OPTIONS);
      if (!response.ok) {
        throw new Error("Failed to fetch timelines");
      }
      const data = await response.json();
      if (!data || data.length === 0) {
        setError("No timelines found.");
        setTimelines([]);
        return;
      }
      setTimelines(data);
    } catch (error) {
      console.error(`Error fetching timelines: ${error}`);
      setError("Error fetching timelines. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchTimelines();
  }, []);

  /* the rail ignites from the top only once the real rows exist */
  useGSAP(
    () => {
      if (!timelines.length) return;
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
      gsap.fromTo(
        ".progression-rail",
        { scaleY: 0 },
        {
          scaleY: 1,
          ease: "none",
          scrollTrigger: {
            trigger: ".progression-track",
            start: "top 78%",
            end: "bottom 55%",
            scrub: 0.5,
          },
        },
      );
      ScrollTrigger.refresh();
    },
    { dependencies: [timelines.length] },
  );

  return (
    <div id="progression" className="text-gray-50">
      <Title>Progression</Title>
      <div className="flex flex-col md:flex-row justify-center my-20">
        <div className="relative w-full md:w-7/12 progression-track">
          {/* the track is shared by skeleton and list states */}
          <span
            aria-hidden="true"
            className="absolute left-0 top-0 bottom-0 w-[2px] bg-[#1d1d1d]"
          />
          <span
            aria-hidden="true"
            className="progression-rail absolute left-0 top-0 bottom-0 w-[2px] origin-top bg-gradient-to-b from-[#FFBA00]/90 via-white/70 to-transparent"
            style={{ transform: "scaleY(0)" }}
          />
          {isLoading ? (
            <SkeletonProgression />
          ) : error ? (
            <p className="text-red-500 font-sans font-semibold tracking-wide flex justify-center">
              {error}
            </p>
          ) : (
            <ol className="flex flex-col">
              {timelines.map((step) => (
                <ProgressionItem
                  key={step._id}
                  year={step.year}
                  timeline={step.timeline}
                  duration={step.duration}
                  details={step.details}
                />
              ))}
            </ol>
          )}
        </div>
      </div>
    </div>
  );
};

export default Progression;
