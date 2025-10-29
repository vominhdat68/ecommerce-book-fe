import React from "react";

type Props = {
  title: string;
  actionLabel?: string;
  onActionClick?: () => void;
};

const SectionHeader: React.FC<Props> = ({
  title,
  actionLabel,
  onActionClick,
}) => {
  return (
    <div className="flex items-center gap-4">
      <h2 className="text-[18px] font-semibold text-gray-800">{title}</h2>

      {actionLabel && (
        <div className="flex gap-1 cursor-pointer">
          <span
            onClick={onActionClick}
            className="text-[#2489F4] text-[15px]"
          >
            {actionLabel}
          </span>
          <span className="ico_right_arrow_blue text-[13px]"/>
        </div>

      )}
    </div>
  );
};

export default SectionHeader;