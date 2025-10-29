import type { ProductItem} from "@/features/search/types/search.type";

// Ô input
export interface SearchInputProps {
  value: string;
  onChange: (val: string) => void;
  onSubmit: (keyword: string) => void;
  onFocus?: () => void;
  onBlur?: () => void;
}

// Lịch sử tìm kiếm
export interface HistoryListProps {
  items: [];
  onSelect: (keyword: string) => void;
  onRemoveItems: (label: string[]) => void;
}

// Từ khóa hot
export interface HotKeywordsProps {
  items: ProductItem[];
  onSelect: (keyword: string) => void;
}

// Danh mục nổi bật
export interface FeaturedCategoriesProps {
  items: ProductItem[];
  onSelect: (categoryId: string) => void;
}

// Gợi ý khi gõ chữ
export interface SuggestionListProps {
  items: string[];
  onSelect: (keyword: string) => void;
}

// Sản phẩm gợi ý
export interface ProductListProps {
  items: ProductItem[];
  onSelect: (productId: string) => void;
}
