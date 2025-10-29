// types/home.props.ts

/**
 * Base API Response Interface
 * @description Standard response structure for all API calls
 */
export interface BaseResponse {
  success?: boolean;
  message?: string;
  error?: string;
}

/**
 * Banner Response Interface
 * @description Response structure for banner data
 */
export interface BannerResponse extends BaseResponse {
  data: {
    mainBanners: Banner[];
    sideBanners: Banner[];
    promotionalBanners: Banner[];
  };
}

export interface Banner {
  id: string;
  image_src: string;
  redirect_url: string;
  title?: string;
  description?: string;
  order: number;
  is_active: boolean;
  start_date?: string;
  end_date?: string;
}

/**
 * Menu Response Interface  
 * @description Response structure for navigation menu
 */
export interface MenuResponse extends BaseResponse {
  data: {
    categories: CategoryMenuItem[];
    featured_categories?: CategoryMenuItem[];
    tsdnb: CategoryMenuItem[];
    bst_nb: CategoryMenuItem[];
    ncc: CategoryMenuItem[];
  };
}

export interface CategoryMenuItem {
  id: number;
  name: string;
  image_src: string;
  category_url: string;
  description?: string;
  order: number;
  badge?: string;
  parent_id?: number;
  children?: CategoryMenuItem[];
}

export interface MenuItem {
  id: number;
  name: string;
  url: string;
  icon?: string;
  type: 'link' | 'category' | 'promotion';
}

/**
 * Flash Sale Response Interface
 * @description Response structure for flash sale data
 */
// export interface FlashSaleResponse extends BaseResponse {
//   data: {
//     flash_sale: Flashsale;
//     products: FlashSaleProduct[];
//   };
// }

/**
 * ProductRating - Thông tin đánh giá sản phẩm
 */
export interface ProductRating {
  /** Number of reviews - null if no reviews yet */
  reviews_count: number | null;
  /** Average rating score (0-100 scale) - null if not rated */
  rating_summary: number | null;
}

/**
 * BASE PRODUCT INTERFACE
 * Common properties shared across all product types from both APIs
 * 
 * @author author
 * @created 2024
 */
interface ProductBase {
  /**
   * Unique product identifier - can be string or number depending on API source
   * @example "396894" or 173438
   */
  id: string | number;

  /**
   * Product ID in system - may duplicate id in some cases
   * @example "396894" or 173438
   */
  product_id: string | number;

  /**
   * Display Name of the product
   * @example "Scarlett - Hậu Cuốn Theo Chiều Gió (2017)"
   */
  product_name: string;

  /**
   * URL to product detail page
   * @example "scarlett-hau-cuon-theo-chieu-gio-2017.html"
   * @example "https://www.fahasa.com/combo-sach-suc-manh-tiem-thuc-bi-mat-tu-duy-trieu-phu-nguoi-giau-co-nhat-thanh-babylon-bo-3-cuon.html"
   */
  product_url: string;

  /**
   * Product image URL
   * @example "https://cdn1.fahasa.com/media/catalog/product/8/9/8935095623082_1.jpg"
   */
  image_src: string;

  /**
   * Image alt text for accessibility and SEO
   * @example "Scarlett - Hậu Cuốn Theo Chiều Gió (2017)"
   */
  image_label: string;

  /**
   * Original price before discount
   * @example 215000
   */
  original_price: number;

  /**
   * Final price after applying discounts
   * @example 172000
   */
  final_price: number;

  /**
   * Discount percentage (0-100)
   * @example 20
   */
  discount_percent: number;

  /**
   * Product rating information
   */
  rating?: ProductRating;

  /**
   * Episode information for series products
   * @example "Tập 1" or null for non-series
   */
  episode?: string | null;

  /**
   * Product label for special categorization
   * @example "trending" | "best_seller" | "new"
   */
  label?: 'trending' | 'new_arrival' | 'best_seller' | null;
}

/**
 * Flash Sale Product Interface
 * @extends ProductBase
 */
