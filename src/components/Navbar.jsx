import { useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useGSAP(() => {
    const navTween = gsap.timeline({
      scrollTrigger: {
        trigger: "nav",
        start: "bottom top",
      },
    });

    navTween.fromTo(
      "nav",
      { backgroundColor: "black", backdropFilter: "blur(0px)" },
      {
        backgroundColor: "#0f111550",
        backdropFilter: "blur(10px)",
        duration: 1,
        ease: "power1.inOut",
      },
    );
  });

  return (
    <nav className="">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <div className="flex items-center font-sans gap-2 max-sm:left-4">
          <a
            href="/"
            aria-label="Tony B. NYA home"
            className="inline-flex items-center justify-center text-decoration-none bg-black text-white rounded-full w-12 h-12 text-2xl"
          >
            <img src="/assets/images/profile.png" alt="" />
          </a>
        </div>
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-[#1d1d1d] rounded-lg md:hidden hover:text-white"
          aria-controls="navbar-default"
          aria-expanded={isMenuOpen}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5 text-[#1d1d1d]"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div
          className={`${
            isMenuOpen ? "block" : "hidden"
          } w-full md:block md:w-auto`}
          id="navbar-default"
        >
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0">
            <li>
              <a
                href="#intro"
                className="block py-2 px-3 lg:px-4 lg:py-2 md:px-4 md:py-2 text-white font-sans text-xl max-lg:text-lg hover:scale-105 rounded-md bg-[#050403] shadow-lg shadow-white/50 drop-shadow-xl"
                aria-current="page"
              >
                Intro
              </a>
            </li>
            <li>
              <a
                href="#skills"
                className="block py-2 px-3 lg:px-4 lg:py-2 md:px-4 md:py-2 text-white font-sans text-xl max-lg:text-lg hover:scale-105 rounded-md bg-[#050403] shadow-lg shadow-white/50 drop-shadow-xl"
              >
                Skills
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className="block py-2 px-3 lg:px-4 lg:py-2 md:px-4 md:py-2 text-white font-sans text-xl max-lg:text-lg hover:scale-105 rounded-md bg-[#050403] shadow-lg shadow-white/50 drop-shadow-xl"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#progression"
                className="block py-2 px-3 lg:px-4 lg:py-2 md:px-4 md:py-2 text-white font-sans text-xl max-lg:text-lg hover:scale-105 rounded-md bg-[#050403] shadow-lg shadow-white/50 drop-shadow-xl"
              >
                Progression
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="block py-2 px-3 lg:px-4 lg:py-2 md:px-4 md:py-2 text-white font-sans text-xl max-lg:text-lg hover:scale-105 rounded-md bg-[#050403] shadow-lg shadow-white/50 drop-shadow-xl"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
