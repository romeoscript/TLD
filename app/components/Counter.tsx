import React from "react";

const Counter = () => {
  return (
    <section className=" my-[4rem]">
      <h1 className="font-bold text-center md:text-5xl text-2xl my-[1rem] text-black">
        Why Choose us?
      </h1>
      <div className="bg-[#F16232] md:p-[4rem] p-[2rem] flex md:justify-around justify-between items-center ">
        <div className="text-center p-[1rem]">
          <h2 className="font-bold md:text-4xl text-2xl  my-[1rem]">+1M</h2>
          <p className="text-[12px]">Data Points Analyzed</p>
        </div>
        <div className="text-center p-[1rem]">
          <h2 className="font-bold md:text-4xl text-2xl  my-[1rem]">2023</h2>
          <p className="text-[12px]">Founded</p>
        </div>
        <div className="text-center p-[1rem]">
          <h1 className="font-bold md:text-4xl text-2xl  my-[1rem]">500+</h1>
          <p className="text-[12px]">Verified Customers</p>
        </div>
      </div>
    </section>
  );
};

export default Counter;
