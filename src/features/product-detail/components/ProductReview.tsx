import React, { useState } from "react";
import ReviewSummary from "./review/ReviewSummary";
import ReviewList from "./review/ReviewList";


export type ReviewType = {
  id: string;
  nickname: string;
  rating: number; // từ 0 - 100
  title: string;
  detail: string;
  countLike: number;
  created_at: string;
};

type ProductReviewProps = {
  productId: string;
  averageRating: number;
  totalReviews: number;
  ratingsDistribution: number[]; // [5sao,4sao,3sao,2sao,1sao]
  reviews: ReviewType[];
  isLoggedIn?: boolean;
};

const ProductReview: React.FC<ProductReviewProps> = ({
  productId,
  averageRating,
  totalReviews,
  ratingsDistribution,
  reviews,
  isLoggedIn,
}) => {
  const [activeTab, setActiveTab] = useState<"newest" | "favorite">("newest");

  return (
    <div className="bg-white rounded-lg p-4">
      <h2 className="text-lg font-semibold mb-4">Đánh giá sản phẩm</h2>

      <ReviewSummary
        averageRating={averageRating}
        totalReviews={totalReviews}
        ratingsDistribution={ratingsDistribution}
        isLoggedIn={isLoggedIn}
      />
 
        <ReviewList reviews={reviews} activeTab={activeTab} />
    </div>
  );
};

export default ProductReview;
