// src/features/search/types/search.type.ts

//  Product Item Interface
export interface ProductItem {
  id: string | number;
  name: string;
  img_src: string;
  price?: number;
  original_price?: number;
  discount_percent?: number;
  rating?: number;
  review_count?: number;
  stock?: number;
  category_name?: string;
  author?: string;
  publisher?: string;
  is_bestseller?: boolean;
  is_featured?: boolean;
  slug?: string;
}

//  Category Item Interface
export interface CategoryItem {
  id: string | number;
  name: string;
  img_src: string;
  product_count?: number;
  parent_id?: number;
  slug?: string;
}

//  Search History Item
export interface SearchHistoryItem {
  id: string | number;
  keyword: string;
  searched_at: string;
  search_count?: number;
}

//  Trending Search Item
export interface TrendingSearchItem {
  keyword: string;
  search_count: number;
  trend_direction?: 'up' | 'down' | 'stable';
}

//  Suggestion Item
export interface SuggestionItem {
  type: 'keyword' | 'product' | 'category';
  text: string;
  product?: ProductItem;
  category?: CategoryItem;
  search_count?: number;
}

//  Response khi mở dropdown lần đầu
export interface InitDropdownResponse {
  success: boolean;
  data: {
    history: SearchHistoryItem[];
    trending: TrendingSearchItem[];
    featured_categories: CategoryItem[];
    popular_products?: ProductItem[];
    quick_links?: Array<{
      id: number;
      name: string;
      icon: string;
      url: string;
    }>;
  };
  message?: string;
  code?: string;
  correlation_id?: string;
}

//  Response khi gọi gợi ý
export interface SuggestionResponse {
  success: boolean;
  data: {
    suggestions: SuggestionItem[];
    keywords: string[];
    products: ProductItem[];
    categories?: CategoryItem[];
    related_keywords?: string[];
    corrected_query?: string;
    search_metadata?: {
      query: string;
      suggestion_count: number;
      search_time: number;
    };
  };
  message?: string;
  code?: string;
  correlation_id?: string;
}

//  Response khi tìm kiếm thực sự
export interface SearchResponse {
  success: boolean;
  data: {
    products: ProductItem[];
    total_count: number;
    pagination: {
      current_page: number;
      total_pages: number;
      has_next: boolean;
      has_prev: boolean;
      limit: number;
    };
    filters?: {
      categories: Array<{
        id: number;
        name: string;
        count: number;
      }>;
      brands?: Array<{
        id: number;
        name: string;
        count: number;
      }>;
      authors?: Array<{
        name: string;
        count: number;
      }>;
      publishers?: Array<{
        name: string;
        count: number;
      }>;
      price_ranges?: Array<{
        min: number;
        max: number;
        count: number;
      }>;
      ratings?: Array<{
        rating: number;
        count: number;
      }>;
    };
    search_metadata?: {
      query: string;
      search_time: number;
      total_results: number;
      suggested_query?: string;
      corrected_query?: string;
      search_id?: string;
    };
  };
  message?: string;
  code?: string;
  correlation_id?: string;
}

//  Search Filters Interface
export interface SearchFilters {
  categories?: (string | number)[];
  brands?: (string | number)[];
  authors?: string[];
  publishers?: string[];
  price_min?: number;
  price_max?: number;
  rating?: number;
  availability?: 'in_stock' | 'out_of_stock' | 'all';
  sort_by?: 'relevance' | 'newest' | 'price_asc' | 'price_desc' | 'popular' | 'rating';
  in_stock?: boolean;
  on_sale?: boolean;
  featured?: boolean;
}

//  Search History Response
export interface SearchHistoryResponse {
  success: boolean;
  data: {
    keywords: SearchHistoryItem[];
    total_count: number;
  };
  message?: string;
  code?: string;
}

//  Save History Request
export interface SaveHistoryRequest {
  keyword: string;
  source?: 'search_bar' | 'suggestion' | 'trending';
  device_id?: string;
}

//  Delete History Request
export interface DeleteHistoryRequest {
  keyword_ids?: (string | number)[];
  delete_all?: boolean;
}

//  Advanced Search Parameters
export interface AdvancedSearchParams {
  q?: string;
  category_id?: number;
  min_price?: number;
  max_price?: number;
  brand_ids?: number[];
  author?: string;
  publisher?: string;
  rating_min?: number;
  in_stock?: boolean;
  on_sale?: boolean;
  is_featured?: boolean;
  is_bestseller?: boolean;
  tags?: string[];
  page?: number;
  limit?: number;
  sort?: string;
  fields?: string[]; // Fields to return
}

// Search Analytics (for tracking)
export interface SearchAnalytics {
  search_id?: string;
  query: string;
  result_count: number;
  search_time: number;
  filters_used?: string[];
  sort_method?: string;
  user_id?: string;
  device_id?: string;
  session_id?: string;
}

// Type Guards để kiểm tra response
export const isInitDropdownResponse = (response: any): response is InitDropdownResponse => {
  return response && 
         typeof response.success === 'boolean' &&
         response.data &&
         Array.isArray(response.data.history) &&
         Array.isArray(response.data.trending) &&
         Array.isArray(response.data.featured_categories);
};

export const isSuggestionResponse = (response: any): response is SuggestionResponse => {
  return response &&
         typeof response.success === 'boolean' &&
         response.data &&
         Array.isArray(response.data.suggestions) &&
         Array.isArray(response.data.keywords) &&
         Array.isArray(response.data.products);
};

export const isSearchResponse = (response: any): response is SearchResponse => {
  return response &&
         typeof response.success === 'boolean' &&
         response.data &&
         Array.isArray(response.data.products) &&
         typeof response.data.total_count === 'number';
};