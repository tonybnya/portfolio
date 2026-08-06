import Intro from "../components/Intro";
import SkillsSlider from "../components/SkillsSlider";
import Projects from "../components/Projects";
import Progression from "../components/Progression";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="container mx-auto px-4 max-sm:px-6">
      <Intro />
      <SkillsSlider />
      <Projects />
      <Progression />
      <Contact />

      <hr className="border-t border-[#4A5565] mb-12" />

      <Footer />
    </div>
  );
};

export default Home;