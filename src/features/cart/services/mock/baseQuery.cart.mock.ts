// baseQuery.mock.ts
import type { BaseQueryFn } from "@reduxjs/toolkit/query";
import type { FetchArgs } from "@reduxjs/toolkit/query";
import { initCartMock } from "./data.cart.mock";
import { data_profile_product } from "../../../../shared/data/data_profile_product.mock";

// Key cho localStorage
const CART_STORAGE_KEY = "mock_cart_data";
const PRODUCTS_STORAGE_KEY = "mock_products_data";

/**
 * Utility functions for localStorage
 */
const storage = {
  getCart: (): typeof initCartMock => {
    if (typeof window === "undefined") return initCartMock;

    try {
      const stored = localStorage.getItem(CART_STORAGE_KEY);
      return stored ? JSON.parse(stored) : initCartMock;
    } catch (error) {
      console.warn("Failed to load cart from localStorage, using initial data");
      return initCartMock;
    }
  },

  saveCart: (cartData: typeof initCartMock): void => {
    if (typeof window === "undefined") return;

    try {
      localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cartData));
    } catch (error) {
      console.warn("Failed to save cart to localStorage");
    }
  },

  getProducts: (): any[] => {
    if (typeof window === "undefined") return data_profile_product;

    try {
      const stored = localStorage.getItem(PRODUCTS_STORAGE_KEY);
      return stored ? JSON.parse(stored) : data_profile_product;
    } catch (error) {
      console.warn("Failed to load products from localStorage, using initial data");
      return data_profile_product;
    }
  },

  saveProducts: (products: any[]): void => {
    if (typeof window === "undefined") return;

    try {
      localStorage.setItem(PRODUCTS_STORAGE_KEY, JSON.stringify(products));
    } catch (error) {
      console.warn("Failed to save products to localStorage");
    }
  },

  // Reset to initial data (useful for testing)
  resetCart: (): void => {
    if (typeof window === "undefined") return;
    localStorage.removeItem(CART_STORAGE_KEY);
  },

  resetProducts: (): void => {
    if (typeof window === "undefined") return;
    localStorage.removeItem(PRODUCTS_STORAGE_KEY);
  }
};

// Initialize cart data from localStorage or initial mock
let cartData = storage.getCart();
let productsData = storage.getProducts();

