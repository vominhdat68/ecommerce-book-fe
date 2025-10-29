import React from "react";
import { formatNumberCompact } from "@/shared/utils/helper";
import type { ProductRating } from "@/features/home/types/home.props";

type SizeStar = 'size1' | 'size2';
type ConfigUI = {
  /** Hiển thị text sau số lượng đánh giá (VD: 'đánh giá') */
  enableText?: 'đánh giá' | '';
  /** Ẩn/hiện phần text số lượng đánh giá */
  showReviewCount?: boolean;
  /** Ẩn/hiện dấu phân cách '|' */
  showDivider?: boolean;
  /** Kích thước sao (px), mặc định 76 */
  sizeStar?: SizeStar;
  /** Chiều cao sao (px), mặc định 16 */
  starHeight?: number;
  /** CSS class bổ sung cho text đánh giá */
  classNameReviews?: string;
  /** Class nền sao xám */
  grayStarClass?: string;
  /** Class nền sao vàng */
  yellowStarClass?: string;
  /** Class wrapper */
  wrapperClass?: string;
};

interface Props {
  rating: ProductRating;
  configUI?: ConfigUI;
}

/**
 * Rating Component – có thể kế thừa / override dễ dàng
 */
const Rating: React.FC<Props> = ({ rating, configUI }) => {

  if (rating?.rating_summary == null || rating?.reviews_count == null) return null;
  const stars = ((rating.rating_summary || 0) / 100) * 5;

  // --- Default config ---
  const defaultConfig: ConfigUI = {
    enableText: "",
    showReviewCount: true,
    showDivider: true,
    sizeStar: 'size1',
    classNameReviews: "text-[10px]",
    grayStarClass: "ico_star_gray",
    yellowStarClass: "ico_star_yellow",
    wrapperClass: "flex items-center",
  };

  // --- Merge config (ưu tiên configUI) Required<ConfigUI> ---
  const config: ConfigUI = {
    ...defaultConfig,
    ...configUI,
  };

  const sizeStarMap: Record<SizeStar, string> = {
    size1: 'w-[80px] h-[16px]',
    size2: 'w-[60px] h-[12px]',
  };

  return (
    <div className={config.wrapperClass}>
      {/* Sao đánh giá */}
      <div
        className={`overflow-hidden ${sizeStarMap[config.sizeStar || 'size1']}`}
        title={`${stars.toFixed(1)} sao`}
      >
        <div className={`${config.grayStarClass}`}>
          <div className={` overflow-hidden ${config.yellowStarClass}`}
            style={{ width: `${rating.rating_summary || 0}%` }} />
        </div>
      </div>

      {/* Text đánh giá */}
      {config.showReviewCount && (
        <span
          className={`ml-1 ${config.classNameReviews} ${config.enableText ? "text-[#F6A500]" : "text-gray-600"
            }`}
        >
          ( {formatNumberCompact(rating.reviews_count || 0)} {config.enableText})
        </span>
      )}

      {/* Dấu phân cách */}
      {config.showDivider && <span className="mx-2 text-gray-300">|</span>}
    </div>
  );
};

export default Rating;
