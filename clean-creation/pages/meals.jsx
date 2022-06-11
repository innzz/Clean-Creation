import React from "react";
import { Col, Row } from "react-bootstrap";
import ContinueToCart from "../components/Meals/ContinueToCart";
import SideBar from "../components/SideBar";
import RandomMeal from "../components/Meals/RandomMeal";
import SelectNextDeliveries from "../components/Meals/SelectNextDeliveries";

const Meal = () => {
  return (
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
  );
};

export default Meal;
