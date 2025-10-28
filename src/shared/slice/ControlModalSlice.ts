
import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { ModalLabels } from '@/shared/types/modalPopup.type';

interface ModalState {
  isOpen: boolean;
  labelName: ModalLabels | '';
}

const initialState: ModalState = {
  isOpen: false,
  labelName: '',
};

const controlModalSlice = createSlice({
  name: 'authModal',
  initialState,
  reducers: {
    openModal: (state, action: PayloadAction<ModalLabels>) => {
      state.isOpen = true;
      state.labelName = action.payload;
    },
    closeModal: (state) => {
      state.isOpen = false;
      state.labelName = '';
    },
  },
});

export const { openModal, closeModal } = controlModalSlice.actions;
export default controlModalSlice.reducer;
