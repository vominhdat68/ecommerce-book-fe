import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { PATHS } from '@/shared/routes/paths';

const AppRoutes: React.FC = () => {
  const routes = createBrowserRouter([
    {
      path: PATHS.general.home,
      element: <>
         
      </>,
      children: [
      ]
    },

  ])
  return <RouterProvider router={routes} />
};

export default AppRoutes;