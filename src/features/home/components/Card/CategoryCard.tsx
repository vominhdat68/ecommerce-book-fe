import { Link } from "react-router-dom";
import type { CategoryMenuItem } from "@/features/home/types/home.props";

type Size = 'size1' | 'size2';
type Props = {
    item: CategoryMenuItem;

    /** Kích thước img icon (px) */
    sizeIcon?: Size;
    sizeTitle?: Size;
    hover?: boolean;
};

const CategoryCard: React.FC<Props> = ({
    item,
    sizeIcon = 'size1',
    sizeTitle = 'size1',
    hover = false,

}) => {

    const sizeIconMap: Record<Size, string> = {
        size1: 'w-[120px] h-[120px]',
        size2: 'w-[46px] h-[46px]',
    };
    const sizeTitleMap: Record<Size, string> = {
        size1: 'text-ms leading-[1.4rem] min-h-[2.8rem] max-h-[2.8rem]',
        size2: 'text-[14px]',
    };
    const hoverCard = hover ? 'text-[#646464] hover:text-[#C92127] transition-colors duration-300' : '';


    return (
        <Link
            to={item.category_url}
            className={`flex flex-col items-center justify-center bg-white 
                ${hoverCard}`}
        >
            <div className={`flex items-center justify-center ${sizeIconMap[sizeIcon || 'size1']}`}>
                <img
                    src={item.image_src}
                    alt={item.name}
                    loading="lazy"
                    className="object-contain"
                />
            </div>
            <p
                className={`mt-2 mx-2 text-center line-clamp-2 
                    ${sizeTitleMap[sizeTitle || 'size1']}
                    `}
            >
                {item.name}
            </p>
        </Link>
    );
};

export default CategoryCard;