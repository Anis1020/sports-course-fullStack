import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../AuthProvider/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import { key } from "localforage";

const UseAdmin = () => {
  const { user } = useContext(AuthContext);
  const [admin, setAdmin] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/users", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        setAdmin(data);
        // console.log(data);
      });
  }, []);
  // console.log(admin);
  return (
    <div>
      {admin.map((ad) => (
        <div key={ad._id}>
          {ad.role === "admin" ? (
            <button className="btn">admin</button>
          ) : ad.role === "instructor" ? (
            <button className="btn">Instructor</button>
          ) : (
            <button className="btn">user</button>
          )}
        </div>
      ))}
    </div>
  );
};

export default UseAdmin;
//http://localhost:5000/users
