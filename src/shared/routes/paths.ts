// src/constants/paths.ts
export const PATHS = {
  general: {
    home: '/',
    notFound: '*',
  },

  category: {
    domesticBooks: '/sach-trong-nuoc',
    foreignBooks: '/foreign-books',
    stationery: '/van-phong-pham',
    toys: '/do-choi',
    beautyHealth: '/lam-dep-suc-khoe',
    onlineGroceryGifts: '/bach-hoa-tong-hop',
    stationeryByBrand: '/luu-niem',

  },
  categoryDynamic: {
    group: '/:categorySlug/:groupSlug',
    subcategory: '/:categorySlug/:groupSlug/:subcategorySlug',
    brand: '/:categorySlug/:brandSlug',
    tag: '/:categorySlug/tags/:tagSlug',
  },

  product: {
    detail: '/:slug',
  },

  auth: {
    login: '/login',
    register: '/register',
    loginReferer: '/customer/account/login/referer',
  },

  checkout: {
    cart: '/checkout/cart',
    verify: '/verify-checkout/:checkoutId',
  },
};
