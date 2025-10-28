// forgotPasswordResponses.ts

export const forgotPasswordResponses = {
  // 📝 Gửi yêu cầu lấy lại mật khẩu (gửi OTP hoặc link)

  // ❌ Không tìm thấy user
  USER_NOT_FOUND: {
    success: false,
    code: 'USER_NOT_FOUND',
    message: 'Không tìm thấy tài khoản với email này.'
  },

  // ❌ Captcha sai
  INVALID_CAPTCHA: {
    success: false,
    code: 'INVALID_CAPTCHA',
    message: 'Xác thực Captcha không hợp lệ.'
  },


  // 📝 Đặt lại mật khẩu mới
  RESET_PASSWORD_SUCCESS: {
    success: true,
    code: 'RESET_PASSWORD_SUCCESS',
    message: 'Đặt lại mật khẩu thành công.'
  },

  INVALID_PASSWORD: {
    success: false,
    code: 'INVALID_PASSWORD',
    message: 'Mật khẩu mới không đáp ứng yêu cầu về độ phức tạp.'
  }
};
