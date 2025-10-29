import { useSelector } from 'react-redux'
import { cartService } from '@/features/cart/services/cartService'
import type { CartItem } from '@/features/cart/types/cart.type'
import type { RootState } from '@/shared/store/redux/reduxStore'


// lay product khi thuc hien cac hanh cap nhat so luong,xoa,... trong page cart
export function useCartItemById(id: number): CartItem | undefined {
  return useSelector((state: RootState) => {
    const cart = cartService.endpoints.getCart.select()(state)?.data?.items as
      | CartItem[]
      | undefined
    return cart?.find((i) => i.product_id === id)
  })
}