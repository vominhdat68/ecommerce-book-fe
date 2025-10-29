
/**
 * Custom Error class dành riêng cho Captcha,
 * có thêm thuộc tính `code` để mô tả loại lỗi cụ thể.
 */
export class CaptchaError extends Error {
  public code?: string;

  constructor(message: string, code?: string) {
    super(message);
    this.name = 'CaptchaError';
    this.code = code;
  }
}

/**
 * Kiểm tra script Cloudflare Turnstile đã được load hay chưa.
 * Trả về true nếu window.turnstile tồn tại.
 */
export const isTurnstileLoaded = (): boolean => {
  return typeof window !== 'undefined' && !!window.turnstile;
};

/**
 * Khởi tạo Captcha trong container HTML.
 * @param container - Thẻ HTML để render captcha
 * @param options - Cấu hình captcha (sitekey, callbacks...)
 * @returns widgetId (string) hoặc null nếu thất bại
 * @throws CaptchaError nếu Turnstile chưa load hoặc render thất bại
 */
export const initCaptcha = (
  container: HTMLElement,
  options: any
): string | null => {
  if (!isTurnstileLoaded()) {
    throw new CaptchaError('Cloudflare Turnstile not loaded');
  }

  try {
    return window.turnstile.render(container, options);
  } catch (error) {
    throw new CaptchaError(
      'Failed to initialize CAPTCHA',
      error instanceof Error ? error.message : 'UNKNOWN_ERROR'
    );
  }
};

/**
 * Xoá Captcha widget đã render.
 * @param widgetId - ID captcha được trả về từ initCaptcha
 * @returns true nếu xoá thành công, false nếu thất bại
 */
export const cleanupCaptcha = (widgetId: string | null): boolean => {
  if (!widgetId || !isTurnstileLoaded() || !window.turnstile.remove) {
    return false;
  }

  try {
    window.turnstile.remove(widgetId);
    return true;
  } catch (error) {
    console.warn('Failed to cleanup CAPTCHA:', error);
    return false;
  }
};

/**
 * Reset Captcha về trạng thái ban đầu.
 * @param widgetId - ID captcha cần reset
 * @returns true nếu reset thành công, false nếu thất bại
 */
export const resetCaptcha = (widgetId: string | null): boolean => {
  if (!widgetId || !isTurnstileLoaded() || !window.turnstile.reset) {
    return false;
  }

  try {
    window.turnstile.reset(widgetId);
    return true;
  } catch (error) {
    console.warn('Failed to reset CAPTCHA:', error);
    return false;
  }
};

/**
 * Lấy token xác thực (response) từ Captcha.
 * @param widgetId - ID captcha
 * @returns token string hoặc undefined nếu chưa có
 */
export const getCaptchaResponse = (widgetId: string | null): string | undefined => {
  if (!widgetId || !isTurnstileLoaded() || !window.turnstile.getResponse) {
    return undefined;
  }

  try {
    return window.turnstile.getResponse(widgetId);
  } catch (error) {
    console.warn('Failed to get CAPTCHA response:', error);
    return undefined;
  }
};

/**
 * Kiểm tra captcha đã được verify chưa (dựa vào response token).
 * @param widgetId - ID captcha
 * @returns true nếu có token, false nếu chưa
 */
export const isCaptchaVerified = (widgetId: string | null): boolean => {
  return !!getCaptchaResponse(widgetId);
};

/**
 * Sinh ra cấu hình captcha (options) với callbacks kèm theo.
 * - onVerify: callback khi captcha verify thành công (trả về token)
 * - onError: callback khi có lỗi (error-callback, timeout-callback)
 * - onExpire: callback khi captcha hết hạn
 */
export const getCaptchaOptions = (
  sitekey: string,
  callbacks: {
    onVerify: (token: string) => void;
    onError?: (error: any) => void;
    onExpire?: () => void;
  },
  options: {
    theme?: string;
    size?: string;
    action?: string;
    language?: string;
  } = {}
): any => {
  return {
    sitekey,
    theme: options.theme || 'auto',
    size: options.size || 'normal',
    action: options.action || 'submit',
    language: options.language || 'auto',
    callback: (token: string) => {
      callbacks.onVerify(token);
    },
    'error-callback': (error: any) => {
      callbacks.onError?.(new CaptchaError(
        'CAPTCHA verification failed',
        error?.errorCodes?.join(',') || 'VERIFICATION_ERROR'
      ));
    },
    'expired-callback': () => {
      callbacks.onExpire?.();
    },
    'timeout-callback': () => {
      callbacks.onError?.(new CaptchaError('CAPTCHA verification timed out', 'TIMEOUT'));
    }
  };
};

/**
 * Thực thi Captcha thủ công (chủ động trigger).
 * @param container - Element chứa captcha
 * @param options - Cấu hình captcha
 * @returns true nếu thực thi thành công, false nếu thất bại
 */
export const executeCaptcha = (
  container: HTMLElement,
  options: any
): boolean => {
  if (!isTurnstileLoaded() || !window.turnstile.execute) {
    return false;
  }

  try {
    window.turnstile.execute(container, options);
    return true;
  } catch (error) {
    console.warn('Failed to execute CAPTCHA:', error);
    return false;
  }
};
