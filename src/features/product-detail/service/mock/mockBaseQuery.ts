import type { BaseQueryFn, FetchArgs } from "@reduxjs/toolkit/query";
import { data_profile_product } from "../../../../shared/data/data_profile_product.mock";

// src/services/mock/mockBaseQuery.ts
// src/services/mock/mockBaseQuery.ts
export const mockBaseQuery: BaseQueryFn<string | FetchArgs, unknown, unknown> = async (args) => {
  const url = typeof args === 'string' ? args : args.url;

  await new Promise(resolve => setTimeout(resolve, 300));

  if (url === '/getProductDetail') {
    // 👇 Lấy product_id từ params thay vì body
    const product_id = typeof args !== 'string' ? (args as any).params?.product_id : null;

    const data = data_profile_product.find((p) => Number(p.product_id) === Number(product_id));
    if (data) {
      return {
        data: {
          success: true,
          data
        }
      };
    } else {
      return {
        error: {
          status: 404,
          data: 'Product not found'
        }
      };
    }
  }

  return { error: { status: 404, data: 'Endpoint not found' } };
};