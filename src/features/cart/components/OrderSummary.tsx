import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { selectSelectedIds } from '@/features/cart/slices/cartSlice';
import { useGetCartQuery } from '@/features/cart/services/cartService';

import { PATHS } from "@/shared/routes/paths";

const OrderSummary: React.FC = () => {
  const selectedIds = useSelector(selectSelectedIds);
  const { data: dataCart } = useGetCartQuery();

  // Tính toán giá dựa vào selectedIds
  const { subtotal, total } = useMemo(() => {
    const selectedItems = dataCart?.items.filter(i => selectedIds.includes(i.product_id));
    const subtotal = selectedItems?.reduce((sum, i) => sum + i.price * i.quantity, 0);
    // nếu có logic VAT hay phí khác, tính tại đây
    const total = subtotal;
    return { subtotal, total };
  }, [dataCart?.items, selectedIds]);

  const disabled = selectedIds.length === 0;

  return (
    <div className="w-full rounded-lg bg-white">
      <div className="flex justify-between flex-wrap px-3 py-3">
        <span className="font-medium mr-1">Thành tiền</span>
        <span>{subtotal?.toLocaleString("vi-VN")} đ</span>
      </div>
      <hr className='w-[95%] mx-auto text-[#ededed]' />
      <div className="flex justify-between items-center flex-wrap px-3 py-3 font-semibold">
        <span className='mr-1'>Tổng Số Tiền (gồm VAT)</span>
        <span className="text-[#C92127] text-xl">{total?.toLocaleString("vi-VN")} đ</span>
      </div>
      <div className='px-3'>
        
        <Link to={PATHS.checkout.cart}>
          <button
            disabled={disabled}
            onClick={() => window.alert('Page Thanh Toán chưa có')}
            className={`w-full py-3 rounded-md font-semibold transition-colors
            ${disabled
                ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                : "bg-[#C92127] text-white cursor-pointer hover:bg-red-700 "}`}
          >
            <span className='uppercase '>Thanh toán</span>
          </button>
        </Link>
      </div>
      <div className='mt-1 pb-3 px-3' >
        <Link to='/chinh-sach-khach-si/'>
          <span className="text-[13px] text-[#FF0000] hover:text-[#F39801]">
            (Giảm giá trên web chỉ áp dụng cho bán lẻ)
          </span>
        </Link>
      </div>
    </div>
  );
};

export default OrderSummary;
