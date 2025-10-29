
/**
 * Định dạng số ngắn gọn (compact) theo đơn vị:
 *  - < 1,000       → hiển thị bình thường (532)
 *  - < 1,000,000   → hiển thị dạng k (1.2k)
 *  - >= 1,000,000  → hiển thị dạng M (1.2M)
 *
 * @param value - Số cần format
 * @returns Chuỗi đã format, ví dụ: "532", "1.2k", "1.2M"
 */
export function formatNumberCompact(value: number): string {
  if(!value) return "0";
  if (value < 1000) {
    return value.toString();
  } else if (value < 1_000_000) {
    const formatted = (value / 1000).toFixed(value % 1000 === 0 ? 0 : 1);
    return `${formatted.replace(/\.0$/, '')}k`;
  } else {
    const formatted = (value / 1_000_000).toFixed(value % 1_000_000 === 0 ? 0 : 1);
    return `${formatted.replace(/\.0$/, '')}M`;
  }
}

export function formatCurrencyVND(value: number | string): string {
  let numericValue: number;
  
  if (typeof value === 'string') {
    let processedValue = value
      .replace(/\./g, '') // Loại bỏ dấu phân cách hàng nghìn
      .replace(',', '.'); // Chuyển dấu phẩy thập phân thành dấu chấm
    
    numericValue = parseFloat(processedValue);
  } else {
    numericValue = value;
  }
  
  if (isNaN(numericValue)) {
    return '0';
  }
  
  return new Intl.NumberFormat("vi-VN", {
    currency: "VND",
  }).format(numericValue);
}

// Hàm định dạng ngày sang "Thứ X – dd/MM/yyyy"
export const formatDateVN = (isoString: string): string => {
  const date = new Date(isoString);
  const days = [
    "Chủ nhật",
    "Thứ hai",
    "Thứ ba",
    "Thứ tư",
    "Thứ năm",
    "Thứ sáu",
    "Thứ bảy",
  ];

  const dayOfWeek = days[date.getDay()];
  const day = date.getDate().toString().padStart(2, "0");
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const year = date.getFullYear();

  return `${dayOfWeek}(${day}/${month}/${year})`;
};