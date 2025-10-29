import React from "react";

type ProductDetail = {
  label: string;
  value: string | React.ReactNode;
};

interface ProductDetailInfoCardProps {
  details: ProductDetail[];
  bestSellerText?: string;
  bestSellerLink?: string;
}

const ProductDetailInfoCard: React.FC<ProductDetailInfoCardProps> = ({
  details,
  bestSellerText,
  bestSellerLink,
}) => {
  return (
    <div className="bg-white rounded-lg p-4">
      {/* Header */}
      <h2 className="text-[15px] font-semibold text-gray-800 mb-4">
        Thông tin chi tiết
      </h2>

      {/* Table Info */}
      <div className="divide-y divide-gray-100">
        {details.map((item, index) => (
          <div
            key={index}
            className="flex py-2 text-[14px]"
          >
            <span className="text-gray-600 w-full  font-medium">
              {item.label}
            </span>
            <span className="text-gray-800 w-full  mt-1 sm:mt-0">
              {item.value}
            </span>
          </div>
        ))}

        {bestSellerLink && (
          <div className="flex py-2 text-[14px]">
            <span className="text-gray-600  w-full font-medium">
              Sản phẩm bán chạy nhất
            </span>
            <a
            // bestSellerLink
              href={'/product'}
              className="text-[#2489F4]  w-full"
              // target="_blank"
              rel="noopener noreferrer"
            >
              {bestSellerText}
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDetailInfoCard;
