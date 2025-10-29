
import { useLocation, useParams } from 'react-router-dom';
import { useGetProductDetailQuery } from '@/features/product-detail/service/detailProductService';

export const useProductDetail = () => {
  const { state } = useLocation();
  const { productId } = useParams<{ productId: string }>();

  const targetProductId = productId ? Number(productId) : state?.product_id;

  const queryResult = useGetProductDetailQuery(targetProductId!, {
    skip: !targetProductId,
    refetchOnMountOrArgChange: true,
  });

  return {
    targetProductId,
    productDetail: queryResult.data?.data,
    ...queryResult,
  };
};