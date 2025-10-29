// hooks/useProductPolicies.ts
import { useCallback } from 'react';

const POLICY_MESSAGES: Record<string, string> = {
  delivery: 'Thời gian giao hàng: Giao hàng nhanh trong 2-4 ngày làm việc',
  return: 'Chính sách đổi trả: Đổi trả miễn phí trong 30 ngày',
  wholesale: 'Chính sách khách sỉ: Ưu đãi đặc biệt cho đơn hàng từ 10 sản phẩm',
};

export const useProductPolicies = () => {
  const handlePolicyClick = useCallback((policyType: string): void => {
    window.alert(POLICY_MESSAGES[policyType] || 'Thông tin chính sách');
  }, []);

  const handleKeyPress = useCallback((e: React.KeyboardEvent, policyType: string): void => {
    if (e.key === 'Enter') {
      handlePolicyClick(policyType);
    }
  }, [handlePolicyClick]);

  return {
    handlePolicyClick,
    handleKeyPress,
  };
};