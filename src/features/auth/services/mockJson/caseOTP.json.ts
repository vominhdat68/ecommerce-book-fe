// sendOTP:
// OTP_SENT
// INVALID_PHONE
// OTP_SEND_FAILED
// TOO_MANY_REQUESTS

// resendOTP:
// OTP_RESENT
// OTP_RESEND_TOO_EARLY
// OTP_RESEND_LIMIT_REACHED
// OTP_RESEND_FAILED

// verifyOTP:
// OTP_VERIFIED
// OTP_INVALID
// OTP_EXPIRED
// OTP_TOO_MANY_ATTEMPTS
// OTP_ALREADY_USED
// OTP_NOT_FOUND
// OTP_BLOCKED
// OTP_SERVER_ERROR

// xử lý các case cơ bản ở client
// xử lý các case ở server trả về client
 
// flwo register
// compoent
// 0.trạng thái ban đầu initial
// 1.input SDT
// 2.chọn method nhận SMS OTP
// 3.captcha xác thực(ẩn)
// 4.input nhập otp
// 5.(ẩn)
//   5.1button countdown+gửi lại otp
//   5.2button chọn lại method gửi SMS OTP
// 6.input đặc mật khẩu
// 7.button đăng ký


// 1.
// input SDT:
//  valid: 10 số,
//  hợp lệ (10 chữ số, số việt nam) -> cho phép click button method nhận SMS OTP
//  không hợp lệ(ko phải số vn) -> hiện message(chỉ hiện khi valid,khi nhập đủ 10 số)


// 2.2button chọn method nhận SMS OTP
//  click chọn method -> hiện 3

// 3.captcha xác thực 
//  thành công -> 
//      tự động gửi yêu cầu nhận otp call api với parameter(phone,method sms,token captcha)
// 	      thành công-> enable input 4;ẩn 2;hiện 5
// 	      thất bại-> message thông báo dưới 1(sđt đã được đăng ký,...),
//                   nếu bị khóa OTP -> ẩn 3
//  thất bại -> tự động xác thực lại(nếu quá nhiều lần có thể yêu cầu chọn lại 2)

// 4.input nhập otp - tự động call api verify otp parameter(phone, otp)
//  valid-> 6 số,
//  thành công -> enable input 6; ẩn 3; ẩn 4; ẩn 5; 
//  thất bại -> hiện message dưới 4

// 5.(ẩn)
//   5.1button countdown<->Gửi lại OTP
// 	hiện countdown(mặc định) -> hết countdown chuyển sang trạng thái button "Gửi lại OTP"
// 	hiện "Gửi lại OTP" -> call api resend otp với parameter(phone)
// 	  thành công-> countdown chạy lại;
// 	  thất bại-> hiện message dưới 4,tắt countdown
// 	      nếu  state 
// 		reset"otp bị khóa,quá số lần cho phép gửi lại otp,"-> hiện message dưới 1;quay lại 0
// 		phủ định reset(các state otp còn phép hoạt động) -> hiện message dưới 4
 
//   5.2button chọn lại method gửi SMS OTP
// 	quay về 0


// 6.input đặc mật khẩu
// 7.button đăng ký
//     valid 6
//     thành công-> chuyển đưới screen login or đăng nhập vô luôn
//     thất bại-> hiện message server trả về



export const sendOtpResponses = {
  // ✅ Thành công
  "OTP_SENT": {
    success: true,
    code: "OTP_SENT",
    message: "Mã OTP đã được gửi.",
    data: {
      expireAt: 60,       // OTP hết hạn sau X giây
      resendAvailableAt: 60,  // sau bao lâu thì có thể gửi lại
      attemptsAllowed: 5      // số lần nhập sai tối đa
    }
  },

    
  // ❌ Số điện thoại đã được sử dụng
  "USERNAME_ALREADY_EXISTS": {
    success: false,
    code: "USERNAME_ALREADY_EXISTS",
    message: "Số điện thoại đã được sử dụng."
  },

  // ❌ Số điện thoại không hợp lệ
  "INVALID_PHONE": {
    success: false,
    code: "INVALID_PHONE",
    message: "Số điện thoại không hợp lệ."
  },

  // ❌ Gửi OTP thất bại (do SMS/Zalo gateway)
  "OTP_SEND_FAILED": {
    success: false,
    code: "OTP_SEND_FAILED",
    message: "Không thể gửi OTP. Vui lòng thử lại sau.",
    data: {
      reason: "SMS_GATEWAY_ERROR"
    }
  },

  // ❌ Spam gửi OTP quá nhiều lần
  "TOO_MANY_REQUESTS": {
    success: false,
    code: "TOO_MANY_REQUESTS",
    message: "Bạn đã gửi OTP quá nhiều lần. Vui lòng thử lại sau.",
    data: {
      retryAfter: 300 // giây
    }
  }
}

