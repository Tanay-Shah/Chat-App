import { useRoutes } from "react-router-dom";
import App from "../App";

export default function Router() {
  return useRoutes([
    {
      path: "/",
      element: <App />,
      children: [
        {
          path: "Message",
          element: "MESSSAGE PAGE STRING",
        },
        {
          path: "*",
          element: "ERROR 404",
        },
      ],
    },
  ]);
}
