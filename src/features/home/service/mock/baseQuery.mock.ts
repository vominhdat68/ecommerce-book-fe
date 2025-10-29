// services/mock/baseQuery.mock.ts
import type { BaseQueryFn } from '@reduxjs/toolkit/query';
import {
  // 📦 TẤT CẢ PRODUCTS - DÙNG CHUNG /products API
  event_Moon,
  event_NationalDay,
  // ⚡ FLASH SALE - API RIÊNG
  flashSale,

  getData_TAB1XHMS,
  getData_TAB2_XHMS,
  getData_TAB3_XHMS,
  getData_TAB1STK,
  getData_TAB2_STK,
  getData_TAB3_STK,
  getData_TAB1THNB,
  getData_TAB2_THNB,
  getData_TAB3_THNB,
  getData_TAB1YAMAHA,
  getData_TAB2_YAMAHA,
  getData_TAB1COMBO_TRENDING,
  getData_TAB2_COMBO_TRENDING,
  getData_TAB3_COMBO_TRENDING,
  getData_TAB4_COMBO_TRENDING,
  getData_TAB5_COMBO_TRENDING,

  getData_TAB1RANK_VH,
  getData_TAB2RANK_KT,
  getData_TAB3RANK_TL_KNS,
  getData_TAB4RANK_TN,
  getData_TAB5RANK_SHNN,
  getData_TAB6RANK_FOREIGN,
  getData_TAB7RANK_KHAC,



  // 🏷️ MENU ITEMS - DÙNG /menu API
  categoryMenuItems,
  dmsp,
  tsnb,
  bst_nb,
  ncc,



  // 🖼️ BANNERS - API RIÊNG  
  mockBannerData,

  // 📊 PROGRESS BAR - API RIÊNG (danh sách product có progress)
  dataProgressBar,
  tabsLABEL_TRENDING,
  tabsLABEL_STUDY,
  tabsLABEL_SUPPLIERS,
  tabsLABEL_PUSHLISHER,
  tabsLABEL_COMBOS,
  tabsLABEL_RANK,

  personalization,

  introProducts,

} from './getData.mock';

/**
 * Mock BaseQuery cho Redux Toolkit Query
 * 
 * Service này cung cấp mock data cho tất cả API endpoints trong development
 * Giúp frontend team có thể phát triển mà không cần backend
 * 
 * Cấu trúc API:
 * - /products      : Tất cả danh sách sản phẩm (filter bằng params)
 * - /menu          : Menu & categories
 * - /flash-sale    : Flash sale data
 * - /banners       : Banner carousel
 * - /progress-bar  : Progress data cho products
 * - /tabs/*        : Dynamic tab configurations
 * - /events/*      : Event metadata
 * - /suppliers     : Suppliers metadata
 * - /collections/* : Collections metadata
 * - /combos/*      : Combos metadata
 * - /suggestions/* : Product suggestions
 * - /categories    : Product categories
 * 
 * @author Team Dev
 * @version 1.0
 */
export const mockBaseQuery: BaseQueryFn<
  { url: string; method?: string; body?: any; params?: any },
  unknown,
  unknown
