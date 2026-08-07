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

      <button
        type="button"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="Back to top of page"
        className="fixed bottom-6 right-6 z-50 w-12 h-12 inline-flex items-center justify-center rounded-full bg-black border-2 border-[#FFBA00] text-[#FFBA00] shadow-lg shadow-[#FFBA00]/40 hover:scale-110 hover:bg-black/60 transition-transform cursor-pointer"
      >
        <i className="fa-solid fa-arrow-up text-lg" aria-hidden="true"></i>
      </button>
    </div>
  );
};

export default Home;