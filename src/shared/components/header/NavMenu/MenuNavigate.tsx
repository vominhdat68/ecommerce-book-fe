import React, { useState } from "react";
import { Link } from "react-router-dom";

import categoriesData from "@/shared/data/categories.hardcode.json"
import type { Category } from "@/shared/types/category";

interface Props {
  onClose?: () => void; // Đóng popup khi click vào link
}

const categories: Category[] = categoriesData.categories as Category[];

const MenuNavigate: React.FC<Props> = ({
  onClose
}) => {
  const [hovered, setHovered] = useState<number | string>(categories[0]?.id ?? '');
  const activeCat = categories.find(c => c.id === hovered);

  const handleLinkClick = () => {
    onClose?.(); // Đóng popup khi click vào link
  };

  return (
    <div className="text-sm py-5 bg-white rounded-b-lg">
      <div className="flex cursor-default text-nowrap">
        {/* Menu trái */}
        <div className="p-2 font-bold border-r border-[#CDCFD0] h-[550px]">
          <div className="text-[1.7em] text-[#7A7E7F] mb-3 pl-3">
            <h2>Danh mục sản phẩm</h2>
          </div>
          <ul>
            {/* panel menu cha */}
            {categories.map(cat => (
              <li
                key={cat.id}
                className={`${hovered === cat.id ? 'bg-[#F2F4F5]' : ''} rounded-lg text-[1.23em] text-[#0D0E0F] cursor-pointer`}
                onMouseEnter={() => setHovered(cat.id)}
              >
                <Link className="block p-3 h-full" to={`${cat.url}?category=${cat.id}`}
                  onClick={handleLinkClick}
                >
                  {cat.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Panel phải */}
        <div className="px-5 py-2 w-full">
          {activeCat && (
            <>
              <div className="flex items-center gap-2 font-bold text-[1.7em] text-[#212121] mb-3">
                <i className={`${activeCat.icon_cnd} size-20`} />
                <p>{activeCat.name}</p>
              </div>

              <div className="grid grid-cols-4 gap-5 mb-3">
                {activeCat.groups.map(group => (
                  <div key={group.id}>
                    <h3 className="uppercase font-bold text-[13px] text-[#333333] mb-2 truncate">
                      <Link
                        className="cursor-pointer"
                        to={`${group.url}?category=${group.id}`}
                        title={group.name}
                        onClick={handleLinkClick}
                      >
                        {group.name}
                      </Link>
                    </h3>
                    {group.subcategories && (
                      <ul className="text-[#666] text-[13px]">
                        {group.subcategories.map(sub => (
                          <li key={sub.id} className="mb-2 truncate">
                            <Link
                              className="hover:text-[#bf9a61] transition-colors duration-700 cursor-pointer"
                              title={sub.name}
                              to={`${sub.url}?category=${sub.id}`}
                              onClick={handleLinkClick}
                            >
                              {sub.name}
                            </Link>
                          </li>
                        ))}
                        <li>
                          <Link className="text-[#2489f4] cursor-pointer hover:underline"
                            to={`${group.url}?category=${group.id}`}
                            onClick={handleLinkClick}
                          >
                            Xem tất cả
                          </Link>
                        </li>
                      </ul>
                    )}
                  </div>
                ))}

                {activeCat.tags.map(tag => (
                  <div key={tag.id}>
                    <ul className="uppercase font-bold text-[13px] text-[#333333]">
                      {tag.subtags.map(sub => (
                        <li key={sub.id} className="mb-2 truncate">
                          <Link
                            className="hover:underline cursor-pointer"
                            to={`${sub.url}?category=${sub.id}`}
                            onClick={handleLinkClick}
                          >
                            {sub.name}
                          </Link>
                          <span className="text-[#ff0000]">&nbsp;♥</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};


export default MenuNavigate;