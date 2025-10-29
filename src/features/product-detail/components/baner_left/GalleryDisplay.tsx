import { useState } from "react";

type GalleryDisplayProps = {
  images: string[];
  maxThumbnails?: number;
  onImageClick: (index: number) => void; // Thay đổi thành onImageClick với index
  onThumbClick?: (index: number) => void; // Thêm prop optional cho thumb click
};

const GalleryDisplay: React.FC<GalleryDisplayProps> = ({
  images,
  maxThumbnails = 4,
  onImageClick,
  onThumbClick,
}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const visibleThumbs = images.slice(0, maxThumbnails);

  const handleMainImageClick = () => {
    onImageClick(activeIndex); // Truyền index hiện tại
  };

  const handleThumbClick = (index: number) => {
    setActiveIndex(index);
    onThumbClick?.(index); // Gọi callback nếu có
  };

  const handleMoreButtonClick = () => {
    onImageClick(activeIndex); // Mở gallery từ ảnh hiện tại
  };

  return (
    <>
      {/* Ảnh chính */}
      <div
        className="relative rounded-lg overflow-hidden cursor-pointer"
        onClick={handleMainImageClick}
      >
        <img
          src={images[activeIndex]}
          alt={`main-${activeIndex}`}
          className="h-[450px] w-[450px] object-contain"
        />
      </div>

      {/* Thumbnails */}
      <div className="flex gap-2 my-2 justify-center">
        {visibleThumbs.map((img, index) => (
          <div
            key={index}
            className={`relative rounded-md overflow-hidden cursor-pointer
                w-[84px] h-[84px] border border-[#FFFFFF] px-3
                ${activeIndex === index && "!border-[#2489F4]"}`}
            onMouseEnter={() => setActiveIndex(index)}
            onClick={() => handleThumbClick(index)}
          >
            <img
              src={img}
              alt={`thumb-${index}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}

        {/* Nếu còn ảnh ẩn thì hiển thị nút +N */}
        {images.length > maxThumbnails && (
          <div
            className="
      relative w-[84px] h-[84px] 
      rounded-md overflow-hidden cursor-pointer
      border border-[#FFFFFF] hover:border-[#C92127] transition-all
    "
            onClick={handleMoreButtonClick}
          >
            {/* Ảnh nền nằm dưới lớp phủ */}
            <img
              src={images[maxThumbnails]} // ảnh tiếp theo ngay sau nhóm thumbnail hiển thị
              alt="more-thumbnail"
              className="w-full h-full object-cover"
            />

            {/* Lớp phủ mờ hiển thị +N */}
            <div className="
      absolute inset-0 bg-black/60 
      flex items-center justify-center 
      text-white text-lg font-semibold
      hover:text-[#C92127] transition-colors
    ">
              +{images.length - maxThumbnails}
            </div>
          </div>
        )}

      </div>
    </>
  );
};

export default GalleryDisplay;