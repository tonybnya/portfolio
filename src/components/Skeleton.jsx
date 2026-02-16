const Skeleton = ({ className }) => {
    return (
        <div className={`bg-[#4A5565]/20 overflow-hidden relative ${className}`}>
            <div className="absolute inset-0 animate-shimmer" />
        </div>
    );
};

export default Skeleton;
