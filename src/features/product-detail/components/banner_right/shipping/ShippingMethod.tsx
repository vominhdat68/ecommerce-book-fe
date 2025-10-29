import React from "react";
import { formatDateVN } from "@/shared/utils/helper";

export type ShippingMethodProps = {
  method: string;
  estimatedTimeDelivery?: string;
  estimatedDatetimeDelivery?: string;
};

const ShippingMethod: React.FC<ShippingMethodProps> = ({
  method,
  estimatedTimeDelivery,
  estimatedDatetimeDelivery,
}) => {
  const hasEstimate = estimatedTimeDelivery || estimatedDatetimeDelivery;

  return (
    <div className="flex items-start gap-2 mt-4">
      {/* Icon xe giao hàng */}
      <span className="ico_delivery_green" />

      <div className="flex flex-col">
        <span className="text-gray-800 text-[16px] font-semibold">
          {method}
        </span>

        {hasEstimate && (
          <span className="text-gray-600 text-[14px] mt-2">
            Dự kiến giao{" "}
            {estimatedTimeDelivery && (
              <strong>{estimatedTimeDelivery}</strong>
            )}
            {estimatedTimeDelivery && estimatedDatetimeDelivery && " - "}
            {estimatedDatetimeDelivery && (
              <strong>{formatDateVN(estimatedDatetimeDelivery)}</strong>
            )}
          </span>
        )}
      </div>
    </div>
  );
};

export default ShippingMethod;
