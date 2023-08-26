import React from "react";
import ShieldOutlinedIcon from "@mui/icons-material/ShieldOutlined";
import BoltOutlinedIcon from "@mui/icons-material/BoltOutlined";
import HandshakeOutlinedIcon from "@mui/icons-material/HandshakeOutlined";

const Statement = () => {
  const state = [
    {
      img: <ShieldOutlinedIcon />,
      title: "Our Vision",
      detials: "Empowering businesses to thrive in the digital age by delivering innovative and tailored digital marketing solutionsf",
    },
    {
      img: <BoltOutlinedIcon />,
      title: "Our Mission",
      detials: "To be a global leader in digital marketing, recognized for our unwavering commitment to excellence",
    },
    {
      img: <HandshakeOutlinedIcon />,
      title: "Our Goal",
      detials: " We aim to cultivate lasting relationships  that showcase the true potential of strategic digital marketing.",
    },
  ];
  return (
    <div>
      <figure className="flex text-black items-center justify-around my-[5rem] p-[3rem] gap-[2%]">
        {state.map((info) => {
          return (
        
              <div className="w-[370px] h-[374px] rounded-md shadow-2xl flex items-center justify-center flex-col p-[2rem] text-center">
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
         
          );
        })}
      </figure>
    </div>
  );
};

export default Statement;
