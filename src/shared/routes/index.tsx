import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { PATHS } from '@/shared/routes/paths';
import MainLayoutHome from "@/shared/layouts/MainLayoutHome";
import HomePage from "@/shared/pages/HomePage";

const AppRoutes: React.FC = () => {
  const routes = createBrowserRouter([
    {
      path: PATHS.general.home,
      element: <>
        <MainLayoutHome />
      </>,
      children: [
        { index: true, element: <HomePage /> },
      ]
    },

  ])
  return <RouterProvider router={routes} />
};

export default AppRoutes;