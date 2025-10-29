// src/services/cartApi.ts
import { createApi } from '@reduxjs/toolkit/query/react';
import type { ProductDetailResponse } from '@/features/product-detail/detailProduct.type';
import { mockBaseQuery } from './mock/mockBaseQuery';

export const productDetailService = createApi({
  reducerPath: 'productDetailService',
  baseQuery: mockBaseQuery,
  tagTypes: ['Product'],
  endpoints: (builder) => ({
    getProductDetail: builder.query<ProductDetailResponse, number>({
      query: (product_id) => ({
        url: '/getProductDetail',
        method: 'POST',
        params: { product_id },
      }),

    }),
  }),
});

export const { useGetProductDetailQuery } = productDetailService;