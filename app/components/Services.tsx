import React from "react";
import megaphone from "../images/bi_megaphone.png";
import brand from "../images/iconoir_design-nib.png";
import desktop from "../images/mi_computer.png";
import bubble from "../images/bubble.png";

const Services = () => {
  const serviceDetails = [
    {
      img: desktop,
      title: "web development",
      test: "lorem ssidfinfidfidsdfis",
    },
    {
      img: brand,
      title: "branding and design",
      test: "lorem ssidfinfidfidsdfis",
    },
    {
      img: megaphone,
      title: "growth hacking ",
      test: "lorem ssidfinfidfidsdfis",
    },
  ];
  return (
    <div className="bg-[#F16232] relative h-[80vh]">
        <img src={bubble.src} className="absolute top-0 right-0 h-[100px] w-[100px]" alt="" />
      <h2 className="text-center font-bold text-3xl p-[4rem]">Our Services</h2>

      <div className="flex items-center justify-around  gap-4">
        {serviceDetails.map((deets) => {
          return (
            <div className="h-[350px] w-[350px] flex items-center justify-center flex-col rounded-md bg-white text-black">
              <img src={deets.img.src} alt="" />
              <h1 className="capitalize text-2xl font-bold my-[1rem]">{deets.title}</h1>
              <p>{deets.test}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Services;
