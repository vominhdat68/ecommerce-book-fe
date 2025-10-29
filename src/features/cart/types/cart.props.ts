import type { CartItemType } from "@/features/cart/types/cart.type";

/**
 * Props cho component hiển thị 1 item trong giỏ hàng.
 * Component này nên là "presentational" - nhận dữ liệu và callback từ ngoài, không chứa logic gọi API.
 */
export interface CartItemPropss {
  /**
   * Dữ liệu sản phẩm kèm trạng thái selected nếu cần override.
   * - item.isChecked: trạng thái mặc định từ store.
   * - selected?: có thể dùng để override trạng thái chọn từ bên ngoài.
   */
  item: CartItemType & { selected?: boolean };

  /** Callback gọi khi người dùng chọn / bỏ chọn sản phẩm */
  onSelectItem: () => void;

  /**
   * Callback gọi khi số lượng thay đổi (tăng/giảm).
   * @param id - ID sản phẩm
   * @param quantity - Số lượng mới
   */
  onQuantityChange: (id: string, quantity: number) => void;

  /** Callback gọi khi người dùng xóa sản phẩm khỏi giỏ */
  onRemoveItem: (id: string) => void;

  /** Trạng thái chọn của item (để render UI checkbox) */
  isSelected: boolean;
}

export interface CartItemProps {
  itemId: string;
  isSelected: boolean;
  onToggleSelect: (itemId: string) => void; 
}

export interface CartHeaderProps {
  itemsCount: number
}