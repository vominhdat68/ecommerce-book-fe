import type { ProductItem } from "@/features/search/types/search.type";

type Props = {
    title: string;                       // tiêu đề
    headerIconClass?: string;            // icon ở header
    refreshIconClass?: string;           // icon refresh
    gridAxisContent?: string;
    flexAxisItem?: string;
    sizeImage?: string         // class tailwind grid-cols-x
    items: ProductItem[];                          // danh sách item
    onReload?: () => void;
    onClickItem: (keyword: string) => void;
};

const SearchSection: React.FC<Props> = ({
    title,
    headerIconClass,
    refreshIconClass,
    gridAxisContent,
    flexAxisItem,
    sizeImage,
    items,
    onReload,
    onClickItem,
}) => {
  
    if (!items.length) {
    return null;
  }

    return (
        <div className="my-4 pt-4 border-t-2 border-[#dadde1]">
            <div className="flex justify-between items-center mb-2">
                <div className='flex items-center gap-1'>
                    <i className={headerIconClass}/>
                    <h3 className="text-sm font-semibold text-gray-800">{title}</h3>
                </div>
                {
                    refreshIconClass && <i onClick={onReload} className={`cursor-pointer !size-5 ${refreshIconClass}`}/>
                }
                
            </div>

            <div className= {`grid gap-2 ${gridAxisContent}`}>
                {items.map((item) => (
                    <div
                        key={item.id}
                        onClick={() => onClickItem(item.name)}
                        className={`flex ${flexAxisItem} items-center gap-2 p-2 cursor-pointer rounded-md hover:shadow-md`}>
                       
                        <img
                            src={item.img_src}
                            alt={item.name}
                            loading="lazy"
                            className={`${sizeImage} object-cover`}
                        />
                        <span className="text-xs text-gray-700 text-center line-clamp-2 break-words" title={item.name}>{item.name}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SearchSection;