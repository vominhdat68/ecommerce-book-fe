// services/homeService.ts
import { createApi } from '@reduxjs/toolkit/query/react';
import type {
  BannerResponse,
  MenuResponse,
  ProgressBarResponse,
  CategoryResponse,
  ProductResponse,
  EventResponse,
  SupplierResponse,
  ComboResponse,
  TabConfigResponse,
  SuggestionResponse,
  CollectionResponse,
  TypeEvent,
  TypeTab,
  TypeProduct,
  RankProduct
} from '@/features/home/types/home.props';
import { mockBaseQuery } from './mock/baseQuery.mock';

/**
 * HomeService - API Service cho Homepage
 * 
 * Service này cung cấp tất cả API endpoints cho trang chủ, được thiết kế để:
 * - Tối ưu performance với caching và lazy loading
 * - Dễ dàng maintain và mở rộng
 * - Type-safe với TypeScript
 * - Hỗ trợ development với mock data
 * 
 * @version 2.0
 * @author Team Dev
 * @created 2024
 */
export const homeService = createApi({
  reducerPath: 'homeService',
  baseQuery: mockBaseQuery, // Sử dụng mock data cho development
  tagTypes: [
    'Banner',
    'Menu',
    'FlashSale',
    'ProgressBar',
    'Product',
    'Event',
    'Supplier',
    'TabConfig',
    'Vote',
    'Suggestion',
  ],
  endpoints: (builder) => ({
    // ==================== CORE CONFIGURATION APIS ====================

    /**
     * Lấy dữ liệu banners cho carousel
     * 
     * @returns BannerResponse - Danh sách banners với thông tin hiển thị
     * 
     * @example
     * const { data: banners, isLoading } = useGetBannersQuery();
     * if (banners) {
     *   // Render banner carousel
     * }
     */
    getBanners: builder.query<BannerResponse, void>({
      query: () => ({ url: '/banners' }),
      providesTags: ['Banner'],
    }),

    /**
     * Lấy dữ liệu menu navigation
     * 
     * Bao gồm:
     * - Danh mục sản phẩm chính
     * - Danh mục nổi bật  
     * - Quick links
     * 
     * @returns MenuResponse - Cấu trúc menu hoàn chỉnh
     * 
     * @example
     * const { data: menu } = useGetMenuQuery();
     * // menu.data.categories - Danh mục chính
     * // menu.data.featured_categories - Danh mục nổi bật
     */
    getMenu: builder.query<MenuResponse, void>({
      query: () => ({ url: '/menu' }),
      providesTags: ['Menu'],
    }),

    // ==================== FLASH SALE & PROGRESS ====================

    /**
     * Lấy dữ liệu flash sale kèm progress bar
     * 
     * Endpoint này trả về cả thông tin flash sale và progress data
     * cho các sản phẩm đang được sale
     * 
     * @returns FlashSaleResponse & ProgressBarResponse - Kết hợp cả 2 datasets
     * 
     * @example
     * const { data: flashSale } = useGetFlashSaleQuery();
     * // flashSale.flash_sale - Thông tin flash sale
     * // flashSale.products - Sản phẩm flash sale
     * // flashSale.progressData - Progress data
     */
    // getFlashSale: builder.query<FlashSaleResponse & { progressData: ProgressBarResponse }, void>({
    //   query: () => ({ url: '/flash-sale' }),
    //   providesTags: ['FlashSale', 'ProgressBar'],
    // }),

    /**
     * Lấy riêng progress bar data
     * 
     * Sử dụng khi chỉ cần progress data mà không cần thông tin flash sale
     * Sử dụng cho các sản phẩm giảm giá mạnh 
     * 
     * @returns ProgressBarResponse - Chỉ progress data
     * 
     * @example  
     * const { data: progress } = useGetProgressBarQuery();
     * // progress.data - Mảng progress items
     */
    getProgressBar: builder.query<ProgressBarResponse, void>({
      query: () => ({ url: '/progress-bar' }),
      providesTags: ['ProgressBar'],
    }),

    // ==================== UNIFIED PRODUCTS API ====================

    /**
     * UNIVERSAL PRODUCTS API - Endpoint duy nhất cho tất cả sản phẩm
     * 
     * Thay vì có nhiều endpoints riêng biệt, tất cả sản phẩm đều được
     * lấy qua endpoint này với các bộ lọc khác nhau
     * 
     * @param params - Bộ lọc để xác định loại sản phẩm cần lấy
     * @param params.type - Loại sản phẩm: trending, featured, combo, collections
     * @param params.category - Danh mục: study-materials, featured-brands, publishers  
     * @param params.event - Sự kiện: moon-festival, national-day
     * @param params.tab - Tab hiện tại (mặc định là tab đầu tiên)
     * @param params.limit - Số lượng sản phẩm (mặc định: 20)
     * @param params.sort - Cách sắp xếp: popular, newest, price_asc, price_desc, discount
     * 
     * @returns ProductResponse - Danh sách sản phẩm đã được lọc
     * 
     * @example
     * // Trending products - tab mặc định
     * const { data: trending } = useGetProductsQuery({ type: 'trending' });
     * 
     * // Trending products - tab cụ thể
     * const { data: hotProducts } = useGetProductsQuery({ 
     *   type: 'trending', 
     *   tab: 'hot' 
     * });
     * 
     * // Study materials - tab mặc định (reference)
     * const { data: study } = useGetProductsQuery({ 
     *   category: 'study-materials' 
     * });
     * 
     * // Event products
     * const { data: eventProducts } = useGetProductsQuery({ 
     *   event: 'moon-festival' 
     * });
     * 
     * // Combo deals
     * const { data: combos } = useGetProductsQuery({ 
     *   type: 'combo', 
     *   tab: 'economics' 
     * });
     */
    getProducts: builder.query<ProductResponse, {
      type?: TypeProduct;
      category?: 'study-materials' | 'featured-brands' | 'publishers';
      event?: TypeEvent
      tab?: TypeTab;
      limit?: number;
      page?: number;
      sort?: 'popular' | 'newest' | 'price_asc' | 'price_desc' | 'discount';
    }>({
      query: (params) => ({
        url: '/products',
        params: {
          limit: 20,
          ...params
        }
      }),
      providesTags: (result, error, arg) => [
        'Product',
        ...(arg.type ? [{ type: 'Product' as const, id: arg.type }] : []),
        ...(arg.category ? [{ type: 'Product' as const, id: arg.category }] : []),
        ...(arg.tab ? [{ type: 'Product' as const, id: `${arg.type || arg.category}-${arg.tab}` }] : [])
      ],
    }),

    // ==================== DYNAMIC CONFIG APIS ====================

    /**
     * Lấy cấu hình tabs động cho các sections
     * 
     * API này cho phép backend điều khiển cấu trúc tabs mà không cần
     * frontend deploy lại. Mỗi section có tabs configuration riêng.
     * 
     * @param section - Section identifier: trending, study, suppliers, publisher, combos
     * @returns TabConfigResponse - Cấu hình tabs cho section
     * 
     * @example
     * const { data: tabConfig } = useGetTabConfigQuery({ section: 'trending' });
     * // tabConfig.data.tabs - Mảng tabs: [{ key: 'daily', label: 'Xu Hướng Theo Ngày' }]
     */
    getTabConfig: builder.query<TabConfigResponse, {
      section: TypeProduct;
    }>({
      query: ({ section }) => ({
        url: `/tabs`,
        params: {
          section
        }
      }),
      providesTags: ['TabConfig'],
    }),

    // ==================== EVENTS & CAMPAIGNS ====================

    /**
     * Lấy metadata của events (không bao gồm sản phẩm)
     * 
     * Sản phẩm events sẽ được lấy qua getProductsQuery với event filter
     * API này chỉ trả về metadata như background image, thời gian, v.v.
     * 
     * @param type - Loại event: moon-festival, national-day, flash-sale, campaign
     * @returns EventResponse - Metadata của event
     * 
     * @example
     * const { data: event } = useGetEventsQuery({ type: 'moon-festival' });
     * // event.data.event.bg_image - Background image cho event
     * // event.data.event.name - Tên event
     */
    getEvents: builder.query<EventResponse, {
      type: TypeEvent;

    }>({
      query: ({ type }) => ({
        url: `/events`,
        params: {
          type,

        }
      }),
      providesTags: (result, error, arg) => [
        'Event',
        { type: 'Event' as const, id: arg.type }
      ],
    }),


    getVote: builder.query<RankProduct[], {
      tab?: TypeTab;
    }>({
      query: ({ tab }) => ({
        url: `/vote`,
        params: {
          tab,
        }
      }),
      providesTags: ['Vote'],
    }),

    // ==================== SUPPLIERS & BRANDS ====================

    /**
     * Lấy danh sách suppliers (nhà cung cấp)
     * 
     * @returns SupplierResponse - Danh sách suppliers với metadata
     * 
     * @example
     * const { data: suppliers } = useGetSuppliersQuery();
     * // suppliers.data.suppliers - Mảng suppliers
     */
    getSuppliers: builder.query<SupplierResponse, void>({
      query: () => ({ url: '/suppliers' }),
      providesTags: ['Supplier'],
    }),


    // ==================== SUGGESTIONS & CATEGORIES ====================

    /**
     * Lấy danh sách sản phẩm gợi ý
     * 
     * @param type - Loại gợi ý: popular, recent, related, personalized
     * @param limit - Số lượng sản phẩm (mặc định: 8)
     * @returns SuggestionResponse - Danh sách sản phẩm gợi ý
     * 
     * @example
     * const { data: suggestions } = useGetSuggestionsQuery({ type: 'popular' });
     */
    getSuggestions: builder.query<SuggestionResponse, {
      type?: 'popular' | 'recent' | 'related' | 'personalized';
      limit?: number;
    }>({
      query: () => ({
        url: `/personalized`,
      }),
      providesTags: ['Suggestion'],
    }),

  }),

});

// Export hooks để sử dụng trong components
export const {
  // Core APIs - Sử dụng ngay
  useGetBannersQuery,
  useGetMenuQuery,
  useGetProgressBarQuery,

  // UNIFIED PRODUCTS API - Chỉ 1 hook cho tất cả sản phẩm
  useGetProductsQuery,

  // Configuration APIs
  useGetTabConfigQuery,

  // Metadata APIs
  useGetEventsQuery,
  useGetVoteQuery,
  useGetSuppliersQuery,
  useGetSuggestionsQuery,
} = homeService;