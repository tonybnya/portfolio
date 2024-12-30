import React from "react";

const ProjectItem = ({ image, title, description, tags, liveUrl, sourceUrl }) => {
  return (
    <div className="border-2 border-stone-900 dark:border-white rounded-md overflow-hidden">
      <img
        src={image}
        alt={title + "image"}
        className="w-full h-36 md:h-48 object-cover"
      />
      <div className="w-full p-4 dark:text-gray-50 text-black">
        <h3 className="text-lg md:text-xl mb-2 md:mb-3 font-righteous tracking-wide">
          {title}
        </h3>
        <p className="text-justify mb-2 font-light tracking-wide">{description}</p>
        <p className="flex flex-wrap gap-2 flex-row items-center justify-start mb-4 text-xs md:text-sm">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="inline-block px-2 py-1 font-semibold border-2 border-stone-900 dark:border-gray-50 rounded-md"
            >
              {tag}
            </span>
          ))}
        </p>
        <div className="flex gap-3">
          <a href={liveUrl} target="_blank">
            Live <i class="fa-solid fa-square-up-right"></i>
          </a>
          <a href={sourceUrl} target="_blank">
            Source <i className="fa-brands fa-github"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProjectItem;