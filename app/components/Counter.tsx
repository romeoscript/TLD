import React from "react";

const Counter = () => {
  return (
    <section className=" my-[4rem]">
      <h1 className="font-bold text-center text-5xl my-[1rem] text-black">
        Why Choose us?
      </h1>
      <div className="bg-[#F16232] p-[4rem] flex justify-around items-center ">
        <div className="text-center p-[1rem]">
          <h2 className="font-bold text-4xl my-[1rem]">+1M</h2>
          <p>Data Points Analyzed</p>
        </div>
        <div className="text-center p-[1rem]">
          <h2 className="font-bold text-4xl my-[1rem]">2023</h2>
          <p>Founded</p>
        </div>
        <div className="text-center p-[1rem]">
          <h1 className="font-bold text-4xl my-[1rem]">500+</h1>
          <p>Verified Customers</p>
        </div>
      </div>
    </section>
  );
};

export default Counter;
