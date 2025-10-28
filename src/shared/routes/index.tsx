import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { PATHS } from '@/shared/routes/paths';
import MainLayoutHome from "@/shared/layouts/MainLayoutHome";

const AppRoutes: React.FC = () => {
  const routes = createBrowserRouter([
    {
      path: PATHS.general.home,
      element: <>
        <MainLayoutHome />
      </>,
      children: [
      ]
    },

  ])
  return <RouterProvider router={routes} />
};

export default AppRoutes;