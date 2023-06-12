import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const SelectedClasses = () => {
  const [selectedClass, setSelectedClass] = useState([]);
  const [selectedCls, setSelectedCls] = useState(false);
  useEffect(() => {
    fetch(
      "https://assignment-12-sever-side-anis1020.vercel.app/selectedClass",
      {
        method: "GET",
      }
    )
      .then((res) => res.json())
      .then((data) => {
        setSelectedClass(data);
        // console.log(data);
      });
  }, [selectedCls]);

  //http://localhost:5000/
  const handleDeleteClass = (selectClass) => {
    fetch(
      `https://assignment-12-sever-side-anis1020.vercel.app/classDelete/${selectClass._id}`,
      {
        method: "DELETE",
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${selectClass.className} successfully deleted`,
            showConfirmButton: false,
            timer: 1500,
          });
          setSelectedCls(true);
        }
        console.log(data);
      });
  };
  return (
    <div className="grid lg:grid-cols-2 w-full">
      {selectedClass.map((selectClass) => (
        <div
          className="card w-96 bg-base-100 shadow-2xl my-8"
          key={selectClass._id}
        >
          <figure>
            <img src={selectClass.classImg} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Class Name: {selectClass.className}</h2>
            <h2 className="card-title">Instructor Name: {selectClass.name}</h2>
            <p className="text-left">
              Available seats: {selectClass.availAbleSeats}
            </p>
            <p className="text-left">Price: ${selectClass.price}</p>
            <div className="card-actions justify-between mt-4">
              <button
                onClick={() => handleDeleteClass(selectClass)}
                className="btn btn-warning"
              >
                Cancel
                {/* <Link to={`/dashboard/selectedClass/${cls._id}`}>
                Select Class
              </Link> */}
              </button>
              <Link
                to={`/dashboard/payment/${selectClass._id}`}
                className="btn btn-primary"
              >
                Pay Now
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SelectedClasses;
