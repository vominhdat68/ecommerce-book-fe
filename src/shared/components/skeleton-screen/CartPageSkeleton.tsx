import React from "react";
import SectionContainer from "@/shared/components/SectionContainer";

const CartPageSkeleton: React.FC = () => {
  return (
    <SectionContainer bgColor="none">
      <div className="flex flex-col space-y-4 pt-4">
        {/* Skeleton cho Header */}
        <div className="bg-white rounded-lg p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-5 h-5 bg-gray-200 rounded animate-pulse"></div>
              <div className="h-4 bg-gray-200 rounded w-40 animate-pulse"></div>
            </div>
            <div className="h-4 bg-gray-200 rounded w-24 animate-pulse"></div>
          </div>
        </div>

        {/* Skeleton cho Content Layout */}
        <div className="grid grid-cols-[4fr_2fr] gap-3">
          {/* Skeleton cho Cart List */}
          <div className="space-y-3">
            {/* Header items skeleton */}
            <div className="bg-white rounded-lg p-4">
              <div className="grid grid-cols-[3fr_2fr] items-center">
                <div className="flex items-center gap-3">
                  <div className="w-4 h-4 bg-gray-200 rounded animate-pulse"></div>
                  <div className="h-4 bg-gray-200 rounded w-32 animate-pulse"></div>
                </div>
                <div className="flex justify-center space-x-8">
                  <div className="h-4 bg-gray-200 rounded w-16 animate-pulse"></div>
                  <div className="h-4 bg-gray-200 rounded w-16 animate-pulse"></div>
                </div>
              </div>
            </div>

            {/* Cart items skeleton */}
            <div className="bg-white rounded-lg divide-y divide-gray-200">
              {[1, 2, 3].map((item) => (
                <div key={item} className="p-4">
                  <div className="flex space-x-3">
                    {/* Checkbox */}
                    <div className="w-4 h-4 bg-gray-200 rounded animate-pulse mt-1"></div>

                    {/* Product image */}
                    <div className="w-16 h-16 bg-gray-200 rounded animate-pulse"></div>

                    {/* Product info */}
                    <div className="flex-1 space-y-2">
                      <div className="h-4 bg-gray-200 rounded w-3/4 animate-pulse"></div>
                      <div className="h-3 bg-gray-200 rounded w-1/2 animate-pulse"></div>
                      <div className="h-4 bg-gray-200 rounded w-1/4 animate-pulse"></div>
                    </div>

                    {/* Quantity and price */}
                    <div className="flex space-x-8 items-center">
                      <div className="flex items-center space-x-2">
                        <div className="w-8 h-8 bg-gray-200 rounded animate-pulse"></div>
                        <div className="h-4 bg-gray-200 rounded w-8 animate-pulse"></div>
                        <div className="w-8 h-8 bg-gray-200 rounded animate-pulse"></div>
                      </div>
                      <div className="h-4 bg-gray-200 rounded w-20 animate-pulse"></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Skeleton cho Cart Summary */}
          <div className="space-y-3">
            {/* Promotion card skeleton */}
            <div className="bg-white rounded-lg p-4 space-y-3">
              <div className="h-4 bg-gray-200 rounded w-3/4 animate-pulse"></div>
              <div className="space-y-2">
                <div className="h-3 bg-gray-200 rounded w-full animate-pulse"></div>
                <div className="h-3 bg-gray-200 rounded w-2/3 animate-pulse"></div>
              </div>
              <div className="h-8 bg-gray-200 rounded animate-pulse"></div>
            </div>

            {/* Gift card skeleton */}
            <div className="bg-white rounded-lg p-4 space-y-3">
              <div className="h-4 bg-gray-200 rounded w-1/2 animate-pulse"></div>
              <div className="h-10 bg-gray-200 rounded animate-pulse"></div>
            </div>

            {/* Order summary skeleton */}
            <div className="bg-white rounded-lg p-4 space-y-3">
              <div className="space-y-2">
                <div className="flex justify-between">
                  <div className="h-4 bg-gray-200 rounded w-20 animate-pulse"></div>
                  <div className="h-4 bg-gray-200 rounded w-16 animate-pulse"></div>
                </div>
                <div className="flex justify-between">
                  <div className="h-4 bg-gray-200 rounded w-24 animate-pulse"></div>
                  <div className="h-4 bg-gray-200 rounded w-16 animate-pulse"></div>
                </div>
                <div className="flex justify-between">
                  <div className="h-4 bg-gray-200 rounded w-28 animate-pulse"></div>
                  <div className="h-4 bg-gray-200 rounded w-20 animate-pulse"></div>
                </div>
              </div>
              <div className="pt-3">
                <div className="flex justify-between">
                  <div className="h-5 bg-gray-200 rounded w-24 animate-pulse"></div>
                  <div className="h-5 bg-gray-200 rounded w-24 animate-pulse"></div>
                </div>
              </div>
              <div className="h-12 bg-gray-200 rounded animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};

export default CartPageSkeleton;