// CartListLayout.tsx
import React from 'react';

import CartItemC from '@/features/cart/components/CartItem';
import { useCartItems } from '@/features/cart/hook/useItemsCart';

const CartListLayout: React.FC = () => {
  const {
    items,
    itemsCount,
    selectedIds,
    isAllSelected,
    isLoading,
    isError,
    handleSelectAll,
    handleToggleSelect,
  } = useCartItems();

  // Memoize select all change handler
  const handleSelectAllChange = React.useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const isChecked = e.target.checked;
    handleSelectAll(isChecked);
  }, [handleSelectAll]);

  // Hiển thị loading state
  if (isLoading) {
    return (
      <div className="cart-left">
        <div className="bg-white rounded-lg py-8 px-4 text-center">
          <div className="animate-pulse">Đang tải giỏ hàng...</div>
        </div>
      </div>
    );
  }

  // Hiển thị error state
  if (isError) {
  }

  // Hiển thị empty state
  if (itemsCount === 0) {
    return (
      <div className="cart-left">
        <div className="bg-white rounded-lg py-8 px-4 text-center">
          <div className="text-gray-500">Giỏ hàng của bạn đang trống</div>
          <div className="text-sm text-gray-400 mt-2">Hãy thêm sản phẩm vào giỏ hàng</div>
        </div>
      </div>
    );
  }

  return (
    <div className="cart-left">
      <div className="header-items bg-white rounded-lg py-2 px-4 mb-3 text-base font-medium grid grid-cols-[3fr_2fr] items-center">
        <div className="flex items-center gap-3 basis-3/5">
          <input
            type="checkbox"
            className="w-4 h-4 accent-[#C92127]"
            checked={isAllSelected}
            onChange={handleSelectAllChange}
            disabled={itemsCount === 0}
          />
          <span>Chọn tất cả ({itemsCount} sản phẩm)</span>
        </div>
        <div className="flex basis-2/5 text-center">
          <span className='basis-2/5'>Số lượng</span>
          <span className='basis-2/5'>Thành tiền</span>
        </div>
      </div>

      <div className="content-items divide-y divide-[#ededed] bg-white rounded-lg py-2 px-4">
        {items.map((item) => (
          <CartItemC
            key={item.product_id}
            itemId={item.product_id}
            isSelected={selectedIds.includes(item.product_id)}
            onToggleSelect={handleToggleSelect}
          />
        ))}
      </div>
    </div>
  );
};

export default CartListLayout;