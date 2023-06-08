import React from "react";
import BannerSection from "../../Components/HomePage/Banner/BannerSection";
import ClassSection from "../../Components/HomePage/ClassSection/ClassSection";
import InstructorsSection from "../../Components/HomePage/InstructorsSection/InstructorsSection";
import ReviewSection from "../../Components/HomePage/ReviewSection/ReviewSection";

const Home = () => {
  return (
    <div>
      <BannerSection />
      <ClassSection />
      <InstructorsSection />
      <ReviewSection />
    </div>
  );
};

export default Home;
