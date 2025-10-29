import React, { useState, useEffect } from "react";

import ico_minus from '@/assets/images/cart/ico_minus.svg';
import ico_plus from '@/assets/images/cart/ico_plus.svg';


// Nhập số trực tiếp: Người dùng có thể click vào số lượng để nhập trực tiếp
// Chỉ cho phép số: Chỉ accept ký tự số, không cho phép nhập chữ
// Tự động điều chỉnh:
// Nếu nhập rỗng → mặc định là 1
// Nếu nhập nhỏ hơn min → set về min
// Nếu nhập lớn hơn max → set về max


type QuantitySelectorProps = {
    quantity: number;
    onIncrease: () => void;
    onDecrease: () => void;
    onDirectChange?: (quantity: number) => void; // Thêm prop mới để xử lý thay đổi trực tiếp
    isLoading?: boolean;
    min?: number;
    max?: number;
};

const QuantitySelectorShare: React.FC<QuantitySelectorProps> = ({
    quantity,
    onIncrease,
    onDecrease,
    onDirectChange,
    isLoading = false,
    min = 1,
    max = 99,
}) => {
    const [inputValue, setInputValue] = useState<string>(quantity.toString());
    const [isEditing, setIsEditing] = useState<boolean>(false);

    // Đồng bộ inputValue khi quantity thay đổi từ bên ngoài
    useEffect(() => {
        if (!isEditing) {
            setInputValue(quantity.toString());
        }
    }, [quantity, isEditing]);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;

        // Chỉ cho phép nhập số
        if (value === '' || /^\d+$/.test(value)) {
            setInputValue(value);
        }
    };

    const handleInputBlur = () => {
        setIsEditing(false);

        if (inputValue === '') {
            // Nếu input rỗng, set về giá trị mặc định là 1
            setInputValue('1');
            onDirectChange?.(1);
            return;
        }

        let newQuantity = parseInt(inputValue, 10);

        // Đảm bảo số lượng không nhỏ hơn min
        if (newQuantity < min) {
            newQuantity = min;
        }

        // Đảm bảo số lượng không vượt quá max
        if (newQuantity > max) {
            newQuantity = max;
        }

        // Cập nhật giá trị và gọi callback
        setInputValue(newQuantity.toString());

        // Chỉ gọi callback nếu số lượng thực sự thay đổi
        if (newQuantity !== quantity) {
            onDirectChange?.(newQuantity);
        }
    };

    const handleInputFocus = () => {
        setIsEditing(true);
    };

    return (
        <div className="flex justify-center">
            <div
                className={`flex items-center text-center border border-[#e0e0e0] rounded-md transition-opacity 
                    ${isLoading ? "opacity-50 pointer-events-none" : ""
                    }`}
            >
                {/* Nút giảm */}
                <button
                    type="button"
                    onClick={onDecrease}
                    disabled={quantity <= min || isLoading}
                    className="flex items-center justify-center w-8 h-8 cursor-pointer hover:bg-gray-100 disabled:opacity-50"
                >
                    <img src={ico_minus} alt="Decrease quantity" className="w-3 h-3" />
                </button>

                {/* Input số lượng - có thể chỉnh sửa trực tiếp */}
                <input
                    type="text"
                    value={inputValue}
                    onChange={handleInputChange}
                    onBlur={handleInputBlur}
                    onFocus={handleInputFocus}
                    className="w-12 px-1 font-semibold text-center border-none outline-none select-none"
                    inputMode="numeric"
                    pattern="[0-9]*"
                    disabled={isLoading}
                />

                {/* Nút tăng */}
                <button
                    type="button"
                    onClick={onIncrease}
                    disabled={quantity >= max || isLoading}
                    className="flex items-center justify-center w-8 h-8 cursor-pointer hover:bg-gray-100 disabled:opacity-50"
                >
                    <img src={ico_plus} alt="Increase quantity" className="w-3 h-3" />
                </button>
            </div>
        </div>
    );
};

export default QuantitySelectorShare;