export interface FlashSaleProduct extends ProductBase {
  /** Tổng số lượng sản phẩm có trong flash sale */
  total_items: number;

  /** Số lượng đã bán */
  total_sold: number;

  /** Nhà cung cấp */
  supplier: string;

  /** Tên nhà cung cấp */
  supplier_name: string;

  /** Danh mục giữa (category mid) */
  category_mid: string;

  /** ID danh mục giữa */
  category_mid_id: string;

  /** Loại sản phẩm */
  type_id: 'simple' | 'bundle';

  /** Giá flash sale (nếu có) */
  flashsale_price: number;

  /** Có phải là combo không */
  is_combo: string;

  /** Giá bundle final */
  bundle_final_price: string;

  /** Giá cũ hiển thị */
  display_old_price: string;

  /** Giá final cũ hiển thị */
  display_old_final_price: string;

  /** Giá mới hiển thị */
  display_new_price: string;

  /** Giá trị buffer */
  buffer_value: number;

  /** Discount cũ */
  old_discount: number;

  /** URL icon */
  icon_src: string;

  /** ID flash sale */
  flashsale_id: string;

  /** ID period */
  period_id: string;
}

/**
 * Progress Bar Response Interface
 * @description Response structure for progress bar data
 */
export interface ProgressBarResponse extends BaseResponse {
  //Time-based Progress
  startTime: string;
  endTime: string;
  data: ProgressBarItem[];
}

export interface ProgressBarItem {
  /**
   * Unique product identifier
   * @example 704881
   */
  product_id: number | string;

  /**
   * Quantity sold - indicates sales performance
   * @example 444.0
   * @unit items
   */
  qty_sold: number;

  /**
   * Progress percentage (0-100)
   * Represents either:
   * - Sales completion percentage
   * - Stock remaining percentage  
   * - Campaign progress
   * 
   * @example 59 (59%)
   * @range 0 - 100
   */
  percent: number;

  total_items?: number;
  remaining_items?: number;
}


export type TypeProduct = 'trending' | 'study' | 'suppliers' | 'publisher' | 'combos' | 'rank' | 'intro';
/**
 * Product Response Interface
 * @description Response structure for product data
 */
export interface ProductResponse extends BaseResponse {
  data: {
    category_name: string;
    products: Product[];
    pagination?: Pagination;
    filters?: FilterOptions;
  };
}

export interface Product extends ProductBase {
  stock_available: string;
  sold_qty: number;
  frame_images?: FrameImage[];
  supplier_name?: string;
  category_name?: string;
  is_combo?: boolean;
  bundle_final_price?: string;
  soon_release?: number;
  type_id?: string;
  add_to_cart_info?: any;
}

export interface FrameImage {
  key: string;
  value: string;
  url: string;
}

export interface Pagination {
  current_page: number;
  total_pages: number;
  total_products: number;
  has_next: boolean;
  has_prev: boolean;
}

export interface FilterOptions {
  categories: FilterItem[];
  suppliers: FilterItem[];
  price_ranges: PriceRange[];
  discounts: DiscountRange[];
}

export interface FilterItem {
  id: string;
  name: string;
  count: number;
}

export interface PriceRange {
  min: number;
  max: number;
  count: number;
}

export interface DiscountRange {
  min: number;
  max: number;
  count: number;
}

/**
 * Event Response Interface
 * @description Response structure for event data
 */
export interface EventResponse extends BaseResponse {
  data: {
    event: EventProducts;
    products: Product[];
  };
}

export type TypeEvent = 'festival' | 'campaign' | 'holiday' | 'promotion' | 'flash-sale';
export interface EventProducts {
  id: string;
  name: string;
  bg_image: string;
  description?: string;
  start_date: string;
  end_date: string;
  is_active: boolean;
  type: TypeEvent;
  redirect_url?: string;
}

/**
 * Supplier Response Interface
 * @description Response structure for supplier data
 */
export interface SupplierResponse extends BaseResponse {
  data: {
    suppliers: Supplier[];
    featured_suppliers?: Supplier[];
  };
}

