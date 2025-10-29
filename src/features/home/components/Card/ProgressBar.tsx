import React from "react";
import type { ProgressBarItem } from "@/features/home/types/home.props";
import { formatNumberCompact } from "@/shared/utils/helper";

const ProgressBar: React.FC<ProgressBarItem> = ({ product_id, qty_sold = 0, percent = 0 }) => {
  const CHECKPOINT_PERCENT = 85; // Mốc hiển thị "Sắp hết"

  // Chọn màu nền tùy theo có bán hay chưa
  const bgTrack = qty_sold > 0 ? "bg-[#F1B1B0]" : "bg-[#CDCFD0]";
  const progressWidth = Math.min(Math.max(percent, 0), 100); // clamp 0–100

  return (
    <div
      key={product_id}
      className={`w-full ${bgTrack} rounded-full mt-3 relative h-3.5 overflow-hidden dark:bg-gray-400`}
    >
      {/* Thanh tiến trình */}
      <div
        className="bg-[#D22121] h-3.5 transition-all duration-700 ease-in-out rounded-l-full"
        style={{ width: `${progressWidth}%` }}
      />

      {/* Label giữa thanh */}
      <span className="absolute inset-0 flex items-center justify-center text-white text-[11px] font-medium">
        {progressWidth >= CHECKPOINT_PERCENT
          ? "Sắp hết"
          : `Đã bán ${formatNumberCompact(qty_sold)}`}
      </span>
    </div>
  );
};

export default ProgressBar;