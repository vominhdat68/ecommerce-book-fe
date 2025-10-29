import React from "react";
import { Link } from "react-router-dom";
import type { CategoryMenuItem } from "@/features/home/types/home.props";

const BrandCard: React.FC<CategoryMenuItem> = ({ category_url, name, image_src }) => {
  return (
    <Link
      to={category_url}
      className='flex flex-col items-center justify-center'
    >
      <img src={image_src} alt={name} className="max-w-[114px] object-contain" />
    </Link>
  );
};

export default BrandCard;