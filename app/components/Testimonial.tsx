// import Swiper core and required modules
"use client";
import male from "../images/male_profile.png";
import female from "../images/female_profile.png";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import Slider from "./Slider";

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
      <Slider >
        {swiperDetails.map((detail, index) => (
          <div className="text-black md:w-[450px] h-[320px] bg-white rounded-md px-[4rem] flex flex-col justify-center" key={index}>
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
        ))}
      </Slider>
    </div>
  );
};

export default Testimonial;
