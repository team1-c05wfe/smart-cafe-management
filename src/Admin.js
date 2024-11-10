import React from "react";
import { Link, Outlet } from "react-router-dom";
import TableManagement from "./TableManagement";
import Dashboard from "./Dashboard";
import DashboardNavbar from "./DashboardNavbar";

function Admin() {
  return (
    <>
      {/* <div className="min-h-screen bg-gray-50/50">
        <Dashboard />
        <div className="p-4 xl:ml-80">
          <DashboardNavbar />
          <div className="mt-0">
            <TableManagement />
          </div>
        </div>
      </div> */}
      <div className="min-h-screen bg-gray-50/50">
        <Dashboard />
        <div className="p-4 xl:ml-80">
          <DashboardNavbar />
          <div className="mt-0">
            {/* Nội dung sẽ thay đổi */}
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
}

export default Admin;
