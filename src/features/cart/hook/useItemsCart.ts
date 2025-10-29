
import { useCallback, useMemo } from 'react'
import { useDispatch, useSelector, shallowEqual } from 'react-redux'

import { selectAll, clearSelection, toggleSelect } from '@/features/cart/slices/cartSlice'
import { useGetCartQuery } from '@/features/cart/services/cartService'
import type { CartItem } from '@/features/cart/types/cart.type'
import type { AppDispatch, RootState } from '@/shared/store/redux/reduxStore'

export function useCartItems() {
  const dispatch = useDispatch<AppDispatch>()

  // giảm re-render khi selectedIds không đổi
  const selectedIds = useSelector(
    (state: RootState) => state.cart.selectedIds,
    shallowEqual,
  )

  // Lấy dữ liệu từ RTK Query
  const { data: cartData, isLoading, isError, error } = useGetCartQuery()

  const items: CartItem[] = useMemo(() => cartData?.items ?? [], [cartData?.items])

  // chỉ lấy danh sách id để component cha không nhận object mới mỗi lần
  const itemIds = useMemo(() => items.map((i) => i.product_id), [items])

  const itemsCount = items.length

  // Kiểm tra tất cả item có được chọn không?
  const isAllSelected = useMemo(
    () => itemsCount > 0 && itemIds.every(id => selectedIds.includes(id)),
    [itemIds, selectedIds, itemsCount]
  )

  const handleSelectAll = useCallback(
    (checked: boolean) => {
      if (checked) dispatch(selectAll(itemIds))
      else dispatch(clearSelection())
    },
    [dispatch, itemIds],
  )

  const handleToggleSelect = useCallback(
    (id: number) => {
      dispatch(toggleSelect(id))
    },
    [dispatch],
  )

  return {
    // Data
    items,
    itemIds,
    itemsCount,
    selectedIds,
    isAllSelected,
    
    // State
    isLoading,
    isError,
    error,
    
    // Actions
    handleSelectAll,
    handleToggleSelect,
  }
}