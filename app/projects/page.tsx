import React from "react";
import pent from "../images/pentagone.png";
import pent1 from "../images/pentenian.png";

const page = () => {
  return (
    <div className="mt-[100px] text-center text-black">
      <h2 className="font-bold text-4xl mt-[10rem] mb-[1rem]">
        The <span className="text-[#F16232]">Work</span> We Have Done
      </h2>
      <p>Check out our portfolio</p>

      <div className="grid grid-cols-2 place-items-center my-[4rem]">
        <aside className="w-[548px] my-[2rem] h-[443px] ">
          <img src={pent.src} alt="" className="h-[290px] m-auto w-[450px] object-fill" />
          <div className="text-center">
            <h2 className="font-bold capitalize">TMOBILE</h2>
            <p className="py-[1rem]">Phone network service for customers</p>
            <p className="text-[#F16232]">Full case study here</p>
          </div>
        </aside>
       
        <aside className="w-[548px] my-[2rem] h-[443px] ">
          <img src={pent1.src} alt="" className="h-[290px] m-auto w-[450px] object-fill" />
          <div className="text-center">
            <h2 className="font-bold capitalize">TMOBILE</h2>
            <p className="py-[1rem]">Phone network service for customers</p>
            <p className="text-[#F16232]">Full case study here</p>
          </div>
        </aside>
       
        <aside className="w-[548px] my-[2rem] h-[443px] ">
          <img src={pent.src} alt="" className="h-[290px] m-auto w-[450px] object-fill" />
          <div className="text-center">
            <h2 className="font-bold capitalize">TMOBILE</h2>
            <p className="py-[1rem]">Phone network service for customers</p>
            <p className="text-[#F16232]">Full case study here</p>
          </div>
        </aside>
       
        <aside className="w-[548px] my-[2rem] h-[443px] ">
          <img src={pent1.src} alt="" className="h-[290px] m-auto w-[450px] object-fill" />
          <div className="text-center">
            <h2 className="font-bold capitalize">TMOBILE</h2>
            <p className="py-[1rem]">Phone network service for customers</p>
            <p className="text-[#F16232]">Full case study here</p>
          </div>
        </aside>
       
       
      </div>
    </div>
  );
};

export default page;
