import React from "react";
import ShippingAddress, { type ShippingAddressProps } from "@/features/product-detail/components/banner_right/shipping/ShippingAddress";
import ShippingMethod, { type ShippingMethodProps } from "@/features/product-detail/components/banner_right/shipping/ShippingMethod";

type Props = {
    shippingAddress: ShippingAddressProps;
    shippingMethod: ShippingMethodProps;
};

const ShippingInfoCard: React.FC<Props> = ({
    shippingAddress,
    shippingMethod,
}) => {
    return (
        <>
            <h2 className="text-[18px] font-semibold text-gray-800">
                Thông tin vận chuyển
            </h2>

            <ShippingAddress
                ward={shippingAddress.ward}
                district={shippingAddress.district}
                province={shippingAddress.province}
            />
            <ShippingMethod
                method={shippingMethod.method}
                estimatedTimeDelivery={shippingMethod.estimatedTimeDelivery}
                estimatedDatetimeDelivery={shippingMethod.estimatedDatetimeDelivery}
            />
        </>
    );
};

export default ShippingInfoCard;
