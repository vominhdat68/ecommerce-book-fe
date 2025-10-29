import React, { useState } from "react";

export type PromotionTagProps = {
  id: number;
  title: string;
  type: keyof typeof PROMOTION_STYLE_MAP;
  popup: {
    programTitle?: string;
    expireDate: string;
    details: string[];
  };
};
// PromotionTag.tsx
const PROMOTION_STYLE_MAP = {
  discount: {
    backgroundColor: 'bg_ico_promo_tag_yellow',
    iconUrl: 'ico_promo_sale',
  },
  bank: {
    backgroundColor: 'bg_ico_promo_tag_blu',
    iconUrl: 'ico_promo_pay',
  },
} as const;


const PromotionTag: React.FC<PromotionTagProps> = ({ id, title, type, popup }) => {
  const [showPopup, setShowPopup] = useState(false);
  const { backgroundColor, iconUrl } = PROMOTION_STYLE_MAP[type];

  return (
    <div
      className="relative select-none "
      onMouseEnter={() => setShowPopup(true)}
      onMouseLeave={() => setShowPopup(false)}
    >

      {/* Main Content */}
      <div className=" bg_promo flex items-center !w-[170px] !h-[40px]">
        <div className={`${backgroundColor} flex items-center justify-center !w-[28px] !h-[34px] mx-2`}>
          <i className={`!w-[20px] !h-[20px] ${iconUrl}`} />
        </div>

        <span className="text-[13px] ml-1 text-gray-800 font-semibold truncate">
          {title}
        </span>

      </div>


      {/* Popup on Hover */}
      {showPopup && (
        <div className="absolute z-10  left-0 w-[260px] bg-white shadow-lg rounded-md border border-gray-200 p-3 animate-fadeIn">
          <div className="font-semibold text-[14px] mb-1 text-gray-800">
            {popup.programTitle || "Chương trình ưu đãi"}
          </div>
          <div className="text-[12px] text-gray-500 mb-2">
            Hạn sử dụng: <span className="font-medium text-gray-700">{popup.expireDate}</span>
          </div>
          <ul className="list-disc pl-4 text-[13px] text-gray-700 space-y-1">
            {popup.details.map((d, idx) => (
              <li key={idx}>{d}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default PromotionTag;
