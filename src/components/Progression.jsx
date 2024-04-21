import Title from "./Title";
import progression from "../data/progression";
import ProgressionItem from "./ProgressionItem";

function Progression() {
  return (
    <div className="dark:text-gray-50">
      <Title>Progression</Title>
      <div className="flex flex-col md:flex-row justify-center my-20">
        <div className="w-full md:w-7/12">
          {progression.map((step, index) => (
            <ProgressionItem
              key={index}
              year={step.year}
              milestone={step.milestone}
              duration={step.duration}
              details={step.details}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Progression;
