"use client";
import React, { useRef, useEffect } from "react";
import { gsap, Power1 } from "gsap";
import img1 from "../images/Rectangle 12.png";
import img2 from "../images/Rectangle 13.png";
import img3 from "../images/Rectangle 14.png";
import img4 from "../images/Rectangle 15.png";
import img5 from "../images/Rectangle 16.png";

const Why: React.FC = () => {
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
        const tl = gsap.timeline({ repeat: -1, yoyo: true, ease: Power1.easeInOut });
        tl.to(img1Ref.current, { duration: 0.6, y: -10 })
          .to(img2Ref.current, { duration: 0.6, y: -10 }, "-=0.4")
          .to(img3Ref.current, { duration: 0.6, y: -10 }, "-=0.4")
          .to(img4Ref.current, { duration: 0.6, y: -10 }, "-=0.4");
        // Add more images or modify as per your needs
      }
  }, []);

  return (
    <div>
      <h1 className="text-black text-center text-4xl capitalize w-[30%] my-[4rem] leading-[1.2] m-auto">
        Why is timeline digitals the best choice ?
      </h1>
      <div className="flex relative items-center justify-around p-[2rem]">
        <img ref={img1Ref} src={img1.src} alt="" />
        <img ref={img2Ref} src={img2.src} className="mt-[11rem]" alt="" />
        <img ref={img3Ref} src={img3.src} alt="" />
        <img ref={img4Ref} src={img4.src} className="mt-[11rem]" alt="" />
        {/* Add more images or modify as per your needs */}
      </div>
    </div>
  );
};

export default Why;
