import React, { useCallback, useState } from 'react';
import '../../features/product-detail/styles/style.detail.css'

import SectionContainer from '@/shared/components/SectionContainer';
import { ProductDetailSkeleton } from '@/shared/components/skeleton-screen/ProductDetailSkeleton';
import NotFoundPage from '@/shared/pages/NotFoundPage';

import { useProductDetail } from '@/features/product-detail/hooks/useProductDetail';
import { useCartActions } from '@/features/product-detail/hooks/useCartActions';
import { useProductPolicies } from '@/features/product-detail/hooks/useProductPolicies';
import { useQuantity } from '@/features/product-detail/hooks/useQuantity';
import { useCheckStockQuery } from '@/features/cart/services/cartService';
import { ProductImageSection } from '@/features/product-detail/components/ProductImageSection';
import { ProductInfoSection } from '@/features/product-detail/components/ProductInfoSection';
import ProductReview from '@/features/product-detail/components/ProductReview';
import { AddToCartPopup } from '@/features/product-detail/components/AddToCartPopupProps';

export const ProductDetailPage: React.FC = () => {
  const { targetProductId, productDetail, isLoading, isError } = useProductDetail();

  const { quantity, setQuantity } = useQuantity({
    initialQuantity: 1,
    maxQuantity: productDetail?.stock_quantity || 100,
    onQuantityChange: (newQuantity) => {
      // Có thể thêm logic xử lý khi quantity thay đổi nếu cần
    }
  });

  // Kiểm tra tồn kho (BR01)
  const { data: stockData, isLoading: isStockLoading } = useCheckStockQuery(
    { product_id: targetProductId || '' },
    { skip: !targetProductId }
  );

  // Cart actions với callbacks được cải tiến
  const { handleAddToCart, handleBuyNow, isLoading: isCartLoading } = useCartActions(
    targetProductId,
    {
      onAddToCartSuccess: (qty) => {
        setIsPopupVisible(true);
        setQuantity(1); // Reset quantity (BR03 - chuẩn bị cho lần thêm tiếp theo)
      },
      onAddToCartError: (error) => {
        setIsPopupVisible(true);
        console.error('Failed to add to cart:', error);
      }
    }
  );

  const { handlePolicyClick, handleKeyPress } = useProductPolicies();

  // Kiểm tra nếu sản phẩm hết hàng (BR01)
  const isOutOfStock = stockData ? !stockData.available : false;
  const availableStock = stockData?.stock || 0;

  // State cho popup và thông báo
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const handleClosePopup = useCallback(() => setIsPopupVisible(false), []);

  if (isLoading || isStockLoading) return <ProductDetailSkeleton />;
  if (isError || !targetProductId || !productDetail) return <NotFoundPage />;

  return (
    <>
      <SectionContainer bgColor="none">
        <div className="detail-product">
          <div className="flex justify-between pt-10">
            <ProductImageSection
              images={productDetail.images || []}
              onAddToCart={handleAddToCart}
              onBuyNow={handleBuyNow}
              isLoading={isCartLoading}
              quantity={quantity}
              onPolicyClick={handlePolicyClick}
              onKeyPress={handleKeyPress}
              isOutOfStock={isOutOfStock}
              availableStock={availableStock}
            />

            <ProductInfoSection
              productDetail={productDetail}
              productId={targetProductId}
              quantity={quantity}
              onQuantityChange={setQuantity}
              isOutOfStock={isOutOfStock}
              availableStock={availableStock}
            />
          </div>

          <div className="mt-8">
            <ProductReview
              productId={targetProductId}
              averageRating={productDetail.average_rating}
              totalReviews={productDetail.total_reviews}
              ratingsDistribution={productDetail.ratings_distribution}
              reviews={productDetail.reviews}
            />
          </div>

          {/* Popup thông báo */}
          <AddToCartPopup
            isVisible={isPopupVisible}
            onClose={handleClosePopup}
            duration={2000}
          />
        </div>
      </SectionContainer>


    </>
  );
};

export default ProductDetailPage;