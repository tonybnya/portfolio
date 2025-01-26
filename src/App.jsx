import { motion } from "motion/react";

import Intro from "./components/Intro";
import Projects from "./components/Projects";
import Progression from "./components/Progression";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import SkillsSlider from "./components/SkillsSlider";
import Navbar from "./components/Navbar";

const App = () => {
  const animateElements = document.querySelectorAll(".animate");

  animateElements.forEach((element, index) => {
    setTimeout(() => {
      element.classList.add("show");
    }, index * 1000);
  });

  return (
    <motion.div
      className="bg-[#0f1115]"
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ amount: 0.8 }}
    >
      <Navbar />

      <div className="container mx-auto px-4 max-sm:px-6">
        <Intro className="animate" />
        {/* <hr className="border-[#4A5565] mb-12 animate" /> */}

        <SkillsSlider />
        {/* <hr className="border-[#4A5565] mb-12 animate" /> */}

        <Projects className="animate" />
        {/* <hr className="border-[#4A5565] mb-12 animate" /> */}

        <Progression className="animate" />
        {/* <hr className="border-[#4A5565] mb-12 animate" /> */}

        <Contact className="animate" />
        <hr className="border-2 border-[#4A5565] mb-12 animate" />

        <Footer className="animate" />
      </div>
    </motion.div>
  );
};

export default App;
