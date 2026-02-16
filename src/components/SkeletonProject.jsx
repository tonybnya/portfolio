import Skeleton from "./Skeleton";

const SkeletonProject = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8 w-full">
            {[1, 2, 3, 4, 5, 6].map((item) => (
                <div
                    key={item}
                    className="border-2 border-[#4A5565] rounded-md overflow-hidden bg-[#030713]"
                >
                    <Skeleton className="w-full h-36 md:h-48" />
                    <div className="w-full p-4">
                        <div className="mb-3">
                            <Skeleton className="w-3/4 h-7 rounded-md" />
                        </div>
                        <div className="space-y-2 mb-4">
                            <Skeleton className="w-full h-4 rounded-md" />
                            <Skeleton className="w-full h-4 rounded-md" />
                            <Skeleton className="w-1/2 h-4 rounded-md" />
                        </div>
                        <div className="flex flex-wrap gap-2 mb-4">
                            <Skeleton className="w-16 h-6 rounded-md" />
                            <Skeleton className="w-16 h-6 rounded-md" />
                            <Skeleton className="w-16 h-6 rounded-md" />
                        </div>
                        <div className="flex gap-2">
                            <Skeleton className="w-24 h-10 rounded-md" />
                            <Skeleton className="w-24 h-10 rounded-md" />
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default SkeletonProject;
