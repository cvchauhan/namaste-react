import { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import Applayout from "../../App";

const Body = lazy(() => import("../components/Body/Body"));
const Menu = lazy(() => import("../components/Menu/Menu"));
const About = lazy(() => import("../components/About/About"));
const Contact = lazy(() => import("../components/Contact/Contact"));
const Cart = lazy(() => import("../components/Cart/Cart"));

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Applayout />,
    children: [
      {
        path: "/home",
        element: (
          <Suspense>
            <Body />
          </Suspense>
        ),
      },
      {
        path: "/about",
        element: (
          <Suspense>
            <About />
          </Suspense>
        ),
      },
      {
        path: "/contact-us",
        element: (
          <Suspense>
            <Contact />
          </Suspense>
        ),
      },
      {
        path: "/cart",
        element: (
          <Suspense>
            <Cart />
          </Suspense>
        ),
      },
      {
        path: "/restaurant/:resId",
        element: (
          <Suspense>
            <Menu />
          </Suspense>
        ),
      },
    ],
  },
]);
