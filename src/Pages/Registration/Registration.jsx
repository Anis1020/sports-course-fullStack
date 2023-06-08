import { useContext } from "react";
import { FaGoogle } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const Registration = () => {
  const { createUser, user, signInByGoogle } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleRegistration = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const photo = form.photo.value;
    const password = form.password.value;
    const confirmPassword = form.confirmPassword.value;
    const userData = { name, email, photo, password, confirmPassword };
    console.log(userData);

    createUser(email, password)
      .then((res) => console.log(res))
      .catch((error) => console.log(error));
    navigate("/");
  };

  const handleGoogleSignIn = () => {
    signInByGoogle()
      .then(() => {})
      .catch((err) => console.log(err));
  };
  return (
    <div className="w-6/12 mx-auto my-8 shadow-2xl pb-3">
      <form onSubmit={handleRegistration}>
        <div className="card-body ">
          <div className="form-control">
            <label className="label">
              <span className="label-text">name</span>
            </label>
            <input
              type="text"
              required
              name="name"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="text"
              name="email"
              required
              className="input input-bordered"
            />
          </div>{" "}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Photo URL</span>
            </label>
            <input type="url" name="photo" className="input input-bordered" />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              name="password"
              required
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Confirm Password</span>
            </label>
            <input
              type="password"
              required
              name="confirmPassword"
              className="input input-bordered"
            />
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
        <button onClick={handleGoogleSignIn} className="btn btn-primary">
          <FaGoogle />
          Sign UP by Google
        </button>
      </div>
    </div>
  );
};

export default Registration;
