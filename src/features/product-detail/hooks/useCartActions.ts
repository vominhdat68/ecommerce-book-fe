// hooks/useCartActions.ts
import { useAddItemMutation } from '@/features/cart/services/cartService';
import { PATHS } from '@/shared/routes/paths';
import { useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toggleSelect } from '@/features/cart/slices/cartSlice'
import type { AppDispatch } from '@/shared/store/redux/reduxStore';
import { useDispatch } from 'react-redux';


interface UseCartActionsProps {
  onAddToCartSuccess?: (quantity: number) => void;
  onAddToCartError?: (error: any) => void;
}

export const useCartActions = (productId?: number, options?: UseCartActionsProps) => {
  const dispatch = useDispatch<AppDispatch>()
  const navigate = useNavigate();
  const [addItem, { isLoading: isAddingToCart }] = useAddItemMutation();
  const [isProcessing, setIsProcessing] = useState(false);

  const handleAddToCart = useCallback(async (quantity: number): Promise<boolean> => {
    if (!productId) {
      console.error('Product ID is required');
      return false;
    }

    setIsProcessing(true);
    try {
      const result = await addItem({
        product_id: productId,
        quantity,
      }).unwrap();

      if (result.success) {
        // Gọi callback khi thành công
        options?.onAddToCartSuccess?.(quantity);
        return true;
      } else {
        // Gọi callback khi có lỗi từ server
        options?.onAddToCartError?.(result.error || 'Unknown error');
        return false;
      }
    } catch (error) {
      console.error('Add to cart error:', error);
      // Gọi callback khi có lỗi network
      options?.onAddToCartError?.(error);
      return false;
    } finally {
      setIsProcessing(false);
    }
  }, [productId, addItem, options]);

  const handleBuyNow = useCallback(async (quantity: number): Promise<boolean> => {
    if (!productId) {
      return false;
    }
    dispatch(toggleSelect(productId)) // auto tick chon sp khi bam nut mua ngay o page detail product
    setIsProcessing(true);
    try {
      const result = await addItem({
        product_id: productId,
        quantity,
      }).unwrap();

      if (result.success) {
        // Chuyển hướng đến trang giỏ hàng
        navigate(PATHS.checkout.cart);
        return true;
      } else {
        console.error('Buy now failed:', result.error);
        return false;
      }
    } catch (error) {
      console.error('Buy now error:', error);
      return false;
    } finally {
      setIsProcessing(false);
    }
  }, [productId, addItem, navigate]);

  return {
    handleAddToCart,
    handleBuyNow,
    isLoading: isAddingToCart || isProcessing,
  };
};