> = async ({ url, method, body, params }) => {
  // Mô phỏng network delay - 300ms
  await new Promise(resolve => setTimeout(resolve, 300));

  // Xử lý các endpoints dựa trên URL
  switch (url) {
    // ==================== 📦 UNIFIED PRODUCTS API ====================
    case '/products':
      if (method === 'GET' || !method) {
        const { type, category, tab, event, limit = 20 } = params || {};

        let products = [];
        let category_name = '';

        // 🏷️ TYPE = TRENDING PRODUCTS
        if (type === 'trending') {
          category_name = 'Trending Products';
          if (tab === 'daily' || !tab) products = getData_TAB1XHMS;
          else if (tab === 'hot') products = getData_TAB2_XHMS;
          else if (tab === 'foreign') products = getData_TAB3_XHMS;
        }

        // 🏷️ TYPE = COMBO DEALS
        else if (type === 'combos') {
          category_name = 'Combo Deals';
          if (tab === 'economics' || !tab) products = getData_TAB1COMBO_TRENDING;
          else if (tab === 'language') products = getData_TAB2_COMBO_TRENDING;
          else if (tab === 'self-help') products = getData_TAB3_COMBO_TRENDING;
          else if (tab === 'literature') products = getData_TAB4_COMBO_TRENDING;
          else if (tab === 'children') products = getData_TAB5_COMBO_TRENDING;
        }

        // 📂 CATEGORY = STUDY MATERIALS
        else if (type === 'study') {
          category_name = 'Study Materials';
          if (tab === 'reference' || !tab) products = getData_TAB1STK;
          else if (tab === 'english') products = getData_TAB2_STK;
          else if (tab === 'tools') products = getData_TAB3_STK;
        }

        // 📂 CATEGORY = FEATURED BRANDS
        else if (type === 'suppliers') {
          category_name = 'Featured Brands';
          if (tab === 'alphabooks' || !tab) products = getData_TAB1THNB;
          else if (tab === 'sbooks') products = getData_TAB2_THNB;
          else if (tab === 'mcbooks') products = getData_TAB3_THNB;
        }

        // 📂 CATEGORY = PUBLISHERS
        else if (type === 'publisher') {
          category_name = 'Publishers';
          if (tab === 'yamaha') products = getData_TAB1YAMAHA;
          else if (tab === 'tan_viet') products = getData_TAB2_YAMAHA;
        }

        // 🏷️ TYPE = INTRO
        else if (type === 'intro') {
          category_name = introProducts.category_name;
          products = introProducts.products;
        }

        // 🪣 FALLBACK (khi không khớp gì)
        else {
          category_name = 'Unknown';
          products = [];
        }

        // ✅ Luôn trả về
        return {
          data: {
            success: true,
            data: {
              category_name,
              products: products.slice(0, limit),
              pagination: {
                current_page: 1,
                total_pages: Math.ceil(products.length / limit),
                total_products: products.length,
                has_next: products.length > limit,
                has_prev: false,
              },
            },
          },
        };
      }
      break;

    // ==================== 🏷️ MENU API ====================
    case '/menu':
      if (method === 'GET' || !method) {
        return {
          data: {
            success: true,
            data: {
              icon_url: '@/assets/images/category-menu/ico_sachtrongnuoc.svg',
              categories: categoryMenuItems,
              featured_categories: dmsp, // Danh mục sản phẩm
              tsdnb: tsnb,
              bst_nb: bst_nb,
              ncc: ncc,
            }
          }
        };
      }
      break;

    // ==================== 🖼️ BANNERS API ====================
    case '/banners':
      if (method === 'GET' || !method) {
        return {
          data: mockBannerData
        };
      }
      break;

    // ==================== 📊 PROGRESS BAR API ====================
    case '/progress-bar':
      if (method === 'GET' || !method) {
        return {
          data: dataProgressBar
        };
      }
      break;

    // ==================== ⚙️ TAB CONFIG API ====================


    // import a from '/cfhs/icon/icon-menu/icon_dealhot_new.png'
    // import a from '/cfhs/icon/icon-menu/icon_new.png'
    // import a from ''

    case '/tabs':
      if (method === 'GET' || !method) {
        const tabConfigs = {
          'trending': {
            section: 'trending',
            title: 'Xu Hướng Mua Sắm',
            iconURL: '/cfhs/icon/icon-menu/icon_dealhot_new.png',
            bg_url: '',
            tabs: tabsLABEL_TRENDING
          },
          'study': {
            section: 'study',
            title: '', // Học Tập & Tham Khảo
            iconURL: '',
            bg_url: '',
            tabs: tabsLABEL_STUDY
          },
          'suppliers': {
            section: 'suppliers',
            title: 'Thương hiệu nổi bật',
            iconURL: '/cfhs/icon/icon-menu/icon_dealhot_new.png',
            bg_url: '',
            tabs: tabsLABEL_SUPPLIERS
          },
          'publisher': {
            section: 'publisher',
            title: '',//Nhà xuất bản
            iconURL: '',
            bg_url: '',
            tabs: tabsLABEL_PUSHLISHER
          },
          'combos': {
            section: 'combos',
            title: 'Combo trending',
            iconURL: '/cfhs/icon/icon-menu/icon_new.png',
            bg_url: '',
            tabs: tabsLABEL_COMBOS
          },
          'rank': {
            section: 'rank',
            title: 'Bảng xếp hạng bán chạy trong tuần',
            iconURL: '',
            bg_url: "https://cdn1.fahasa.com/media/wysiwyg/Thang-6-2020/banner_vote_06_2020.png",
            tabs: tabsLABEL_RANK
          }
        };

        // Lấy loại tab từ query parameters
        const { section } = params || {};
        const tabType = section || 'trending';
        const config = tabConfigs[tabType];

        if (config) {
          return {
            data: {
              success: true,
              data: config
            }
          };
        } else {
          return {
            data: {
              success: false,
              message: 'Tab type not found'
            }
          };
        }
      }
      break;

    // ==================== 🎪 EVENTS API ====================
    case '/events':

      const { type } = params || {};

      if (method === 'GET' || !method && type === 'festival') {
        return {
          data: {
            success: true,
            data: event_Moon
          }
        };
      }

      if (method === 'GET' || !method && type === 'holiday') {
        return {
          data: {
            success: true,
            data: event_NationalDay
          }
        };
      }

      if (method === 'GET' || !method && type === 'flash-sale') {
        return {
          data: {
            success: true,
            data: flashSale
          }
        };
      }

      break;

    // ==================== 🎪 VOTE API ====================
    case '/vote':
      const { tab, limit = 20 } = params || {};
      let products = [];
      if (method === 'GET' || !method) {
        if (tab === 'rank_literature' || !tab) products = getData_TAB1RANK_VH;     // Tab mặc định
        else if (tab === 'rank_economics') products = getData_TAB2RANK_KT;
        else if (tab === 'rank_psychology_skills') products = getData_TAB3RANK_TL_KNS;
        else if (tab === 'rank_children') products = getData_TAB4RANK_TN;
        else if (tab === 'rank_foreign_language') products = getData_TAB5RANK_SHNN;
        else if (tab === 'rank_foreign_books') products = getData_TAB6RANK_FOREIGN;
        else if (tab === 'rank_other') products = getData_TAB7RANK_KHAC;
        // }

        // Trả về response với pagination
        return {
          data: products
        };
      }
      break;

    // ==================== 💡 SUGGESTIONS API ====================
    case '/personalized':
      if (method === 'GET' || !method) {
        return {
          data: {
            success: true,
            data: {
              personalization: personalization,
              type: 'popular',
              based_on: 'trending'
            }
          }
        };
      }
      break;


    // ==================== ❌ ERROR HANDLING ====================
    default:
      return {
        error: {
          status: 404,
          data: `No mock data for URL: ${url}`,
        },
      };
  }

  // Return error cho unsupported methods
  return {
    error: {
      status: 400,
      data: 'Unsupported method or parameters',
    },
  };
};