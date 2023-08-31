import React from "react";
import Link from "next/link";

const navbar = () => {
  return (
    <div className="flex justify-between h-[80px] bg-[#F16232] items-center px-[2rem] top-0 fixed w-full z-30">
      <h2 className="text-3xl">TLD</h2>
      <ul className="flex items-center gap-[2rem]">
        <Link href="/">
          <li>Home</li>
        </Link>
        <Link href="/">
          <li>Service</li>
        </Link>
        <Link href="/projects">
          <li>Projects</li>
        </Link>
        <Link href="/about">
          <li>About Us</li>
        </Link>
      </ul>
      <button className="bg-white rounded-md text-[#F16232] px-[2rem] py-[0.5rem]">
        Get Started
      </button>
    </div>
  );
};

export default navbar;
