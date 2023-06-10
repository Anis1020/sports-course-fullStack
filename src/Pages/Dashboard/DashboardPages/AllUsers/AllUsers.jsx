import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../../AuthProvider/AuthProvider";
import { FaTrash, FaUser } from "react-icons/fa";
import Swal from "sweetalert2";

const AllUsers = () => {
  const { user } = useContext(AuthContext);
  const [allUser, setAllUser] = useState([]);
  const [admin, setAdmin] = useState(false);
  const [buttonDisabled, setButtonDisabled] = useState(true);

  useEffect(() => {
    fetch("https://assignment-12-sever-side-anis1020.vercel.app/users", {
      method: "GET",
      headers: {
        "content-type": "application/json",
      },
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
        // setButtonDisabled(false);
      });
  };

  const handleMakeInstructor = (user) => {
    fetch(
      `https://assignment-12-sever-side-anis1020.vercel.app/users/instructor/${user._id}`,
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
            title: `${user.name} is an instructor now`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
        setAdmin(true);
        // setButtonDisabled(false);
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

  // const handleDisable = (id) => {
  //   setButtonDisabled(!buttonDisabled.id);
  //   console.log(id);
  // };
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

                <td>
                  <span>
                    <button
                      onClick={() => handleMakeAdmin(user)}
                      className="btn btn-sm btn-primary mr-3"
                      // disabled={buttonDisabled}
                      // onClick={() => window.my_modal_3.showModal()}
                    >
                      admin
                    </button>
                  </span>
                  <button
                    // disabled={!buttonDisabled}
                    onClick={() => handleMakeInstructor(user)}
                    className="btn btn-sm btn-primary"
                  >
                    Instructor
                  </button>
                </td>
                <td onClick={() => handleDeleteUser(user)}>
                  <FaTrash />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* You can open the modal using ID.showModal() method */}
      <dialog id="my_modal_3" className="modal">
        <form method="dialog" className="modal-box">
          <button
            htmlFor="my-modal-3"
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
          >
            ✕
          </button>
          <div className="space-x-4">
            <button
              // onClick={() => handleMakeAdmin(user)}
              className="btn btn-primary btn-sm"
            >
              Make Admin
            </button>
            <button
              // onClick={() => handleMakeInstructor(user)}
              className="btn btn-primary btn-sm"
            >
              Make Instructor
            </button>
          </div>
        </form>
      </dialog>
    </div>
  );
};

export default AllUsers;
// {user.role === "admin" ? (
//   "admin"
// ) : user.role === "instructor" ? (
//   "instructor"
// ) : (
//   <FaUser />
// )}
