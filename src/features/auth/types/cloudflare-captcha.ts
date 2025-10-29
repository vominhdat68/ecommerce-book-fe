
export interface CaptchaCloudflareProps {
  // 🔹 Nhóm 1: Props bắt buộc - Các props không thể thiếu để CAPTCHA hoạt động
  
  /**
   * Site key được cung cấp bởi Cloudflare để xác thực domain của bạn
   * Key này là duy nhất cho mỗi website và được dùng để nhận diện
   * @example "1x00000000000000000000AA"
   */
  sitekey: string;
  
  /**
   * Callback function được gọi khi CAPTCHA được xác thực thành công
   * @param token - Token xác thực từ Cloudflare, cần được gửi đến server để verify
   */
  onVerify: (token: string) => void;

  // 🔹 Nhóm 2: Props xử lý sự kiện - Các callback cho các sự kiện của CAPTCHA
  
  /**
   * Callback function được gọi khi có lỗi xảy ra trong quá trình xác thực
   * @param error - Thông tin lỗi từ Cloudflare Turnstile
   */
  onError?: (error: any) => void;
  
  /**
   * Callback function được gọi khi CAPTCHA hết hạn (sau 5 phút)
   * Thường dùng để thông báo cho user cần thực hiện lại CAPTCHA
   */
  onExpire?: () => void;
  
  /**
   * Callback function được gọi khi script Cloudflare Turnstile đã tải xong
   * Useful để biết khi nào CAPTCHA ready để tương tác
   */
  onLoad?: () => void;

  // 🔹 Nhóm 3: Props tùy chỉnh giao diện - Các tùy chọn về hình thức hiển thị
  
  /**
   * Chủ đề màu sắc của CAPTCHA widget
   * @default 'auto' - Tự động phát hiện theo theme của hệ thống
   */
  theme?: 'light' | 'dark' | 'auto';
  
  /**
   * Kích thước hiển thị của CAPTCHA widget
   * - 'normal': Kích thước tiêu chuẩn
   * - 'compact': Kích thước nhỏ gọn
   * - 'flexible': Tự động điều chỉnh theo container
   * @default 'normal'
   */
  size?: 'normal' | 'compact' | 'flexible';
  
  /**
   * Hành động cụ thể mà CAPTCHA đang bảo vệ
   * Useful cho analytics và phân loại các loại request khác nhau
   * @example 'login', 'register', 'comment', 'checkout'
   * @default 'submit'
   */
  action?: string;
  
  /**
   * Ngôn ngữ hiển thị của CAPTCHA widget
   * @default 'auto' - Tự động phát hiện ngôn ngữ trình duyệt
   */
  language?: string;

  // 🔹 Nhóm 4: Props xử lý lỗi và thử lại - Cấu hình retry mechanism
  
  /**
   * Thời gian chờ (ms) giữa các lần thử lại khi tải script thất bại
   * @default 2000 (2 giây)
   */
  retryDelay?: number;
  
  /**
   * Số lần tối đa thử lại tải script khi thất bại
   * @default 3
   */
  retryAttempts?: number;

  // 🔹 Nhóm 5: Props container - Tùy chỉnh styling cho container
  
  /**
   * CSS class name áp dụng cho container chính của CAPTCHA
   */
  className?: string;
  
  /**
   * Inline styles áp dụng cho container chính của CAPTCHA
   */
  style?: React.CSSProperties;
  
  /**
   * Inline styles áp dụng cho container của iframe CAPTCHA
   * Useful để điều chỉnh kích thước, margin, padding của iframe
   */
  containerStyle?: React.CSSProperties;

  // 🔹 Nhóm 6: Cấu hình iframe và bảo mật - Các tùy chọn nâng cao
  
  /**
   * Chế độ thực thi của CAPTCHA
   * - 'render': Tự động render khi component mount
   * - 'execute': Chỉ render khi được gọi explicit
   * @default 'render'
   */
  execution?: 'render' | 'execute';
  
  /**
   * Chế độ hiển thị của CAPTCHA
   * - 'always': Luôn hiển thị
   * - 'execute': Chỉ hiển thị khi được gọi explicit
   * - 'interaction-only': Chỉ hiển thị khi user tương tác
   * @default 'always'
   */
  appearance?: 'always' | 'execute' | 'interaction-only';

  /** Trạng thái loading component tùy chỉnh */
  loadingComponent?: React.ReactNode;
}

export interface CaptchaContextType {
  isVerified: boolean;
  token: string | null;
  setVerified: (token: string) => void;
  reset: () => void;
}

export interface CaptchaProviderProps {
  children: React.ReactNode;
}

/**
 * Global declaration để TypeScript nhận biết Turnstile object
 * được thêm vào window bởi Cloudflare script
 */
declare global {
  interface Window {
    turnstile: {
      /**
       * Render CAPTCHA widget vào container được chỉ định
       * @param container - DOM element hoặc selector string
       * @param options - Cấu hình cho CAPTCHA widget
       * @returns Widget ID để tham chiếu sau này
       */
      render: (container: string | HTMLElement, options: any) => string;
      /**
       * Reset CAPTCHA widget về trạng thái ban đầu
       * @param widgetId - ID của widget cần reset
       */
      reset: (widgetId: string) => void;
       /**
       * Xóa CAPTCHA widget khỏi DOM
       * @param widgetId - ID của widget cần xóa
       */
      remove: (widgetId: string) => void;
      /**
       * Lấy response token từ widget
       * @param widgetId - ID của widget
       * @returns Token xác thực hoặc undefined nếu chưa verify
       */
      getResponse: (widgetId: string) => string | undefined;
      /**
       * Execute CAPTCHA widget trong chế độ explicit
       * @param container - DOM element hoặc selector string
       * @param options - Cấu hình cho CAPTCHA widget
       */
      execute: (container: string | HTMLElement, options: any) => void;
    };
  }
}

// Export empty object để file này được coi là module
export {};