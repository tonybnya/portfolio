import React from "react";

const Skill = ({ svg, title }) => {
  return (
    <div className="flex flex-col justify-center items-center max-w-sm p-6 m-6 rounded-lg shadow hover:bg-gray-500 bg-black dark:bg-gray-800 dark:hover:bg-gray-700">
      <div className="w-20 h-20 p-2 flex justify-center items-center">
        {svg}
      </div>
      <p className="font-normal font-righteous text-white dark:text-gray-400">{title}</p>
    </div>
  );
};

export default Skill;
