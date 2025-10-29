import React from "react";
import ShowMoreWrapper from "@/features/categories/components/ShowMoreButton";
import type { FilterState } from "@/features/categories/types/category.type";

interface CategorySectionProps {
  data: any;
  onSelect: (key: keyof FilterState, value: string) => void;
}

const CategorySection: React.FC<CategorySectionProps> = ({ data, onSelect }) => (
  <div className="main-category">
    <h3 className="text-xl font-semibold mb-3 text-gray-800">Danh mục</h3>
    <div className="ml-2 space-y-2">
      {data.parent_categories?.map((parent: any) => {
        const isActive = data.category.id === parent.id;
        return (
          <div
            key={parent.id}
            className={`text-sm transition-colors ${
              isActive
                ? "font-medium text-[#C92127]"
                : "text-gray-500 hover:text-[#C92127] cursor-pointer"
            }`}
            onClick={() => !isActive && onSelect("category", parent.id)}
          >
            {parent.name}
          </div>
        );
      })}

      <ShowMoreWrapper
        items={data.children_categories || []}
        threshold={6}
        renderItem={(category, index) => (
          <div
            key={index}
            className="text-sm text-[#666666] hover:text-[#C92127] cursor-pointer transition-colors"
            onClick={() => onSelect("category", category.id)}
          >
            {category.name} ({category.count})
          </div>
        )}
      />
    </div>
  </div>
);

export default CategorySection;
