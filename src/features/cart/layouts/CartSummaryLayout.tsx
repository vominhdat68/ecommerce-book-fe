import React from "react";
import PromotionCard from "@/features/cart/components/PromotionCard";
import OrderSummary from "@/features/cart/components/OrderSummary";
import { GiftCard } from "@/features/cart/components/GiftCard";


const CartSummaryLayout: React.FC = () => {
    // const { state, actions} = useCart();
    //  basis-1/4
    return (
        <>
            <div className='cart-right ml-3'>
                <div className="sticky top-[130px] z-49">
                    <div className="summary-top">
                        <PromotionCard
                            title="Mã Giảm 10K - Toàn Sàn"
                            description="Đơn hàng từ 130k - Không bao gồm giá trị của các sản phẩm sau Manga, Ngoại Văn, Phiếu Quà Tặng, Sách Giáo Khoa, Máy Tính và Giấy Photo và Một Số Loại Giấy và Bảng Khác"
                            expiryDate="30/09/2025"
                            remainingAmount={130000}
                            onBuyMore={() => console.log("Mua thêm")}
                        />
                        <GiftCard/>
                    </div>
                    <OrderSummary/>

                </div >
            </div >
        </>

    );
};
export default CartSummaryLayout;