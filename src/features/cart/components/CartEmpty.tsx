import { Link } from "react-router-dom";
import svg_cart_empty from "@/assets/images/cart/ico_emptycart.svg"
import { PATHS } from "@/shared/routes/paths";

const CartEmpty: React.FC = () => (
    <div className="w-full bg-white rounded-[8px]">
        <div className="cart-empty py-10 flex flex-col items-center">
            <img src={svg_cart_empty} />
            <p className="text-sm my-6">Chưa có sản phẩm trong giỏ hàng của bạn.</p>
            <Link to={PATHS.general.home}>
                <button className="w-[220px] h-[40px] bg-[#C92127] text-white rounded-[8px] cursor-pointer">
                    <span className="text-sm uppercase"> Mua sắm ngay</span>
                </button>
            </Link>
        </div>
    </div>
);

export default CartEmpty;