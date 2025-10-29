import React from "react";

import LangIcon from "@/shared/components/header/HeaderActions/Lang/LangIcon";
import IconActions from "@/shared/components/header/HeaderActions/IconActions";
import { PATHS } from "@/shared/routes/paths";
import HoverPopupIcon from "@/shared/components/HoverPopupIcon";
import NotifiPopup from "@/shared/components/header/HeaderActions/NotifiPopup"

import AuthButtons from "@/shared/components/AuthButtons";
import AuthModal from "@/shared/components/AuthModal";
import { MiniCart } from "@/features/cart/components/MiniCart";
import { useMinicart } from "@/features/cart/hook/useMinicart";

const HeaderActions: React.FC = () => {
  const { cartItemsCount } = useMinicart();

  return (
    <div className="flex items-center gap-3 pl-[24px]">

      <HoverPopupIcon
        labelContent={<IconActions url_page={''} iconClass="icon_nofi_gray" label="Thông Báo" />}
        popupContent={<NotifiPopup />}
      />
      <HoverPopupIcon
        labelContent={<IconActions url_page={PATHS.checkout.cart} iconClass="icon_cart_gray" label="Giỏ Hàng" badgeCount={cartItemsCount} />}
        popupContent={<MiniCart />}
      />
      <HoverPopupIcon
        labelContent={<IconActions url_page={PATHS.auth.loginReferer} iconClass="icon_account_gray" label="Tài khoản" />}
        popupContent={<AuthButtons />}
      />
      <LangIcon />

      {/* Modal login/register */}
      <AuthModal />
    </div>
  );
};

export default HeaderActions;
