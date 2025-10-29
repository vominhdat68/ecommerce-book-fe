export interface ProductDetailResponse {
    // Basic product info
    id: string;
    slug: string;
    title: string;
    description: string;
    html_content: string;  // For ProductDescription component

    // Media
    images: string[];      // For BannerThumbnail/ProductImageGallery
    thumbnail: string;
    video_url?: string;

    // Pricing
    price: number;
    old_price?: number;
    discount_percent?: number;
    discount_amount?: number;
    final_price: number;

    // Product metadata
    supplier: string;      // For InfoDetailProduct
    publisher: string;     // For books
    author: string;        // For books  
    format: string;        // For books
    isbn?: string;

    // Additional IDs
    product_id: string;
    flashsale_id: string;
    period_id: string;
    category_mid_id: string;

    // Inventory & Sales
    stock_quantity: number;
    sold_count: number;    // For sold={444}
    is_available: boolean;
    max_quantity: number;  // For QuantitySelector

    // Ratings & Reviews
    average_rating: number;        // For ProductReview
    total_reviews: number;         // For ProductReview
    ratings_distribution: number[]; // [5sao%, 4sao%, 3sao%, 2sao%, 1sao%]
    reviews: ReviewType[];         // For ReviewList

    // Product details table
    details: ProductDetail[];      // For ProductDetailInfoCard

    // Shipping information
    shipping_info: {
      address: {
        district: string;
        district_id: string;
        province: string;
        province_id: string;
        ward: string;
        ward_id: string;
      };
      expected_delivery: {
        estimatedTimeDelivery: string;
        estimatedDatetimeDelivery: string;
        availInNearWarehouse: boolean;
        title: string;
        total: number | null;
        fpoint: number;
      };
      event_delivery: any[];
      express_delivery: any[];
    };

    // Promotions
    promotions: Promotion[];

    // Best seller info
    best_seller: {
      is_best_seller: boolean;
      category_rank: number;
      best_seller_text: string;
      best_seller_link: string;
    };

    // Related products
    related_products?: RelatedProduct[];
  

}


// For ProductDetailInfoCard
export interface ProductDetail {
  label: string;
  value: string;
  type?: 'text' | 'link' | 'html';
}

// For ProductReview
export interface ReviewType {
  id: string;
  nickname: string;
  rating: number; // 0-100 scale
  title: string;
  detail: string;
  countLike: number;
  created_at: string;
  verified_purchase: boolean;
  helpful_count: number;
  images?: string[];
}

// For promotions section
export interface Promotion {
  id: string;
  title: string;
  description: string;
  type: 'discount' | 'gift' | 'shipping' | 'voucher';
  value: string;
  icon_url?: string;
  conditions?: string;
}

// For related products
export interface RelatedProduct {
  id: string;
  slug: string;
  title: string;
  image: string;
  price: number;
  old_price?: number;
  discount_percent?: number;
  rating: number;
}