import React from "react";
import { ButtonAddCart } from "@/shared/components/Button";

import ico_truck from '@/assets/images/product-detail/ico_truck_v2.png';
import ico_transfer from '@/assets/images/product-detail/ico_transfer_v2.png';
import ico_shop from '@/assets/images/product-detail/ico_shop_v2.png';
import ProductImageGallery from "./baner_left/ProductImageGallery";



type Props = {
  images: string[];
};

const BannerThumbnail: React.FC<Props> = ({
  images,
}) => {

  return (
    <>
      {/* thumbnail */}
      <ProductImageGallery
        images={images}
      />

      {/* 2 nút control */}
      <div className="flex gap-2 my-4">
        <ButtonAddCart
          type="addCart"
          icon="ico_cart_red"
          label="Thêm vào giỏ"
          addToCart={() => console.log('Add to cart')}
        />

        <ButtonAddCart
          type="buyNow"
          label="Mua ngay"
          addToCart={() => console.log('Buy now')}
        />
      </div>

      {/*  Chính sách ƯU đãi */}
      <div>
        <h3 className="my-3 font-semibold">Chính sách ưu đãi</h3>
        <div className="group-uudai text-[14px] text-[#212121]">

          <div className="flex justify-between mb-2 cursor-pointer"
            onClick={() => { window.alert("Thời gian giao hàng") }}
          >
            <div className="flex">
              <div
                className="w-[18px] h-[18px] bg-contain bg-no-repeat bg-center mr-1"
                style={{ backgroundImage: `url(${ico_truck})` }} />

              <span className="font-semibold">Thời gian giao hàng:</span>
              <span className="ml-1"> Giao nhanh và uy tín</span>
            </div>
            <i className='flex-end block ico_arrow_right_black' />
          </div>

          <div className="flex justify-between mb-2 cursor-pointer"
            onClick={() => { window.alert("Chính sách đổi trả") }}
          >

            <div className="flex">
              <div
                className="w-[18px] h-[18px] bg-contain bg-no-repeat bg-center mr-1"
                style={{ backgroundImage: `url(${ico_transfer})` }} />
              <span className="font-semibold">Chính sách đổi trả:</span>
              <span className="ml-1"> Đổi trả miễn phí toàn quốc</span>
            </div>
            <i className=' block ico_arrow_right_black' />
          </div>

          <div className="flex justify-between mb-2 cursor-pointer"
            onClick={() => { window.alert("Chính sách khách sỉ") }}
          >
            <div className="flex">
              <div
                className="w-[18px] h-[18px] bg-contain bg-no-repeat bg-center mr-1"
                style={{ backgroundImage: `url(${ico_shop})` }} />
              <span className="font-semibold">Chính sách khách sỉ:</span>
              <span className="ml-1"> Ưu đãi khi mua số lượng lớn</span>
            </div>
            <i className='block ico_arrow_right_black' />
          </div>

        </div>
      </div>
    </>
  );
};

export default BannerThumbnail;
