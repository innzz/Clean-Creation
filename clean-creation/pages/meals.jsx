import React from "react";
<<<<<<< HEAD
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
=======
import RandomMeal from "../components/Meals/RandomMeal";

const Meal = () => {
  return (
    <>
      <RandomMeal />
    </>
  );
>>>>>>> 481aab71544c53ae607acb8a6b8f928136027de2
};

export default Meal;
