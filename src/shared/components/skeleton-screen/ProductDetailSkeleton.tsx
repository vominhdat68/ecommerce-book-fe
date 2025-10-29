

export const ThumbnailDetailSkeleton: React.FC = () => (
    <div className="flex flex-col items-center w-full p-2 bg-white rounded-lg">
        <div className="animate-pulse">
            <div className="flex flex-col items-center">
                <div className="bg-gray-200 w-[440px] h-[400px] rounded-lg mb-[8px]"></div>
                <div className="flex justify-between gap-3  mb-2">
                    {[...Array(5)].map((_) => (
                        <>
                            <div className="bg-gray-200 w-[80px] h-[80px] rounded"></div>
                        </>
                    ))}
                </div>
            </div>
            <div className="bg-gray-200 w-full h-[25px] rounded mt-[8px]"></div>
            <div className="w-full mt-[8px]">
                <div className="bg-gray-200 w-50 h-[10px] rounded mt-[8px]"></div>
                <div className="bg-gray-200 w-90 h-[10px] rounded mt-[8px]"></div>
                <div className="bg-gray-200 w-90 h-[10px] rounded mt-[8px]"></div>
                <div className="bg-gray-200 w-90 h-[10px] rounded mt-[8px]"></div>
            </div>
        </div>
    </div>
);


export const InfoDetailSkeleton: React.FC = () => (
    <div className="flex flex-col ">
        <div className="bg-white rounded-lg p-4 ">
            <div className="animate-pulse">
                <div className="bg-gray-200 w-80 h-[25px] rounded"></div>
                <div className="bg-gray-200 w-[500px] h-[15px] rounded mt-[18px]"></div>
                <div className="bg-gray-200 w-[500px] h-[15px] rounded mt-[12px]"></div>
                <div className="bg-gray-200 w-[300px] h-[15px] rounded mt-[12px]"></div>
            </div>
        </div>
        <div className="bg-white rounded-lg p-4 mt-3">
            <div className="animate-pulse">
                <div className="bg-gray-200 w-80 h-[25px] rounded"></div>
                <div className="bg-gray-200 w-[500px] h-[15px] rounded mt-[18px]"></div>
                <div className="bg-gray-200 w-[500px] h-[15px] rounded mt-[12px]"></div>
                <div className="bg-gray-200 w-[300px] h-[15px] rounded mt-[12px]"></div>
            </div>
        </div>
        <div className="bg-white rounded-lg p-4 mt-3">
            <div className="animate-pulse">
                <div className="bg-gray-200 w-80 h-[25px] rounded"></div>
                <div className="bg-gray-200 w-[500px] h-[15px] rounded mt-[18px]"></div>
                <div className="bg-gray-200 w-[500px] h-[15px] rounded mt-[12px]"></div>
                <div className="bg-gray-200 w-[300px] h-[15px] rounded mt-[12px]"></div>
            </div>
        </div>
        <div className="bg-white rounded-lg p-4 mt-3">
            <div className="animate-pulse">
                <div className="bg-gray-200 w-80 h-[15px] rounded"></div>
                <div className="bg-gray-200 w-full h-[100px] rounded mt-[18px]"></div>
            </div>
        </div>
    </div>
);

export const PreviewDetailSkeleton: React.FC = () => (
    <div className=" w-full p-4 bg-white rounded-lg">
        <div className="animate-pulse">
            <div className="bg-gray-200 w-50 h-[15px] rounded mt-[8px]"></div>
            <div className="bg-gray-200 w-full h-[150px] rounded mt-[18px]"></div>
        </div>
    </div>
);

export const ProductDetailSkeleton: React.FC = () => (
    <div className="w-[1200px] mx-auto">
        <div className="flex justify-between pt-10">
            <div className=" mr-4">
                <ThumbnailDetailSkeleton />
            </div>
            <div className="flex-1">
                <InfoDetailSkeleton />
            </div>
        </div>
        <div className="my-3">
            <PreviewDetailSkeleton />
        </div>
    </div>
);