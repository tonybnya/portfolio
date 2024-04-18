import React from "react";

const Button = ({ btn }) => {
  return (
    <button
      type="button"
      className="text-center mr-auto ml-auto inline-block px-8 py-3 w-max text-base font-medium rounded-md font-righteous text-white bg-gradient-to-r from-blue-500 to-pink-500 drop-shadow-md"
    >
      {btn}
    </button>
  );
};

export default Button;
