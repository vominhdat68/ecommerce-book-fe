import React, { useState } from "react";

import ico_coupon from '@/assets/images/cart/ico_coupon.svg'
import ico_right_arrow from '@/assets/images/cart/ico_right-arrow.svg'
import ico_info from '@/assets/images/cart/ico_info.svg'
import ico_alert_grey from '@/assets/images/cart/ico_alert-grey.svg'

import { Link } from "react-router-dom";



interface PromotionCardProps {
    title: string;
    description: string;
    expiryDate: string;
    remainingAmount: number; // số tiền còn thiếu để áp dụng
    onBuyMore?: () => void;
}

const PromotionCard: React.FC<PromotionCardProps> = ({
    title,
    description,
    expiryDate,
    remainingAmount,
    onBuyMore,
}) => {
    const [hoverAlert, setHoverAlert] = useState(false);

    return (
        <div className="flex flex-col rounded-lg bg-white p-3 mb-2">
            {/* Header */}
            <div className="flex justify-between items-center font-normal text-sm pb-4">
                <div className="flex items-center">
                    <img src={ico_coupon} />
                    <span className="ml-2 text-[#2F80ED] uppercase">Khuyến mãi</span>
                </div>
                <div className="flex text-[#2F80ED] cursor-pointer" onClick={() => window.alert('Chưa có')}>
                    <span className="mr-2">Xem thêm</span>
                    <img src={ico_right_arrow} />
                </div>
            </div>
            <hr className="w-95 mx-auto border-b border-gray-200" />
            {/* Nội dung */}
            <div className="promotion-content py-4">
                <div className="flex justify-between font-semibold text-base">
                    <h2>{title}</h2>
                    <div>
                        <img className="cursor-pointer" src={ico_info} onClick={() => window.alert('Chưa có')} />
                    </div>
                </div>

                <div className="mr-15">
                    <p className="text-base/6 line-clamp-2 wrap-break-word ">{description}</p>
                </div>

                <div className="process-bar flex justify-between items-center">
                    <div className="flex flex-col">
                        <div className="inline-block text-sm leading-none mt-2 mb-1 ">
                            <span>HSD: {expiryDate}</span>
                        </div>
                        <div className="w-60 gray-200 rounded">
                            <div
                                className="text-ml bg-[#B6D3F9] h-[6px] rounded"
                                style={{ width: `${Math.min(100, (remainingAmount / 130000) * 100)}%` }}
                            />
                        </div>
                        <div className="text-xs leading-none text-gray-500 mt-[2px]">
                            <span>Mua thêm {remainingAmount.toLocaleString("vi-VN")} đ</span>
                        </div>
                    </div>

                    <button
                        className="px-3 py-2 rounded-md bg-[#007AFF] text-white text-sm cursor-pointer hover:bg-blue-600"
                        // onClick={onBuyMore}
                        onClick={() => window.alert('Chưa có')}
                    >
                        Mua thêm
                    </button>
                </div>

            </div>
            <hr className="w-95 mx-auto border-b border-gray-200" />
            <div className="flex text-ml text-[#7A7E7F] mt-2 ">
                <p className="w-60 line-clamp-1 mr-2">Có thể áp dụng đồng thời nhiều mã</p>
                <div className="group-alert relative">
                    <img
                        src={ico_alert_grey}
                        onMouseEnter={() => setHoverAlert(true)}
                        onMouseLeave={() => setHoverAlert(false)}
                    />

                    <div
                        className={`flex flex-col text-white text-center bg-[#222] w-[235px] py-2 px-4 rounded-sm
                            absolute left-1/2 -translate-x-1/2 top-7
                            transition-opacity duration-300 ease-out
                            ${hoverAlert ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}
                            `}
                    >
                        <span>Áp dụng tối đa 1 mã giảm giá</span>
                        <span>và 1 mã freeship</span>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default PromotionCard;
