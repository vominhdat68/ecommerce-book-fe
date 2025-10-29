// components/ProductActions.tsx
import { ButtonAddCart } from '@/shared/components/Button';
import React from 'react';

interface ProductActionsProps {
  onAddToCart: (quantity: number) => void;
  onBuyNow: (quantity: number) => void;
  isLoading: boolean;
  quantity: number;
  isOutOfStock: boolean;
  availableStock: number;
}

export const ProductActions: React.FC<ProductActionsProps> = ({
  onAddToCart,
  onBuyNow,
  isLoading,
  quantity,
  isOutOfStock,
  availableStock,
}) => {
  const handleAddToCart = () => {
    // BR02: Validate số lượng trước khi thêm
    if (quantity > availableStock) {
      return; // Thông báo đã được hiển thị ở ProductInfoSection
    }
    onAddToCart(quantity);
  };

  const handleBuyNow = () => {
    // BR02: Validate số lượng trước khi mua
    if (quantity > availableStock) {
      return; // Thông báo đã được hiển thị ở ProductInfoSection
    }
    onBuyNow(quantity);
  };

  // Disable nút nếu hết hàng hoặc số lượng không hợp lệ
  const isAddToCartDisabled = isOutOfStock || isLoading || quantity > availableStock;
  const isBuyNowDisabled = isOutOfStock || isLoading || quantity > availableStock;

  return (
    <div className="flex gap-2 my-4">
      <ButtonAddCart
        type="addCart"
        icon="ico_cart_red"
        label={isOutOfStock ? "Hết hàng" : "Thêm vào giỏ"}
        // isLoading={isLoading}
        addToCart={handleAddToCart}
        // disabled={isAddToCartDisabled}
      />

      <ButtonAddCart
        type="buyNow"
        label={isOutOfStock ? "Hết hàng" : "Mua ngay"}
        // isLoading={isLoading}
        addToCart={handleBuyNow}
        // disabled={isBuyNowDisabled}
      />
    </div>
  );
};