import React from "react";
import { teamInfo } from "../constants/index";

const Team = () => {
  return (
    <div className="bg-[#F16232]">
      <h2 className="text-center p-[3rem]  font-bold text-5xl text-white my-[2rem]">
        meet our leadership team
      </h2>

      <div className="grid grid-cols-3  place-items-center p-[2rem] gap-4">
        {teamInfo.map((team) => {
          return (
            <div>
              <img src={team.img.src} alt="" className="w-[350px] h-[364px] object-cover" />
              <h2 className="font-bold text-2xl">
                {team.name}
              </h2>
              <p>{team.position}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Team;
