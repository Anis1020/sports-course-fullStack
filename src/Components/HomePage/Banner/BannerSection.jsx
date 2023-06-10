import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import "./BannerSection.css";

import img1 from "../../../assets/img 1.jpg";
import img2 from "../../../assets/img 2.jpg";
import img3 from "../../../assets/img 3.jpg";
import img4 from "../../../assets/img 4.jpg";
import img5 from "../../../assets/img 5.jpg";
import img6 from "../../../assets/img 6.jpg";
import img7 from "../../../assets/img 7.jpg";
import img8 from "../../../assets/img 8.jpg";
import img9 from "../../../assets/img99.jpg";
import { Autoplay, Pagination } from "swiper";

const BannerSection = () => {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };

  return (
    <div>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={img1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img2} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img3} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img4} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img5} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img6} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img7} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img8} alt="" />
        </SwiperSlide>

        <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
      <div className="absolute top-36 z-10 flex justify-center items-center mr-10 gap-6">
        <span className="space-y-5">
          {" "}
          <h2 className="text-4xl">WellCome to our sports school,</h2>
          <p>here wi will learn many types of sports </p>
          <button className="btn btn-primary">Enroll Now</button>
        </span>
        <img src={img9} className="rounded-full w-3/6 h-3/6" alt="" />
      </div>
    </div>
  );
};

export default BannerSection;
