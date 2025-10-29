import React from "react";


interface Props {
    itemsCount: number;
}

const CartHeaderLayout: React.FC<Props> = ({itemsCount}) => {
    
    return (
        <>
            <div className="cart-title flex items-center my-4 font-normal">
                <h1 className="uppercase !m-0 !text-xl">Giỏ hàng</h1>
                <span className="ml-[5px] text-base">({itemsCount} sản phẩm)</span>
            </div>
        </>

    );
};
export default CartHeaderLayout;
