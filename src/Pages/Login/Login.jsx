import React, { useContext, useState } from "react";
import { FaEye, FaGoogle } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const Login = () => {
  const [hideShow, setHideShow] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { loginUser } = useContext(AuthContext);

  const handleHideShow = () => {
    setHideShow(!hideShow);
  };
  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    loginUser(email, password)
      .then((res) => console.log(res))
      .then((err) => console.log(err));
    navigate("/");
  };
  return (
    <div>
      <div className="w-6/12 mx-auto my-8 shadow-2xl pb-3">
        <form onSubmit={handleLogin}>
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
                type={hideShow ? "text" : "password"}
                name="password"
                className="input input-bordered "
              />
              <span
                onClick={handleHideShow}
                className="absolute top-9 right-1 rounded p-4"
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
