// import { REGISTER } from "@/message";
// import { Message } from "@/types/auth";

export const validatePhone = (phone: string): boolean => {
  const vietnamPhoneRegex = /^(?:\+84|0)(3|5|7|8|9)\d{8}$/;
  return vietnamPhoneRegex.test(phone);
};

export const validateEmail = (email: string): boolean => {
  const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
  return emailRegex.test(email);
};

export const validatePassword = (password: string): string | null => {
  if (password.length < 8) return 'Mật khẩu phải có ít nhất 6 ký tự';
  if (/\s/.test(password)) return 'Mật khẩu không được chứa khoảng trắng';
  return null;
};

export const validateOTP = (otp: string): boolean => {
  return /^\d{6}$/.test(otp);
};
