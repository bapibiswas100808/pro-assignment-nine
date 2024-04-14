import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Components/Home/Home";
import About from "../Components/About/About";
import UpdateUser from "../Components/UpdateUser/UpdateUser";
import ProductDetail from "../Components/ProductDetail/ProductDetail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      { path: "/", element: <Home></Home> },
      { path: "/about", element: <About></About> },
      { path: "/update", element: <UpdateUser></UpdateUser> },
      {
        path: "/details/:id",
        element: <ProductDetail></ProductDetail>,
        loader: () => fetch("../data.json"),
      },
    ],
  },
]);

export default router;
