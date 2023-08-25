import React from "react";
import backimage from "../images/backimage.png";
import human from "../images/living-human.png";
import transparentfront from "../images/transparentfront.png";

const Hero = () => {
  return (
    <div className="h-[80vh] mt-[80px] bg-white flex justify-between items-between">
      <div className="text-black basis-[50%] p-[3rem] flex items-center justify-center flex-col">
        <figure className="w-4/5">
          <h2 className="text-5xl leading-[1.2] capitalize ">
            Grow your <br />
            <span className="text-[#F16232]">business</span> with our digital
            marketing expertise
          </h2>
          <p className="py-[2rem] w-3/5">
            being lost in the digital is not an option. Our SEO experts wield
            their magic to put your brand front and center
          </p>
          <button className="bg-[#F16232] rounded-md text-white px-[2rem] py-[0.5rem]">
            Get Started
          </button>
        </figure>
      </div>
      <div className="relative h-full  flex items-center justify-center basis-[50%]">
        <img
          src={backimage.src}
          className="w-[300px] h-[300px] absolute absolute bottom-[9%] left-[33%]"
          alt="met"
        />
        <img
          src={human.src}
          className="h-[420px] z-20  absolute top-[7%]"
          alt="met  "
        />
        <img
          src={transparentfront.src}
          className="w-[330px] h-[330px] absolute bottom-[0%] left-[26%] z-20"
          alt="met"
        />
      </div>
    </div>
  );
};

export default Hero;
