import React from "react";
import BatonGretna from "../components/GrabAndGo/BatonGretna";
import GrabNGoNavbar from "../components/GrabAndGo/GrabNGoNavbar";
import GrabAndGoFooter from "../components/GrabAndGo/GrabAndGoFooter";
import TopBar from "../components/GrabAndGo/TopBar";

const GrabAndGo = () => {
  return (
    <div >
      <GrabNGoNavbar />
      <TopBar />
      <BatonGretna />
      <GrabAndGoFooter />
    </div>
  );
};

export default GrabAndGo;
