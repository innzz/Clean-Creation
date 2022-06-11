import React from "react";
import { Col,  Row } from "react-bootstrap";
import ContinueToCart from "../components/Meals/ContinueToCart";
import SideBar from "../components/SideBar";
import RandomMeal from "../components/Meals/RandomMeal";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import SelectNextDeliveries from "../components/Meals/SelectNextDeliveries";

const Meal = () => {
  return (<div>
    <NavBar />
    <div className="lg:flex gap-4">
      <div className="lg:w-60">
        <SideBar />
      </div>
      <div>
        <SelectNextDeliveries />
        <RandomMeal />
        <ContinueToCart />
      </div>
    </div>
    <Footer />
    </div>
  );
};

export default Meal;
