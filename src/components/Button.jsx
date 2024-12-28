import React from "react";

const Button = ({ type, text, icon }) => {
  return (
    <button
      type={type}
      className="flex items-center text-center gap-3 mr-auto ml-auto px-8 py-3 w-max text-base font-medium rounded-md font-righteous text-white bg-gradient-to-r from-blue-500 to-pink-500 drop-shadow-md"
    >
      {text}
      {icon}
    </button>
  );
};

export default Button;
