// import Swiper core and required modules
"use client";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
import rect1 from "../images/Rectangle 17.png";
import rect2 from "../images/Rectangle 18.png";
import rect3 from "../images/Rectangle 19.png";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const Testimonial = () => {
  const swiperDetails = [
    {
      img: rect1,
      details: " 5 ways you can grow your brand organically",
    },
    {
      img: rect2,
      details: " 5 ways you can grow your brand organically",
    },
    {
      img: rect3,
      details: " 5 ways you can grow your brand organically",
    },
    {
      img: rect1,
      details: " 5 ways you can grow your brand organically",
    },
    {
      img: rect2,
      details: " 5 ways you can grow your brand organically",
    },
  ];
  return (
    <div className="flex items-center w-4/5 m-auto my-[2rem] justify-center flex-col text-black ">
       <h2 className="text-center font-bold text-3xl my-[3rem]">Check out  Our blog</h2>
      <Swiper
        // Install Swiper modules
        style={{ width: '100%' }}
        modules={[Navigation, Pagination, Autoplay, A11y]}
        spaceBetween={50}
        slidesPerView={1}
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
          <SwiperSlide key={index} style={{width:'350px'}}>
            <div className="text-black w-[350px]">
              <img src={detail.img.src} alt="" className="w-full h-[240px]" />
              <h2 className="text-2xl font-bold my-[1.5rem]">{detail.details}</h2>
              <p className="text-[#F16232]">Read more ...</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Testimonial;
