import React, { useEffect, useState } from "react";

const SelectedClasses = () => {
  const [selectedClass, setSelectedClass] = useState([]);
  useEffect(() => {
    fetch(
      "https://assignment-12-sever-side-anis1020.vercel.app/selectedClass",
      {
        method: "GET",
      }
    )
      .then((res) => res.json())
      .then((data) => {
        setSelectedClass(data);
        console.log(data);
      });
  }, []);
  return (
    <div className="grid lg:grid-cols-2 w-full">
      {selectedClass.map((selectClass) => (
        <div
          className="card w-96 bg-base-100 shadow-2xl my-8"
          key={selectClass._id}
        >
          <figure>
            <img src={selectClass.classImg} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Class Name: {selectClass.className}</h2>
            <h2 className="card-title">Instructor Name: {selectClass.name}</h2>
            <p className="text-left">
              Available seats: {selectClass.availAbleSeats}
            </p>
            <p className="text-left">Price: ${selectClass.price}</p>
            <div className="card-actions justify-between mt-4">
              <button
                // onClick={() => handleSelectedClass(clas)}
                className="btn btn-warning"
              >
                Cancel
                {/* <Link to={`/dashboard/selectedClass/${clas._id}`}>
                Select Class
              </Link> */}
              </button>
              <button className="btn btn-primary">Pay Now</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SelectedClasses;
