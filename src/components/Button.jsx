const Button = ({
  type,
  text,
  icon,
  onClick,
  disabled,
  variant = "primary",
  cta = false,
}) => {
  const styles =
    variant === "outline"
      ? `text-white border-2 border-[#4A5565] hover:bg-white/5 hover:border-[#4A5565]/70 transition-colors ${
          cta ? "!border-[#FFBA00]/70 hover:!border-[#FFBA00]" : ""
        }`
      : `text-white bg-[#050403] hover:bg-white/5 shadow-lg shadow-white/50 drop-shadow-xl border-2 border-transparent ${
          cta ? "!border-[#FFBA00]/70 hover:!border-[#FFBA00]" : ""
        }`;

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`group flex items-center text-center tracking-normal gap-3 mr-auto ml-auto px-8 py-3 w-max text-base font-medium rounded-md font-sans disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 ${styles}`}
    >
      {text}
      {icon}
    </button>
  );
};

export default Button;
