import type { RootState } from "@/shared/store/redux/reduxStore";

 
/**
 * Selector lấy số giây còn lại của countdown theo id
 * @returns số giây còn lại (>=0)
 */
export const selectTimeLeft = (state: RootState, id: string) => {
  // đổi state.auth.countdown thành đúng slice bạn đã combine
  const cd = state.auth.countdown[id];
  if (!cd) return 0;

  return Math.max(0, Math.ceil((cd.expireAt - Date.now()) / 1000));
};
