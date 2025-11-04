import { useState } from "react";

const Modal = ({ title, description }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button
        onClick={() => setIsOpen(true)}
        className="group flex justify-start items-center text-center tracking-wide gap-3 mr-auto ml-auto px-8 py-1 w-max text-base font-dm rounded-md text-white border-2 border-[#4A5565] bg-[#030313] hover:bg-black"
      >
        Details
      </button>

      {isOpen && (
        <div className="fixed inset-0 px-2 z-10 overflow-hidden flex items-center justify-center">
          <div
            onClick={() => setIsOpen(false)}
            className="absolute inset-0 bg-stone-900 bg-opacity-75 transition-opacity"
          ></div>

          <div className="bg-white rounded-md shadow-xl max-w-md w-full sm:w-96 md:w-1/2 lg:w-2/3 xl:w-1/3 z-50 max-h-[90vh] flex flex-col">
            <div className="bg-black text-white px-4 py-2 flex justify-center">
              <h2 className="text-lg font-bold font-dm tracking-wider">
                {title}
              </h2>
            </div>

            <div className="p-4 overflow-y-auto flex-grow">
              <p className="text-black font-mona tracking-normal text-justify">
                {description}
              </p>
            </div>

            <div className="border-t px-4 py-2 flex justify-end">
              <button
                onClick={() => setIsOpen(false)}
                className="group flex items-center text-center tracking-wider gap-3 mr-auto ml-auto px-8 py-3 w-max text-base font-bold rounded-md font-dm text-white bg-black hover:bg-black/90 transition-colors"
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
