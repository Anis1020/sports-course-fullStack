import { useContext, useEffect, useState } from "react";
import AdminDashboard from "../DashboardPages/AdminDashboard/AdminDashboard";
import InstructorDashboard from "../DashboardPages/InstructorDashboard/InstructorDashboard";
import UserDashboard from "../DashboardPages/UserDashboard/UserDashboard";
import { AuthContext } from "../../../AuthProvider/AuthProvider";

const DashHomeCompo = () => {
  return (
    <div>
      <h2>dashboard coming soon</h2>
      {/* {user.role === "admin" ? (
        <AdminDashboard />
      ) : user.role === "instructor" ? (
        <InstructorDashboard />
      ) : (
        <UserDashboard />
      )} */}
      <AdminDashboard />
      {/* {allUser.role === "instructor" && <InstructorDashboard />}
      {allUser && <UserDashboard />} */}
    </div>
  );
};

export default DashHomeCompo;
//<AdminDashboard />
