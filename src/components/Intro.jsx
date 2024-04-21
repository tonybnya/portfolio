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
        className="inline-block w-48 max-sm:w-32 pb-4 shadow-inner shadow-transparent saturate-100 rounded-full"
      />
      <h1 className="dark:text-gray-50 font-righteous text-5xl tracking-wider md:text-3xl max-sm:text-2xl">
        Tony B. NYA
      </h1>
      <h3 className="dark:text-white font-righteous text-xl font-medium tracking-wider pt-2 md:text-sm max-sm:text-xs">
        Software Engineer | Web Developer | Open Sourcer{" "}
      </h3>
      <p className="dark:text-zinc-50 text-justify py-4 font-light text-sm tracking-wide max-sm:text-xs">
        Dedicated and adaptable professional with a Bachelor Degree in Computer
        Science and almost a decade of experience/background in Diplomacy and
        Administration. Graduated from the 12-month Software Engineering Program
        with{" "}
        <a className="underline" href="https://www.alxafrica.com">
          ALX
        </a>
        , 6-month Web Development by{" "}
        <a className="underline" href="https://sayna.io">
          Sayna Academy
        </a>
        , and the inaugural cohort of the{" "}
        <a
          className="underline"
          href="https://github.blog/2023-10-09-skilling-african-developers-through-all-in-africa/"
        >
          All In Open Source
        </a>{" "}
        Program by GitHub. Skilled in project management, writing,
        problem-solving, essential AI career tools, with a strong foundation in
        Software Development and a Soft Skills Certified by{" "}
        <a className="underline" href="https://www.helloelton.com">
          Hello Elton
        </a>
        . Passionate about leveraging technology to drive innovation and solve
        complex challenges.
      </p>

      <a href={resume} target="_blank">
        <Button btn="Download My Resume" />
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