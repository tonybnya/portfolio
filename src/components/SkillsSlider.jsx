import Marquee from "react-fast-marquee";
import Skill from "./Skill";
import skills from "../constants/index.js";
import Title from "./Title";

const SkillsSlider = () => {
  return (
    <div
      id="skills"
      className="mb-20 flex flex-col justify-center items-center gap-4 text-black dark:text-white"
    >
      <Title>Skills</Title>
      <Marquee>
        {skills.map((skill) => (
          <Skill
            key={skill.id}
            svg={<img src={skill.svg} alt={`${skill.name} logo`} />}
            title={skill.name}
          />
        ))}
      </Marquee>
    </div>
  );
};

export default SkillsSlider;
