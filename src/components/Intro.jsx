import React from "react";
import profile from "/assets/profile.png";
import badge from "/assets/all-in-open-source-contributor.png";
import resume from "/assets/CV-tonybnya.pdf";
import Button from "./Button";

function Intro() {
  return (
    <div className="flex flex-col justify-center items-center py-6 w-2/4 mx-auto max-sm:w-full">
      <img
        src={profile}
        alt="profile"
        className="inline-block w-48 max-sm:w-32 pb-4 shadow-transparent rounded-full"
      />
      <h1 className="dark:text-gray-50 font-righteous text-5xl tracking-wider md:text-3xl max-sm:text-2xl">
        Tony B. NYA
      </h1>
      <h3 className="dark:text-white font-righteous text-xl font-medium tracking-wider pt-2 md:text-sm max-sm:text-xs">
        ✨ Software Engineer | Freelancer | Open Sourcer ✨{" "}
      </h3>
      <p className="dark:text-zinc-50 text-justify py-4 font-light text-sm tracking-wide max-sm:text-xs">
        Dedicated and adaptable professional, I&apos;m a Software Engineer
        Graduated in ✨ 12-month Software Engineering Programs and ✨ Artificial
        Intelligence Career Essentials (AiCE) by{" "}
        <a
          target="_blank"
          className="underline"
          href="https://www.alxafrica.com"
        >
          ALX
        </a>
        , in ✨ 6-month Web Development by{" "}
        <a target="_blank" className="underline" href="https://sayna.io">
          Sayna Academy
        </a>
        , and ✨ the inaugural cohort of the{" "}
        <a
          target="_blank"
          className="underline"
          href="https://github.blog/2023-10-09-skilling-african-developers-through-all-in-africa/"
        >
          All In Open Source
        </a>{" "}
        Program by{" "}
        <a target="_blank" className="underline" href="https://github.com">
          GitHub
        </a>
        . I&apos;m also holding a ✨ Bachelor&apos;s Degree in Computer Science
        and almost a ✨ decade of experience/background in Diplomacy and Public
        Administration. Skilled in &bull; Project Management, &bull; Writing,
        &bull; Problem-Solving, &bull; Essential AI Career Tools, with a &bull;
        strong foundation in Software Development and a &bull; Soft Skills
        Certified by{" "}
        <a
          target="_blank"
          className="underline"
          href="https://www.helloelton.com"
        >
          Hello Elton
        </a>
        . I&apos;m passionated about leveraging technology to drive innovation
        and solve complex challenges, with growth and lifelong learning mindset.
      </p>

      <a href={resume} target="_blank">
        <Button
          type="button"
          text="Download My Resume"
          icon={<i className="fa-solid fa-download"></i>}
        />
      </a>

      <a
        href="https://www.credly.com/earner/earned/badge/d11a9129-997c-4a1d-8ec7-7ec66c08c477"
        target="_blank"
      >
        <img src={badge} alt="" className="inline-block w-28" />
      </a>
    </div>
  );
}

export default Intro;
