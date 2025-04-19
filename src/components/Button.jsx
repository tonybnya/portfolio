const Button = ({ type, text, icon }) => {
  return (
    <button
      type={type}
      className="group flex items-center text-center tracking-wider gap-3 mr-auto ml-auto px-8 py-3 w-max text-base font-medium rounded-md font-righteous text-white bg-black hover:bg-black/50"
    >
      {text}
      {icon}
    </button>
  );
};

export default Button;
