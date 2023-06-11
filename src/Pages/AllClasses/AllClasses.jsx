import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import Swal from "sweetalert2";

const AllClasses = () => {
  const { user } = useContext(AuthContext);
  const [allClass, setAllClass] = useState([]);

  useEffect(() => {
    fetch("https://assignment-12-sever-side-anis1020.vercel.app/allClass", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setAllClass(data);
      });
  }, []);

  const handleSelectedClass = (user, classes) => {
    if (!user) {
      return alert("you have to log in first ");
    }
    fetch(
      "https://assignment-12-sever-side-anis1020.vercel.app/selectedClass",
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(classes),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Successfully selected",
          showConfirmButton: false,
          timer: 1500,
        });
        console.log(data);
      });
  };

  return (
    <div className="grid lg:grid-cols-3">
      {allClass.map((classes) => (
        <div
          className="card w-96 bg-base-100 shadow-2xl my-8"
          key={classes._id}
        >
          <figure>
            <img src={classes.classImg} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Class: {classes.className}</h2>
            <h2 className="card-title">Instructor Name: {classes.name}</h2>
            <p className="text-left">Instructor email: {classes.email}</p>
            <p className="text-left">
              Available seats: {classes.availAbleSeats}
            </p>
            <p className="text-left">Price: {classes.price}</p>
            <div className="card-actions justify-center mt-4">
              <button
                onClick={() => handleSelectedClass(user, classes)}
                className="btn btn-primary"
              >
                Select Class
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AllClasses;
