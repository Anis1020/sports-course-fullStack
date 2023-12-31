import React, { useEffect, useState } from "react";

const Instructors = () => {
  const [allUser, setAllUser] = useState([]);

  useEffect(() => {
    fetch("https://assignment-12-sever-side-anis1020.vercel.app/users", {
      method: "GET",
      headers: {
        "content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);

        const filter = data.filter((user) => user.role === "instructor");
        console.log(filter);
        setAllUser(filter);
      });
  }, []);
  console.log(allUser);
  return (
    <div className="grid lg:grid-cols-3">
      {allUser.map((user) => (
        <div className="card w-96 bg-base-100 shadow-2xl my-8" key={user._id}>
          <figure>
            <img src={user?.photo} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Instructor Name: {user.name}</h2>
            <h2 className="card-title">Email: {user.email}</h2>

            <div className="card-actions justify-center mt-4">
              <button
                // onClick={() => handleSelectedClass(clas)}
                className="btn btn-primary"
              >
                Mr. {user.name}
                {/* <Link to={`/dashboard/selectedClass/${clas._id}`}>
                Select Class
              </Link> */}
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Instructors;
