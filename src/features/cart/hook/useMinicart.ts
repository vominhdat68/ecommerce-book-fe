import { useGetCartMiniQuery } from "../services/cartService";

export const useMinicart = () => {
  const { data, isLoading, isError, refetch } = useGetCartMiniQuery();

  return {
    items: data?.items || [],
    cartItemsCount: data?.cart_items_count || 0,
    isLoading,
    isError,
    refetch
  };
};