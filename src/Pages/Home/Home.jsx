import React, { useEffect, useState } from "react";
import BannerSection from "../../Components/HomePage/Banner/BannerSection";
import ClassSection from "../../Components/HomePage/ClassSection/ClassSection";
import InstructorsSection from "../../Components/HomePage/InstructorsSection/InstructorsSection";
import ReviewSection from "../../Components/HomePage/ReviewSection/ReviewSection";
import Swal from "sweetalert2";

const Home = () => {
  const [allClass, setAllClass] = useState([]);
  //http://localhost:5000/allClass
  useEffect(() => {
    fetch("http://localhost:5000/allClass", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setAllClass(data.splice(0, 6));
      });
  }, []);

  const handleSelectedClass = (classes) => {
    fetch("http://localhost:5000/selectedClass", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(classes),
    })
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
      <InstructorsSection />
      <ReviewSection />
    </div>
  );
};

export default Home;
