import { lazy, Suspense } from "react";
import { createBrowserRouter, RouterProvider, ScrollRestoration } from "react-router-dom";

import { PATHS } from '@/shared/routes/paths';
import MainLayoutHome from "@/shared/layouts/MainLayoutHome";
import HomePage from "@/shared/pages/HomePage";

import CartPageSkeleton from "@/shared/components/skeleton-screen/CartPageSkeleton";


const Loadable = (Component: React.ComponentType<any>, Skeleton: React.ReactNode) => {
  return (props: any) => (
    <Suspense fallback={Skeleton}>
      <Component {...props} />
    </Suspense>
  );
};


const CartPage = Loadable(lazy(() => import("@/shared/pages/CartPage")), <CartPageSkeleton/>);
const NotFoundPage = Loadable(lazy(() => import("@/shared/pages/NotFoundPage")), <></>);

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
        { path: PATHS.checkout.cart, element: <CartPage /> },
        { path: PATHS.general.notFound, element: <NotFoundPage /> },
      ]
    },

  ])
  return <RouterProvider router={routes} />
};

export default AppRoutes;