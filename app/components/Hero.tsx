"use client"
import Link from "next/link";
import {useEffect} from "react";
import backimage from "../images/trysquare.svg";
import human from "../images/try.svg";
import { gsap } from "gsap";
import transparentfront from "../images/3dtube.png";

const Hero = () => {
  useEffect(() => {
    // Continuous bouncing animation for backimage
    gsap.to(".backimage", {
      y: "-=20",
      duration: 0.8,
      yoyo: true,
      repeat: -1,
      ease: "power1.inOut"
    });

    // Continuous bouncing animation for human image
    gsap.to(".human", {
      y: "-=20",
      duration: 0.9,
      yoyo: true,
      repeat: -1,
      ease: "power1.inOut",
      delay: 0.2
    });

    // Continuous bouncing animation for transparentfront image
    gsap.to(".transparentfront", {
      y: "-=20",
      duration: 1,
      yoyo: true,
      repeat: -1,
      ease: "power1.inOut",
      delay: 0.4
    });
}, []);

  return (
    <div className="h-[80vh] mt-[80px] bg-white md:text-left text-center md:flex justify-between items-between block">
      <aside className="text-black basis-[50%] md:p-[3rem] p-[1.5rem] md:relative z-[22] absolute  flex items-center justify-center flex-col">
        <figure className="md:w-4/5 w-full">
          <h2 className="md:text-5xl text-4xl md:text-left text-center leading-[1.2] capitalize ">
            Elevate your <br />
            <span className="text-[#F16232]">business</span> with our digital
            marketing expertise
          </h2>
          <p className="py-[2rem] md:w-4/5 w-full md:font-normal md:text-black text-[#F16232] ">
            Don’t get lost in the digital world, let TLD lead you to digital
            greatness or Don’t get lost in the digital world; let Timeline
            Digitals lead you to greater digital heights.
          </p>
          <Link href='/Register'>
            <button className="bg-[#F16232]  rounded-md text-white px-[2rem] py-[0.5rem]">
              Get Started
            </button>
          </Link>
        </figure>
      </aside>
      <aside className="relative h-full  flex items-center justify-center md:basis-[50%] basis-full ">
        <img
          src={backimage.src}
          className="backimage w-[300px] h-[300px] absolute absolute  md:bottom-[9%] bottom-[20%] left-[33%]"
          alt="met"
        />
        <img
          src={human.src}
          className="human h-[420px] z-20 md:left-[-10%] absolute top-[7%]"
          alt="met  "
        />
        <img
          src={transparentfront.src}
          className="transparentfront w-[330px] h-[330px] absolute md:bottom-[0%] bottom-[10%] md:left-[-2%]  z-20"
          alt="met"
        />
      </aside>
    </div>
  );
};

export default Hero;
