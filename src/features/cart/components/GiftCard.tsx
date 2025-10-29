import React from 'react'
import ico_chose_gift from '@/assets/images/cart/ico_chose-gift.svg'
import ico_right_arrow from '@/assets/images/cart/ico_right-arrow.svg'

export const GiftCard: React.FC = () => {
  return (
    <div className="rounded-2xl border border-gray-200 p-3 mb-2 shadow-sm
       bg-linear-to-r from-[#E7E7FF] to-[#FFFFFF] 
       flex items-center justify-between">
      <div className="flex items-center">
        <img src={ico_chose_gift} />
        <span className="ml-2 font-medium text-base font-semibold">Nhận quà</span>
      </div>
      <div className='flex items-center text-sm cursor-pointer hover:opacity-80'
        onClick={() => window.alert('Chưa có')}
      >
        <span className="text-[#2F80ED] text-sm">
          Chọn quà
        </span>
        <img className='ml-2' src={ico_right_arrow} />
      </div>
    </div>
  )
}