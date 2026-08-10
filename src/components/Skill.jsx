import { cloneElement } from "react";

const Skill = ({ svg, title }) => {
  return (
    <div className="flex flex-col justify-center items-center max-w-sm p-6 m-6 rounded-lg border-2 border-[#1d1d1d] bg-[#050403] hover:bg-[#030313]">
      <div className="w-20 h-20 p-2 flex justify-center items-center">
        {cloneElement(svg, { className: "w-full h-full object-contain" })}
      </div>
      <p className="font-normal font-mono text-white">{title}</p>
    </div>
  );
};

export default Skill;
