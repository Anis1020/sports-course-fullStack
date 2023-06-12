import React from "react";

const InstructorsSection = ({ allUser }) => {
  return (
    <div>
      <h2 className="text-2xl my-4">Popular Instructor Section</h2>
      <div className="grid lg:grid-cols-3">
        {allUser.map((user) => (
          <div className="card w-96 bg-base-100 shadow-2xl my-8" key={user._id}>
            <figure>
              <img src={user.photo} alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Class Name: </h2>
              <h2 className="card-title">Instructor Name: </h2>
              <p className="text-left">Available seats: </p>
              <p className="text-left">Price: </p>
              <div className="card-actions justify-center mt-4">
                <button className="btn btn-primary">Mr. {user.name}</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InstructorsSection;