export const mockBaseQuery: BaseQueryFn<string | FetchArgs, unknown, unknown> = async (args) => {
  const url = typeof args === "string" ? args : args.url;
  const method = typeof args === "string" ? "GET" : args.method || "GET";
  const body = typeof args === "string" ? undefined : args.body;

  // Delay giả lập mạng
  await new Promise((r) => setTimeout(r, 300));

  /** ------------------ LẤY GIỎ HÀNG ------------------ */
  if (url === "/cart" && method === "GET") {
    return { data: cartData };
  }

  /** ------------------ LẤY MINICART ------------------ */
  if (url === "/cart/mini" && method === "GET") {
    // Trích xuất thông tin minicart từ cartData
    const minicartData = {
      items:  cartData.items.slice(0,5).map(item => ({
        product_id: item.product_id,
        name: item.name,
        image: item.image,
        price: item.price,
        quantity: item.quantity,
        row_total: item.row_total,
        sku: item.sku
      })),
      cart_items_count: cartData.items.length
    };
console.log(minicartData)
    return { data: minicartData };
  }

  /** ------------------ THÊM SẢN PHẨM ------------------ */
  if (url === "/cart" && method === "POST") {
    const newItem = body as any;

    // Kiểm tra xem sản phẩm đã có trong giỏ chưa
    const existingIndex = cartData.items.findIndex(
      (item) => item.product_id === newItem.product_id
    );

    if (existingIndex !== -1) {
      // Nếu có rồi → tăng số lượng (immutable update)
      cartData = {
        ...cartData,
        items: cartData.items.map((item, index) =>
          index === existingIndex
            ? { ...item, quantity: item.quantity + newItem.quantity }
            : item
        )
      };
    } else {
      // Nếu chưa có → tìm thông tin sản phẩm từ data_profile_product
      const infoItem = data_profile_product.find(
        (item) => Number(item.product_id) === newItem.product_id
      );
      // Nếu chưa có → thêm mới
      const newCartItem = {
        product_id: newItem.product_id,
        quantity: newItem.quantity,
        is_checked: false,
        soon_release: "",
        original_price: infoItem?.old_price || infoItem?.price || 0,
        sku: newItem.sku || "",
        type_id: "simple",
        weight: newItem.weight || 0,
        name: infoItem?.title || "",
        image: infoItem?.images[0] || "",
        product_url: infoItem?.slug || "",
        category_main: newItem.category_main || "",
        category_mid: newItem.category_mid || "",
        category_3: newItem.category_3 || "",
        category_4: newItem.category_4 || "",
        category_main_id: newItem.category_main_id || 0,
        category_mid_id: newItem.category_mid_id || 0,
        category_3_id: newItem.category_3_id || 0,
        category_4_id: newItem.category_4_id || 0,
        supplier: newItem.supplier || "",
        publisher: newItem.publisher || "",
        evoucher: null,
        author: newItem.author || [],
        is_poster_tube: 0,
        price: infoItem?.price || 0,
        options: {},
        discount_amount: infoItem?.discount_amount || 0,
        discount_percent: infoItem?.discount_percent || 0,
        row_total: (infoItem?.price || 0) * newItem.quantity,
        out_of_stock: false,
        message: "",
        is_unchecked: false,
        has_error: false,
      };

      cartData = {
        ...cartData,
        items: [...cartData.items, newCartItem]
      };
    }

    // Lưu vào localStorage
    storage.saveCart(cartData);

    return { data: { success: true, cart: cartData } };
  }

  /** ------------------ CẬP NHẬT SỐ LƯỢNG ------------------ */
  if (url.startsWith("/cart/") && method === "PUT") {
    const productId = Number(url.split("/").pop());
    const { quantity } = body as { quantity: number };

    // Immutable update
    cartData = {
      ...cartData,
      items: cartData.items.map(item =>
        item.product_id === productId
          ? { ...item, quantity }
          : item
      )
    };

    // Lưu vào localStorage
    storage.saveCart(cartData);

    return { data: { success: true, cart: cartData } };
  }

  /** ------------------ XÓA SẢN PHẨM ------------------ */
  if (url.startsWith("/cart/") && method === "DELETE") {
    const productId = Number(url.split("/").pop());

    cartData = {
      ...cartData,
      items: cartData.items.filter((item) => item.product_id !== productId)
    };

    // Lưu vào localStorage
    storage.saveCart(cartData);

    return { data: { success: true, cart: cartData } };
  }

  /** ------------------ KIỂM TRA TỒN KHO ------------------ */
  if (url.startsWith("/stock/check") && method === "GET") {
    const query = new URLSearchParams(url.split("?")[1]);
    const product_id = query.get("product_id");
    const variant_id = query.get("variant_id");

    const product = productsData.find(
      (p) => String(p.product_id) === String(product_id)
    );

    if (!product) {
      return { error: { status: 404, data: "Product not found" } };
    }

    let stock_quantity = product.stock_quantity ?? 0;

    const available = stock_quantity > 0;
    return { data: { available, stock: stock_quantity } };
  }

  /** ------------------ QUẢN LÝ SẢN PHẨM ------------------ */
  if (url === "/products" && method === "GET") {
    return { data: productsData };
  }

  if (url === "/products" && method === "POST") {
    const newProduct = body as any;
    productsData = [...productsData, newProduct];
    storage.saveProducts(productsData);
    return { data: { success: true, product: newProduct } };
  }

  if (url.startsWith("/products/") && method === "PUT") {
    const productId = Number(url.split("/").pop());
    const updatedProduct = body as any;

    productsData = productsData.map(product =>
      product.product_id === productId ? { ...product, ...updatedProduct } : product
    );

    storage.saveProducts(productsData);
    return { data: { success: true, product: updatedProduct } };
  }

  /** ------------------ RESET DATA (cho testing) ------------------ */
  if (url === "/reset-cart" && method === "POST") {
    storage.resetCart();
    cartData = storage.getCart();
    return { data: { success: true, message: "Cart reset successfully" } };
  }

  if (url === "/reset-products" && method === "POST") {
    storage.resetProducts();
    productsData = storage.getProducts();
    return { data: { success: true, message: "Products reset successfully" } };
  }

  /** ------------------ 🚫 ROUTE KHÔNG HỢP LỆ ------------------ */
  return {
    error: {
      status: 404,
      data: "Not found",
    },
  };
};

// Export storage utilities for direct access if needed
export { storage as mockStorage };