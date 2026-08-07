import Intro from "../components/Intro";
import SkillsSlider from "../components/SkillsSlider";
import Projects from "../components/Projects";
import Progression from "../components/Progression";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Button from "../components/Button";

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

      <div className="flex justify-end pt-6 pb-4">
        <Button
          type="button"
          text="Back to Top"
          icon={<i className="fa-solid fa-arrow-up"></i>}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        />
      </div>
      <hr className="border-t border-[#4A5565]" />
    </div>
  );
};

export default Home;