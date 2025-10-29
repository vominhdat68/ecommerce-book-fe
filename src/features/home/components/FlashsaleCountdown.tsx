// FlashsaleCountdown.tsx
import React, { useEffect, useState } from "react";

/**
 * Type định nghĩa cấu trúc dữ liệu flashsale nhận từ API backend.
 */
export interface FlashsaleCountdownProps {
  id: string;
  start_date: string;
  end_date: string;
  is_active: boolean;
}

interface Props {
  flashsale: FlashsaleCountdownProps;
  /**
   * Khoảng thời gian update đồng hồ (ms). Mặc định = 1000ms (1 giây).
   * Có thể tăng lên nếu muốn giảm tải render.
   */
  tickIntervalMs?: number;
}

/**
 * Hàm chuyển đổi chuỗi ngày từ server ("YYYY-MM-DD HH:mm:ss")
 * sang đối tượng Date hợp lệ trong JS.
 * 👉 Lưu ý: server không gửi timezone nên mặc định xử lý theo local time.
 */
const parseServerDateToLocal = (s: string) => {
  return new Date(s.replace(" ", "T"));
};

/**
 * Helper để format số có 2 chữ số (VD: 5 -> "05").
 */
const pad2 = (n: number) => String(n).padStart(2, "0");

/**
 * Component chính hiển thị đồng hồ đếm ngược Flash Sale (HH:MM:SS)
 *
 * Logic:
 * - Nếu `now < from_date` → trạng thái "starts" → đếm ngược đến lúc bắt đầu.
 * - Nếu `from_date <= now <= to_date` → trạng thái "ends" → đếm ngược đến lúc kết thúc.
 * - Nếu `now > to_date` → trạng thái "expired".
 */
const FlashsaleCountdown: React.FC<Props> = ({ flashsale, tickIntervalMs = 1000 }) => {
  const from = parseServerDateToLocal(flashsale.start_date);
  const to = parseServerDateToLocal(flashsale.end_date);

  /**
   * Hàm xác định mode hiện tại và thời gian còn lại (deltaSec)
   */
  const getModeAndDelta = () => {
    const now = new Date();

    if (now < from) {
      // Flash sale chưa bắt đầu
      return {
        mode: "starts",
        deltaSec: Math.max(0, Math.floor((from.getTime() - now.getTime()) / 1000)),
      };
    }

    if (now >= from && now <= to) {
      // Flash sale đang diễn ra
      return {
        mode: "ends",
        deltaSec: Math.max(0, Math.floor((to.getTime() - now.getTime()) / 1000)),
      };
    }

    // Flash sale đã kết thúc
    return { mode: "expired", deltaSec: 0 };
  };

  const initial = getModeAndDelta();

  // mode = "starts" | "ends" | "expired"
  const [mode, setMode] = useState(initial.mode as "starts" | "ends" | "expired");
  const [secondsLeft, setSecondsLeft] = useState<number>(initial.deltaSec);

  /**
   * useEffect: cập nhật đồng hồ mỗi tickIntervalMs (mặc định 1 giây).
   * Khi mode = "expired" → không setInterval nữa.
   */
  useEffect(() => {
    if (mode === "expired") return;

    const timer = setInterval(() => {
      const { mode: newMode, deltaSec } = getModeAndDelta();
      setMode(newMode as "starts" | "ends" | "expired");
      setSecondsLeft(deltaSec);
    }, tickIntervalMs);

    return () => clearInterval(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [flashsale.start_date, flashsale.end_date, tickIntervalMs]);

  /**
   * Khi flash sale đã kết thúc, có thể return UI khác (badge, banner, v.v.)
   */
  if (mode === "expired") {
    return (
      <div className="flex flex-col items-center">
        {/* UI kết thúc có thể bật lại khi cần */}
        {/* <div className="text-sm text-gray-500">Flashsale</div>
        <div className="mt-2 px-4 py-2 bg-gray-100 text-gray-600 rounded-2xl font-medium">Đã kết thúc</div> */}
      </div>
    );
  }

  // Tính giờ, phút, giây còn lại
  const hours = Math.floor(secondsLeft / 3600);
  const minutes = Math.floor((secondsLeft % 3600) / 60);
  const seconds = secondsLeft % 60;

  return (
    <div className="flex items-center space-x-2">
      <div className="flex flex-col items-center">
        {/* Label có thể bật nếu muốn hiển thị "Bắt đầu trong"/"Kết thúc trong" */}
        {/* <div className="text-base ">{mode === "starts" ? "Bắt đầu trong" : "Kết thúc trong"}</div> */}
      </div>

      {/* Hours box */}
      <div className="bg-black text-white text-lg font-bold px-2 py-1 rounded-lg min-w-[30px] text-center">
        {pad2(hours)}
      </div>

      <div className="text-black text-lg font-bold">:</div>

      {/* Minutes box */}
      <div className="bg-black text-white text-lg font-bold px-2 py-1 rounded-lg min-w-[30px] text-center">
        {pad2(minutes)}
      </div>

      <div className="text-black text-lg font-bold">:</div>

      {/* Seconds box */}
      <div className="bg-black text-white text-lg font-bold px-2 py-1 rounded-lg min-w-[30px] text-center">
        {pad2(seconds)}
      </div>
    </div>
  );
};

export default FlashsaleCountdown;
