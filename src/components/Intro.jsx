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
        {/* <h1 className="font-righteous text-5xl tracking-wider md:text-3xl max-sm:text-2xl text-transparent bg-clip-text bg-gradient-to-r from-black via-gray-500 to-black dark:from-white dark:via-gray-700 dark:to-white inline-block"> */}
        <h1 className="font-righteous text-5xl tracking-wider md:text-3xl max-sm:text-2xl text-white inline-block">
          <ReactTyped strings={["Tony B. NYA"]} typeSpeed={300} loop />
        </h1>
        {/* <h3 className="dark:text-gray-500 text-black font-righteous text-xl font-medium tracking-wider pt-2 md:text-sm max-sm:text-xs">
          Software Engineer{" "}
        </h3> */}
        <h3 className="text-gray-500 font-righteous text-xl font-medium tracking-wider pt-2 md:text-sm max-sm:text-xs">
          {/* Software Engineer{" "} */}
          <ReactTyped strings={["Software Engineer"]} typeSpeed={100} loop />
        </h3>
        {/* <p className="first-letter:text-7xl first-letter:font-bold first-letter:text-gray-900 dark:first-letter:text-gray-100 first-letter:mr-3 first-letter:float-left dark:text-zinc-50 text-black text-justify py-4 font-light text-sm tracking-wider max-sm:text-xs"> */}

        <p className="fade first-letter:text-7xl first-letter:font-bold first-letter:text-gray-100 first-letter:mr-3 first-letter:float-left text-zinc-50 text-justify py-4 font-light text-sm tracking-normal max-sm:text-xs">
          {/* I &apos;m a Software Engineer with a strong foundation in AI, Web */}
          {/* Development, and Software Development, holding certifications from */}
          {/* ALX, Sayna Academy, and the GitHub All In Open Source program. With a */}
          {/* Bachelor&apos;s in Computer Science and nearly a decade of experience */}
          {/* in Diplomacy and Public Administration, I bring a unique set of */}
          {/* technical expertise, project management, and problem-solving skills. */}
          {/* Passionate about leveraging technology to drive innovation, I&apos;m */}
          {/* good on solving complex challenges and embracing lifelong learning. */}
          I &apos;m a Full Stack Software Engineer with a strong focus on
          backend architecture, clean API design, and scalable frontend
          interfaces. I&apos;m specialized in Python (Flask, FastAPI, Django),
          JavaScript/TypeScript (Node.js, React, Angular), and modern DevOps
          practices — backed by hands-on experience leading and building
          production-grade systems for real-world applications.
          <br />
          <br />
          I&apos;m also passionate about DSA (Data Structures and Algorithms)
          and System Design — which gives me the ability to break down complex
          problems into clear, efficient solutions.
        </p>

        {/* <p className="fade first-letter:text-7xl first-letter:font-bold first-letter:text-gray-100 first-letter:mr-3 first-letter:float-left text-zinc-50 text-justify py-4 font-light text-sm tracking-wider max-sm:text-xs">
          As a skilled professional, I&apos;m a Software Engineer Graduated in
          ✨{" "}
          <span className="underline font-bold text-white decoration-pink-500 decoration-2">
            12-month Software Engineering
          </span>{" "}
          and ✨{" "}
          <span className="underline font-bold text-white decoration-pink-500 decoration-2">
            Artificial Intelligence Career Essentials
          </span>{" "}
          (AiCE) programs by{" "}
          <a
            target="_blank"
            className="underline font-semibold text-white decoration-indigo-500"
            href="https://www.alxafrica.com"
          >
            ALX
          </a>
          , in ✨{" "}
          <span className="underline font-bold text-white decoration-pink-500 decoration-2">
            6-month Web Development
          </span>{" "}
          by{" "}
          <a
            target="_blank"
            className="underline font-semibold text-white decoration-indigo-500"
            href="https://sayna.io"
          >
            Sayna Academy
          </a>
          , and ✨ the inaugural cohort of the{" "}
          <a
            target="_blank"
            className="underline font-semibold text-white decoration-indigo-500"
            href="https://github.blog/2023-10-09-skilling-african-developers-through-all-in-africa/"
          >
            GitHub All In Open Source
          </a>{" "}
          program. I&apos;m also holding a ✨{" "}
          <span className="underline font-bold text-white decoration-pink-500 decoration-2">
            Bachelor&apos;s Degree in Computer Science
          </span>{" "}
          and almost a ✨{" "}
          <span className="underline font-bold text-white decoration-pink-500 decoration-2">
            decade of experience/background in Diplomacy and Public
            Administration
          </span>
          . Skilled in &bull; Project Management &bull; Writing &bull;
          Problem-Solving &bull; Essential AI Career Tools, with a &bull; strong
          foundation in Software Development and a &bull;{" "}
          <span className="underline font-bold text-white decoration-pink-500 decoration-2">
            Soft Skills Certified
          </span>{" "}
          by{" "}
          <a
            target="_blank"
            className="underline font-semibold text-white decoration-indigo-500"
            href="https://www.helloelton.com"
          >
            Hello Elton
          </a>
          . I&apos;m passionated about leveraging technology to drive innovation
          and solve complex challenges, with growth and lifelong learning
          mindset.
        </p> */}

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
