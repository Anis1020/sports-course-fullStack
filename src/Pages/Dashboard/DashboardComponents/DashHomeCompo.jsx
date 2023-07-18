import { useEffect, useState } from "react";
import AdminDashboard from "../DashboardPages/AdminDashboard/AdminDashboard";
import InstructorDashboard from "../DashboardPages/InstructorDashboard/InstructorDashboard";
import UserDashboard from "../DashboardPages/UserDashboard/UserDashboard";

const DashHomeCompo = () => {
  const [user, setUser] = useState([]);
  // console.log(user);
  useEffect(() => {
    fetch("https://assignment-12-sever-side-anis1020.vercel.app/users", {
      method: "GET",
      headers: {
        "content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setUser(data);

        // const filter = data.filter((user) => user.role === "instructor");
      });
  }, []);
  return (
    <div>
      <h2>dashboard coming soon</h2>
      {user.role === "admin" ? (
        <AdminDashboard />
      ) : user.role === "instructor" ? (
        <InstructorDashboard />
      ) : (
        <UserDashboard />
      )}
      {/* <AdminDashboard /> */}
      {/* {allUser.role === "instructor" && <InstructorDashboard />}
      {allUser && <UserDashboard />} */}
    </div>
  );
};

export default DashHomeCompo;
//<AdminDashboard />
