import React from "react";
import AboutHero from "../components/AboutHero";
import Presence from "../components/Presence";
import Statement from "../components/Statement";
import Team from "../components/Team";

const page = () => {
  return (
    <div>
      <AboutHero />
      <Statement />
      <Team />

      <Presence />
    </div>
  );
};

export default page;
