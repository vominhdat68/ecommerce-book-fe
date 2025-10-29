import React from "react";

export type BannerVariant = "main" | "side" | "promotional";

interface BannerProps {
    imageUrl: string;
    link: string;
    alt?: string;
    tags?: string[]; // các nhãn ví dụ "Giảm 50%", "Ưu đãi lớn"
    variant?: BannerVariant; // phân loại để style khác nhau
    className?: string; // tùy chỉnh css thêm
    rounded?: true;
}

const BannerItem: React.FC<BannerProps> = ({
    imageUrl,
    link,
    alt,
    tags = [],
    variant = "main",
    className = "",
    rounded = true,
}) => {
    const baseStyle =
        "block hover:opacity-93 transition-all";

    const variantStyle: Record<BannerVariant, string> = {
        main: "w-full h-full", // banner chính lớn
        side: "w-[380px] h-[156px]", // banner phụ bên cạnh
        promotional: "w-[290px] h-auto", // banner quảng cáo nhỏ
    };

    return (
        <a href={link} className={`${baseStyle} ${variantStyle[variant]} ${className}`}>
            <img
                src={imageUrl}
                alt={alt}
                className={`w-full h-full object-cover ${rounded && 'rounded-lg'}`}
            />
        </a>
    );
};

export default BannerItem;
