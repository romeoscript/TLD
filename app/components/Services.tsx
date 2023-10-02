import React from "react";
import megaphone from "../images/bi_megaphone.png";
import brand from "../images/iconoir_design-nib.png";
import desktop from "../images/mi_computer.png";
import bubble from "../images/bubble.png";
import '../services.scss'

const Services = () => {
  const serviceDetails = [
    {
      img: desktop,
      title: "web development",
      test: "From user-friendly interface to responsive designs, our web development experts can create incredible websites for your business.  ",
    },
    {
      img: brand,
      title: "Lead Generation",
      test: "Boost Your Sales with Targeted Lead Generation! We identify consumer interests and target them effectively to drive business growth.",
    },
    {
      img: megaphone,
      title: "growth hack ",
      test: "Our growth hack strategies are designed to bring results. Let us skyrocket your business with innovative and sustainable strategies.",
    },
    {
      img: megaphone,
      title: "Search Engine Optimization",
      test: "Boost your online presence with effective SEO! With our proven strategies, our SEO services can revolutionize your online presence, Gain visibility with us, today! ",
    },
    {
      img: megaphone,
      title: "Local SEO",
      test: "With our expertise, we can connect you with nearby customers through local listings and search engine optimization. Work with us for proven results.",
    },
  ];
  return (
    <div className="bg-[#F16232] relative min-h-[80vh]">
        <img src={bubble.src} className="absolute top-0 right-0 h-[100px] w-[100px]" alt="" />
      <h2 className="text-center font-bold text-3xl p-[4rem]">Our Services</h2>

      <div className="md:flex items-center pd:mb-0 pb-[2rem] justify-around flex-wrap grid gap-4">
        {serviceDetails.map((deets ,index) => {
          return (
            <div className="md:h-[350px] h-[300px] text-center p-[1rem] md:w-[350px] w-[300px] flex items-center justify-center flex-col rounded-md bg-white text-black" key={index}>
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
