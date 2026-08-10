import { useEffect, useState } from "react";

const Modal = ({ title, description }) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", onKeyDown);
    }

    return () => {
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [isOpen]);

  return (
    <div>
      <button
        onClick={() => setIsOpen(true)}
        className="group flex justify-start items-center text-center tracking-wide gap-3 mr-auto ml-auto px-6 py-2 w-max text-base font-sans rounded-md text-white border-2 border-[#1d1d1d] bg-[#050403] hover:bg-black"
      >
        Details
      </button>

      {isOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={title}
          className="fixed inset-0 px-2 z-10 overflow-hidden flex items-center justify-center"
        >
          <div
            onClick={() => setIsOpen(false)}
            className="absolute inset-0 bg-stone-900 bg-opacity-80 transition-opacity"
          ></div>

          <div className="bg-[#050403] border-2 border-[#1d1d1d] rounded-md shadow-xl max-w-md w-full sm:w-96 md:w-1/2 lg:w-2/3 xl:w-1/3 z-50 max-h-[90vh] flex flex-col">
            <div className="bg-black text-white px-4 py-2 flex justify-center border-b border-[#1d1d1d]">
              <h2 className="text-lg text-[#FFBA00]/70 font-normal font-sans tracking-normal hyphens-auto">
                {title}
              </h2>
            </div>

            <div className="p-4 overflow-y-auto flex-grow">
              <p className="text-gray-50 font-sans tracking-normal text-justify hyphens-auto tracking-tight leading-6">
                {description}
              </p>
            </div>

            <div className="border-t border-[#1d1d1d] px-4 py-2 flex justify-end">
              <button
                onClick={() => setIsOpen(false)}
                className="group flex items-center text-center tracking-normal gap-3 mr-auto ml-auto px-8 py-3 w-max text-base font-medium rounded-md font-sans text-white bg-black border-2 border-[#1d1d1d] hover:bg-black/90 transition-colors"
              >
                OK
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;
