import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../../components/dashboard/header";
import Sidebar from "../../components/dashboard/sidebar";

export default function LayoutDashboard() {
  return (
    <div>
        <div className="flex">
      <Sidebar />
      <Header />
      <div className="flex-1 flex flex-col overflow-x-hidden mx-[38px] mt-[46px]">
            {/* Conteúdo da Página */}
                <Outlet />
        </div>
    </div>
    </div>
    
  );
}
