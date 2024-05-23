import { Navigate, useRoutes } from "react-router-dom";
import DashboardLayout from '../layouts/Dashboard/index'
import GeneralApp from '../Pages/Dashboard/GeneralApp'
import Page404 from '../Pages/page404'

export default function Router() {
  return useRoutes([
    {
      
      path: "/",
      element: <DashboardLayout />,

      children: [
        // {element: <navigate to={DEFAULT_PATH}/>} pending......
        {path: "app", element: <GeneralApp/>},

        {path:"404", element:<Page404/>},
        {path: "*", element:<Navigate to='/404' replace/>},
      ],
    },
    {path:'*', element: <Navigate to='/404' replace />},
  ]);
}



