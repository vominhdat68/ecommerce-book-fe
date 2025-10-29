
import React from "react";
import Rating from "@/shared/components/Rating";
import { formatNumberCompact } from "@/shared/utils/helper";

type ProductCardProps = {
  title: string;
  supplier: string;
  publisher: string;
  author: string;
  format: string;
  price: number;
  oldPrice?: number;
  discount?: number;
  averageRating: number;
  totalRating: number;
  soldCount: number;
};

const InfoDetailProduct: React.FC<ProductCardProps> = ({
  title,
  supplier,
  publisher,
  author,
  format,
  price,
  oldPrice,
  discount,
  averageRating,
  totalRating,
  soldCount
}) => {
  return (
    <div className=" bg-white rounded-lg p-4">
      {/* Tag */}
      <div className="flex items-center mb-2">
        {/* <img
          className='h-[27px] mr-1 inline mr-2'
          src={ico_new}
        /> */}
        <h2 className="text-[23px] font-medium text-gray-800 leading-snug">
          {title}
        </h2>
      </div>

      {/* Info section */}
      <div className="text-[14px] text-[#212121]">
        <div className="flex mt-3">
          <p className="w-[350px] truncate">
            <span className="">Nhà cung cấp:</span>{" "}
            <span className="text-[#2489F4] font-bold uppercase">{supplier}</span>
          </p>
          <p className="w-[350px] truncate">
            <span className="ml-5">Tác giả:</span>{" "}
            <span className="font-bold">{author}</span>
          </p>
        </div>

        <div className="flex mt-2">
          <p className="w-[350px] truncate">
            <span className="">Nhà xuất bản:</span>{" "}
            <span className="font-bold">{publisher}</span>
          </p>

          <p className="w-[350px] truncate">
            <span className="ml-5">Hình thức bìa:</span>{" "}
            <span className="font-bold">{format}</span>
          </p>
        </div>

      </div>

      {/* Rating + Sold */}
      {/* // rating_summary: product.rating.rating_summary,
          //     reviews_count: product.rating.reviews_count */}
      <div className="flex items-center text-[14px] my-2">
        <Rating
          rating={
            {
              rating_summary: averageRating,
              reviews_count: totalRating
            }}
          configUI={{
            enableText: "đánh giá",
            classNameReviews: "text-[14px]",
          }}
        />
        <div>
          <span className="text-gray-500">Đã bán </span>
          {/* reviews_count */}
          <span className="">{formatNumberCompact(soldCount) ?? 0}</span>
        </div>

      </div>

      {/* Price section */}
      <div className="flex items-center gap-2 mt-2">
        <span className="text-[#C92127] text-[32px] font-bold">
          {price.toLocaleString("vi-VN")} ₫
        </span>
        {oldPrice && (
          <span className="text-gray-400 line-through text-[15px]">
            {oldPrice.toLocaleString("vi-VN")} ₫
          </span>
        )}
        {discount && (
          <span className="bg-[#C92127] text-white text-[15px] font-bold px-1.5 py-0.5 rounded">
            -{discount}%
          </span>
        )}
      </div>
      <div className="flex items-center gap-1 text-[14px] text-[#C92127] leading-3">
        <p>Chính sách khuyến mãi chỉ áp dụng tại cửa hàng</p>
        <span className="block w-[16px] ico_promo_more_red" />
      </div>

      {/* in stock */}
      <div className="rounded bg-[#E8F3FE] mt-3 px-3 py-1">
        <span className="text-[14px] text-[#2489F4] ">{'nhà sách còn hàng'}</span>
      </div>
    </div>
  );
};

export default InfoDetailProduct;
