// import Swiper core and required modules
"use client";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
import male from "../images/male_profile.png";
import female from "../images/female_profile.png";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import bubble from "../images/bubble.png";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const Testimonial = () => {
  const swiperDetails = [
    {
      img: male,
      details:
        "It’s such an amazing company to work with. They always put in effort.",
      name: "Esther .O",
      occupation: "Cafe owner, Lagos",
    },
    {
      img: female,
      details:
        "It’s such an amazing company to work with. They always put in effort.",
      name: "John Doe",
      occupation: "Software Developer",
    },
    {
      img: male,
      details:
        "It’s such an amazing company to work with. They always put in effort.",
      name: "John Doe",
      occupation: "Software Developer",
    },
    // ... other testimonial details
  ];

  return (
    <div className="flex items-center w-4/5 m-auto my-[2rem] justify-center flex-col text-black">
     
      <h2 className="text-center font-bold text-white text-3xl my-[3rem]">
        Hear From Our Past Clients
      </h2>
      <p className="text-white pb-[3rem]">Testimonials</p>
      <Swiper
        style={{ width: "100%" }}
        modules={[Navigation, Pagination, Autoplay, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
        breakpoints={{
          // when window width is >= 640px
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          // when window width is >= 768px
          768: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
        }}
      >
        {swiperDetails.map((detail, index) => (
          <SwiperSlide key={index} style={{ width: "350px" }}>
            <div className="text-black md:w-[450px] h-[320px] bg-white rounded-md px-[4rem] flex flex-col justify-center">
              <div className="text-[#F16232]">
                <StarIcon />
                <StarIcon />
                <StarIcon />
                <StarIcon />
                <StarBorderIcon />
              </div>
              <p className="my-[1.5rem]">{detail.details}</p>
              <div className="flex justify-between items-between">
                <img
                  src={detail.img.src}
                  alt={detail.name}
                  className="w-[80px] rounded-full h-[80px]"
                />
                <figure>
                  <h2 className="font-bold capitalize"> {detail.name}</h2>
                  <p> {detail.occupation}</p>
                </figure>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Testimonial;
