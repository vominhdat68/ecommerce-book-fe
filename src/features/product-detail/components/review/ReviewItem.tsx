import React, { useState, useRef, useEffect } from "react";
import type { ReviewType } from "@/features/product-detail/components/ProductReview";
import Rating from "@/shared/components/Rating";

const ReviewItem: React.FC<{ review: ReviewType }> = ({ review }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isOverflow, setIsOverflow] = useState(false);
  const textRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const el = textRef.current;
    if (el) {
      // Kiểm tra nếu chiều cao thực tế > chiều cao giới hạn 4 dòng
      const lineHeight = parseFloat(getComputedStyle(el).lineHeight);
      const maxHeight = lineHeight * 4;
      if (el.scrollHeight > maxHeight) {
        setIsOverflow(true);
      }
    }
  }, [review.detail]);

  return (
    <div className="flex pb-4">
      {/* Cột bên trái */}
      <div className="w-[150px] shrink-0">
        <div className="flex items-center gap-3 mb-2">
          <span className="text-[14px] font-semibold">{review.nickname}</span>
        </div>
        <div className="flex mb-1">
          <Rating
            rating={{
              rating_summary: 10,
              reviews_count: 10,
            }}
            configUI={{
              sizeStar: "size2",
              showReviewCount: false,
              showDivider: false,
            }}
          />
        </div>
      </div>

      {/* Nội dung */}
      <div className="flex-1">
        <p
          ref={textRef}
          className={`text-gray-700 text-[15px] transition-all duration-300 ${
            isExpanded
              ? "line-clamp-none"
              : "overflow-hidden"
          }`}
          style={{
            display: "-webkit-box",
            WebkitLineClamp: isExpanded ? "unset" : 4,
            WebkitBoxOrient: "vertical",
          }}
        >
          {review.detail}
        </p>

        {/* Chỉ hiển thị nút khi text dài hơn 4 dòng */}
        {isOverflow && (
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-[#2489F4] text-[15px] mt-1 cursor-pointer"
          >
            {isExpanded ? "Thu gọn" : "Xem thêm"}
          </button>
        )}

        <div className="flex gap-4 mt-2 text-sm text-gray-500">
          <button className="cursor-pointer">
            👍 Thích ({review.countLike})
          </button>
          <button className="cursor-pointer">⚠️ Báo cáo</button>
          <span className="text-xs bg-blue-100 text-blue-700 px-2 py-0.5 rounded">
            {review.created_at}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ReviewItem;
