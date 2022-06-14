import React from "react";
import Faq from "../components/Faq/Faq";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";

const faq = () => {
  return (
    <div>
      <NavBar />
      <div className="container">
      <Faq />
      </div>
      <Footer />
    </div>
  );
};

export default faq;
