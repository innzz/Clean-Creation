import React from "react";
import BatonGretna from "../components/GrabAndGo/BatonGretna";
import GrabNGoNavbar from "../components/GrabAndGo/GrabNGoNavbar";
import TopBar from "../components/GrabAndGo/TopBar";

const GrabAndGo = () => {
  return (
    <div >
      <GrabNGoNavbar />
      <TopBar />
      <BatonGretna />
    </div>
  );
};

export default GrabAndGo;
