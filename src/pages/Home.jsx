import { motion } from "motion/react";

import Intro from "../components/Intro";
import SkillsSlider from "../components/SkillsSlider";
import Projects from "../components/Projects";
import Progression from "../components/Progression";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const Home = () => {
  const animateElements = document.querySelectorAll(".animate");

  animateElements.forEach((element, index) => {
    setTimeout(() => {
      element.classList.add("show");
    }, index * 1000);
  });

  return (
    <motion.div
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ amount: 0.8 }}
    >
      <div className="container mx-auto px-4 max-sm:px-6">
        <Intro className="animate" />
        <SkillsSlider />
        <Projects className="animate" />
        <Progression className="animate" />
        <Contact className="animate" />

        <hr className="border-t border-[4a5565] mb-12 animate" />

        <Footer className="animate" />
      </div>
    </motion.div>
  );
};

export default Home;
