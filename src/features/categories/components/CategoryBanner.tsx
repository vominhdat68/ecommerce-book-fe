import React from "react";

interface CategoryBannerProps {
  bannerImages?: string[]; // danh sách hình ảnh banner (có thể là 1 hoặc nhiều)
}

const bannerImages = [
    
]

const CategoryBanner: React.FC<CategoryBannerProps> = ({ bannerImages = [] }) => {
  if (!bannerImages.length) return null;

  return (
    <div className="w-full mb-4">
      {/* Nếu có nhiều banner → hiển thị dạng grid hoặc slider */}
      <div
        className={`grid ${
          bannerImages.length > 1 ? "grid-cols-2 gap-3" : "grid-cols-1"
        }`}
      >
        {bannerImages.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Banner ${index + 1}`}
            className="w-full rounded-lg shadow-sm object-cover"
          />
        ))}
      </div>
    </div>
  );
};

export default CategoryBanner;
