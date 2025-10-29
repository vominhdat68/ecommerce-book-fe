// src/services/cartApi.ts
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { CartData, MinicartData } from '@/features/cart/types/cart.type';
import { mockBaseQuery } from './mock/baseQuery.cart.mock';

export const cartService = createApi({
  reducerPath: 'cartService',
  baseQuery: mockBaseQuery,
  tagTypes: ['Cart','Minicart'],
  endpoints: (builder) => ({
    getCart: builder.query<CartData, void>({
      query: () => '/cart',
      providesTags: ['Cart'],
    }),
    // chi lay 5 items trong  cart
    getCartMini: builder.query<MinicartData, void>({
      query: () => '/cart/mini',
      providesTags: ['Minicart'],
    }),
    updateQuantity: builder.mutation<void, { id: number; quantity: number }>({
      query: ({ id, quantity }) => ({
        url: `/cart/${id}`,
        method: 'PUT',
        body: { quantity },
      }),
      invalidatesTags: ['Cart', 'Minicart'],
    }),
    removeItem: builder.mutation<void, number>({
      query: (id) => ({
        url: `/cart/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Cart', 'Minicart'],
    }),
    addItem: builder.mutation<void, {
      product_id: number;
      quantity: number;
      variant_id?: string; // Thêm variant_id để xử lý biến thể
    }>({
      query: (body) => ({
        url: '/cart',
        method: 'POST',
        body,
      }),
      invalidatesTags: ['Cart', 'Minicart'],
    }),
    // Thêm API để kiểm tra tồn kho
    checkStock: builder.query<{ available: boolean; stock: number }, {
      product_id: string;
      variant_id?: string
    }>({
      query: ({ product_id, variant_id }) =>
        `/stock/check?product_id=${product_id}${variant_id ? `&variant_id=${variant_id}` : ''}`,
    }),
  }),
});

export const {
  useGetCartQuery,
  useGetCartMiniQuery,
  useUpdateQuantityMutation,
  useRemoveItemMutation,
  useAddItemMutation,
  useCheckStockQuery, // Thêm hook mới
} = cartService;