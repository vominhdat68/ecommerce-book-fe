export const loginResponses = {
  SUCCESS: {
    code: "SUCCESS",
    success: true,
    message: "Đăng nhập thành công",
  },

  INVALID_CREDENTIALS: {
    code: "INVALID_CREDENTIALS",
    success: false,
    message: "Tên đăng nhập hoặc mật khẩu không đúng",
  },

  ACCOUNT_NOT_VERIFIED: {
    code: "ACCOUNT_NOT_VERIFIED",
    success: false,
    message: "Tài khoản chưa được xác minh",
  },

  ACCOUNT_LOCKED: {
    code: "ACCOUNT_LOCKED",
    success: false,
    message: "Tài khoản đã bị khóa",
  },

  TOO_MANY_ATTEMPTS: {
    code: "TOO_MANY_ATTEMPTS",
    success: false,
    message: "Bạn đã nhập sai quá nhiều lần. Vui lòng thử lại sau.",
  },

  OTP_REQUIRED: {
    code: "OTP_REQUIRED",
    success: false,
    message: "Cần nhập mã OTP để tiếp tục.",
  },

  CAPTCHA_REQUIRED: {
    code: "CAPTCHA_REQUIRED",
    success: false,
    message: "Vui lòng hoàn thành captcha trước khi đăng nhập.",
  },

  SERVER_ERROR: {
    code: "SERVER_ERROR",
    success: false,
    message: "Có lỗi xảy ra trên hệ thống. Vui lòng thử lại sau.",
  },
};
