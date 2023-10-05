// import Swiper core and required modules
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import male from "../images/male_profile.png";
import female from "../images/female_profile.png";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import dick from "../images/3dtube.png";
import dicki from "../images/bg.png";
import dicky from "../images/backimage.png";

export default () => {
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
    <div className=" flex items-center justify-center w-[95%] m-auto">
      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        spaceBetween={50}
        slidesPerView={3}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        breakpoints={{
          // when window width is >= 320px
          320: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          // when window width is >= 480px
          480: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          // when window width is >= 640px
          640: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        {swiperDetails.map((detail, index) => (
          <SwiperSlide key={index}>
            <div className="text-black md:w-[400px] w-[full] h-[320px] bg-white rounded-md md:px-[4rem] px-[2rem] flex flex-col justify-center shadow:md">
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
