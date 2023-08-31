import Presence from "@/app/components/Presence";
import React from "react";
import pent from "../../images/ORANGE DESIGN 2 1.png";
import pent1 from "../../images/image 1.png";

const page = () => {
  return (
    <div className="mt-[100px] p-[6rem] text-black">
      <h2 className="uppercase text-[#F16232]">converting </h2>
      <h1 className="text-4xl my-[1rem] font-800 leading-[1.2] w-2/5 capitalize">Unlocking Digital Asset Trading: Fast, Simple, Secure</h1>

      <div className="flex items-center justify-between my-[3rem]">
        <aside className="basis-[45%]">
          <h2 className="font-bold uppercase mb-4">overview</h2>
          <p>
            Convertng is a leading network service provider catering to both
            individual and corporate clients. With a strong focus on delivering
            reliable connectivity solutions, Convertng has established itself as
            a go-to provider in the competitive market.
          </p>
        </aside>
        <aside className="p-[2rem]">
          <h2 className="font-bold uppercase mb-4">services</h2>
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

      <div className="relative w-[90%]  h-[500px] my-[6rem] m-auto">
      <img src={pent.src} alt="" className="absolute left-0 object-cover right-0 h-full w-full rounded-lg" />
      </div>

      <div className="flex items-center justify-between gap-[4%]">
        <aside className="basis-[49%]">
          <h2 className="capitalize font-bold mb-[3rem]">our approach</h2>
          <p className="mb-[2rem]">
            Website Objectives: Convertng aimed to revamp their website to
            effectively communicate their services, showcase their technological
            expertise, and establish a strong online presence.
          </p>
          <h2 className="font-semibold capitalize">the primary goals where to :</h2>
          <ol className="list-decimal p-[2rem]">
            <li>
              The primary goals were to: Showcase Services: Highlight the
              diverse range of networking services they provide, catering to
              residential users, mobile consumers, and businesses of all sizes.
            </li>
            <li>
              {" "}
              Highlight Expertise: Showcase their technical prowess and ability
              to stay at the forefront of networking technology.{" "}
            </li>
            <li>
              Build Trust: Use client testimonials and case studies to establish
              credibility and build trust among potential clients.{" "}
            </li>
            <li>
              Drive Inquiries: Encourage website visitors to inquire about their
              services through clear calls-to-action and user-friendly contact
              options.
            </li>
          </ol>
        </aside>
        <aside className="basis-[49%] rounded-md">
          <img src={pent1.src} alt="" />
        </aside>
      </div>
    </div>
  );
};

export default page;
