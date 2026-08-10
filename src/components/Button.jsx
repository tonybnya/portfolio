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
      ? `text-white border-2 ${cta ? "border-[#1d1d1d]" : "border-[#1d1d1d]"} hover:bg-white/5`
      : `text-white bg-[#050403] hover:bg-white/5 shadow-lg shadow-white/50 drop-shadow-xl ${cta ? "border-2 border-[#1d1d1d]" : ""}`;

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`group flex items-center text-center tracking-normal gap-3 mr-auto ml-auto px-8 py-3 w-max text-base font-medium rounded-md font-sans disabled:opacity-50 disabled:cursor-not-allowed ${styles}`}
    >
      {text}
      {icon}
    </button>
  );
};

export default Button;
