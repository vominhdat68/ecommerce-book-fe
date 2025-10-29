import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

/**
 * Một countdown item duy nhất trong state
 * - expireAt: timestamp (ms) khi countdown kết thúc
 * - isRunning: đang chạy hay tạm dừng
 * - initialSeconds: số giây ban đầu (để reset)
 */

interface CountdownItem {
  expireAt: number;
  isRunning: boolean;
  initialSeconds: number;
}

/** Dạng state tổng: key là id, value là từng countdown */
interface CountdownState {
  [id: string]: CountdownItem;
}

const initialState: CountdownState = {};

/**
 * Slice quản lý countdown chung cho toàn app
 * Mỗi reducer cập nhật countdown dựa theo id
 */
const countdownSlice = createSlice({
  name: "countdown",
  initialState,
  reducers: {
    startCountdown: (
      state,
      action: PayloadAction<{ id: string; seconds: number }>
    ) => {
      const { id, seconds } = action.payload;
      state[id] = {
        expireAt: Date.now() + seconds * 1000,
        initialSeconds: seconds,
        isRunning: true,
      };
    },

     /**
     * Tạm dừng countdown (giữ lại thời gian còn lại)
     */
    pauseCountdown: (state, action: PayloadAction<string>) => {
      const id = action.payload;
      if (state[id]) {
        // lưu lại thời gian còn lại
        const timeLeft = state[id].expireAt - Date.now();
        state[id].expireAt = Date.now() + timeLeft; // vẫn giữ expireAt
        state[id].isRunning = false;
      }
    },

     /**
     * Tiếp tục countdown đã tạm dừng
     */
    resumeCountdown: (state, action: PayloadAction<string>) => {
      const id = action.payload;
      if (state[id]) {
        state[id].isRunning = true;
      }
    },

    /**
     * Reset countdown về initialSeconds ban đầu
     */
    resetCountdown: (state, action: PayloadAction<string>) => {
      const id = action.payload;
      if (state[id]) {
        state[id].expireAt = Date.now() + state[id].initialSeconds * 1000;
        state[id].isRunning = true;
      }
    },

    /**
     * Xóa countdown ra khỏi state (dọn dẹp)
     */
    unregisterCountdown: (state, action: PayloadAction<string>) => {
      delete state[action.payload];
    },
  },
});

export const {
  startCountdown,
  pauseCountdown,
  resumeCountdown,
  resetCountdown,
  unregisterCountdown,
} = countdownSlice.actions;

export default countdownSlice.reducer;
