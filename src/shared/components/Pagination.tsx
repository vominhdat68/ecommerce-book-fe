import React, { useMemo } from "react";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  numberPage?: number; // số nút trang hiển thị tối đa (default = 5)
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
  numberPage = 5,
}) => {
  // Giới hạn tối đa 5 nút nếu numberPage quá lớn
  const maxVisible = Math.max(3, Math.min(numberPage, 7)); // Số lượng nút trang tối đa hiển thị
  const safeCurrentPage = Math.min(Math.max(1, currentPage), totalPages || 1); // Đảm bảo currentPage không vượt giới hạn

  // Tính toán danh sách trang hiển thị dựa vào vị trí hiện tại
  const pageNumbers = useMemo(() => {
    if (totalPages <= 0) return [];

    const pages: number[] = [];
    const half = Math.floor(maxVisible / 2);

    let start = Math.max(1, safeCurrentPage - half);
    let end = Math.min(totalPages, start + maxVisible - 1);

    // Điều chỉnh khi gần cuối danh sách
    if (end - start < maxVisible - 1) {
      start = Math.max(1, end - maxVisible + 1);
    }

    for (let i = start; i <= end; i++) {
      pages.push(i);
    }

    return pages;
  }, [safeCurrentPage, totalPages, maxVisible]);

  // Bảo vệ không cho click ra ngoài giới hạn
  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages && page !== safeCurrentPage) {
      onPageChange(page);
    }
  };

  if (totalPages <= 1) return null; // Không hiển thị nếu chỉ có 1 trang

  return (
    <div className="flex items-center justify-center gap-2 mt-10 select-none">
      {/* Nút Previous */}
      <button
        type="button"
        onClick={() => handlePageChange(safeCurrentPage - 1)}
        disabled={safeCurrentPage <= 1}
        className={`px-3 py-1 border rounded-lg text-sm font-medium transition-colors ${safeCurrentPage <= 1
            ? "text-gray-400 border-gray-200"
            : "text-gray-700 border-gray-300 hover:bg-gray-100 cursor-pointer"
          }`}
      >
        ←
      </button>

      {/* Hiển thị trang đầu + dấu ... */}
      {pageNumbers[0] > 1 && (
        <>
          <button
            type="button"
            onClick={() => handlePageChange(1)}
            className={`px-3 py-1 border rounded-lg text-sm font-medium cursor-pointer transition-colors ${safeCurrentPage === 1
                ? "bg-[#C92127] text-white border-[#C92127]"
                : "text-gray-700 border-gray-300 hover:bg-gray-100"
              }`}
          >
            1
          </button>
          {pageNumbers[0] > 2 && (
            <span className="text-gray-700 text-lg font-medium px-2">...</span>
          )}
        </>
      )}

      {/* Các nút trang chính */}
      {pageNumbers.map((page) => (
        <button
          key={page}
          type="button"
          onClick={() => handlePageChange(page)}
          className={`px-3 py-1 border rounded-lg text-sm font-medium cursor-pointer  ${page === safeCurrentPage
              ? "bg-[#C92127] text-white border-[#C92127]"
              : "text-gray-700 border-gray-300 hover:bg-gray-100"
            }`}
        >
          {page}
        </button>
      ))}

      {/* Hiển thị dấu ... + trang cuối */}
      {pageNumbers[pageNumbers.length - 1] < totalPages && (
        <>
          {pageNumbers[pageNumbers.length - 1] < totalPages - 1 && (
            <span className="text-gray-700 text-lg font-medium px-2">...</span>
          )}
          <button
            type="button"
            onClick={() => handlePageChange(totalPages)}
            className={`px-3 py-1 border rounded-lg text-sm font-medium cursor-pointer transition-colors ${safeCurrentPage === totalPages
                ? "bg-[#C92127] text-white border-[#C92127]"
                : "text-gray-700 border-gray-300 hover:bg-gray-100"
              }`}
          >
            {totalPages}
          </button>
        </>
      )}

      {/* Nút Next */}
      <button
        type="button"
        onClick={() => handlePageChange(safeCurrentPage + 1)}
        disabled={safeCurrentPage >= totalPages}
        className={`px-3 py-1 border rounded-lg text-sm font-medium cursor-pointer  transition-colors ${safeCurrentPage >= totalPages
            ? "text-gray-400 border-gray-200"
            : "text-gray-700 border-gray-300 hover:bg-gray-100"
          }`}
      >
        →
      </button>
    </div>
  );
};

export default Pagination;