export interface Supplier {
  id: number;
  name: string;
  image_src: string;
  category_url: string;
  description?: string;
  product_count?: number;
  is_featured: boolean;
  order: number;
  website?: string;
  contact_info?: ContactInfo;
}

export interface ContactInfo {
  email?: string;
  phone?: string;
  address?: string;
}

/**
 * Combo Response Interface
 * @description Response structure for combo deals data
 */
export interface ComboResponse extends BaseResponse {
  data: {
    combos: Combo[];
    products: Product[];
  };
}

export interface Combo {
  id: string;
  name: string;
  description?: string;
  original_price: string;
  final_price: string;
  discount_percent: number;
  image_src: string;
  product_url: string;
  included_products: string[];
  bundle_items?: number;
  savings_amount?: string;
  savings_percent?: number;
  is_active: boolean;
  valid_until?: string;
}

/**
 * Tab Config Response Interface
 * @description Response structure for dynamic tab configurations
 */
export type TypeTab =
  'daily' | 'hot' | 'foreign' |
  'economics' | 'language' | 'self-help' | 'literature' | 'children' |
  'reference' | 'english' | 'tools' |
  'alphabooks' | 'sbooks' | 'mcbooks' |
  'yamaha' | 'tan_viet' |
  'rank_literature' | 'rank_economics' | 'rank_psychology_skills' | 'rank_children' | 'rank_foreign_language' | 'rank_foreign_books' | 'rank_other' |
  'all';
export interface TabConfigResponse extends BaseResponse {
  data: {
    section: TypeTab;
    title?: string;
    iconURL?: string;
    bg_url?: string;
    description?: string;
    tabs: TabConfig[];
    display_config?: DisplayConfig;
  };
}

export interface TabConfig {
  key: string;
  label: string;
  description?: string;
  icon?: string;
  order: number;
  is_active: boolean;
  api_params?: {
    type?: string;
    category?: string;
    supplier?: string;
    limit?: number;
    sort?: string;
  };
}

export interface DisplayConfig {
  layout: 'grid' | 'slider' | 'list';
  items_per_row?: number;
  show_pagination?: boolean;
  auto_play?: boolean;
  slider_config?: SliderConfig;
}

export interface SliderConfig {
  slides_to_show: number;
  slides_to_scroll: number;
  autoplay_speed: number;
  infinite: boolean;
  dots: boolean;
  arrows: boolean;
}

/**
 * Suggestion Response Interface  
 * @description Response structure for product suggestions
 */
export interface SuggestionResponse extends BaseResponse {
  data: {
    personalization: Product[];
    type: 'popular' | 'recent' | 'related' | 'personalized';
    based_on?: string;
  };
}

/**
 * Collection Response Interface
 * @description Response structure for featured collections
 */
export interface CollectionResponse extends BaseResponse {
  data: {
    collections: Collection[];
    products: Product[];
  };
}

export interface Collection {
  id: string;
  name: string;
  description?: string;
  image_src: string;
  category_url: string;
  type: 'featured-shelves' | 'featured-collections' | 'best-sellers';
  product_count: number;
  is_active: boolean;
  order: number;
  featured_products?: string[];
}

/**
 * Category Response Interface
 * @description Response structure for category data
 */
export interface CategoryResponse extends BaseResponse {
  data: {
    categories: Category[];
    featured_categories?: Category[];
  };
}

export interface Category {
  id: string;
  name: string;
  description?: string;
  image_src: string;
  category_url: string;
  product_count?: number;
  parent_id?: string;
  children?: Category[];
  order: number;
  is_featured: boolean;
}




export type RankProduct = {
  id: number;
  name: string;
  author: string;
  publisher: string;
  price: number;
  discount_price: number;
  discount_percent: number;
  voted: number;
  image_url: string;
  points: number;
  rank: number;
  category_id: string;
  description: string;
  product_url: string;
  trend: 'up' | 'down' | 'same';
};