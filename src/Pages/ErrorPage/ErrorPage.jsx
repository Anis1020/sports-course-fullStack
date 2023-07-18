import React from "react";
import img from "../../assets/monitor-1350918_1280.png";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="w-8/12 bg-orange-700 m-auto relative ">
      <img src={img} className=" m-auto rounded" alt="" />
      <h2 className="text-2xl absolute top-20 bg-slate-700 left-36">
        Invalid URL Please try again with correct url
      </h2>
      <Link to="/" className="btn btn-primary absolute top-60 m-auto">
        Back to Home
      </Link>
    </div>
  );
};

export default ErrorPage;
