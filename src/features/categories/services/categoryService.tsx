import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { mockBaseQuery } from "./mock/mockBaseQuery";
import type { ApiResponse, ProductQueryParams } from "../types/category.type";

export const categoryService = createApi({
    reducerPath: "categoryApi",
    baseQuery: mockBaseQuery, //fetchBaseQuery({ baseUrl: "/api" }),
    endpoints: (builder) => ({
        getProductsCategory: builder.query<ApiResponse, ProductQueryParams>({
            query: ({ page = 1, sort = "best-selling", filters = {} }) => {
                const params = new URLSearchParams();

                params.append("page", page.toString());
                params.append("sort", sort);

                Object.entries(filters).forEach(([key, value]) => {
                    if (typeof value === "string" && value.trim() !== "") {
                        params.append(key, value);
                    }
                    else if (
                        typeof value === "object" &&
                        value !== null &&
                        "min" in value &&
                        "max" in value
                    ) {
                        params.append(`${key}_min`, value.min.toString());
                        params.append(`${key}_max`, value.max.toString());
                    }
                });
                return `/product/?${params.toString()}`;
            },
        }),
    }),
});

// Custom hook
export const { useGetProductsCategoryQuery } = categoryService;
