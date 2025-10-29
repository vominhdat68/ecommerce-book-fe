import type { RootState } from '@/shared/store/redux/reduxStore';
import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

interface CartState {
  selectedIds: number[];
  isAllSelected: boolean;
}

const initialState: CartState = {
  selectedIds: [],
  isAllSelected: false,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    toggleSelect(state, action: PayloadAction<number>) {
      const id = action.payload;
      if (state.selectedIds.includes(id)) {
        state.selectedIds = state.selectedIds.filter((i) => i !== id);
      } else {
        state.selectedIds.push(id);
      }
      state.isAllSelected = false;
    },
    selectAll(state, action: PayloadAction<number[]>) {
      state.selectedIds = action.payload;
      state.isAllSelected = true;
    },
    clearSelection(state) {
      state.selectedIds = [];
      state.isAllSelected = false;
    },
  },
});

export const { toggleSelect, selectAll, clearSelection } = cartSlice.actions;

export const selectSelectedIds = (state: RootState) => state.cart.selectedIds;
export const selectIsAllSelected = (state: RootState) => state.cart.isAllSelected;

export default cartSlice.reducer;
