import type { Product } from "@/features/home/types/home.props";


export const mapFlashSaleToCardDataProduct = (data: any): Product => {
  return {
    id: data.id,
    product_id: data.product_id,
    product_name: data.product_name,
    product_url: data.product_url,
    image_src: data.image_src,
    image_label: data.product_name,
    original_price: parseFloat(data.original_price),
    final_price: parseFloat(data.flashsale_price),
    discount_percent: Number(data.discount) || 0,
    rating: undefined, // chưa có từ API
    episode: data.episode || null,
    label: null, // có thể thêm nếu BE có flag trending/best_seller
    type_id: "simple",
    soon_release: 0,
    stock_available: "in_stock",
    sold_qty: Number(data.total_sold) || 0,
    frame_images: [],
    add_to_cart_info: undefined,
  };
};

export const mapFlashSaleList = (list: any[]): Product[] => {
  return list.map(mapFlashSaleToCardDataProduct);
};
