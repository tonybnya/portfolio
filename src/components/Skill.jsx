import React from "react";

const Skill = ({ svg, title }) => {
  return (
    <div className="flex flex-col justify-center items-center max-w-sm p-6 m-6 drop-shadow-blue dark:drop-shadow-custom bg-dark border border-gray-200 rounded-lg shadow hover:bg-gray-500 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
      <div className="w-20 h-20 p-2 flex justify-center items-center">
        {svg}
      </div>
      <p className="font-normal font-righteous text-white dark:text-gray-400">{title}</p>
    </div>
  );
};

export default Skill;
