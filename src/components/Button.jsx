const Button = ({ type, text, icon, onClick, disabled, variant = "primary", cta = false }) => {
  const styles =
    variant === "outline"
      ? `text-white border-2 ${cta ? "border-[#FFBA00]" : "border-[#4A5565] hover:border-white/60"} hover:bg-white/5`
      : `text-white bg-black hover:bg-black/50 hover:scale-105 shadow-lg shadow-white/50 drop-shadow-xl ${cta ? "border-2 border-[#FFBA00]" : ""}`;

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`group flex items-center text-center tracking-wider gap-3 mr-auto ml-auto px-8 py-3 w-max text-base font-medium rounded-md font-mono disabled:opacity-50 disabled:cursor-not-allowed ${styles}`}
    >
      {text}
      {icon}
    </button>
  );
};

export default Button;
