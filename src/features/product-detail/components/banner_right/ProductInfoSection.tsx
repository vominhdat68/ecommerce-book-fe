// components/ProductInfoSection.tsx
import React from 'react';
import InfoDetailProduct from '@/features/product-detail/components/banner_right/InfoDetailProduct';
import ShippingInfoCard from '@/features/product-detail/components/banner_right/ShippingInfoCard';
import PromotionsSection from '@/features/product-detail/components/banner_right/shipping/PromotionsSection';
import QuantitySelector from '@/features/product-detail/components/banner_right/shipping/QuantitySelector';
import ProductDetailInfoCard from '@/features/product-detail/components/banner_right/ProductDetailInfoCard';
import ProductDescription from '@/features/product-detail/components/banner_right/ProductDescription';
import type { ProductDetailResponse } from '@/features/product-detail/detailProduct.type';

interface ProductInfoSectionProps {
  productDetail: ProductDetailResponse;
  productId: string;
  quantity: number;
  onQuantityChange: (quantity: number) => void;
  isOutOfStock: boolean;
  availableStock: number;
}

export const ProductInfoSection: React.FC<ProductInfoSectionProps> = ({
  productDetail,
  productId,
  quantity,
  onQuantityChange,
  isOutOfStock,
  availableStock,
}) => {
  return (
    <div className="ml-4 flex-1">
      <InfoDetailProduct
        title={productDetail.title}
        supplier={productDetail.supplier}
        publisher={productDetail.publisher}
        author={productDetail.author}
        format={productDetail.format}
        price={productDetail.discount_amount}
        oldPrice={productDetail.final_price}
        discount={productDetail.discount_percent}
        averageRating={productDetail.average_rating}
        totalRating={productDetail.total_reviews}
        soldCount={productDetail.sold_count}
      />

      <div className="bg-white rounded-lg p-4 mt-3">
        <ShippingInfoCard
          shippingAddress={productDetail.shipping_info?.address}
          shippingMethod={productDetail.shipping_info?.expected_delivery}
        />
        <PromotionsSection />

        <QuantitySelector
          productId={productId}
          maxQuantity={Math.min(availableStock, 100)} // BR02: Giới hạn số lượng mua tối đa
          quantity={quantity}
          onQuantityChange={onQuantityChange}
          isOutOfStock={isOutOfStock}
        />

        {/* THÔNG BÁO HẾT HÀNG */}
        {isOutOfStock && (
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mt-3">
            <p className="text-yellow-800 font-medium">Sản phẩm hiện đang hết hàng</p>
            <p className="text-yellow-600 text-sm mt-1">Vui lòng quay lại sau hoặc liên hệ để được thông báo khi có hàng</p>
          </div>
        )}

        {/* THÔNG BÁO VƯỢT QUÁ TỒN KHO */}
        {!isOutOfStock && quantity >= availableStock && (
          <div className="bg-orange-50 border border-orange-200 rounded-lg p-3 mt-3">
            <p className="text-orange-700 text-sm font-medium">
              Số lượng bạn chọn đạt tới giới hạn hiện có ({availableStock})
            </p>
          </div>
        )}
      </div>

      <div className="mt-3">
        <ProductDetailInfoCard
          details={productDetail.details}
          bestSellerText="Top 100 sản phẩm Lịch Sử bán chạy của tháng"
          bestSellerLink="https://www.fahasa.com/sach-trong-nuoc/van-hoc-trong-nuoc/tieu-thuyet.html?order=num_orders_month"
        />
      </div>

      <div className="mt-3">
        <ProductDescription content={productDetail.html_content} />
      </div>
    </div>
  );
};