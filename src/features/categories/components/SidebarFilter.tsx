import React from "react";
import CategorySection from "@/features/categories/components/CategorySection";
import AttributeFilter from "@/features/categories/components/AttributeFilter";
import type { FilterState } from "@/features/categories/types/category.type";

const PRICE_OPTIONS = [
  { id: 1, label: "0đ - 150,000đ", from: 0, to: 150000 },
  { id: 2, label: "150,000đ - 300,000đ", from: 150000, to: 300000 },
  { id: 3, label: "300,000đ - 500,000đ", from: 300000, to: 500000 },
  { id: 4, label: "500,000đ - 700,000đ", from: 500000, to: 700000 },
  { id: 5, label: "700,000đ - trở lên", from: 700000, to: 9999999 },
];

interface SidebarFilterProps {
  data: any;
  selectedFilters: FilterState;
  onSelect: (key: keyof FilterState, value: string) => void;
  onSelectPrice: (price: { min: number; max: number }) => void;
}

const SidebarFilter: React.FC<SidebarFilterProps> = ({
  data,
  selectedFilters,
  onSelect,
  onSelectPrice,
}) => (
  <aside className="sticky top-[133px] h-fit min-w-[280px] p-3 bg-white rounded-lg space-y-6 shadow-sm">
    <CategorySection data={data} onSelect={onSelect} />

    <div className="filter-category">
      <h3 className="text-xl font-semibold mb-3 text-gray-800">
        Bộ lọc tìm kiếm
      </h3>

      {/* Giá */}
      <AttributeFilter
        label="Giá"
        items={PRICE_OPTIONS}
        selectedFilters={selectedFilters}
        onSelectPrice={onSelectPrice}
      />

      {data.attributes?.map((att: any) => (
        <AttributeFilter
          key={att.id}
          label={att.label}
          code={att.code}
          items={att.options}
          selectedFilters={selectedFilters}
          onSelect={onSelect}
        />
      ))}
    </div>
  </aside>
);

export default SidebarFilter;
