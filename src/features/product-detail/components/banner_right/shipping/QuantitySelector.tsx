// components/QuantitySelector.tsx
import React from "react";
import QuantitySelectorShare from "@/shared/components/QuantitySelectorShare";
import { useQuantity } from "@/features/product-detail/hooks/useQuantity";

interface QuantitySelectorProps {
    productId: string;
    maxQuantity?: number;
    quantity: number;
    onQuantityChange: (quantity: number) => void;
    isOutOfStock?: boolean;
}

const QuantitySelector: React.FC<QuantitySelectorProps> = ({
    maxQuantity = 100,
    quantity,
    onQuantityChange,
    isOutOfStock = false
}) => {
    const {
        increase,
        decrease,
        handleDirectChange // Thêm hàm xử lý thay đổi trực tiếp
    } = useQuantity({
        initialQuantity: quantity,
        maxQuantity,
        onQuantityChange
    });

    return (
        <div className="flex items-center gap-2 mt-5 pt-3 border-t border-gray-200">
            <span className="block w-[125px] text-[14px] text-gray-800 font-medium">
                Số lượng:
            </span>
            <QuantitySelectorShare
                quantity={quantity}
                onIncrease={increase}
                onDecrease={decrease}
                onDirectChange={handleDirectChange}
                max={maxQuantity}
                min={1}
                // disabled={isOutOfStock}
            />
            <span className="text-sm text-gray-500 ml-2">
                {maxQuantity > 0 ? `(Tối đa ${maxQuantity})` : '(Hết hàng)'}
            </span>
        </div>
    );
};

export default QuantitySelector;