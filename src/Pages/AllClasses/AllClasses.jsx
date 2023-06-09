import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const AllClasses = () => {
  const { user } = useContext(AuthContext);
  const [allClass, setAllClass] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/allClass")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setAllClass(data);
      });
  }, []);
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
              <button className="btn btn-primary">Select Class</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AllClasses;
