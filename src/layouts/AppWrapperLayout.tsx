import React from "react";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";

const AppWrapperLayout: React.FC = () => {
  return (
    <>
      <ToastContainer />
      <Outlet />
    </>
  );
};

export default AppWrapperLayout;
