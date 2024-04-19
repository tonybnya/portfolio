import React from "react";

function ProjectItem({ imgUrl, title, description, stack, link, source }) {
  return (
    <div className="border-2 border-stone-900 dark:border-white rounded-md overflow-hidden">
      <img
        src={imgUrl}
        alt="portfolio"
        className="w-full h-36 md:h-48 object-cover"
      />
      <div className="w-full p-4 dark:text-gray-50">
        <h3 className="text-lg md:text-xl mb-2 md:mb-3 font-righteous">
          {title}
        </h3>
        <p className="text-justify mb-2 font-light">{description}</p>
        <p className="flex flex-wrap gap-2 flex-row items-center justify-start mb-4 text-xs md:text-sm">
          {stack.map((item) => (
            <span className="inline-block px-2 py-1 font-semibold border-2 border-stone-900 dark:border-gray-50 rounded-md">
              {item}
            </span>
          ))}
        </p>
        <div className="flex gap-3">
          <a href={link} target="_blank">
            <i className="fa-solid fa-globe"></i> Live
          </a>
          <a href={source} target="_blank">
            <i className="fa-brands fa-github"></i> Source
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProjectItem;

