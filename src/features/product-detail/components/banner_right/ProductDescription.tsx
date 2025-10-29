import React, { useState, useRef, useEffect } from "react";

type ProductDescriptionProps = {
  title?: string;
  content: string; // HTML content
  maxHeight?: number;
};

const ProductDescription: React.FC<ProductDescriptionProps> = ({
  title = "Mô tả sản phẩm",
  content,
  maxHeight = 300,
}) => {
  const [expanded, setExpanded] = useState(false);
  const [isOverflowing, setIsOverflowing] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (contentRef.current) {
      const el = contentRef.current;
      setIsOverflowing(el.scrollHeight > maxHeight);
    }
  }, [content, maxHeight]);

  return (
    <div className="bg-white rounded-lg p-4">
      <h2 className="text-lg font-semibold mb-3">{title}</h2>

      <div
        ref={contentRef}
        className={`relative overflow-hidden transition-all ease-in-out duration-800 ${
          expanded ? "max-h-[1500px] opacity-100" : "opacity-95"
        }`}
        style={{
          maxHeight: expanded ? "1500px" : `${maxHeight}px`,
        }}
      >
        {/* Nội dung mô tả HTML */}
        <div
          className="text-[14px] text-gray-800 leading-relaxed"
          dangerouslySetInnerHTML={{ __html: content }}
        />

        {/* Gradient mờ */}
        {!expanded && isOverflowing && (
          <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-white via-white/80" />
        )}
      </div>

      {/* Nút Xem thêm / Rút gọn */}
      {isOverflowing && (
        <div className="flex justify-center mt-3">
          <button
            onClick={() => setExpanded(!expanded)}
            className="text-[#2489F4] text-sm font-medium flex items-center cursor-pointer"
          >
            {expanded ? "Rút gọn" : "Xem thêm"}
          </button>
        </div>
      )}
    </div>
  );
};

export default ProductDescription;
