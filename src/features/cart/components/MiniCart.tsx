import { useMinicart } from "@/features/cart/hook/useMinicart";
import { CartMiniSkeleton } from "@/shared/components/skeleton-screen/CartMiniSkeleton";

export const MiniCart: React.FC = () => {
    const { items, cartItemsCount, isLoading, isError } = useMinicart();

    if (isLoading) {
        return <CartMiniSkeleton/>
    }

    if (isError) {
        return (
            <div className="minicart flex items-center justify-center bg-white rounded-lg shadow-lg w-80 h-30">
                <div className="minicart-content p-4 ">
                    <p className="text-[15px]">Không thể tải thông tin giỏ hàng</p>
                </div>
            </div>
        );
    }

     if (!items || items.length === 0) {
        return (
            <div className="minicart bg-white rounded-lg shadow-lg border border-gray-200 w-80">
                <div className="minicart-header p-4 border-b border-gray-200 bg-gray-50">
                    <div className="flex items-center justify-between">
                        <h3 className="text-lg font-semibold text-gray-800">Giỏ hàng</h3>
                        <span className="text-sm text-gray-500">({cartItemsCount|| 0})</span>
                    </div>
                </div>
                <div className="minicart-content p-8 text-center">
                    <div className="text-gray-400 mb-3">
                        <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                    </div>
                    <p className="text-gray-500 text-sm mb-2">Chưa có sản phẩm nào trong giỏ hàng</p>
                    <p className="text-gray-400 text-xs">Hãy thêm sản phẩm vào giỏ hàng</p>
                </div>
            </div>
        );
    }

    return (
        <div className="minicart bg-white rounded-b-lg  w-100  overflow-hidden flex flex-col">
            {/* Header */}
            <div className="minicart-header p-4 border-b border-gray-200 bg-gray-50 flex-shrink-0">
                <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-gray-800">Giỏ hàng</h3>
                    <span className="text-sm text-gray-600 bg-white px-2 py-1">
                        {cartItemsCount} sản phẩm
                    </span>
                </div>
            </div>

            {/* Items list - Scrollable area */}
            {/*  overflow-y-auto */}
            <div className="minicart-items flex-1">
                <div className="p-4">
                    {items.map((item) => (
                        <div
                            key={item.product_id}
                            className="minicart-item flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors"
                        >
                            {/* Product image */}
                            <div className="flex-shrink-0">
                                <img
                                    src={item.image}
                                    alt={item.name}
                                    className="w-14 h-14 object-cover rounded border border-gray-200"
                                    onError={(e) => {
                                        (e.target as HTMLImageElement).src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDgiIGhlaWdodD0iNDgiIHZpZXdCb3g9IjAgMCA0OCA0OCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjQ4IiBoZWlnaHQ9IjQ4IiBmaWxsPSIjRjNGNEY2Ii8+CjxwYXRoIGQ9Ik0xNiAxOEwyNCAyNkwzMiAxOEgxNloiIGZpbGw9IiM5Q0EwQUQiLz4KPC9zdmc+';
                                    }}
                                />
                            </div>

                            {/* Product info */}
                            <div className="flex-1 min-w-0">
                                <div className="flex items-center justify-between">
                                    <h4 className="w-[230px] item-name text-[12px] font-medium text-gray-900 line-clamp-2 leading-tight mb-1">
                                        {item.name}
                                    </h4>
                                    <span className="item-quantity text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
                                        x{item.quantity}
                                    </span>
                                </div>

                                <div className="flex items-center justify-between">
                                    <span className="item-price text-xs text-gray-600">
                                        {item.price.toLocaleString('vi-VN')} đ
                                    </span>
                                    <div className="item-total text-xs font-medium text-green-600 mt-1">
                                        {(item.price * item.quantity).toLocaleString('vi-VN')} đ
                                    </div>
                                </div>

                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Footer with total and action buttons */}
            {/* <div className="minicart-footer border-t border-gray-200 bg-gray-50 p-4 flex-shrink-0">
                <div className="flex items-center justify-between mb-3">
                    <span className="text-sm font-medium text-gray-700">Tổng cộng:</span>
                    <span className="text-lg font-bold text-green-600">
                        {minicartData.items.reduce((total, item) => total + (item.price * item.quantity), 0).toLocaleString('vi-VN')} đ
                    </span>
                </div>

                <div className="flex space-x-2">
                    <button className="flex-1 bg-gray-600 text-white py-2 px-4 rounded-lg text-sm font-medium hover:bg-gray-700 transition-colors">
                        Xem giỏ hàng
                    </button>
                    <button className="flex-1 bg-green-600 text-white py-2 px-4 rounded-lg text-sm font-medium hover:bg-green-700 transition-colors">
                        Thanh toán
                    </button>
                </div>
            </div> */}
        </div>
    );
};