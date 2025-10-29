import React from "react";
import ShowMoreWrapper from "@/features/categories/components/ShowMoreButton";
import type { FilterState } from "@/features/categories/types/category.type";

interface AttributeFilterProps {
  label: string;
  code?: string;
  items: any[];
  selectedFilters: FilterState;
  onSelect?: (key: keyof FilterState, value: string) => void;
  onSelectPrice?: (price: { min: number; max: number }) => void;
}

const AttributeFilter: React.FC<AttributeFilterProps> = ({
  label,
  code,
  items,
  selectedFilters,
  onSelect,
  onSelectPrice,
}) => (
  <div className="ml-4 mb-4">
    <h4 className="font-medium mb-2 text-gray-700 text-sm">{label}</h4>
    <ShowMoreWrapper
      items={items}
      threshold={5}
      renderItem={(item, index) => {
        const checked = code
          ? selectedFilters[code as keyof FilterState] === item.param
          : selectedFilters.price_range.min === item.from &&
            selectedFilters.price_range.max === item.to;

        return (
          <label
            key={index}
            className="flex items-center gap-2 text-sm text-[#666666] cursor-pointer hover:text-[#C92127]"
          >
            <input
              type="checkbox"
              className="accent-[#C92127] w-4 h-4"
              checked={checked}
              onChange={() =>
                code && onSelect
                  ? onSelect(code as keyof FilterState, item.param)
                  : onSelectPrice?.({ min: item.from, max: item.to })
              }
            />
            <span>{item.label}</span>
          </label>
        );
      }}
    />
  </div>
);

export default AttributeFilter;