export const resendOtpResponses = {
  // ✅ Thành công
  "OTP_RESENT": {
    success: true,
    code: "OTP_RESENT",
    message: "Mã OTP mới đã được gửi.",
    data: {
      expireAt: 60,
      resendAvailableAt: 60,
      attemptsAllowed: 5
    }
  },

  // ❌ Gửi lại quá sớm
  "OTP_RESEND_TOO_EARLY": {
    success: false,
    code: "OTP_RESEND_TOO_EARLY",
    message: "Vui lòng đợi trước khi gửi lại OTP.",
    data: {
      resendAvailableAt: 1725738900000 // timestamp khi được phép gửi lại
    }
  },

  // ❌ Đã vượt quá số lần resend
  "OTP_RESEND_LIMIT_REACHED": {
    success: false,
    code: "OTP_RESEND_LIMIT_REACHED",
    message: "Bạn đã vượt quá số lần gửi lại OTP trong ngày."
  },

  // ❌ Server lỗi khi gửi lại
  "OTP_RESEND_FAILED": {
    success: false,
    code: "OTP_RESEND_FAILED",
    message: "Không thể gửi lại OTP. Vui lòng thử lại sau.",
    data: {
      reason: "REDIS_CONNECTION_FAILED"
    }
  }
}

export const verifyOtpResponses = {
  // ✅ Thành công
  "OTP_VERIFIED": {
    success: true,
    code: "OTP_VERIFIED",
    message: "Xác thực OTP thành công.",
    data: {
      userId: "12345",
      verified: true,
      accessToken: "mock-access-token",
      refreshToken: "mock-refresh-token"
    }
  },

  // ❌ Sai OTP
  "OTP_INVALID": {
    success: false,
    code: "OTP_INVALID",
    message: "Mã OTP không chính xác.",
    data: {
      remainingAttempts: 2,
      expireAt: 60
    }
  },

  // ❌ OTP đã hết hạn
  "OTP_EXPIRED": {
    success: false,
    code: "OTP_EXPIRED",
    message: "Mã OTP đã hết hạn. Vui lòng yêu cầu gửi lại.",
    data: {
      expiredAt: 60
    }
  },

  // ❌ Nhập sai quá số lần cho phép
  "OTP_TOO_MANY_ATTEMPTS": {
    success: false,
    code: "OTP_TOO_MANY_ATTEMPTS",
    message: "Bạn không thể xác thực OTP, vì nhập sai quá nhiều lần.",
    data: {
      maxAttempts: 5,
      lockedUntil: 30 * 60
    }
  },

  // ❌ OTP đã được sử dụng
  "OTP_ALREADY_USED": {
    success: false,
    code: "OTP_ALREADY_USED",
    message: "Mã OTP đã được sử dụng. Vui lòng yêu cầu OTP mới."
  },

  // ❌ OTP không tồn tại
  "OTP_NOT_FOUND": {
    success: false,
    code: "OTP_NOT_FOUND",
    message: "Không tìm thấy mã OTP. Vui lòng gửi lại."
  },

  // ❌ OTP bị khóa
  "OTP_BLOCKED": {
    success: false,
    code: "OTP_BLOCKED",
    message: "Bạn đã bị tạm khóa xác thực OTP. Vui lòng thử lại sau.",
    data: {
      lockedUntil: 30 * 60
    }
  },

  // ❌ Lỗi server
  "OTP_SERVER_ERROR": {
    success: false,
    code: "OTP_SERVER_ERROR",
    message: "Có lỗi xảy ra khi xác thực OTP. Vui lòng thử lại sau.",
    data: {
      reason: "REDIS_CONNECTION_FAILED"
    }
  }
}


// 📌 Tổng hợp các tham số có thể có trong "data":
// - expireAt: thời gian OTP hết hạn (timestamp ms hoặc giây, thường 3-5 phút)
// - resendAvailableAt: thời điểm cho phép gửi lại OTP (timestamp ms hoặc giây, thường 60s)
// - attemptsAllowed: số lần nhập sai tối đa được phép
// - remainingAttempts: số lần nhập sai còn lại
// - expiredAt: thời điểm OTP đã hết hạn
// - maxAttempts: số lần nhập sai tối đa
// - lockedUntil: thời gian bị khóa (s hoặc timestamp ms)
// - userId: ID của user
// - verified: trạng thái xác thực (true/false)
// - accessToken: JWT token đăng nhập
// - refreshToken: JWT refresh token
// - reason: mô tả lý do lỗi (dùng cho debug/log)
