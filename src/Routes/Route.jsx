import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home/Home";
import Main from "../Pages/Main/Main";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <>error is hear...</>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
]);

export default router;
