import { FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";

const Registration = () => {
  return (
    <div className="w-6/12 mx-auto my-8 shadow-2xl pb-3">
      <form>
        <div className="card-body ">
          <div className="form-control">
            <label className="label">
              <span className="label-text">name</span>
            </label>
            <input type="text" name="name" className="input input-bordered" />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input type="text" name="email" className="input input-bordered" />
          </div>{" "}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Photo URL</span>
            </label>
            <input type="text" name="photo" className="input input-bordered" />
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
          <div className="form-control">
            <label className="label">
              <span className="label-text">Confirm Password</span>
            </label>
            <input
              type="text"
              name="confPassword"
              className="input input-bordered"
            />
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Registration</button>
          </div>
        </div>
      </form>
      <p>
        Already have an account?{" "}
        <Link className="btn btn-link" to="/login">
          Login
        </Link>
      </p>
      <div className=" mt-6">
        <button className="btn btn-primary">
          <FaGoogle />
          Sign UP by Google
        </button>
      </div>
    </div>
  );
};

export default Registration;
