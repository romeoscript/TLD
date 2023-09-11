import React from "react";
import ShieldOutlinedIcon from "@mui/icons-material/ShieldOutlined";
import BoltOutlinedIcon from "@mui/icons-material/BoltOutlined";
import HandshakeOutlinedIcon from "@mui/icons-material/HandshakeOutlined";
import aboutinfo from '../images/aboutinfo.png'

const Statement = () => {
  const state = [
    {
      img: <ShieldOutlinedIcon />,
      title: "Our Vision",
      detials:
        "Empowering businesses to thrive in the digital age by delivering innovative and tailored digital marketing solutionsf",
    },
    {
      img: <BoltOutlinedIcon />,
      title: "Our Mission",
      detials:
        "To be a global leader in digital marketing, recognized for our unwavering commitment to excellence",
    },
    {
      img: <HandshakeOutlinedIcon />,
      title: "Our Goal",
      detials:
        " We aim to cultivate lasting relationships  that showcase the true potential of strategic digital marketing.",
    },
  ];
  return (
    <div>
      <figure className="md:flex  block items-center justify-center m-auto mt-[4rem] w-4/5 gap-4 text-black">
        <aside className="basis-[50%]">
            <img src={aboutinfo.src} className='w-3/5' alt="" />
        </aside>
        <aside className="basis-[40%]">
          <h2 className="font-bold text-4xl mb-[2rem]">About Timeline Digitals</h2>
          <p>
            With a passion for creativity and a commitment to excellence, we are
            here to transform your digital presence and take your brand to new
            heights.
          </p>
          <p className="my-[1rem]">We are here to give you an edge over your competitors. How?</p>
          <ul className=" pl-[0.3rem] ">
            <li className="font-bold">
              <span className="w-[20px] bg-[#F16232] mr-[0.5rem] h-[20px] inline-block rounded-full"></span>
              Our strategies are meticulously crafted to encompass every aspect
              of digital marketing.
            </li>
            <li className="font-bold my-[1rem]">
              <span className="w-[20px] bg-[#F16232] h-[20px] mr-[0.5rem] inline-block rounded-full"></span>
              Our decisions are guided by in-depth analytics, enabling us to
              adapt and optimize campaigns for maximum impact.
            </li>
            <li className="font-bold">
              <span className="w-[20px] bg-[#F16232] h-[20px] mr-[0.5rem] inline-block rounded-full"></span>
              We stay ahead of trends and leverage cutting-edge tools to ensure
              your brand remains relevant in a rapidly changing online world.
            </li>
          </ul>
        </aside>
      </figure>

      <figure className="flex text-black items-center flex-wrap justify-around my-[5rem] p-[3rem] gap-[2%]">
        {state.map((info, index) => {
          return (
            <div className="w-[370px] h-[374px] rounded-md shadow-2xl flex  items-center justify-center flex-col p-[2rem] text-center" key={index}>
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
