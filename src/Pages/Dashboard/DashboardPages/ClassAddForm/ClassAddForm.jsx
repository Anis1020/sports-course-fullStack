import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../../AuthProvider/AuthProvider";
import Swal from "sweetalert2";

const ClassAddForm = () => {
  const { user } = useContext(AuthContext);
  const [classes, setClasses] = useState([]);

  const handleAddClass = (event) => {
    event.preventDefault();
    const form = event.target;
    const className = form.className.value;
    const classImg = form.classImg.value;
    const availAbleSeats = form.availAbleSeats.value;
    const price = form.price.value;
    const classInfo = {
      className,
      classImg,
      availAbleSeats,
      price,
      name: user.displayName,
      email: user.email,
    };

    fetch("http://localhost:5000/addAClass", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(classInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        setClasses(data);
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Successfully added class",
          showConfirmButton: false,
          timer: 1500,
        });

        console.log(data);
      });
  };

  return (
    <div>
      <form onSubmit={handleAddClass}>
        <div className="card-body shadow-2xl">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Class Name</span>
            </label>
            <input
              type="text"
              name="className"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Class Image</span>
            </label>
            <input
              type="url"
              name="classImg"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Instructor Name</span>
            </label>
            <input
              type="text"
              name="instructorName"
              defaultValue={user?.displayName}
              className="input input-bordered"
            />
          </div>{" "}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Instructor Email</span>
            </label>
            <input
              type="text"
              name="instructorEmail"
              defaultValue={user?.email}
              className="input input-bordered"
            />
          </div>{" "}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Available seats</span>
            </label>
            <input
              type="text"
              name="availAbleSeats"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Price</span>
            </label>
            <input type="text" name="price" className="input input-bordered" />
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Add A Class</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ClassAddForm;
