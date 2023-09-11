"use client";
import rect1 from "../images/Rectangle 17.png";
import rect2 from "../images/Rectangle 18.png";
import rect3 from "../images/Rectangle 19.png";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Slider from "./Slider";

const SwiperSlider = () => {
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
    <div className="flex flex-col items-center justify-center w-4/5 mx-auto my-8">
      <h2 className="text-center text-black font-bold text-3xl mb-12">
        Check out Our blog
      </h2>

      <div className="w-full">
        <Slider>
          {swiperDetails.map((detail, index) => (
            <div
              className="text-black w-[320px] mx-auto"
              key={index}
            >
              <img src={detail.img.src} alt="" className="w-full h-60 object-cover mb-6" />
              <h2 className="text-2xl font-bold mb-4">
                {detail.details}
              </h2>
              <p className="text-[#F16232]">Read more ...</p>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default SwiperSlider;
