import React from "react";
import styles from "../../styles/component-styles/AlaCarte/Full.module.css";
import { BsCartFill, BsTagsFill, BsPlus } from "react-icons/bs";
import { GrFormSubtract } from "react-icons/gr";
import Link from "next/link";
import { ProgressBar } from "react-bootstrap";
import Image from "next/image";

const FullMenu = () => {
  const menuDetailOne = [
    {
      image: "./dish.jpg",
      priceTag: "$10.95",
      heading: "Balsamic Chicken Salad(16 oz)",
      qty: "0",
    },
    {
      image:
        "https://cleancreations.com/data/meals/254.jpg?md=7abe2d53eb88ee393e14d72956b70c2f",
      priceTag: "$9.00",
      heading: "Barb's Boobie Milk Lactation Cookies (1/2 Dozen)",
      qty: "0",
    },
    {
      image:
        "https://cleancreations.com/data/meals/351.jpg?md=9cf68854baff02b930806d916e0b47ee",
      priceTag: "$12.00 - $49.80",
      heading: "Chicken Salad over Mixed Greens (Low Carb)",
      qty: "0",
    },
    {
      image:
        "https://cleancreations.com/data/meals/100.jpg?md=041cb2922511a3ff7e759bf96853068a",
      priceTag: "$11.60 - 48.61",
      heading: "Chicken Salad Wrap",
      qty: "0",
    },
  ];

  const menuDetailTwo = [
    {
      image:
        "https://cleancreations.com/data/meals/285.jpg?md=847cede9fcdd02dab6872cc5059eaa7f",
      priceTag: "$10.50 - $43.58",
      heading: "Carrot Cake Overnight Oats",
      qty: "0",
    },
    {
      image:
        "https://cleancreations.com/data/meals/342.jpg?md=62babb1f9ffe074a035e3963685f1af5",
      priceTag: "$11.50 - $47.53",
      heading: "Broccoli and Red Pepper Vegan Egg Bites",
      qty: "0",
    },
    {
      image:
        "https://cleancreations.com/data/meals/292.jpg?md=711a32cbf0d6a6cc717278fbb0f5cbab",
      priceTag: "$11.75 - $44.61",
      heading: "French Toast (Vegan)",
      qty: "0",
    },
    {
      image:
        "https://cleancreations.com/data/meals/50.jpg?md=bb66aa99be815d0998ea8ee5d9ef4918",
      priceTag: "$10.00 - $51.50",
      heading: "Breakfast Burrito Bowl with Chipotle Dip (Low Carb)",
      qty: "0",
    },
  ];

  return (
    <div className={styles.bigContainer}>
      <div className={styles.container}>
        <div className={styles.nav}>
          <div className={styles.childNav}>
            <h3>
              <a href="#entree">Entree</a>
            </h3>
            <h4>
              <a href="#breakfast">Breakfast</a>
            </h4>
          </div>
        </div>
        <div className={styles.menuAndChart}>
          <div className={styles.menu}>
            {/* ////////// */}
            <div className={styles.cardWrap}>
              {/* ////// */}
              {menuDetailOne.map((val, i) => (
                <div className={styles.menuItem} key={i}>
                  <div className={styles.dishImage}>
                    <img src={val.image} alt="" />
                  </div>
                  <div className={styles.dishDesc}>
                    <div className={styles.labelDish}>
                      <div className={styles.tag}>
                        <BsTagsFill className={styles.tagIcon} />
                        <p>{val.priceTag}</p>
                      </div>
                      <h5>{val.heading}</h5>
                    </div>
                    <div className={styles.quantity}>
                      <div className={styles.innerQuantity}>
                        <BsPlus className={styles.plus} />
                        <p className={styles.num}>{val.qty}</p>
                        <GrFormSubtract className={styles.subs} />
                      </div>
                      <div className={styles.btnAdd}>Add to cart</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* /////// */}

            <div className={styles.breakfastMenu}>
              <h3 id="breakfast">Breakfast</h3>

              <div className={styles.cardWrap}>
                {/* ////// */}
                {menuDetailTwo.map((val, i) => (
                  <div className={styles.menuItem} key={i}>
                    <div className={styles.dishImage}>
                      <img src={val.image} alt="" />
                    </div>
                    <div className={styles.dishDesc}>
                      <div className={styles.labelDish}>
                        <div className={styles.tag}>
                          <BsTagsFill className={styles.tagIcon} />
                          <p>{val.priceTag}</p>
                        </div>
                        <h5>{val.heading}</h5>
                      </div>
                      <div className={styles.quantity}>
                        <div className={styles.innerQuantity}>
                          <BsPlus className={styles.plus} />
                          <p className={styles.num}>{val.qty}</p>
                          <GrFormSubtract className={styles.subs} />
                        </div>
                        <div className={styles.btnAdd}>Add to cart</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* /////////////////////// */}
          <div className={styles.dietContChart}>
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
    </div>
  );
};

export default FullMenu;
