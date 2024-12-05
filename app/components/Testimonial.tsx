// import Swiper core and required modules
"use client";
import male from "../images/male_profile.png";
import female from "../images/female_profile.png";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import Slider from "./Slider";


const Testimonial = () => {
 

  return (
    <div className="flex items-center w-full m-auto my-[2rem] justify-center flex-col text-black">
      <h2 className="text-center font-bold text-white text-3xl my-[3rem]">
        Hear From Our Past Clients
      </h2>
      <p className="text-white pb-[3rem]">Testimonials</p>

    </div>
  );
};

export default Testimonial;
