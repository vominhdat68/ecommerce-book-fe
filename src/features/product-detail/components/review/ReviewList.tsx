import React from "react";
import type { ReviewType } from "@/features/product-detail/components/ProductReview";
import ReviewItem from "./ReviewItem";

type Props = {
  reviews: ReviewType[];
  activeTab: "newest" | "favorite";
};

const ReviewList: React.FC<Props> = ({ reviews }) => {
  if (!reviews.length)
    return <p className="text-gray-500 text-sm">Chưa có đánh giá nào.</p>;

  return (
    <div className=" space-y-6">
      {reviews.map((review) => (
        <ReviewItem key={review.id} review={review} />
      ))}
    </div>
  );
};

export default ReviewList;