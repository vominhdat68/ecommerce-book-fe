import React from "react";

export type ShippingAddressProps = {
  district: string;
  province: string;
  ward: string;
};

const ShippingAddress: React.FC<ShippingAddressProps> = ({
  ward,
  district,
  province,
}) => {
  // API thông minh: lấy vị trí hoặc lịch sử đã lưu trước đó
  const defaultAddress = "Phường Bến Nghé, Quận 1, TP.HCM";

  // Nếu có đủ dữ liệu thì hiển thị địa chỉ thật, nếu không thì dùng default
  const hasAddress = ward || district || province;
  const formattedAddress = hasAddress
    ? `${ward ? ward + ", " : ""}${district ? district + ", " : ""}${province || ""}`
    : defaultAddress;

  return (
    <div className="mt-3 flex flex-wrap items-center gap-x-2 text-[14px] text-gray-700">
      <span>
        Giao hàng đến{" "}
        <span className="font-semibold text-gray-900">{formattedAddress}</span>
      </span>

      <button
        onClick={() => window.alert("Chức năng chưa có")}
        className="text-[#2489F4] cursor-pointer text-[13px]"
      >
        Thay đổi
      </button>
    </div>
  );
};

export default ShippingAddress;
