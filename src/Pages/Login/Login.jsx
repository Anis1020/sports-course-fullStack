import React, { useState } from "react";
import { FaEye, FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";

const Login = () => {
  const [hideShow, setHideShow] = useState(false);
  //TODO: password hide show
  const handleHideShow = () => {
    setHideShow(true);
    console.log(!hideShow);
  };
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
            <div className="form-control relative">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                className="input input-bordered "
              />
              <span
                onClick={() => handleHideShow(!hideShow)}
                className="absolute top-9 right-1 rounded bg-slate-600 p-4"
              >
                <FaEye />
              </span>
              {/* <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label> */}
            </div>

            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
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
