import { useRef } from "react";
import Modal from "./Modal";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const ProgressionItem = ({ year, timeline, duration, details }) => {
  const liRef = useRef(null);
  const dotRef = useRef(null);

  /* each row rises from the left and its dot ignites once */
  useGSAP(
    () => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
      gsap.from(liRef.current, {
        opacity: 0,
        x: -26,
        filter: "blur(5px)",
        duration: 0.9,
        ease: "expo.out",
        scrollTrigger: { trigger: liRef.current, start: "top 90%", once: true },
      });
      gsap.fromTo(
        dotRef.current,
        { backgroundColor: "rgba(0, 0, 0, 0)", borderColor: "rgba(74, 85, 101, 0.4)" },
        {
          backgroundColor: "rgba(255, 186, 0, 0.9)",
          borderColor: "rgba(255, 186, 0, 0.9)",
          boxShadow: "0 0 10px rgba(255, 186, 0, 0.5)",
          duration: 0.5,
          delay: 0.5,
          ease: "power2.out",
          scrollTrigger: { trigger: liRef.current, start: "top 90%", once: true },
        },
      );
    },
    { dependencies: [] },
  );

  return (
    <li ref={liRef} className="mb-10 ml-4">
      <span
        ref={dotRef}
        aria-hidden="true"
        className="absolute w-3 h-3 bg-black rounded-full mt-1.5 -left-1.5 border-2 border-[#4A5565]/40"
      ></span>
      <div className="flex flex-wrap sm:flex-nowrap gap-x-3 gap-y-1 flex-row items-center justify-start text-xs">
        <span className="inline-block px-2 py-0.5 text-[0.65rem] font-semibold font-mono text-white bg-black rounded-md">
          {year}
        </span>
        <h3 className="text-xs sm:text-sm font-sans font-medium text-[#FFBA00]/70 whitespace-nowrap">
          {timeline}
        </h3>
        <div className="my-1 text-[0.65rem] sm:text-xs font-mono flex items-center gap-1 leading-none text-stone-400">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-3.5 h-3.5"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
          </svg>

          {duration}
        </div>
      </div>
      <div className="pt-4 flex justify-start">
        <Modal title={timeline} description={details} />
      </div>
    </li>
  );
};

export default ProgressionItem;
