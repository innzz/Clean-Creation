import React from "react";
import style from "../../styles/component-styles/Meal-styles/RandomMeals.module.css";

const RandomMeal = () => {
  return (
    <div className={style.container}>
      <div className={style.left}>
        <div className={style.option}>
          <div>Manually select meals</div>
          <div>Randomly select meals</div>
          <div>Clear all selection</div>
        </div>
        <div className={style.selectMeal}></div>
        <div className={style.addExtra}></div>
      </div>
      <div className={style.right}></div>
    </div>
  );
};

export default RandomMeal;
