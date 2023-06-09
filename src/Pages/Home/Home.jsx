import React, { useEffect, useState } from "react";
import BannerSection from "../../Components/HomePage/Banner/BannerSection";
import ClassSection from "../../Components/HomePage/ClassSection/ClassSection";
import InstructorsSection from "../../Components/HomePage/InstructorsSection/InstructorsSection";
import ReviewSection from "../../Components/HomePage/ReviewSection/ReviewSection";

const Home = () => {
  const [allClass, setAllClass] = useState([]);
  //http://localhost:5000/allClass
  useEffect(() => {
    fetch("http://localhost:5000/allClass", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setAllClass(data.splice(0, 6));
      });
  }, []);

  return (
    <div>
      <BannerSection />
      <ClassSection allClass={allClass} />
      <InstructorsSection />
      <ReviewSection />
    </div>
  );
};

export default Home;
