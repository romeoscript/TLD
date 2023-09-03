"use client";
import React, { useState, useEffect } from "react";
import BasicModal from "./QuoteBtn";
import bg from "../images/bg.png";
import { usePathname } from "next/navigation";

const Presence: React.FC = () => {
  const [first, setfirst] = useState<boolean>(false);
  const [openModal, setOpenModal] = useState<boolean>(false);
  const router = usePathname();

  useEffect(() => {
    if (router === "/") {
      setfirst(true);
    }
  }, [router]);

  return (
    <div className="h-[60vh] relative flex items-center justify-center flex-col text-black ">
      <img
        src={bg.src}
        className="absolute top-0 left-0 h-full w-full object-cover"
        alt=""
      />
      <h2 className="z-20 font-bold md:text-4xl text-2xl text-center">
        {first
          ? "Elevate Your Digital Presence With Us"
          : "Ready to Amplify Your Digital Presence?"}
      </h2>
      <p className="z-20 my-[4rem]">Don’t wait any longer!</p>
      {first ? (
        <button className="bg-[#F16232] rounded-md text-white px-[2rem] py-[0.5rem] z-20">
          Contact us
        </button>
      ) : (
        <BasicModal />
      )}
    </div>
  );
};

export default Presence;
