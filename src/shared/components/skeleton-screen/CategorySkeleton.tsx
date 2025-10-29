

export const CategorySkeleton: React.FC = () => (
    <div className="wrap"> 
        <div className="flex p-4 gap-3 animate-pulse">
            <div className="flex flex-col bg-white rounded-lg w-[250px] p-2">
                {[...Array(3)].map((_) => (
                    <>
                        <div className="mb-4">
                            <div className="bg-gray-200 w-40 h-[18px] rounded mt-[8px]"></div>
                            {[...Array(5)].map((_) => (
                                <>
                                    <div className="bg-gray-200 h-[12px] rounded mt-[12px]"></div>
                                </>
                            ))}
                        </div>
                    </>
                ))}
            </div>
            <div className=" grow p-4 bg-white rounded-lg">
                <div className="flex gap-3">
                    <div className="bg-gray-200 w-[150px] h-[12px] rounded mb-[8px]"></div>
                    <div className="bg-gray-200 w-[150px] h-[12px] rounded mb-[8px]"></div>
                </div>
                <div className="grid grid-cols-4 gap-3 mt-3">
                    {[...Array(7)].map((_) => (
                        <>
                            <div className="flex flex-col items-center w-full">
                                <div className="bg-gray-200 w-[150px] h-[150px] rounded-lg mb-[8px]"></div>
                                <div className="wrapper">
                                    <div className="bg-gray-200 w-[150px] h-3 rounded mb-2"></div>
                                    <div className="bg-gray-200 w-[100px] h-3 rounded mb-2"></div>
                                    <div className="bg-gray-200 w-[150px] h-3 rounded"></div>
                                </div>
                            </div>
                        </>
                    ))}
                </div>
            </div>
        </div>
    </div>
);

