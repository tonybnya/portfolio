const Button = ({ type, text, icon }) => {
  return (
    <button
      type={type}
      className="group flex items-center text-center tracking-wider gap-3 mr-auto ml-auto px-8 py-3 w-max text-base font-medium rounded-md font-righteous text-white bg-black hover:bg-black/50"
    >
      {text}
      {icon}
      {/* <div className="absolute inset-0 h-full w-full scale-0 rounded-md transition-all duration-300 group-hover:scale-100 group-hover:bg-white/30"></div> */}
    </button>
  );
};

export default Button;
