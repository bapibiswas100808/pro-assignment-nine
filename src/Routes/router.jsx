import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Components/Home/Home";
import About from "../Components/About/About";
import UpdateUser from "../Components/UpdateUser/UpdateUser";
import ProductDetail from "../Components/ProductDetail/ProductDetail";
import Login from "../Components/Login/Login";
import Register from "../Components/Register/Register";
import PrivateRoute from "./PrivateRoute";
import ErrorElement from "../Components/ErrorElement/ErrorElement";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorElement></ErrorElement>,
    children: [
      { path: "/", element: <Home></Home> },
      { path: "/about", element: <About></About> },
      {
        path: "/update",
        element: (
          <PrivateRoute>
            <UpdateUser></UpdateUser>
          </PrivateRoute>
        ),
      },
      {
        path: "/details/:id",
        element: (
          <PrivateRoute>
            <ProductDetail></ProductDetail>
          </PrivateRoute>
        ),
        loader: () => fetch("../data.json"),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
]);

export default router;
