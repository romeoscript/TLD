import React from "react";
import brandimg from "../images/brandimg.png";

const ServiceDigital = () => {
  return (
    <div className="md:flex items-center justify-between p-[3rem]  block">
      <div className="basis-[50%]">
        <img src={brandimg.src} alt="" />
      </div>
      <div className="text-black md-mt-0 mt-[1.5rem] basis-[50%]">
        <h2 className="text-4xl leading-[1.2] capitalize md:w-3/5">full service digital marketing agency</h2>
        <p className="my-[1rem] md:w-3/5 leading-[1.6]">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt
          mollitia at, quam dicta, expedita aperiam voluptas placeat facilis
          iure, officia ducimus omnis animi ut porro dignissimos fugit. Rem,
          magnam error!
        </p>
      </div>
    </div>
  );
};

export default ServiceDigital;
