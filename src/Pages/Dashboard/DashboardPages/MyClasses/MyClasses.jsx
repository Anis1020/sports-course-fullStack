import React from "react";
import { FaEdit, FaTrash, FaUser } from "react-icons/fa";

const MyClasses = () => {
  return (
    <div>
      <h3>my all classes </h3>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>Edit</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            <tr>
              <th>1</th>
              <td>shakil khan</td>
              <td>Quality Control Specialist</td>
              <td>
                <FaEdit />
              </td>
              <td>
                <FaTrash />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyClasses;
