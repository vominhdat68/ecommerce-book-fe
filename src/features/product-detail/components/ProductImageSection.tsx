// components/ProductImageSection.tsx
import React from 'react';
import { ProductActions } from './baner_left/ProductActions';
import { PolicySection } from './baner_left/PolicySection';
import ProductImageGallery from './baner_left/ProductImageGallery';

interface ProductImageSectionProps {
  images: string[];
  onAddToCart: (quantity: number) => void;
  onBuyNow: (quantity: number) => void;
  isLoading: boolean;
  quantity: number;
  onPolicyClick: (policyType: string) => void;
  onKeyPress: (e: React.KeyboardEvent, policyType: string) => void;
  isOutOfStock: boolean;
  availableStock: number;
}

export const ProductImageSection: React.FC<ProductImageSectionProps> = ({
  images,
  onAddToCart,
  onBuyNow,
  isLoading,
  quantity,
  onPolicyClick,
  onKeyPress,
  isOutOfStock,
  availableStock,
}) => {
  return (
    <div className="sticky top-[130px] p-2 bg-white rounded-lg h-fit">
      <div className="banner-thumbnail">
        <ProductImageGallery images={images} />

        <ProductActions
          onAddToCart={onAddToCart}
          onBuyNow={onBuyNow}
          isLoading={isLoading || isOutOfStock} // Disable nếu đang loading hoặc hết hàng
          quantity={quantity}
          isOutOfStock={isOutOfStock}
          availableStock={availableStock}
        />

        <PolicySection
          onPolicyClick={onPolicyClick}
          onKeyPress={onKeyPress}
        />
      </div>
    </div>
  );
};