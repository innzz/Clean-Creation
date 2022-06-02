import React from "react";
import { Col, Row } from "react-bootstrap";
import ContinueToCart from "../components/Meals/ContinueToCart";
import SideBar from "../components/SideBar";

const Meal = () => {
  return <div class="flex gap-4 ">
    <div>
      <SideBar />
    </div>
    <div className="">
      <ContinueToCart />
    </div>
  </div>;
};

export default Meal;
