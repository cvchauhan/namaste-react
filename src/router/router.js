import { createBrowserRouter } from "react-router-dom";
import Applayout from "../../App";
import Body from "../components/Body/Body";
import About from "../components/About/About";
import Cart from "../components/Cart/Cart";
import Contact from "../components/Contact";
import Menu from "../components/Menu/Menu";
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
        path: "/restaurant/:resId",
        element: <Menu />,
      },
    ],
  },
]);
