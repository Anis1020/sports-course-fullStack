import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import { FaStar } from "react-icons/fa";

import img1 from "../../../assets/img 1.jpg";
import img2 from "../../../assets/img 2.jpg";
import img3 from "../../../assets/img 3.jpg";
import img4 from "../../../assets/img 4.jpg";
import img5 from "../../../assets/img 5.jpg";

const ReviewSection = () => {
  return (
    <div className="my-8">
      <h2 className="text-2xl my-3">Review Section</h2>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide className="text-black flex flex-col p-10 space-y-4">
          <div className=" w-10 h-10">
            <img src={img1} className=" rounded-full" alt="" />
          </div>
          <h2>sakil khan</h2>
          <p>
            this is a best crouse i have seen ever in my life so you can buy it
            it is a trusted institution, and they are very friendly teacher they
            support us a lot{" "}
          </p>
          <span className="flex text-orange-700">
            <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar />
          </span>
        </SwiperSlide>
        <SwiperSlide className="text-black flex flex-col p-10 space-y-4">
          <div className=" w-10 h-10">
            <img src={img2} className=" rounded-full" alt="" />
          </div>
          <h2>sakil khan</h2>
          <p>
            this is a best crouse i have seen ever in my life so you can buy it
            it is a trusted institution, and they are very friendly teacher they
            support us a lot{" "}
          </p>
          <span className="flex text-orange-700">
            <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar />
          </span>
        </SwiperSlide>
        <SwiperSlide className="text-black flex flex-col p-10 space-y-4">
          <div className=" w-10 h-10">
            <img src={img3} className=" rounded-full" alt="" />
          </div>
          <h2>sakil khan</h2>
          <p>
            this is a best crouse i have seen ever in my life so you can buy it
            it is a trusted institution, and they are very friendly teacher they
            support us a lot{" "}
          </p>
          <span className="flex text-orange-700">
            <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar />
          </span>
        </SwiperSlide>
        <SwiperSlide className="text-black flex flex-col p-10 space-y-4">
          <div className=" w-10 h-10">
            <img src={img4} className=" rounded-full" alt="" />
          </div>
          <h2>sakil khan</h2>
          <p>
            this is a best crouse i have seen ever in my life so you can buy it
            it is a trusted institution, and they are very friendly teacher they
            support us a lot{" "}
          </p>
          <span className="flex text-orange-700">
            <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar />
          </span>
        </SwiperSlide>
        <SwiperSlide className="text-black flex flex-col p-10 space-y-4">
          <div className=" w-10 h-10">
            <img src={img5} className=" rounded-full" alt="" />
          </div>
          <h2>sakil khan</h2>
          <p>
            this is a best crouse i have seen ever in my life so you can buy it
            it is a trusted institution, and they are very friendly teacher they
            support us a lot{" "}
          </p>
          <span className="flex text-orange-700">
            <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar />
          </span>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default ReviewSection;
