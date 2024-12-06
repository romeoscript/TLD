"use client";
import { useState } from "react";
import Link from "next/link";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";

const Navbar = () => {
  const [showMobile, setShowMobile] = useState(false);

  return (
    <div className="flex justify-between h-[80px] bg-[#F16232] items-center px-[2rem] top-0 fixed w-full z-30 relative">
      <h2 className="text-3xl">TLD</h2>
      <ul className="md:flex items-center gap-[2rem] hidden">
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
      <div>
        <Link href="/Register">
            <button className="bg-white rounded-md text-[#F16232] px-[2rem] mr-[0.6rem] py-[0.5rem]">
          Get Started
        </button>
          </Link>

      
        <span className="md:hidden inline">
        {showMobile ? <CloseOutlinedIcon onClick={()=> setShowMobile(!showMobile)} /> : <MenuOutlinedIcon onClick={()=> setShowMobile(!showMobile)}/>}
        </span>
      </div>
      {showMobile && (
        <ul className=" gap-[2rem] bg-[#F16232] rounded-md absolute top-[90px] right-[2%] p-[1rem]">
          <Link href="/">
            <li className="p-[0.5rem]">Home</li>
          </Link>
          <Link href="/">
            <li className="p-[0.5rem]">Service</li>
          </Link>
          <Link href="/projects">
            <li className="p-[0.5rem]">Projects</li>
          </Link>
          <Link href="/about">
            <li className="p-[0.5rem]">About Us</li>
          </Link>
        </ul>
      )}
    </div>
  );
};

export default Navbar;
