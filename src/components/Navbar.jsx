import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    // <nav className="bg-[#0f1115]">
    <nav className="bg-black shadow-lg shadow-white/50 drop-shadow-xl">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <div className="flex items-center font-righteous gap-2 max-sm:left-4">
          <a
            href="/"
            className="inline-flex items-center justify-center text-decoration-none bg-black text-white rounded-full w-12 h-12 text-2xl"
          >
            <img src="/assets/images/portfolio.svg" alt="logo" />
          </a>
          <span className="text-gray-50 font-dm tracking-wider">Portfolio</span>
        </div>
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-[#4A5565] rounded-lg md:hidden hover:text-white"
          aria-controls="navbar-default"
          aria-expanded={isMenuOpen}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5 text-white"
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
                className="block py-2 px-3 text-white font-dm text-xl max-lg:text-lg hover:underline bg-transparent md:p-0"
                aria-current="page"
              >
                Intro
              </a>
            </li>
            <li>
              <a
                href="#skills"
                className="block py-2 px-3 text-white font-dm text-xl max-lg:text-lg hover:underline bg-transparent md:p-0"
              >
                Skills
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className="block py-2 px-3 text-white font-dm text-xl max-lg:text-lg hover:underline bg-transparent md:p-0"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#progression"
                className="block py-2 px-3 text-white font-dm text-xl max-lg:text-lg hover:underline bg-transparent md:p-0"
              >
                Progression
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="block py-2 px-3 text-white font-dm text-xl max-lg:text-lg hover:underline bg-transparent md:p-0"
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
