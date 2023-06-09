import { createBrowserRouter } from "react-router-dom";
import AddToy from "../Pages/AddToy/AddToy";
import AllToys from "../Pages/AllToys/AllToys";
import ViewDetails from "../Pages/AllToys/ViewDetails/ViewDetails";
import Blog from "../Pages/Blog/Blog";
import Error from "../Pages/Error/Error";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import Main from "../Pages/Main/Main";
import MyToys from "../Pages/MyToys/MyToys";
import Register from "../Pages/Register/Register";
import PrivetRoute from "./PrivetRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "add-toy",
        element: (
          <PrivetRoute>
            <AddToy />
          </PrivetRoute>
        ),
      },
      {
        path: "my-toys",
        element: (
          <PrivetRoute>
            <MyToys />
          </PrivetRoute>
        ),
      },
      {
        path: "all-toys",
        element: <AllToys />,
        loader: () => fetch("https://toy-hunt-place-server.vercel.app/toys"),
      },

      {
        path: "all-toys/:id",
        element: (
          <PrivetRoute>
            {" "}
            <ViewDetails />{" "}
          </PrivetRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://toy-hunt-place-server.vercel.app/toy/${params.id}`),
      },
      {
        path: "category-details/:id",
        element: (
          <PrivetRoute>
            <ViewDetails />
          </PrivetRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://toy-hunt-place-server.vercel.app/toy/${params.id}`),
      },
      {
        path: "blog",
        element: <Blog />,
      },
    ],
  },
]);

export default router;
