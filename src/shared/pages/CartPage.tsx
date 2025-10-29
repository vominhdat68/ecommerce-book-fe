import React from "react";
import SectionContainer from "@/shared/components/SectionContainer";
import CartEmpty from "@/features/cart/components/CartEmpty";
import CartHeaderLayout from "@/features/cart/layouts/CartHeaderLayout";
import CartListLayout from "@/features/cart/layouts/CartListLayout";
import CartSummaryLayout from "@/features/cart/layouts/CartSummaryLayout";
import { useCartItems } from '@/features/cart/hook/useItemsCart';
import CartPageSkeleton from "@/shared/components/skeleton-screen/CartPageSkeleton";

const CartPage: React.FC = () => {
  const { itemsCount, isLoading } = useCartItems();
  const hasItems = itemsCount > 0;

  if (isLoading) {
    return <CartPageSkeleton />;
  }

  const getContentLayout = () => {
    if (!hasItems) {
      return <CartEmpty />;
    }

    return (
      <div className="grid grid-cols-[4fr_2fr] gap-3">
        <CartListLayout />
        <CartSummaryLayout />
      </div>
    );
  };

  return (
    <SectionContainer bgColor="none">
      <div className="flex flex-col space-y-4">
        <CartHeaderLayout itemsCount={itemsCount} />
        {getContentLayout()}
      </div>
    </SectionContainer>
  );
};

export default CartPage;