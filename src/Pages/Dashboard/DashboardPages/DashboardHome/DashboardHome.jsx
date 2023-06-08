import React from "react";
import { Link, Outlet } from "react-router-dom";
import DashHomeCompo from "../../DashboardComponents/DashHomeCompo/DashHomeCompo";

const DashboardHome = () => {
  return (
    <div>
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
          {/* Page content here */}

          <Outlet />
          <label
            htmlFor="my-drawer-2"
            className="btn btn-primary drawer-button lg:hidden"
          >
            Open drawer
          </label>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
            {/* Sidebar content here */}
            <li>
              <Link>Home</Link>
            </li>
            <li>
              <Link>My Classes</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardHome;
