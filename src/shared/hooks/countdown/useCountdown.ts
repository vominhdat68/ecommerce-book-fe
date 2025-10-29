// useCountdown.ts
/**
 * Custom React hook để quản lý nhiều countdown thông qua Redux.
 * 
 * Cung cấp các API tiện dụng:
 *  - start(seconds): Bắt đầu countdown với số giây truyền vào
 *  - pause(): Tạm dừng countdown
 *  - resume(): Tiếp tục countdown đã tạm dừng
 *  - reset(): Reset countdown về thời gian ban đầu
 * 
 * Đặc điểm:
 *  - Tự động trigger re-render UI mỗi giây để cập nhật thời gian còn lại
 *  - Tự động unregister countdown khỏi Redux khi kết thúc (timeLeft = 0)
 *  - Cho phép truyền callback onFinish để xử lý khi countdown kết thúc
 */

import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import {
  startCountdown,
  pauseCountdown,
  resumeCountdown,
  resetCountdown,
  unregisterCountdown,
} from "./countdownSlice";
import { selectTimeLeft } from "./selectors";
import type { RootState } from "@/shared/store/redux/reduxStore";

export const useCountdown = (
  id: string,
  opts?: { onFinish?: () => void } // callback tùy chọn, được gọi khi countdown kết thúc
) => {
  const dispatch = useDispatch();

  // Lấy thời gian còn lại của countdown từ Redux store
  const timeLeft = useSelector((state: RootState) => selectTimeLeft(state, id));

  // State ảo để ép component re-render mỗi giây
  const [, forceRender] = useState(0);

  /**
   * Interval mỗi 1 giây để ép re-render UI, giúp hiển thị timeLeft theo thời gian thực
   * Chỉ chạy 1 lần khi mount và cleanup khi unmount
   */
  useEffect(() => {
    const interval = setInterval(() => forceRender((v) => v + 1), 1000);
    return () => clearInterval(interval);
  }, []);

  /**
   * Khi countdown về 0:
   *  - Tự động xoá countdown trong Redux (unregister)
   *  - Gọi callback onFinish nếu được truyền vào
   */
  useEffect(() => {
    if (timeLeft === 0) {
      dispatch(unregisterCountdown(id));
      opts?.onFinish?.();
    }
  }, [timeLeft, dispatch, id]);

  return {
    /** Số giây còn lại của countdown (>=0) */
    timeLeft,
    /** Trạng thái đang chạy hay không (dựa trên timeLeft > 0) */
    isRunning: timeLeft > 0,

    /** Bắt đầu countdown mới với số giây chỉ định */
    start: (seconds: number) => dispatch(startCountdown({ id, seconds })),
    /** Tạm dừng countdown */
    pause: () => dispatch(pauseCountdown(id)),
    /** Tiếp tục countdown đã tạm dừng */
    resume: () => dispatch(resumeCountdown(id)),
    /** Reset countdown về thời gian ban đầu */
    reset: () => dispatch(resetCountdown(id)),
  };
};
