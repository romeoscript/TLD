import React from "react";
import backimage from "../images/backimage.png";
import human from "../images/living-human.png";
import transparentfront from "../images/transparentfront.png";

const Hero = () => {
  return (
    <div className="h-[80vh] mt-[80px] bg-white md:text-left text-center md:flex justify-between items-between block">
      <aside className="text-black basis-[50%] md:p-[3rem] p-[1.5rem] md:relative z-[22] absolute  flex items-center justify-center flex-col">
        <figure className="md:w-4/5 w-full">
          <h2 className="md:text-5xl text-4xl md:text-left text-center leading-[1.2] capitalize ">
         
          Elevate your <br />
            <span className="text-[#F16232]">business</span>  with our digital marketing expertise 
          </h2>
          <p className="py-[2rem] md:w-4/5 w-full md:font-normal md:text-black text-[#F16232] ">
          Don’t get lost in the digital world, let TLD lead you to digital greatness or Don’t get lost in the digital world; let Timeline Digitals lead you to greater digital heights. 
          </p>
          <button className="bg-[#F16232]  rounded-md text-white px-[2rem] py-[0.5rem]">
            Get Started
          </button>
        </figure>
      </aside>
      <aside className="relative h-full  flex items-center justify-center md:basis-[50%] basis-full ">
        <img
          src={backimage.src}
          className="w-[300px] h-[300px] absolute absolute md:bottom-[9%] bottom-[20%] left-[33%]"
          alt="met"
        />
        <img
          src={human.src}
          className="h-[420px] z-20  absolute top-[7%]"
          alt="met  "
        />
        <img
          src={transparentfront.src}
          className="w-[330px] h-[330px] absolute md:bottom-[0%] bottom-[10%] md:left-[26%]  z-20"
          alt="met"
        />
      </aside>
    </div>
  );
};

export default Hero;
