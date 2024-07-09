import { Navigate, useRoutes } from "react-router-dom";
import { lazy, Suspense } from "react";
import DashboardLayout from "../layouts/Dashboard/index";
import LazyLoding from "../components/lazyLoding";
import Settings from "../Pages/Dashboard/Settings";
import MainLayout from "../layouts/main/MainLayout";
import Signup from "../Pages/auth/signup";
// import { PATH_DASHBOARD } from "./paths";

const Lodable = (Component) => (props) => {
  return (
    <Suspense fallback={<LazyLoding />}>
      <Component {...props} />
    </Suspense>
  );
};

export default function Router() {
  return useRoutes([
    {
      path: "/auth",
      element: <MainLayout />,
      children: [
        {
          path: "login",
          element: <Login />,
        },
        {
          path: "register",
          element: <Signup />,
        },
      ],
    },
    {
      path: "/",
      element: <DashboardLayout />,

      children: [
        // {
        //   // is some one goes to '/' so it redirect to '/apps'
        //   element: <Navigate to={PATH_DASHBOARD.genral.app} replace />,
        //   index: true,
        // },
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
        {
          path: "settings",
          element: <Settings />,
        },

        { path: "404", element: <Page404 /> },
        { path: "*", element: <Navigate to="/404" replace /> },
      ],
    },
    { path: "*", element: <Navigate to="/404" replace /> },
  ]);
}

const GeneralApp = Lodable(lazy(() => import("../Pages/Dashboard/GeneralApp")));

const Page404 = Lodable(lazy(() => import("../Pages/page404")));

const Login = Lodable(lazy(() => import("../Pages/auth/Login")));
