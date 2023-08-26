import React from "react";

const navbar = () => {
  return (
    <div className="flex justify-between h-[80px] bg-[#F16232] items-center px-[2rem] top-0 fixed w-full z-30">
      <h2 className="text-3xl">TLD</h2>
      <ul className="flex items-center gap-[2rem]">
        <li>Home</li>
        <li>Service</li>
        <li>Blog</li>
        <li>About Us</li>
      </ul>
      <button className="bg-white rounded-md text-[#F16232] px-[2rem] py-[0.5rem]">Get Started</button>
    </div>
  );
};

export default navbar;
