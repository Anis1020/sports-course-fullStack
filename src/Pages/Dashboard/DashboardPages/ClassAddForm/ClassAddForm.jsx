import React, { useContext } from "react";
import { AuthContext } from "../../../../AuthProvider/AuthProvider";

const ClassAddForm = () => {
  const { user } = useContext(AuthContext);
  return (
    <div>
      <form>
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
              type="text"
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
              defaultValue={user?.name}
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
