import React from "react";
import { Link, Outlet } from "react-router-dom";
import DashHomeCompo from "../../DashboardComponents/DashHomeCompo/DashHomeCompo";

const DashboardHome = () => {
  return (
    <div>
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content w-8/12 mx-auto ">
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
              <Link to="/">Home</Link>
            </li>
            {/* its for student */}
            <li>
              <Link>My Selected Classes</Link>
            </li>{" "}
            <li>
              <Link>My Enrolled Classes</Link>
            </li>
            {/* its for instractor */}
            <li>
              <Link to="/dashboard/addAClass">Add a Class</Link>
            </li>{" "}
            <li>
              <Link>My Classes</Link>
            </li>
            <div className="divider"></div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardHome;
