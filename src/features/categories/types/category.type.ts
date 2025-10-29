import type { Product } from "@/features/home/types/home.props";

// Interfaces cho API Response
export interface ApiResponse {
  status: number;
  message: string;
  parent_categories: ParentCategory[];
  category: Category;
  children_categories: ChildrenCategory[];
  attributes: Attribute[];
  price_range: PriceRange;
  total_products: number;
  product_list: Product[];
  noofpages: number;
}

// Category interfaces
export interface ParentCategory {
  id: string | number;
  name: string;
  path: string;
  url: string;
}

export interface Category {
  id: string;
  name: string;
  path: string;
  title: string;
  description: string;
  keywords: string;
}

export interface ChildrenCategory {
  id: string;
  name: string;
  path: string;
  count: string;
  url: string;
}

// Attribute interfaces
export interface Attribute {
  id: string;
  code: string;
  label: string;
  param: string;
  options: AttributeOption[];
}

export interface AttributeOption {
  id: string;
  label: string;
  selected: boolean;
  param: string;
  count: string;
}

// Price range interface
export interface PriceRange {
  min: number;
  max: number;
  price_range?: {
    min: number;
    max: number;
  };
}


// Filter state interface (cho component của bạn)
export interface FilterState {
  category: string;
  price_range: PriceRange;
  [key: string]: any; // Cho phép filter động như brand, author, v.v.
}

// API query parameters interface
export interface ProductQueryParams {
  page?: number;
  limit?: number;
  sort?: "best-selling" | "price-asc" | "price-desc" | "newest" | "rating" | "name-asc" | "name-desc";
  filters: FilterState;
  category_id?: number;
  search?: string;
}

// Location state interface (cho React Router)
export interface LocationState {
  category_slug?: string;
}

// Hook return type
export interface UseCategoryProductsReturn {
  data: ApiResponse | undefined;
  isLoading: boolean;
  error: any;
}