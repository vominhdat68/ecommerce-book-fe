import { lazy, Suspense } from "react";
import { createBrowserRouter, RouterProvider, ScrollRestoration } from "react-router-dom";

import { PATHS } from '@/shared/routes/paths';
import MainLayoutHome from "@/shared/layouts/MainLayoutHome";
import HomePage from "@/shared/pages/HomePage";

import CartPageSkeleton from "@/shared/components/skeleton-screen/CartPageSkeleton";
import { ProductDetailSkeleton } from "@/shared/components/skeleton-screen/ProductDetailSkeleton";


const Loadable = (Component: React.ComponentType<any>, Skeleton: React.ReactNode) => {
  return (props: any) => (
    <Suspense fallback={Skeleton}>
      <Component {...props} />
    </Suspense>
  );
};


const LoginPage = Loadable(lazy(() => import("@/shared/pages/LoginPage")), <></>);
const CartPage = Loadable(lazy(() => import("@/shared/pages/CartPage")), <CartPageSkeleton />);
const ProductDetailPage = Loadable(lazy(() => import("@/shared/pages/ProductDetailPage")), <ProductDetailSkeleton />);
const NotFoundPage = Loadable(lazy(() => import("@/shared/pages/NotFoundPage")), <></>);

const CategoryPage = lazy(() => import('@/shared/pages/CategoryPage'));
const categoryRoutes = [
  { path: PATHS.category.domesticBooks, element: <CategoryPage /> },
  { path: PATHS.category.foreignBooks, element: <CategoryPage /> },
  { path: PATHS.category.stationery, element: <CategoryPage /> },
  { path: PATHS.category.toys, element: <CategoryPage /> },
  { path: PATHS.category.beautyHealth, element: <CategoryPage /> },
  { path: PATHS.category.stationeryByBrand, element: <CategoryPage /> },
  { path: PATHS.category.onlineGroceryGifts, element: <CategoryPage /> },
];

const AppRoutes: React.FC = () => {

  const routes = createBrowserRouter([
    {
      path: PATHS.general.home,
      element: <>
        <MainLayoutHome />
        {/* reset scroll when Link*/}
        <ScrollRestoration />
      </>,
      children: [
        { index: true, element: <HomePage /> },
        { path: PATHS.auth.loginReferer, element: <LoginPage /> },
        { path: PATHS.checkout.cart, element: <CartPage /> },
        { path: PATHS.product.detail, element: <ProductDetailPage /> },
        ...categoryRoutes, //>>>inject tự động CategoryPage
        { path: PATHS.general.notFound, element: <NotFoundPage /> },
      ]
    },

  ])
  return <RouterProvider router={routes} />
};

export default AppRoutes;