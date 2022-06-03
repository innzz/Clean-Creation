import React from "react";
import styles from "../../styles/component-styles/Meal-styles/Random.module.css";
import {
  FaObjectGroup,
  FaRandom,
  FaEraser,
  FaPlusCircle,
} from "react-icons/fa";
import { ProgressBar } from "react-bootstrap";

const RandomMeal = () => {
  return (
    <div className={styles.bigContainer}>
      <div className={styles.container}>
        <div className={styles.innerContainer}>
          <div className={styles.left}>
            <div className={styles.option}>
              <div
                className={styles.firstButton}
                style={{ backgroundColor: "#8ed444", color: "white" }}
              >
                <div>
                  <FaObjectGroup className={styles.icon} style={{}} />
                </div>
                <h2>Manually select meals</h2>
              </div>
              <div
                className={styles.firstButton}
                style={{ backgroundColor: "#243843", color: "white" }}
              >
                <FaRandom className={styles.icon} />
                <h2>Randomly select meals</h2>
              </div>
              <div
                className={styles.firstButton}
                style={{ border: "1px solid #243843" }}
              >
                <FaEraser className={styles.icon} />
                <h2>Clear all selection</h2>
              </div>
            </div>
            <div className={styles.selectMeal}>
              <div className={styles.secondButton}>
                <FaPlusCircle className={styles.icon} />
                <h3>
                  Select Everything <br /> Breakfast
                </h3>
              </div>
              <div className={styles.secondButton}>
                <FaPlusCircle className={styles.icon} />
                <h3>
                  Select Everything <br />
                  Breakfast
                </h3>
              </div>
              <div className={styles.secondButton}>
                <FaPlusCircle className={styles.icon} />
                <h3>
                  Select Everything <br />
                  Breakfast
                </h3>
              </div>
            </div>
            <div className={styles.addExtra}>
              <div className={styles.inner}>
                <FaPlusCircle className={styles.icon} />
                <h3>Add Extra Meal</h3>
              </div>
            </div>
          </div>
          {/* ////////////////////////////////////////////////////////////////////////////////////
      ///////////////////////////////Right
      Container///////////////////////////////////// */}
          <div className={styles.right}>
            <div className={styles.dietHolder}>
              <div className={styles.dietName}>
                <h3>Calories</h3>
                <p>
                  <span>0 cal</span> (0)
                </p>
              </div>
              <div>
                <ProgressBar className={styles.dietBar} />
              </div>
            </div>

            {/* //////////////////////////////////////////////// */}

            <div className={styles.dietHolder}>
              <div className={styles.dietName}>
                <h3>Total Fat</h3>
                <p>
                  <span>0.00 gr</span>(0)
                </p>
              </div>
              <div>
                <ProgressBar className={styles.dietBar} />
              </div>
              <div className={styles.innerDietHolder}>
                <div className={styles.innerDiet}>
                  <h4>Saturated Fat</h4>
                  <p>0 cal (0)</p>
                </div>
                <div>
                  <ProgressBar className={styles.dietBar} />
                </div>
              </div>
            </div>

            {/* //////////////////////////////////////////////// */}

            <div className={styles.dietHolder}>
              <div className={styles.dietName}>
                <h3>Cholesterol</h3>
                <p>
                  <span>0.00 mg</span> (0)
                </p>
              </div>
              <div>
                <ProgressBar className={styles.dietBar} />
              </div>
            </div>

            {/* //////////////////////////////////////////////// */}

            <div className={styles.dietHolder}>
              <div className={styles.dietName}>
                <h3>Sodium</h3>
                <p>
                  <span>0.00 mg</span> (0)
                </p>
              </div>
              <div>
                <ProgressBar className={styles.dietBar} />
              </div>
            </div>

            {/* //////////////////////////////////////////////// */}

            <div className={styles.dietHolder}>
              <div className={styles.dietName}>
                <h3>Total Carbohydrates</h3>
                <p>
                  <span>0.00 gr</span>(0)
                </p>
              </div>
              <div>
                <ProgressBar className={styles.dietBar} />
              </div>
              <div className={styles.innerDietHolder}>
                <div className={styles.innerDiet}>
                  <h4>Dietary Fiber</h4>
                  <p>0.00 gr (0)</p>
                </div>
                <div>
                  <ProgressBar className={styles.dietBar} />
                </div>
              </div>
              {/* /// */}
              <div className={styles.innerDietHolder}>
                <div className={styles.innerDiet}>
                  <h4>Total Sugars</h4>
                  <p>0.00 gr (0)</p>
                </div>
                <div>
                  <ProgressBar className={styles.dietBar} />
                </div>
              </div>
              {/* // */}
              <div className={styles.innerDietHolder}>
                <div className={styles.innerDiet}>
                  <h4>Included sugars</h4>
                  <p>0.00 gr (0)</p>
                </div>
                <div>
                  <ProgressBar className={styles.dietBar} />
                </div>
              </div>
            </div>

            {/* ///////////////////////////////// */}

            <div className={styles.dietHolder}>
              <div className={styles.dietName}>
                <h3>Protein</h3>
                <p>
                  <span>0.00 gr</span> (0)
                </p>
              </div>
              <div>
                <ProgressBar className={styles.dietBar} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RandomMeal;
