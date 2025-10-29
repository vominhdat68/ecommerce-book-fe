// types/home.props.ts

/**
 * Base API Response Interface
 * @description Standard response structure for all API calls
 */
export interface BaseResponse {
  success?: boolean;
  message?: string;
  error?: string;
}

/**
 * Banner Response Interface
 * @description Response structure for banner data
 */
export interface BannerResponse extends BaseResponse {
  data: {
    mainBanners: Banner[];
    sideBanners: Banner[];
    promotionalBanners: Banner[];
  };
}

export interface Banner {
  id: string;
  image_src: string;
  redirect_url: string;
  title?: string;
  description?: string;
  order: number;
  is_active: boolean;
  start_date?: string;
  end_date?: string;
}


export interface CategoryMenuItem {
  id: number;
  name: string;
  image_src: string;
  category_url: string;
  description?: string;
  order: number;
  badge?: string;
  parent_id?: number;
  children?: CategoryMenuItem[];
}