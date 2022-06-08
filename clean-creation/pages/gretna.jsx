import React from "react";
import GrabNGoNavbar from "../components/GrabAndGo/GrabNGoNavbar";
import GretnaLower from "../components/GrabAndGo/GretnaLower";
import GretnaUpper from "../components/GrabAndGo/GretnaUpper";
import TopBar from "../components/GrabAndGo/TopBar";

const GretnaScreen = () => {
  return (
    <div>
      <GrabNGoNavbar />
      <TopBar />
      <GretnaUpper />
      <GretnaLower />
    </div>
  );
};

export default GretnaScreen;
