import React from "react";

interface SortHeaderProps {
  data: any;
  selectedSort: string;
  onSortChange: (sort: string) => void;
}

const SortHeader: React.FC<SortHeaderProps> = ({
  data,
  selectedSort,
  onSortChange,
}) => (
  <div className="flex items-center justify-between mb-4">
    <div className="flex items-center gap-3">
      <span className="font-medium text-gray-800">Sắp xếp theo:</span>

      {/* option1 */}
      <select
        className="border border-gray-300 rounded-lg px-3 py-2 text-sm text-gray-700 cursor-pointer outline-none"
        value={selectedSort}
        onChange={(e) => onSortChange(e.target.value)}
      >
        <option value="best-selling">Bán chạy</option>
        <option value="featured">Nổi bật</option>
        <option value="newest">Mới nhất</option>
      </select>

      {/* option price */}
      <select
        className="border border-gray-300 rounded px-3 py-2 text-sm text-gray-700 cursor-pointer outline-none"
        defaultValue=""
        onChange={(e) => onSortChange(e.target.value)}
      >
        <option value="price-asc">Giá tăng dần</option>
        <option value="price-desc">Giá giảm dần</option>
      </select>

    </div>
    <span className="text-sm text-gray-500">
      {data.category.name} — {data.children_categories?.length || 0} danh mục con
    </span>
  </div>
);

export default SortHeader;
