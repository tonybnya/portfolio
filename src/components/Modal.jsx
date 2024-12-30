import React, { useState } from "react";

const Modal = ({ title, description }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex justify-center items-center h-screen">
      <button
        onClick={() => setIsOpen(true)}
        className="group flex items-center text-center tracking-wide gap-3 mr-auto ml-auto px-8 py-3 w-max text-base font-medium rounded-md font-righteous text-white bg-gradient-to-r from-blue-500 to-pink-500 drop-shadow-md"
      >
        Details
        <div className="absolute inset-0 h-full w-full scale-0 rounded-md transition-all duration-300 group-hover:scale-100 group-hover:bg-white/30"></div>
      </button>

      {isOpen && (
        <div
          className="fixed inset-0 px-2 z-10 overflow-hidden flex items-center justify-center"
        >
          <div
            onClick={() => setIsOpen(false)}
            className="absolute inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
          ></div>

          <div
            className="bg-white rounded-md shadow-xl overflow-hidden max-w-md w-full sm:w-96 md:w-1/2 lg:w-2/3 xl:w-1/3 z-50 transform transition-transform duration-300"
          >
            <div className="bg-gradient-to-r from-blue-500 to-pink-500 text-white px-4 py-2 flex justify-between">
              <h2 className="text-lg font-semibold">{title}</h2>
            </div>

            <div className="p-4">
              <p>{description}</p>
            </div>

            <div className="border-t px-4 py-2 flex justify-end">
              <button
                onClick={() => setIsOpen(false)}
                className="group flex items-center text-center tracking-wide gap-3 mr-auto ml-auto px-8 py-3 w-max text-base font-medium rounded-md font-righteous text-white bg-gradient-to-r from-blue-500 to-pink-500 drop-shadow-md"
              >
                OK
                <div className="absolute inset-0 h-full w-full scale-0 rounded-md transition-all duration-300 group-hover:scale-100 group-hover:bg-white/30"></div>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;