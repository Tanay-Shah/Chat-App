import { Navigate, useRoutes } from "react-router-dom";
import { lazy, Suspense } from "react";
import DashboardLayout from "../layouts/Dashboard/index";
import { PATH_DASHBOARD } from "./paths";
import LazyLoding from "../components/lazyLoding";

const Lodable = Component => props => {
  return (
    <Suspense fallback={<LazyLoding />}>
      <Component {...props} />
    </Suspense>
  );
};

export default function Router() {
  return useRoutes([
    {
      path: "/",
      element: <DashboardLayout />,

      children: [
        {
          element: <Navigate to={PATH_DASHBOARD.genral.app} replace />,
          index: true
        },
        // Nesting of path Routes 
        {
          path: "app",
          element: <GeneralApp />,
          // children: [
          //   {
          //     path: `${PATH_DASHBOARD.genral.app}/message`,
          //     element: <Message />
          //   }
          // ]
        },

        { path: "404", element: <Page404 /> },
        { path: "*", element: <Navigate to="/404" replace /> }
      ]
    },
    { path: "*", element: <Navigate to="/404" replace /> }
  ]);
}

const GeneralApp = Lodable(lazy(() => import("../Pages/Dashboard/GeneralApp")));

const Page404 = Lodable(lazy(() => import("../Pages/page404")));
