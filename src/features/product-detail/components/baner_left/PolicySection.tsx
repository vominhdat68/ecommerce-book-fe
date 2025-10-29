
import React from 'react';
import { PolicyItem } from './PolicyItem';

import ico_truck from '@/assets/images/product-detail/ico_truck_v2.png'; 
import ico_transfer from '@/assets/images/product-detail/ico_transfer_v2.png'; 
import ico_shop from '@/assets/images/product-detail/ico_shop_v2.png';

interface PolicySectionProps {
  onPolicyClick: (policyType: string) => void;
  onKeyPress: (e: React.KeyboardEvent, policyType: string) => void;
}

const POLICIES = [
  {
    type: 'delivery',
    icon: ico_truck,
    title: 'Thời gian giao hàng:',
    description: 'Giao nhanh và uy tín',
  },
  {
    type: 'return',
    icon: ico_transfer,
    title: 'Chính sách đổi trả:',
    description: 'Đổi trả miễn phí toàn quốc',
  },
  {
    type: 'wholesale',
    icon: ico_shop,
    title: 'Chính sách khách sỉ:',
    description: 'Ưu đãi khi mua số lượng lớn',
  },
];

export const PolicySection: React.FC<PolicySectionProps> = ({ onPolicyClick, onKeyPress }) => {
  return (
    <div className="policies-section">
      <h3 className="my-3 font-semibold text-gray-800">Chính sách ưu đãi</h3>

      <div className="policy-list text-sm text-gray-700 space-y-2">
        {POLICIES.map((policy) => (
          <PolicyItem
            key={policy.type}
            {...policy}
            onClick={onPolicyClick}
            onKeyPress={onKeyPress}
          />
        ))}
      </div>
    </div>
  );
};