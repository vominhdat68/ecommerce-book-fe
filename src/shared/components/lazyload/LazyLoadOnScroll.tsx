import React, { useEffect, useRef, useState, type ReactNode } from 'react';

interface LazyLoadOnScrollProps {
  /** Component con cần lazy load */
  children: ReactNode;

  /** 
   * Khoảng cách từ viewport để kích hoạt load.
   * Ví dụ: '200px 0px' → khi còn cách vùng nhìn thấy 200px sẽ bắt đầu load.
   */
  rootMargin?: string;

  /**
   * Ngưỡng kích hoạt: tỷ lệ phần tử hiển thị trong viewport.
   * - 0.0 → chỉ cần chạm nhẹ vào viewport là kích hoạt.
   * - 1.0 → phải hiển thị toàn bộ mới kích hoạt.
   */
  threshold?: number;

  /**
   * Component hiển thị tạm (skeleton/loading UI) khi chưa load component thật.
   */
  placeholder?: ReactNode;

  /**
   * Mức độ ưu tiên lazy load.
   * - 'high'   → load sớm hơn (cách xa viewport vẫn load).
   * - 'medium' → mặc định.
   * - 'low'    → load muộn hơn, khi gần tới viewport mới load.
   */
  priority?: 'high' | 'medium' | 'low';

  /**
   * Nếu = true → bỏ qua lazy load, render luôn component thật.
   * Dùng cho mobile hoặc SSR.
   */
  immediate?: boolean;
}

const LazyLoadOnScroll: React.FC<LazyLoadOnScrollProps> = ({
  children,
  rootMargin = '500px 0px',
  threshold = 0.1,
  placeholder = null,
  priority = 'medium',
  immediate = false,
}) => {
  // ----------------------------------------------------------
  // 🧠 State quản lý
  // ----------------------------------------------------------
  const [isVisible, setIsVisible] = useState(immediate); // true → render thật
  const [isMounted, setIsMounted] = useState(immediate); // true → có thể render placeholder
  const ref = useRef<HTMLDivElement | null>(null);       // ref DOM dùng cho observer
  const hasBeenVisible = useRef(immediate);              // đánh dấu đã hiển thị

  // ----------------------------------------------------------
  // ⚙️ Cấu hình ưu tiên (priority)
  // ----------------------------------------------------------
  const priorityConfig = {
    high: { rootMargin: '600px 0px', delay: 0 },
    medium: { rootMargin: '550px 0px', delay: 100 },
    low: { rootMargin: '450px 0px', delay: 300 },
  };

  // ----------------------------------------------------------
  // 🎯 Thiết lập IntersectionObserver
  // ----------------------------------------------------------
  useEffect(() => {
    if (immediate || hasBeenVisible.current) return;

    // 👉 Tạo 1 marker ảo (1px) trong DOM để observer theo dõi vị trí
    const marker = document.createElement('div');
    marker.style.height = '1px';
    marker.style.width = '100%';
    marker.style.position = 'relative';
    marker.style.pointerEvents = 'none';

    const parent = document.body;
    parent.appendChild(marker);
    ref.current = marker;

    const config = priorityConfig[priority];

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasBeenVisible.current) {
          setTimeout(() => {
            setIsMounted(true);              // Cho phép render placeholder
            setTimeout(() => setIsVisible(true), 50); // Render component thật
            hasBeenVisible.current = true;
            observer.unobserve(marker);       // Ngừng quan sát
            parent.removeChild(marker);       // Xóa marker ảo
          }, config.delay);
        }
      },
      {
        rootMargin: config.rootMargin || rootMargin,
        threshold,
      }
    );

    observer.observe(marker);

    // 🧹 Cleanup khi unmount
    return () => {
      observer.disconnect();
      if (parent.contains(marker)) parent.removeChild(marker);
    };
  }, [priority, threshold, immediate]);

  // ----------------------------------------------------------
  // 🖼️ Render logic
  // ----------------------------------------------------------
  if (!isMounted) return null; // chưa cần render gì

  return <>{isVisible ? children : placeholder}</>;
};

export default LazyLoadOnScroll;



// rootMargin: '<top> <right> <bottom> <left>'
export const LAZY_LOAD_CONFIG = {
  HIGH: {
    rootMargin: '600px 0px', // 👉 Cách vùng nhìn thấy 250px đã bắt đầu load
    priority: 'high' as const,
  },
  MEDIUM: {
    rootMargin: '150px 0px', // 👉 Khi còn cách ~150px
    priority: 'medium' as const,
  },
  LOW: {
    rootMargin: '50px 0px',  // 👉 Chỉ load khi gần tới vùng hiển thị
    priority: 'low' as const,
  },
};