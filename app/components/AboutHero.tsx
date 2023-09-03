import React from "react";
import abouthero from "../images/abouthero.png";
import BasicModal from "./QuoteBtn";

const AboutHero = () => {
  return (
    <div className="h-[80vh] mt-[80px] bg-white md:flex justify-between items-between">
      <div className="text-black basis-[50%] p-[3rem] flex items-center justify-center flex-col">
        <figure className="md:w-4/5 z-20">
          <p className="text-[#F16232]">About us</p>
          <h2 className="text-5xl leading-[1.2] capitalize ">
            Your Trusted Digital Marketing Partner
          </h2>
          <p className="py-[2rem] w-4/5">
            Welcome to Timeline Digitals where digital dreams turn into reality.
            We are a dynamic and innovative digital marketing agency that
            thrives on crafting compelling online strategies.
          </p>
          <BasicModal />
        </figure>
      </div>
      <div className="md:relative  absolute top-0  h-full  flex items-center justify-center basis-[50%]">
        <img src={abouthero.src} className="md:w-[70%] h-[full] " alt="met" />
      </div>
    </div>
  );
};

export default AboutHero;
