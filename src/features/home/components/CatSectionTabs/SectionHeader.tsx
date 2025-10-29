import React from "react";

export type SectionHeaderProps = {
  title?: string;
  iconURL?: string;
  bgColor?: string; // Ví dụ: "#FCDDEF" hoặc "rgba(255,255,255,0.9)"
  bgImage?: string; // URL ảnh nền
  uppercase?: boolean;
  padding?: string;
};

export type UIHeaderProps = {
  className?: string;
  sizeIcon?: "w-[24px] h-[24px]" | "w-[34px] h-[34px]";
  colorTitle?: '#212121' | '#FFFFFF';
};

interface Props {
  sectionHeader?: SectionHeaderProps;
  ui?: UIHeaderProps;
}

const DEFAULT_SECTION_HEADER: SectionHeaderProps = {
  bgColor: "#FFFFFF",
  padding: "p-3",
  uppercase: false,
};

const DEFAULT_UI: UIHeaderProps = {
  sizeIcon: "w-[24px] h-[24px]",
  colorTitle: "#212121"
};

const SectionHeader: React.FC<Props> = ({ sectionHeader, ui }) => {
  const mergedSectionHeader = { ...DEFAULT_SECTION_HEADER, ...sectionHeader };
  const mergedUI = { ...DEFAULT_UI, ...ui };

  const { title, iconURL, bgColor, bgImage, padding, uppercase } = mergedSectionHeader;
  const { className, sizeIcon, colorTitle } = mergedUI;

  if (!title && !iconURL) return null;

  // ✅ Xử lý style động
  const style: React.CSSProperties = bgImage
    ? {
      backgroundImage: `url(${bgImage})`,
      backgroundColor: bgColor,
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
    }
    : { backgroundColor: bgColor };

  return (
    <div
      className={`flex items-center gap-2 rounded-t-lg ${padding} ${className || ""}`}
      style={style}
    >
      {iconURL && <img className={sizeIcon} src={iconURL} alt={title || "icon"} />}
      {title && (
        <span
          className={`text-xl font-bold
            ${uppercase ? "uppercase" : ""
            }`}
          style={{ color: colorTitle }}
        >
          {title}
        </span>
      )}
    </div>
  );
};

export default React.memo(SectionHeader);