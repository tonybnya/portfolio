import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { ReactTyped } from "react-typed";
import profile from "/assets/images/profile.png";
import badge from "/assets/images/all-in-open-source-contributor.png";
import resume from "/assets/docs/CV-tonybnya.pdf";
import Button from "./Button";
import Social from "./Social";

const Intro = () => {
  return (
    <div
      id="intro"
      className="flex justify-center items-center max-lg:flex-col"
    >
      <div className="flex flex-col justify-center items-center py-6 w-3/4 mx-auto max-sm:w-full">
        <img
          src={profile}
          alt="profile"
          className="inline-block lg:w-24 max-lg:w-16 pb-4 shadow-transparent drop-shadow-custom animate-pulse rounded-full"
        />
        <h1 className="font-dm text-5xl tracking-wider md:text-3xl max-sm:text-2xl text-white inline-block">
          <ReactTyped strings={["Tony B. NYA"]} typeSpeed={300} loop />
        </h1>
        <h3 className="text-gray-500 font-mona text-xl font-medium tracking-wider pt-2 md:text-sm max-sm:text-xs">
          <ReactTyped strings={["Software Engineer"]} typeSpeed={100} loop />
        </h3>

        <p className="fade first-letter:text-7xl first-letter:font-bold first-letter:text-gray-100 first-letter:mr-3 first-letter:float-left text-zinc-50 text-justify py-4 font-light font-mona text-sm tracking-normal max-sm:text-xs">
          I &apos;m a Full Stack Software Engineer with a strong focus on
          backend architecture, clean API design, and scalable frontend
          interfaces. I&apos;m specialized in JavaScript/TypeScript (Node.js,
          React, Angular), Python (Flask, FastAPI, Django), and modern DevOps
          practices — backed by hands-on experience leading and building
          production-grade systems for real-world applications.
          <br />
          <br />
          I&apos;m also passionate about DSA (Data Structures and Algorithms)
          and System Design — which gives me the ability to break down complex
          problems into clear, efficient solutions.
        </p>

        <div className="flex gap-2 py-4">
          <Social />
        </div>

        <div className="flex gap-2 max-lg:flex-col">
          <a href={resume} target="_blank">
            <Button
              type="button"
              text="Resume"
              icon={<i className="fa-solid fa-download animate-bounce"></i>}
            />
          </a>
          <a href="https://self.so/tonybnya" target="_blank">
            <Button
              type="button"
              text="Profile → Page"
              icon={<i className="fas fa-user animate-bounce"></i>}
            />
          </a>
          <a href="#contact">
            <Button
              type="button"
              text="Contact"
              icon={<i className="fa-solid fa-envelope animate-bounce"></i>}
            />
          </a>
        </div>

        <a
          href="https://www.credly.com/earner/earned/badge/d11a9129-997c-4a1d-8ec7-7ec66c08c477"
          target="_blank"
        >
          <img
            src={badge}
            alt=""
            className="inline-block w-28 animate-pulse hover:animate-none hover:scale-150"
          />
        </a>
      </div>
      <div className="flex flex-col gap-4 justify-center items-center w-full">
        <DotLottieReact
          src="https://lottie.host/45e3d71a-c783-4c04-84d7-a529f667c8f8/4zdFKQb256.lottie"
          loop
          autoplay
          width={500}
          height={500}
        />
      </div>
    </div>
  );
};

export default Intro;
