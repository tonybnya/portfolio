import Modal from "./Modal";

const ProgressionItem = ({ year, timeline, duration, details }) => {
  return (
    <li className="mb-10 ml-4">
      <span
        aria-hidden="true"
        className="absolute w-3 h-3 bg-black rounded-full mt-1.5 -left-1.5 border border-[#4A5565]"
      ></span>
      <div className="flex flex-wrap sm:flex-nowrap gap-x-3 gap-y-1 flex-row items-center justify-start text-xs">
        <span className="inline-block px-2 py-0.5 text-[0.65rem] font-semibold font-mono text-white bg-black rounded-md">
          {year}
        </span>
        <h3 className="text-xs sm:text-sm font-mono text-[#FFBA00] whitespace-nowrap">{timeline}</h3>
        <div className="my-1 text-[0.65rem] sm:text-xs font-mono flex items-center gap-1 leading-none text-stone-400">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-3.5 h-3.5"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
          </svg>

          {duration}
        </div>
      </div>
      <div className="pt-4 flex justify-start">
        <Modal title={timeline} description={details} />
      </div>
    </li>
  );
};

export default ProgressionItem;
