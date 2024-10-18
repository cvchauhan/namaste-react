import React, { useEffect } from "react";
import Header from "./src/components/Header";
import Footer from "./src/components/Footer";
import { Outlet } from "react-router-dom";
import { useLocation, useNavigate } from "react-router-dom";

const Applayout = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.pathname === "/") {
      navigate("/home"); // Replace '/home' with your desired home route
    }
  }, [location, navigate]);
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};
export default Applayout;
