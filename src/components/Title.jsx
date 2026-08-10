const Title = ({ children, id }) => {
  return (
    <div className="flex justify-center items-center mt-20 mx-auto p-4 bg-[#050403] w-[200px] rounded-3xl shadow-lg shadow-white/50 drop-shadow-xl">
      <h1
        id={id && id}
        className="text-2xl font-sans font-medium text-white text-center tracking-normal"
      >
        {children}
      </h1>
    </div>
  );
};

export default Title;
