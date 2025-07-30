import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

const Rootlayout: React.FC = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="">
        <Header />
        <main>
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Rootlayout;
