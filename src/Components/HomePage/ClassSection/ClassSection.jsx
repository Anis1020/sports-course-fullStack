import React from "react";

const ClassSection = () => {
  return (
    <div>
      <h2 className="text-2xl my-4">Popular Classes Section</h2>
      <div className="card w-96 bg-base-100 shadow-2xl my-8">
        <figure>
          <img
            src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Class Name: </h2>
          <h2 className="card-title">Instructor Name: </h2>
          <p className="text-left">Available seats: </p>
          <p className="text-left">Price: </p>
          <div className="card-actions justify-center mt-4">
            <button className="btn btn-primary">Select Class</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClassSection;
