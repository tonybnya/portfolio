const Skill = ({ svg, title }) => {
  return (
    <div className="flex flex-col justify-center items-center max-w-sm p-6 m-6 rounded-lg shadow bg-black hover:bg-[#030313]">
      <div className="w-20 h-20 p-2 flex justify-center items-center">
        {svg}
      </div>
      <p className="font-normal font-righteous text-white">{title}</p>
    </div>
  );
};

export default Skill;
