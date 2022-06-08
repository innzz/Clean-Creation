import React from "react";
import GrabNGoNavbar from "../components/GrabAndGo/GrabNGoNavbar";
import TopBar from "../components/GrabAndGo/TopBar";
import BatonRougeUpper from "../components/GrabAndGo/BatonRougeUpper";
import BatonRougeLower from "../components/GrabAndGo/BatonRougeLower";

const BatonRougeScreen = () => {
  return (
    <div>
      <GrabNGoNavbar />
      <TopBar />
      <BatonRougeUpper />
      <BatonRougeLower />
    </div>
  );
};

export default BatonRougeScreen;
