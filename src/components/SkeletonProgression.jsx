import Skeleton from "./Skeleton";

const SkeletonProgression = () => {
    return (
        <div className="w-full">
            {[1, 2, 3].map((item) => (
                <div
                    key={item}
                    className="flex flex-col md-flex-row relative border-l border-[#4A5565] h-32"
                >
                    <div className="mb-10 ml-4 w-full text-left">
                        <div className="absolute w-3 h-3 bg-[#4A5565] rounded-full mt-1.5 -left-1.5 border border-[#4A5565]" />
                        <div className="flex flex-wrap gap-4 flex-row items-center justify-start mb-4">
                            <Skeleton className="w-16 h-6 rounded-md" />
                            <Skeleton className="w-48 h-6 rounded-md" />
                            <Skeleton className="w-24 h-4 rounded-md" />
                        </div>
                        <Skeleton className="w-32 h-10 rounded-md" />
                    </div>
                </div>
            ))}
        </div>
    );
};

export default SkeletonProgression;
