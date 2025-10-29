// components/AddToCartPopup.tsx (simple version)
import React, { useEffect } from 'react';

interface AddToCartPopupProps {
    isVisible: boolean;
    onClose: () => void;
    duration?: number;
}

export const AddToCartPopup: React.FC<AddToCartPopupProps> = ({
    isVisible,
    onClose,
    duration = 2000,
}) => {
    useEffect(() => {
        if (!isVisible) return;
        const timer = setTimeout(onClose, duration);
        return () => clearTimeout(timer);
    }, [isVisible, duration, onClose]);

    if (!isVisible) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className=" bg-black/50 bg-opacity-30 rounded p-8 max-w-xs mx-4 transform transition-all duration-300 scale-100">
                {/* Success Icon - Center */}
                <div className="flex justify-center mb-4">
                    <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center">
                        <svg
                            className="w-10 h-10 text-green-600"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M5 13l4 4L19 7"
                            />
                        </svg>
                    </div>
                </div>

                {/* Message - Below icon */}
                <div className="text-center">
                    <p className="text-lg font-bold text-white">
                        Sản phẩm đã được thêm vào Giỏ hàng
                    </p>
                </div>

                {/* Simple progress bar không cần animation */}
                <div className="mt-6 w-full bg-gray-200 rounded-full h-1">
                    <div className="bg-green-500 h-1 rounded-full" />
                </div>
            </div>
        </div>
    );
};