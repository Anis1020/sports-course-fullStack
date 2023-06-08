import React from "react";
import { FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div>
      <div className="w-6/12 mx-auto my-8 shadow-2xl pb-3">
        <form>
          <div className="card-body ">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
                name="email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="text"
                name="password"
                className="input input-bordered"
              />
            </div>

            <div className="form-control mt-6">
              <button className="btn btn-primary">Registration</button>
            </div>
          </div>
        </form>
        <p>
          Are you new to this website?{" "}
          <Link className="btn btn-link" to="/registration">
            Registration
          </Link>
        </p>
        <div className=" mt-6">
          <button className="btn btn-primary">
            <FaGoogle />
            Sign UP by Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
