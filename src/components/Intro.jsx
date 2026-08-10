import { ReactTyped } from "react-typed";
import profile from "/assets/images/profile.png";
import badge from "/assets/images/all-in-open-source-contributor.png";
import resume from "/assets/docs/cv_tonybnya.pdf";
import Button from "./Button";
import Social from "./Social";
import EvenHorizon from "./EventHorizon";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Intro = () => {
  useGSAP(() => {
    gsap.to(".personal", {
      ease: "power1.inOut",
      opacity: 1,
      y: 0,
    });

    gsap.fromTo(
      ".para",
      {
        opacity: 0,
        y: 50,
      },
      {
        opacity: 1,
        y: 0,
        delay: 1,
        stagger: 0.1,
      },
    );
  });

  return (
    <div
      id="intro"
      className="flex justify-center items-center max-lg:flex-col"
    >
      <div className="flex flex-col justify-center items-center py-6 w-3/4 mx-auto max-sm:w-full">
        <img
          src={profile}
          alt="Portrait of Tony B. NYA"
          className="inline-block lg:w-24 max-lg:w-16 pb-4 rounded-full shadow-[0_0_40px_-10px_rgba(255,255,255,0.35)]"
        />
        <h1 className="font-sans text-3xl sm:text-4xl lg:text-5xl font-medium tracking-normal text-white inline-block personal opacity-0 translate-y-10">
          <ReactTyped strings={["Tony B. NYA"]} typeSpeed={120} />
        </h1>
        <h3 className="font-neonderthaw text-2xl sm:text-3xl lg:text-4xl font-normal tracking-normal pt-3 text-[#FFBA00]/70 personal">
          <ReactTyped strings={["Backend Software Engineer"]} typeSpeed={80} />
        </h3>

        <p className="first-letter:text-5xl first-letter:font-bold first-letter:text-gray-100 first-letter:mr-2 first-letter:float-left text-zinc-50 text-justify py-4 font-medium font-sans text-sm tracking-normal max-sm:text-xs para hyphens-auto ">
          Backend Software Engineer building robust APIs and scalable systems
          for complex products. Specialized in Python (FastAPI, Flask, Django).
          <br />
          <br />
          • Experience across SaaS, Fintech, data, research, and business
          platforms
          <br />
          • Built a Glossary app for a PhD-level research system (Canada): 80%
          approval
          <br />• Results on Local Business apps: +20% bookings · +35%
          conversion
        </p>

        <div className="flex gap-2 py-4">
          <Social />
        </div>

        <div className="flex gap-2 max-lg:flex-col">
          <a href={resume} target="_blank">
            <Button
              type="button"
              text="Resume"
              cta
              icon={<i className="fa-solid fa-download"></i>}
            />
          </a>
          <a href="#contact">
            <Button
              type="button"
              text="Contact"
              variant="outline"
              cta
              icon={<i className="fa-solid fa-envelope"></i>}
            />
          </a>
        </div>

        <a
          href="https://www.credly.com/earner/earned/badge/d11a9129-997c-4a1d-8ec7-7ec66c08c477"
          target="_blank"
          aria-label="View All in Open Source Contributor badge on Credly"
        >
          <img
            src={badge}
            alt="All in Open Source Contributor badge"
            className="inline-block w-28 transition-transform duration-300 hover:scale-110"
          />
        </a>
      </div>
      <div className="flex flex-col gap-4 justify-center items-center w-full">
        <div className="w-full max-w-md lg:max-w-none h-[340px] sm:h-[420px] lg:h-[500px]">
          <EvenHorizon />
        </div>
      </div>
    </div>
  );
};

export default Intro;
