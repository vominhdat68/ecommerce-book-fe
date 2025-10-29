import type { BaseQueryFn } from '@reduxjs/toolkit/query';
import type { FetchArgs } from '@reduxjs/toolkit/query';
import { initDropdownMock, suggestionsMock } from './data.mock';

// EN: A fake baseQuery returning mock data depending on URL
// VI: BaseQuery giả trả về dữ liệu mock dựa vào URL
export const mockBaseQuery: BaseQueryFn<string | FetchArgs, unknown, unknown> = async (args) => {
  const url = typeof args === 'string' ? args : args.url;

  // Mô phỏng delay
  await new Promise((r) => setTimeout(r, 300));

  if (url === '/search/init-dropdown') {
    return { data: initDropdownMock };
  }

  if (url?.startsWith('/search/suggestions')) {
    return { data: suggestionsMock };
  }

  if (url === '/search/history' && (typeof args !== 'string' && args.method === 'POST')) {
        console.log('label save: ',args.body.label)
        
    return { data: { success: true } };
  }

  if (url === '/search/history' && (typeof args !== 'string' && args.method === 'DELETE')) {
    console.log('label delete: ',args.body.label)

    return { data: { success: true } };
  }

  return { error: { status: 404, data: 'Not found' } };
};
