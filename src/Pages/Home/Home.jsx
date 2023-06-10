import React, { useEffect, useState } from "react";
import BannerSection from "../../Components/HomePage/Banner/BannerSection";
import ClassSection from "../../Components/HomePage/ClassSection/ClassSection";
import InstructorsSection from "../../Components/HomePage/InstructorsSection/InstructorsSection";
import ReviewSection from "../../Components/HomePage/ReviewSection/ReviewSection";
import Swal from "sweetalert2";

const Home = () => {
  const [allClass, setAllClass] = useState([]);
  const [allUser, setAllUser] = useState([]);
  //http://localhost:5000/allClass
  useEffect(() => {
    fetch("https://assignment-12-sever-side-anis1020.vercel.app/allClass", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setAllClass(data.splice(0, 6));
      });
  }, []);

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

  const handleSelectedClass = (classes) => {
    fetch(
      "https://assignment-12-sever-side-anis1020.vercel.app/selectedClass",
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(classes),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Successfully selected",
          showConfirmButton: false,
          timer: 1500,
        });
        console.log(data);
      });
  };

  return (
    <div>
      <BannerSection />
      <ClassSection
        allClass={allClass}
        handleSelectedClass={handleSelectedClass}
      />
      <InstructorsSection allUser={allUser} />
      <ReviewSection />
    </div>
  );
};

export default Home;
