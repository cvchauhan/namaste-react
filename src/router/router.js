import { createBrowserRouter } from "react-router-dom";
import Applayout from "../../App";
import Body from "../components/Body";
import About from "../components/About";
import Cart from "../components/Cart";
import Contact from "../components/Contact";
import Menu from "../components/Menu";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Applayout />,
    children: [
      {
        path: "/home",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact-us",
        element: <Contact />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/resturant/:resId",
        element: <Menu />,
      },
    ],
  },
]);
