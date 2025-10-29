import React from "react";
import { useModalPopup } from "@/shared/hooks/useModalPopup";
import Rating from "@/shared/components/Rating";

type Props = {
    averageRating: number;
    totalReviews: number;
    ratingsDistribution: number[];
    isLoggedIn: boolean;
};

const ReviewSummary: React.FC<Props> = ({
    averageRating,
    totalReviews,
    ratingsDistribution,
    isLoggedIn,
}) => {
    const stars = [5, 4, 3, 2, 1];
    const { openPopupModal } = useModalPopup();

    return (
        <div className="flex items-center justify-between pb-4 mb-4 border-b border-gray-200">
            {/* Điểm trung bình */}
            <div className="flex items-center">
                <div className="flex flex-col items-start">
                    <div className="text-3xl font-semibold">{averageRating}/5</div>
                    <div className="flex mb-1">
                        <Rating
                            rating={{
                                rating_summary: 10,
                                reviews_count: 10,
                            }}
                            configUI={{
                                wrapperClass: 'flex flex-col',
                                enableText: 'đánh giá',
                                classNameReviews: '!text-[#7A7E7F] text-sm !ml-0',
                                showDivider: false
                            }}
                        />
                    </div>
                </div>

                {/* Biểu đồ phân bố sao */}
                <div className="ml-3 w-[300px]">
                    {stars.map((s, i) => (
                        <div key={s} className="flex items-center gap-2 mb-1">
                            <span>{s} sao</span>
                            <div className="flex-1 h-2 bg-gray-200 rounded">
                                <div
                                    className="h-full bg-yellow-400 rounded"
                                    style={{ width: `${ratingsDistribution[i]}%` }}
                                />
                            </div>
                            <span className="text-gray-500 text-xs w-10 text-right">
                                {ratingsDistribution[i]}%
                            </span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Gợi ý đăng nhập */}
            {!isLoggedIn && (
                <div className="flex-1 text-center text-sm text-gray-500">
                    Chỉ có thành viên mới có thể viết nhận xét.{" "}
                    <span className="text-[#2489F4] cursor-pointer" onClick={() => openPopupModal('LOGIN')}>Đăng nhập</span> hoặc{" "}
                    <span className="text-[#2489F4] cursor-pointer" onClick={() => openPopupModal('REGISTER')}>Đăng ký</span>
                </div>
            )}
        </div>
    );
};

export default ReviewSummary;