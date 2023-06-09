import React from "react";
import { Link } from "react-router-dom";

const ClassSection = ({ allClass, handleSelectedClass }) => {
  // console.log(allClass);
  return (
    <div>
      <h2 className="text-2xl my-4">Popular Classes Section</h2>
      <div className="grid lg:grid-cols-3">
        {allClass.map((clas) => (
          <div className="card w-96 bg-base-100 shadow-2xl my-8" key={clas._id}>
            <figure>
              <img src={clas.classImg} alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Class Name: {clas.className}</h2>
              <h2 className="card-title">Instructor Name: {clas.name}</h2>
              <p className="text-left">
                Available seats: {clas.availAbleSeats}
              </p>
              <p className="text-left">Price: ${clas.price}</p>
              <div className="card-actions justify-center mt-4">
                <button
                  onClick={() => handleSelectedClass(clas)}
                  className="btn btn-primary"
                >
                  Select Class
                  {/* <Link to={`/dashboard/selectedClass/${clas._id}`}>
                    Select Class
                  </Link> */}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ClassSection;
