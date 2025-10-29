// features/product-detail/hooks/useQuantity.ts
import { useState, useCallback } from 'react';

interface UseQuantityProps {
    initialQuantity: number;
    maxQuantity: number;
    minQuantity?: number;
    onQuantityChange?: (quantity: number) => void;
}

export const useQuantity = ({
    initialQuantity = 1,
    maxQuantity,
    minQuantity = 1,
    onQuantityChange
}: UseQuantityProps) => {
    const [quantity, setQuantity] = useState<number>(initialQuantity);

    const increase = useCallback(() => {
        const newQuantity = Math.min(quantity + 1, maxQuantity);
        setQuantity(newQuantity);
        onQuantityChange?.(newQuantity);
    }, [quantity, maxQuantity, onQuantityChange]);

    const decrease = useCallback(() => {
        const newQuantity = Math.max(quantity - 1, minQuantity);
        setQuantity(newQuantity);
        onQuantityChange?.(newQuantity);
    }, [quantity, minQuantity, onQuantityChange]);

    // Thêm hàm xử lý thay đổi trực tiếp
    const handleDirectChange = useCallback((newQuantity: number) => {
        // Tự động điều chỉnh nếu vượt quá max
        const adjustedQuantity = Math.min(Math.max(newQuantity, minQuantity), maxQuantity);
        setQuantity(adjustedQuantity);
        onQuantityChange?.(adjustedQuantity);
    }, [minQuantity, maxQuantity, onQuantityChange]);

    return {
        quantity,
        setQuantity,
        increase,
        decrease,
        handleDirectChange
    };
};