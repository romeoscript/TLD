"use client";
import React, { useRef, useEffect } from "react";
import { gsap, Power1 } from "gsap";
import img1 from "../images/Rectangle 12.png";
import img2 from "../images/Rectangle 13.png";
import img3 from "../images/Rectangle 14.png";
import img4 from "../images/Rectangle 15.png";
import img5 from "../images/Rectangle 16.png";
import ShieldOutlinedIcon from "@mui/icons-material/ShieldOutlined";
import BoltOutlinedIcon from "@mui/icons-material/BoltOutlined";
import HandshakeOutlinedIcon from "@mui/icons-material/HandshakeOutlined";

const Why: React.FC = () => {
  const whyDeets = [
    {
      img: <ShieldOutlinedIcon />,
      title: "Organic reach",
      detials: "oh shes sweet but a pshyco and is shsieinndaididfindfndifidf",
    },
    {
      img: <BoltOutlinedIcon />,
      title: "Brand growth",
      detials: "oh shes sweet but a pshyco and is shsieinndaididfindfndifidf",
    },
    {
      img: <HandshakeOutlinedIcon />,
      title: "effective  traffic",
      detials: "oh shes sweet but a pshyco and is shsieinndaididfindfndifidf",
    },
  ];
  // Create references for the images
  const img1Ref = useRef<HTMLImageElement | null>(null);
  const img2Ref = useRef<HTMLImageElement | null>(null);
  const img3Ref = useRef<HTMLImageElement | null>(null);
  const img4Ref = useRef<HTMLImageElement | null>(null);
  const img5Ref = useRef<HTMLImageElement | null>(null);

  useEffect(() => {
    // Use GSAP to animate
    if (
      img1Ref.current &&
      img2Ref.current &&
      img3Ref.current &&
      img4Ref.current
    ) {
      const tl = gsap.timeline({
        repeat: -1,
        yoyo: true,
        ease: Power1.easeInOut,
      });
      tl.to(img1Ref.current, { duration: 0.6, y: -10 })
        .to(img2Ref.current, { duration: 0.6, y: -10 }, "-=0.4")
        .to(img3Ref.current, { duration: 0.6, y: -10 }, "-=0.4")
        .to(img4Ref.current, { duration: 0.6, y: -10 }, "-=0.4");
      // Add more images or modify as per your needs
    }
  }, []);

  return (
    <div>
      <h1 className="text-black text-center text-4xl capitalize md:w-[30%] my-[4rem] leading-[1.2] m-auto">
        Why is timeline digitals the best choice ?
      </h1>
      <div className="md:flex relative items-center justify-around p-[2rem] flex-wrap grid grid-cols-2 gap-4">
        <img ref={img1Ref} src={img1.src} alt="" />
        <img ref={img2Ref} src={img2.src} className="md:mt-[11rem] mt-[4rem]" alt="" />
        <img ref={img3Ref} src={img3.src} alt="" />
        <img ref={img4Ref} src={img4.src} className="md:mt-[11rem] mt-[4rem]" alt="" />
        {/* Add more images or modify as per your needs */}
      </div>

      <figure className="flex text-black items-center justify-around my-[2rem] flex-wrap gap-[2%]">
        {whyDeets.map((info,index) => {
          return (
            <div key={index}>
              <div className="w-[300px] flex items-center justify-center flex-col text-center">
                <div className="breathing-effect w-[75px] h-[75px] bg-[#FFC7A6] flex items-center justify-center rounded-full">
                  <div className="w-[60px] h-[60px] text-center rounded-full text-white flex items-center justify-center bg-[#F16232]  ">
                    {info.img}
                  </div>
                </div>
                <h2 className="font-bold my-[1rem] capitalize tet-2xl">
                  {info.title}
                </h2>
                <p>{info.detials}</p>
              </div>
            </div>
          );
        })}
      </figure>
    </div>
  );
};

export default Why;
