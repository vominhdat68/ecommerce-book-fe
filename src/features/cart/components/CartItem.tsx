import React, { useCallback, useEffect, useMemo, useState, } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import debounce from 'debounce';

import type { CartItem } from '@/features/cart/types/cart.type';
import { useCartItemById } from '@/features/cart/hook/useCartItemById';
import { cartService, useUpdateQuantityMutation, useRemoveItemMutation, } from '@/features/cart/services/cartService';

import QuantitySelectorShare from '@/shared/components/QuantitySelectorShare';
import type { AppDispatch } from '@/shared/store/redux/reduxStore';
import { buildProductDetailLink } from '@/shared/routes/navigation';

export interface CartItemProps {
  itemId: number;
  isSelected: boolean;
  onToggleSelect: (itemId: number) => void;
}

const CartItemC: React.FC<CartItemProps> = React.memo(
  ({ itemId, isSelected, onToggleSelect }) => {
    const dispatch = useDispatch<AppDispatch>();
    const [updateQuantity, { isLoading: isLoadingQty }] = useUpdateQuantityMutation();
    const [removeItem] = useRemoveItemMutation();

    const item = useCartItemById(itemId);
    const [localQty, setLocalQty] = useState(item?.quantity ?? 1);

    const totalPrice = useMemo(
      () => (item ? item.price * item.quantity : 0),
      [item?.price, item?.quantity]
    );

    // Debounce API call
    const debouncedApiCall = useMemo(
      () =>
        debounce(async (id: number, quantity: number) => {
          if (quantity <= 0) return;

          // Optimistic update cache
          const patchResult = dispatch(
            cartService.util.updateQueryData(
              'getCart',
              undefined,
              (draft) => {
                const cartArr = draft.items as CartItem[];
                const found = cartArr.find(i => i.product_id === id);
                if (found) found.quantity = quantity;
              }
            )
          );

          try {
            await updateQuantity({ id, quantity }).unwrap();
          } catch (e) {
            patchResult.undo();
            setLocalQty(item?.quantity || 1);
          }
        }, 300),
      [dispatch, updateQuantity, item?.quantity] // item?.quantity optional, có thể bỏ nếu không muốn recreate debounce
    );

    const handleQuantityChange = useCallback(
      (newQty: number) => {
        if (newQty <= 0) return;
        setLocalQty(newQty);
        debouncedApiCall(itemId, newQty);
      },
      [debouncedApiCall, itemId]
    );

    const handleIncrease = useCallback(
      () => handleQuantityChange(localQty + 1),
      [handleQuantityChange, localQty]
    );

    const handleDecrease = useCallback(
      () => handleQuantityChange(localQty - 1),
      [handleQuantityChange, localQty]
    );

    const handleToggleSelectItem = useCallback(() => {
      onToggleSelect(itemId);
    }, [onToggleSelect, itemId]);

    const handleRemove = useCallback(
      async (id: number) => {
        const patchResult = dispatch(
          cartService.util.updateQueryData(
            'getCart',
            undefined,
            (draft) => {
              const arr = draft.items as CartItem[];
              const idx = arr.findIndex(item => item.product_id === id);
              if (idx !== -1) arr.splice(idx, 1);
            }
          )
        );
        onToggleSelect(itemId);
        try {
          await removeItem(id).unwrap();
        } catch {
          patchResult.undo();
          alert('Xóa sản phẩm thất bại');
        }
      },
      [dispatch, removeItem, onToggleSelect, itemId]
    );

    // Cleanup debounce
    useEffect(() => {
      return () => debouncedApiCall.clear();
    }, [debouncedApiCall]);

    // Đồng bộ localQty với item.quantity khi thay đổi từ server
    useEffect(() => {
      if (item?.quantity && item.quantity !== localQty) {
        setLocalQty(item.quantity);
      }
    }, [item?.quantity]);

    if (!item) return null;


    const { path, state } = buildProductDetailLink(item.product_url, item.product_id);

    return (
      <div className="grid grid-cols-[3fr_2fr] items-center py-5">
        <div className="grid grid-cols-[auto_auto_1fr] items-center gap-3">
          <input
            type="checkbox"
            checked={isSelected}
            className="w-4 h-4 mt-2 cursor-pointer accent-[#C92127]"
            onChange={handleToggleSelectItem}
          />
          <Link to={path} state={state}>
            <img
              src={item.image}
              alt={item.name}
              loading='lazy'
              className="w-auto h-[119px] object-cover rounded"
            />
          </Link>
          <div className="flex flex-col justify-between h-full">
            <Link to={path} state={state}>
              <p className="text-sm font-medium line-clamp-3" title={item.name}>{item.name}</p>
            </Link>
            <div className="flex items-center gap-2">
              <div className="font-semibold text-base">
                <span>{item.price.toLocaleString()} đ</span>
              </div>
              <div className="line-through text-gray-400 text-xs">
                <span>{item.original_price.toLocaleString()} đ</span>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-[2fr_2fr_1fr] items-center">
          <QuantitySelectorShare
            quantity={localQty}
            onIncrease={handleIncrease}
            onDecrease={handleDecrease}
            isLoading={isLoadingQty}
          />

          <div className="text-center px-1">
            <span className="text-[#C92127] font-bold">
              {totalPrice.toLocaleString()} đ
            </span>
          </div>

          <div className="text-center">
            <i
              className="ico_trash inline-block cursor-pointer"
              onClick={() => handleRemove(item.product_id)}
            />
          </div>
        </div>
      </div>
    );
  }
);

export default CartItemC;
