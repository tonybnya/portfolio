import React from "react";

function ProgressionItem({ year, timeline, duration, details }) {
  return (
    <ol className="flex flex-col md-flex-row relative border-l border-stone-900 dark:border-white">
      <li className="mb-10 ml-4">
        <div className="absolute w-3 h-3 bg-stone-200 rounded-full mt-1.5 -left-1.5 border border-white" />
        <p className="flex flex-wrap gap-4 flex-row items-center justify-start text-xs md:text-sm">
          <span className="inline-block px-2 py-1 font-semibold text-white bg-stone-900 dark:bg-black rounded-md">
            {year}
          </span>
          <h3 className="text-md font-semibold text-stone-900 dark:text-white">
            {timeline}
          </h3>
          <div className="my-1 text-sm font-normal flex items-center gap-1 leading-none text-stone-400">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>

            {duration}
          </div>
        </p>
        <p className="my-2 text-base text-justify font-normal text-stone-500">
          {details}
        </p>
      </li>
    </ol>
  );
}

export default ProgressionItem;
