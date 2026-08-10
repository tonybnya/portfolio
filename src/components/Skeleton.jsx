const Skeleton = ({ className }) => {
  return (
    <div className={`bg-[#050403]/20 overflow-hidden relative ${className}`}>
      <div className="absolute inset-0 animate-shimmer" />
    </div>
  );
};

export default Skeleton;
