import React from "react";
import { Col, Row } from "react-bootstrap";
import ContinueToCart from "../components/Meals/ContinueToCart";
import SideBar from "../components/SideBar";
import RandomMeal from "../components/Meals/RandomMeal";

const Meal = () => {
  return (
    <div class="flex gap-4 ">
      <div className="w-60">
        <SideBar />
      </div>
      <div>
        <RandomMeal />
        <ContinueToCart />
      </div>
    </div>
  );
};

export default Meal;
