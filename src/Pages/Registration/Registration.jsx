import { useContext, useEffect, useState } from "react";
import { FaEye, FaGoogle } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { saveUser } from "../../api/auth";

const Registration = () => {
  const [missMess, setMissMess] = useState("");
  const [hideShow, setHideShow] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathName || "/";
  const {
    createUser,
    user,
    signInByGoogle,
    updateUserProfile,
    loading,
    setLoading,
  } = useContext(AuthContext);

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

    if (!password === confirmPassword) {
      return setMissMess("missMess Your Password");
    }
    if (
      /"^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$"/.test(
        password
      )
    ) {
      setMissMess("successfully created");
      return;
    } else {
      setMissMess(
        "Minimum six characters, at least one letter, one number and one special character"
      );
    }

    createUser(email, password)
      .then((result) => {
        updateUserProfile(name, photo)
          .then(() => {
            saveUser(result.user);
            navigate(from, { replace: true });
          })
          .catch((err) => {
            console.log(err);
          });
      })
      .catch((error) => console.log(error));
  };

  const handleGoogleSignIn = () => {
    signInByGoogle()
      .then((result) => {
        console.log(result.usr);
        saveUser(result.user);
        navigate(from, { replace: true });
      })
      .catch((err) => console.log(err));
  };

  // const handleHideShow = () => {
  //   setHideShow(!hideShow);
  // };
  return (
    <div className="w-6/12 mx-auto my-8 shadow-2xl pb-3">
      <p>{missMess} </p>
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
          <div className="form-control relative">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              name="password"
              required
              className="input input-bordered"
            />
            {/* <span
              onClick={handleHideShow}
              className="absolute top-9 right-1 rounded p-4"
            >
              <FaEye />
            </span> */}
          </div>
          <div className="form-control relative">
            <label className="label">
              <span className="label-text">Confirm Password</span>
            </label>
            <input
              type="password"
              required
              name="confirmPassword"
              className="input input-bordered"
            />
            {/* <span
              onClick={handleHideShow}
              className="absolute top-9 right-1 rounded p-4"
            >
              <FaEye />
            </span> */}
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
