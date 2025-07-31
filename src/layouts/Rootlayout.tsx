import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

const Rootlayout: React.FC = () => {
  return (
    <div className="flex p-5 gap-[30px] items-center h-screen bg-[#f4f9fd] ">
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
