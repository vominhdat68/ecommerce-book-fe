// src/pages/CategoryPage.tsx
import React from 'react';
import { Link } from 'react-router-dom'; ``
import imgNotFound from '@/assets/images/404_web_image.png';

/**
 * Trang hiển thị khi không tìm thấy danh mục hoặc nội dung (Error 404)
 */
const NotFoundPage: React.FC = () => {
  return (
    <section className="flex flex-col items-center justify-center px-4 py-10 md:flex-row md:gap-10">
      <img
        src={imgNotFound}
        alt="Không tìm thấy trang"
        className="h-64 md:h-[340px] object-contain"
      />

      <div className="flex flex-col gap-4 max-w-sm mt-6 md:mt-0">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Oops!</h2>
        <p className="text-base md:text-lg font-medium text-gray-900">
          Rất tiếc, chúng tôi không thể tìm thấy những gì bạn đang tìm kiếm.
        </p>
        <span className="text-sm md:text-base text-gray-500">Error code: 404</span>

        <Link to="/" className="block">
          <button
            type="button"
            className="w-full h-10 rounded-md bg-red-700 text-white hover:bg-red-800 transition-colors cursor-pointer"
          >
            Quay lại trang chủ
          </button>
        </Link>
      </div>
    </section>
  );
};

export default NotFoundPage;
