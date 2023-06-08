import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import ActiveLink from "../ActiveLink/ActiveLink";

const Navbar = () => {
  const { user, userLogOut } = useContext(AuthContext);
  // console.log(user);
  const handleLogOut = () => {
    userLogOut()
      .then(() => {})
      .catch((err) => console.log(err));
  };
  const navbarOptions = (
    <div className="space-x-4 text-lg ">
      <ActiveLink to="/">Home</ActiveLink>

      <ActiveLink to="/instructor">Instructors</ActiveLink>

      <ActiveLink to="/classes">Classes</ActiveLink>

      {user ? (
        <ActiveLink to="/dashboard/">Dashboard</ActiveLink>
      ) : (
        <ActiveLink to="/login">Login</ActiveLink>
      )}
    </div>
  );
  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navbarOptions}
            </ul>
          </div>
          <a className="btn btn-ghost normal-case text-xl">Sports School</a>
        </div>
        <div className="navbar-center hidden lg:flex ml-auto">
          <ul className="menu menu-horizontal px-1">{navbarOptions}</ul>
        </div>
        <div className="space-x-4">
          {user && (
            <>
              <>
                <Link onClick={handleLogOut} className="ml-3" to="/login">
                  LogOut
                </Link>
                <label
                  tabIndex={0}
                  className="btn btn-ghost  btn-circle avatar"
                >
                  <div className="w-10 rounded-full ">
                    <img className="" src={user && user?.photoURL} />
                  </div>
                </label>
              </>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
