// registerResponses.ts
// Các response case cho API /auth/register trong hệ thống ecommerce

export const registerResponses = {
  // ✅ Thành công
  "REGISTER_SUCCESS": {
    "success": true,
    "code": "REGISTER_SUCCESS",
    "message": "Đăng ký tài khoản thành công.",
    "data": {
      "userId": "u123456",
      "username": "johndoe",
      "email": "johndoe@example.com",
      "phone": "0987654321",
      "role": "ROLE_USER",
      "createdAt": 1694265600000
    }
  },

  // ⚠️ Username đã tồn tại
  "USERNAME_ALREADY_EXISTS": {
    "success": false,
    "code": "USERNAME_ALREADY_EXISTS",
    "message": "Số điện thoại đã được sử dụng.",
    "data": null
  },

  // ⚠️ Mật khẩu không hợp lệ
  "INVALID_PASSWORD": {
    "success": false,
    "code": "INVALID_PASSWORD",
    "message": "Mật khẩu không hợp lệ. Vui lòng nhập mật khẩu mạnh hơn.",
    "data": {
      "policy": {
        "minLength": 8,
        "requireNumber": true,
        "requireUppercase": true,
        "requireSpecialChar": true
      }
    }
  },

  // ⚠️ OTP chưa xác minh
  "OTP_NOT_VERIFIED": {
    "success": false,
    "code": "OTP_NOT_VERIFIED",
    "message": "Tài khoản chưa được xác thực.",
    "data": {
      "expireAt": 1694265900000,
      "resendAvailableAt": 1694265660000,
      "attemptsAllowed": 5
    }
  },

  // ❌ Lỗi hệ thống
  "SERVER_ERROR": {
    "success": false,
    "code": "SERVER_ERROR",
    "message": "Có lỗi xảy ra, vui lòng thử lại sau.",
    "data": null
  }
};
