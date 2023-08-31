"use client";
import { useState } from "react";
import pent from "../images/ORANGE DESIGN 2 1.png";
import pent1 from "../images/image 1.png";
import AddIcon from "@mui/icons-material/Add";

const page = () => {
  const [listActive, setListActive] = useState(true);
  const [cardActive, setCardActive] = useState(false);
  const [showListCard, setShowhowListCard] = useState(true);

  return (
    <div className="mt-[100px] text-center text-black">
      <h2 className="font-bold text-4xl mt-[10rem] mb-[1rem]">
        The <span className="text-[#F16232]">Work</span> We Have Done
      </h2>
      <p className="w-3/5 m-auto">
        We are technology experts who believe in the power of technology to
        improve people's lives. We have the creative and technical expertise to
        bring your visions to life, no matter what industry you're in. With our
        extensive experience and knowledge from around the globe, we can help
        you build a better future for everyone.
      </p>

      <section className="px-[4rem]">
        <div className="flex items-center justify-between p-[2rem] border-b-2 border-black">
          <aside>
            <h2 className="text-[#646262]">
              INDUSTRY: ALL{" "}
              <span className="text-[#F16232] cursor-pointer">
                <AddIcon />
              </span>{" "}
            </h2>
          </aside>
          <aside>
            <div className="flex gap-4">
              <span
                onClick={() => {
                  setListActive(!listActive);
                  setCardActive(!cardActive);
                  setShowhowListCard(true)
                }}
                className={`  cursor-pointer rounded-full p-[0.5rem] ${
                  listActive ? "bg-[#F16232] text-white" : ""
                }`}
              >
                List
              </span>
              <span
                onClick={() => {
                  setCardActive(!cardActive);
                  setListActive(!listActive);
                  setShowhowListCard(false)
                }}
                className={` cursor-pointer rounded-full p-[0.5rem] ${
                  cardActive ? "bg-[#F16232] text-white" : ""
                }`}
              >
                Card
              </span>
            </div>
          </aside>
        </div>
        {showListCard ? (
          <div className="flex items-center justify-between p-[2rem] border-b-[1px] border-grey">
            <aside>
              <h2 className="font-bold text-2xl">Byte Me</h2>
              <p className="text-[#F16232] uppercase">BRANDING AND DESIGN</p>
            </aside>
            <aside>
              <div className="flex gap-4">
                <span className="border-[1px] border-[#F16232] rounded-full p-[0.5rem]">
                  branding
                </span>
                <span className="border-[1px] border-[#F16232] rounded-full p-[0.5rem]">
                  branding
                </span>
                <span className="border-[1px] border-[#F16232] rounded-full p-[0.5rem]">
                  branding
                </span>
              </div>
            </aside>
          </div>
        ) : (
          <div className="grid grid-cols-2 text-left place-items-center">
            <div className=" p-[2rem] w-[500px]">
              <img
                src={pent.src}
                className="h-[350px] object-contain w-full rounded-md"
                alt=""
              />
              <aside className="my-[1rem]">
                <h2 className="font-bold text-2xl">Byte Me</h2>
                <p className="text-[#F16232] uppercase">BRANDING AND DESIGN</p>
              </aside>
              <aside>
                <div className="flex gap-4">
                  <span className="border-[1px] border-[#F16232] rounded-full p-[0.5rem]">
                    branding
                  </span>
                  <span className="border-[1px] border-[#F16232] rounded-full p-[0.5rem]">
                    branding
                  </span>
                  <span className="border-[1px] border-[#F16232] rounded-full p-[0.5rem]">
                    branding
                  </span>
                </div>
              </aside>
            </div>
            <div className=" p-[2rem] w-[500px]">
              <img
                src={pent1.src}
                className="h-[350px] object-contain w-full"
                alt=""
              />
              <aside className="my-[1rem]">
                <h2 className="font-bold text-2xl">Byte Me</h2>
                <p className="text-[#F16232] uppercase">BRANDING AND DESIGN</p>
              </aside>
              <aside>
                <div className="flex gap-4">
                  <span className="border-[1px] border-[#F16232] rounded-full p-[0.5rem]">
                    branding
                  </span>
                  <span className="border-[1px] border-[#F16232] rounded-full p-[0.5rem]">
                    branding
                  </span>
                  <span className="border-[1px] border-[#F16232] rounded-full p-[0.5rem]">
                    branding
                  </span>
                </div>
              </aside>
            </div>
          </div>
        )}
      </section>

      <button className="bg-[#F16232]  mt-[4rem] rounded-md mb-[4rem] text-[#fff] px-[2rem] py-[0.5rem]">
        Talk to us
      </button>
    </div>
  );
};

export default page;
