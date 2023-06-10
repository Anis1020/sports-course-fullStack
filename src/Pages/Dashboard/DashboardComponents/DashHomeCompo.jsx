import { useContext } from "react";
import AdminDashboard from "../DashboardPages/AdminDashboard/AdminDashboard";
import InstructorDashboard from "../DashboardPages/InstructorDashboard/InstructorDashboard";
import UserDashboard from "../DashboardPages/UserDashboard/UserDashboard";
import { AuthContext } from "../../../AuthProvider/AuthProvider";

const DashHomeCompo = () => {
  const { user } = useContext(AuthContext);
  return (
    <div>
      {/* {user.role === "admin" ? (
        <AdminDashboard />
      ) : user.role === "instructor" ? (
        <InstructorDashboard />
      ) : (
        <UserDashboard />
      )} */}
      {/* {user.role === "admin" && <AdminDashboard />}
      {user.role === "instructor" && <InstructorDashboard />}
      {user && <UserDashboard />} */}
      <AdminDashboard />
    </div>
  );
};

export default DashHomeCompo;
