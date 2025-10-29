import React from "react";

const ProductCardSkeleton: React.FC = () => (
  <div className="flex flex-col items-center w-full">
    <div className="bg-gray-200 w-[190px] h-[190px] rounded-lg mb-[8px]"></div>
    <div className="wrapper">
      <div className="bg-gray-200 w-[190px] h-3 rounded mb-2"></div>
      <div className="bg-gray-200 w-[100px] h-3 rounded mb-2"></div>
      <div className="bg-gray-200 w-[190px] h-3 rounded"></div>
    </div>
  </div>
);

export const ProductsCardSkeleton: React.FC = () => (
  <div className="w-[1200px] mx-auto bg-white rounded-lg mt-5 overflow-hidden">
    <div className="flex justify-between gap-3 animate-pulse px-5 py-2">
      {[...Array(5)].map((_) => (
        <ProductCardSkeleton />
      ))}
    </div>
  </div>
);


export const BannerSkeleton: React.FC = () => (
  <div className="w-[1200px] mx-auto animate-pulse my-4">
    <div className="grid grid-cols-3 grid-rows-2 gap-2 h-70">
      <div className="bg-gray-200 col-span-2 row-span-2 rounded-lg"></div>
      <div className="bg-gray-200 rounded-lg"></div>
      <div className="bg-gray-200 rounded-lg"></div>
    </div>
    <div className="grid grid-cols-4 gap-2 mt-5">
      {[...Array(4)].map((_, i) => (
        <div key={i} className="bg-gray-200 h-35 rounded-lg"></div>
      ))}
    </div>
  </div>
);

export const MenuCategoriesSkeleton: React.FC = () => (
  <div className="w-[1200px] mx-auto bg-white rounded-lg my-4 overflow-hidden">
    <div className="flex justify-around gap-3 flex-wrap animate-pulse px-5 py-3">
      {[...Array(10)].map((_) => (
        <div className="flex flex-col items-center">
          <div className="bg-gray-200 size-16 rounded-lg mb-[8px]"></div>
          <div className="bg-gray-200 w-23 h-4 rounded"></div>
        </div>
      ))}
    </div>
  </div>
);

export const EventSkeleton: React.FC = () => (
  <div className="w-[1200px] mx-auto bg-white rounded-lg mt-5 my-4">
    <div className="flex flex-col gap-3 animate-pulse px-5 py-3">
      <div className="bg-gray-200 w-full h-10 rounded"></div>
      <div className="pt-4 flex justify-between gap-2">
        {[...Array(5)].map((_) => (
          <ProductCardSkeleton />
        ))}
      </div>
    </div>
  </div>
);

export const CategoryCardSkeleton: React.FC = () => {
  return (
    <>
      <div className="w-[1200px] mx-auto bg-white rounded-lg  animate-pulse p-3 my-4">
        <div className="bg-gray-200 w-full h-4 rounded"></div>
        <div className="flex justify-between mt-3">
          {[...Array(8)].map((_) => (
            <div className="flex flex-col gap-3 ">
              <div className="w-22 h-28 bg-gray-200 rounded-lg" />
              <div className="w-22 h-3 bg-gray-200 rounded-[3px]" />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export const SectionTabSkeleton: React.FC = () => (
  <div className="w-[1200px] mx-auto bg-white rounded-lg mt-5 my-4">
    <div className="flex flex-col gap-3 animate-pulse px-5 py-3">
      <div className="bg-gray-200 w-[250px] h-4 rounded"></div>
      <div className="bg-gray-200 w-[750px] h-3 rounded"></div>
      <div className="pt-4 flex justify-between gap-2">
        {[...Array(5)].map((_) => (
          <ProductCardSkeleton />
        ))}
      </div>
    </div>
  </div>
);

//>>>>>>>>>>>>>>>>>>>>>>>>>>>
const ItemsCardRankSkeleton: React.FC = () => {
  return (
    <>
      <div className="animate-pulse">
        {[...Array(5)].map((_) => (
          <div className="flex gap-6 ml-7 mb-4">
            <div className="w-23 h-30 bg-gray-200 rounded-lg" />
            <div className="flex flex-col gap-2 mt-5 self-start">
              <div className="w-55 h-3 bg-gray-200 rounded-[3px]" />
              <div className="w-30 h-3 bg-gray-200 rounded-[3px]" />
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

const CardPreviewSkeleton: React.FC = () => {
  return (
    <>
      <div className="flex gap-5 animate-pulse ml-12 mb-3">
        <div className="w-35 h-50 bg-gray-200 rounded-lg" />
        <div className="flex flex-col gap-2 mt-5 self-start">
          <div className="w-30 h-3 bg-gray-200 rounded-[3px]" />
          <div className="w-25 h-3 bg-gray-200 rounded-[3px]" />
          <div className="w-45 h-3 bg-gray-200 rounded-[3px]" />
          <div className="w-75 h-25 bg-gray-200 rounded-[3px]" />
        </div>
      </div>
    </>
  );
};


export const TabsRankSkeleton: React.FC = () => {
  return (
    <div className="w-[1200px] mx-auto bg-white rounded-lg p-4">
      <div className="grid grid-cols-7">
        <div className="col-span-3">
          <ItemsCardRankSkeleton />
        </div>
        <div className="col-span-4 px-5">
          <CardPreviewSkeleton />
        </div>
      </div>
    </div>
  );
};

//>>>>>>>>>>>>>>>>>>>>>
//>>>>>>>>>>>>>>>>>>>>>
export const PublisherCardSkeleton: React.FC = () => (
  <div className="bg-white rounded-lg  overflow-hidden">
    <div className="flex justify-around gap-3 flex-wrap animate-pulse px-5 py-3">
      {[...Array(9)].map((_) => (
        <div className="flex flex-col items-center">
          <div className="bg-gray-200 size-26 rounded-lg mb-[8px]"></div>
        </div>
      ))}
    </div>
  </div>
);