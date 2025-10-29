// Base interfaces
export interface Author {
  key: string;
  value: string | null;
  url: string | null;
}

export interface MediaGalleryItem {
  file: string;
  type: string;
  imageDefault: string;
  entity_id: number;
  title: string;
}

export interface CartItem {
  product_id: number;
  quantity: number;
  is_checked: boolean;
  soon_release: string;
  original_price: number;
  sku: string;
  type_id: string;
  weight: number;
  name: string;
  image: string;
  product_url: string;
  category_main: string;
  category_mid: string;
  category_3: string;
  category_4: string;
  category_main_id: number;
  category_mid_id: number;
  category_3_id: number;
  category_4_id: number;
  supplier: string;
  publisher: string;
  evoucher: any | null;
  author: Author[];
  is_poster_tube: number;
  price: number;
  options: Record<string, any>;
  discount_amount: number;
  discount_percent: number;
  row_total: number;
  out_of_stock: boolean;
  message: string;
  is_unchecked: boolean;
  has_error: boolean;
}

export interface Total {
  code: string;
  title: string;
  price: number;
}

export interface Option {
  option_id: number;
  option_value: string;
  option_name: string;
  product_type: string;
  action_type: string;
  option_qty: number;
  product_sku: string;
  options: string;
  option_image_url: string | null;
  product_description: string;
  product_value: number;
  sort_product: number;
  media_gallery: MediaGalleryItem[];
  final_stock_qty: number;
  active: boolean;
  almost_run_out: boolean;
}

export interface ErrorItem {
  type: string;
  message: string;
}

export interface EventItem {
  action_id: number;
  action_type: string;
  title: string;
  is_auto: boolean;
  coupon_code: string;
  rule_content: string;
  to_date: string;
  to_date_format: string;
  number_received_gift: number;
  options: Option[];
  matched_items: any[] | null;
  reach_percent: number;
  matched: boolean;
  sub_total: string;
  min_total: string;
  max_total: string;
  max_total_price: number;
  max_total_price_format: string;
  need_total: string;
  error: ErrorItem[];
  payment_method: string | null;
  event_type: number;
  almost_run_out: boolean;
  order_index: number;
  event_id: number;
  page_detail: string;
  title_2: string;
  applied?: boolean;
  isNeedTotal?: boolean;
  needTotalMessage?: string;
  errorMessage?: string;
}

export interface EventCart {
  success: boolean;
  event: any[];
  affect_items: any[];
  affect_carts: {
    matched: any[];
    not_matched: EventItem[];
  };
  affect_coupons: {
    matched: any[];
    not_matched: EventItem[];
  };
  affect_payments: {
    matched: any[];
    not_matched: EventItem[];
  };
  affect_freeships: {
    matched: any[];
    not_matched: EventItem[];
  };
  affect_chose_gifts: {
    matched: any[];
    not_matched: EventItem[];
    chose_gift_info: {
      money_current: number;
      money_percent_progress_bar: number;
      money_progress_bar_list: Array<{
        matched: boolean;
        event_id: number;
        min_total: string;
        max_total: string;
        total_price: number;
        total_price_format: string;
        active: boolean;
        percent: number;
      }>;
      merge_data: Array<{
        event_id: number;
        matched: boolean;
        title: string;
        total_price: number;
        total_price_format: string;
        data: EventItem[];
      }>;
      number_to_received_gift: number;
    };
  };
  affect_payments_checkout: any | null;
}

export interface EventCartFrontItem extends EventItem {
  key_index: number;
  key_name: string;
  key_type: string;
}

export interface EventCartFront {
  event_cart_show: EventCartFrontItem[];
  num_events_matched: number;
  event_cart_viewmore: boolean;
}

export interface Minicart {
  items: CartItem[];
  qty: number;
  total: string;
}

// Main Cart Interface
export interface CartData {
  success: boolean;
  isLogin: boolean;
  items: CartItem[];
  totals: Total[];
  can_payment: boolean;
  error_cart: string[];
  coin_voucher_list: any[];
  voucher_apply_store: any[];
  chose_gift_list: any[];
  event_cart: EventCart;
  event_cart_front: EventCartFront;
  minicart: Minicart;
}

// Props for React components
export interface CartItemProps {
  item: CartItem;
  onQuantityChange: (productId: number, quantity: number) => void;
  onRemoveItem: (productId: number) => void;
  onToggleCheck: (productId: number, checked: boolean) => void;
}

export interface CartSummaryProps {
  totals: Total[];
  canPayment: boolean;
  errorCart: string[];
}

export interface PromotionItemProps {
  promotion: EventItem;
  type: 'coupon' | 'gift' | 'payment' | 'freeship';
}

export interface CartContextType {
  cartData: CartData | null;
  loading: boolean;
  error: string | null;
  updateQuantity: (productId: number, quantity: number) => void;
  removeItem: (productId: number) => void;
  toggleItemCheck: (productId: number, checked: boolean) => void;
  applyCoupon: (couponCode: string) => void;
  removeCoupon: (couponCode: string) => void;
}


export interface MinicartData {
  items: CartItem[];
  cart_items_count: number;
}

export interface MinicartItem {
  product_id: number;
  name: string;
  image: string;
  price: number;
  quantity: number;
  row_total: number;
  sku: string;
}