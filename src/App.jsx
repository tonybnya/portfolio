import { useEffect, useState } from "react";
import Intro from "./components/Intro";
import Projects from "./components/Projects";
import Progression from "./components/Progression";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  const [theme, setTheme] = useState(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }, []);

  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const sun = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-6 h-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
      />
    </svg>
  );

  const moon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="white"
      className="w-6 h-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
      />
    </svg>
  );

  return (
    <div className="dark:bg-stone-900">
      <div className="flex items-center justify-between p-4">
        <div className="flex items-center font-righteous gap-2 max-sm:left-4">
          <a
            href="#"
            className="inline-flex items-center justify-center text-decoration-none bg-black dark:bg-gray-50 text-white dark:text-black rounded-full w-12 h-12 text-2xl"
          >
            P
          </a>
          <span className="dark:text-gray-50">Portfolio</span>
        </div>
        <button
          type="button"
          onClick={handleThemeSwitch}
          className="p-2 text-white bg-black rounded-md dark:bg-red-500 max-sm:right-4"
        >
          {theme === "dark" ? sun : moon}
        </button>
      </div>
      <div className="container mx-auto px-4 max-sm:px-6">
        <Intro />
        <hr className="border-1 mb-12" />
        <Projects />
        <hr className="border-1 mb-12" />
        <Progression />
        <hr className="border-1 mb-12" />
        <Contact />
        <hr className="border-1 mb-12" />
        <Footer />
      </div>
    </div>
  );
}

export default App;
