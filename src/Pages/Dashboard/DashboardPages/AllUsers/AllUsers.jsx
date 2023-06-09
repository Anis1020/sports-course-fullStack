import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../../AuthProvider/AuthProvider";
import { FaTrash, FaUser } from "react-icons/fa";
import Swal from "sweetalert2";

const AllUsers = () => {
  const { user } = useContext(AuthContext);
  const [allUser, setAllUser] = useState([]);
  const [admin, setAdmin] = useState(false);

  useEffect(() => {
    fetch("https://assignment-12-sever-side-anis1020.vercel.app/users", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setAllUser(data);
      });
  }, [admin]);

  const handleMakeAdmin = (user) => {
    fetch(
      `https://assignment-12-sever-side-anis1020.vercel.app/users/admin/${user._id}`,
      {
        method: "PATCH",
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${user.name} is an admin now`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
        setAdmin(true);
      });
  };

  const handleDeleteUser = (user) => {
    fetch(
      `https://assignment-12-sever-side-anis1020.vercel.app/deleteUser/${user._id}`,
      {
        method: "DELETE",
      }
    )
      .then(() => {})
      .then((data) => {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `${user.name} successfully deleted`,
          showConfirmButton: false,
          timer: 1500,
        });
        setAdmin(true);
      });
  };
  return (
    <div>
      <h3>Total users {allUser?.length}</h3>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {allUser.map((user, index) => (
              <tr key={user._id}>
                <th>{index + 1}</th>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td onClick={() => handleMakeAdmin(user)}>
                  {user.role === "admin" ? "admin" : <FaUser />}
                </td>
                <td onClick={() => handleDeleteUser(user)}>
                  <FaTrash />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUsers;
