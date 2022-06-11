import React from "react";
import TopBar from "../components/AlaCarte/TopBar";
import DateTime from "../components/AlaCarte/DateTime";
import FullMenu from "../components/AlaCarte/FullMenu";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer"

const Alacarte = () => {
  return (
    <div>
      <NavBar />
      <TopBar />
      <DateTime />
      <FullMenu /> 
      <Footer />
    </div>
  );
};

export default Alacarte;
