const Title = ({ children, id }) => {
  return (
    <div className="flex justify-center items-center mt-20 mx-auto p-4 bg-black w-[200px] rounded-3xl shadow-lg shadow-white/50 drop-shadow-xl">
      <h1
        id={id && id}
        className="text-3xl font-righteous text-white max-sm:text-xl text-center tracking-wider"
      >
        {children}
      </h1>
    </div>
  );
};

export default Title;
