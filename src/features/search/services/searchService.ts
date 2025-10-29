// src/features/search/searchApi.ts
import { createApi } from '@reduxjs/toolkit/query/react';
import type { InitDropdownResponse, SuggestionResponse, } from '@/features/search/types/search.type';
import { mockBaseQuery } from './mock/baseQuery.mock';


// EN: RTK Query API slice for search | VI: Slice API cho tìm kiếm
export const searchServices = createApi({
    reducerPath: 'searchApi',
    baseQuery: mockBaseQuery, //fetchBaseQuery({ baseUrl: '/api' })
    tagTypes: ['History', 'Init'],
    endpoints: (builder) => ({
        // A. Mở dropdown: lấy lịch sử + trending + featured categories
        initDropdown: builder.query<InitDropdownResponse, void>({
            // EN: Combine 3 APIs into one call | VI: Gộp 3 API thành 1 call
            query: () => '/search/init-dropdown',
        }),

        // B.  gợi ý từ khoá khi người dùng gõ
        suggestions: builder.query<SuggestionResponse, string>({
            // EN: Returns both keywords and products in one response | VI: Trả về cả từ khoá + sản phẩm
            query: (q) => `/search/suggestions?q=${encodeURIComponent(q)}`,
        }),

        // F. Tìm kiếm thực sự
        search: builder.query<SuggestionResponse[], { q: string; filters?: any }>({
            query: ({ q, filters }) => ({
                url: '/search',
                params: { q, ...filters },
            }),
        }),
        // lưu từ khoá lịch sử khi user chọn/enter
        saveHistory: builder.mutation<void, string>({
            query: (keyword) => ({
                url: '/search/history',
                method: 'POST',
                body: { keyword },
            }),
        }),
        // D/E. Xoá lịch sử (một/multiple/all)
        deleteHistory: builder.mutation<void, string[] | undefined>({
            // EN: if ids provided, delete those; if undefined or empty, delete all | VI: Nếu có ids thì xoá các mục, nếu không có thì xoá tất cả
            query: (ids) => ({
                url: '/search/history',
                method: 'DELETE',
                body: { ids },
            }),
        }),
    }),
});
export const {
    useInitDropdownQuery,
    useSuggestionsQuery,
    useSearchQuery,
    useSaveHistoryMutation,
    useDeleteHistoryMutation,
} = searchServices;