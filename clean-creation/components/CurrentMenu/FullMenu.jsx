import React from "react";
import styles from "../../styles/component-styles/CurrentMenu-styles/Menu.module.css";
import { BsCartFill } from "react-icons/bs";
import Link from "next/link";
import Image from "next/image";

const FullMenu = () => {
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
        <div className={styles.menu}>
          {/* ////////// */}
          <div className={styles.entreeMenu}>
            <h3 id="entree">Entree</h3>

            <div className={styles.cardWrap}>
              {/* ////// */}
              <div className={styles.menuItem}>
                <div className={styles.dishImage}>
                  <img src="./dish.jpg" alt="" />
                </div>
                <div className={styles.dishDesc}>
                  <h5>Balsamic Chicken Salad(16 oz)</h5>
                  <h6>gluten free, dairy free, nut free</h6>
                  <div className={styles.calories}>
                    <h2>
                      <span style={{ fontWeight: "bold" }}>960</span> Calories
                    </h2>
                    <div className={styles.iconBox}>
                      <BsCartFill className={styles.icon} />
                    </div>
                  </div>
                </div>
              </div>

              {/* ///////// */}

              <div className={styles.menuItem}>
                <div className={styles.dishImage}>
                  <img src="./dish.jpg" alt="" />
                </div>
                <div className={styles.dishDesc}>
                  <h5>Balsamic Chicken Salad(16 oz)</h5>
                  <h6>gluten free, dairy free, nut free</h6>
                  <div className={styles.calories}>
                    <h2>
                      <span style={{ fontWeight: "bold" }}>960</span> Calories
                    </h2>
                    <div className={styles.iconBox}>
                      <BsCartFill className={styles.icon} />
                    </div>
                  </div>
                </div>
              </div>

              {/* ////// */}

              <div className={styles.menuItem}>
                <div className={styles.dishImage}>
                  <img src="./dish.jpg" alt="" />
                </div>
                <div className={styles.dishDesc}>
                  <h5>Balsamic Chicken Salad(16 oz)</h5>
                  <h6>gluten free, dairy free, nut free</h6>
                  <div className={styles.calories}>
                    <h2>
                      <span style={{ fontWeight: "bold" }}>960</span> Calories
                    </h2>
                    <div className={styles.iconBox}>
                      <BsCartFill className={styles.icon} />
                    </div>
                  </div>
                </div>
              </div>
              {/* ////// */}

              <div className={styles.menuItem}>
                <div className={styles.dishImage}>
                  <img src="./dish.jpg" alt="" />
                </div>
                <div className={styles.dishDesc}>
                  <h5>Balsamic Chicken Salad(16 oz)</h5>
                  <h6>gluten free, dairy free, nut free</h6>
                  <div className={styles.calories}>
                    <h2>
                      <span style={{ fontWeight: "bold" }}>960</span> Calories
                    </h2>
                    <div className={styles.iconBox}>
                      <BsCartFill className={styles.icon} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* /////// */}

          <div className={styles.breakfastMenu}>
            <h3 id="breakfast">Breakfast</h3>

            <div className={styles.cardWrap}>
              {/* ////// */}
              <div className={styles.menuItem}>
                <div className={styles.dishImage}>
                  <img src="./dish.jpg" alt="" />
                </div>
                <div className={styles.dishDesc}>
                  <h5>Balsamic Chicken Salad(16 oz)</h5>
                  <h6>gluten free, dairy free, nut free</h6>
                  <div className={styles.calories}>
                    <h2>
                      <span style={{ fontWeight: "bold" }}>960</span> Calories
                    </h2>
                    <div className={styles.iconBox}>
                      <BsCartFill className={styles.icon} />
                    </div>
                  </div>
                </div>
              </div>

              {/* ///////// */}

              <div className={styles.menuItem}>
                <div className={styles.dishImage}>
                  <img src="./dish.jpg" alt="" />
                </div>
                <div className={styles.dishDesc}>
                  <h5>Balsamic Chicken Salad(16 oz)</h5>
                  <h6>gluten free, dairy free, nut free</h6>
                  <div className={styles.calories}>
                    <h2>
                      <span style={{ fontWeight: "bold" }}>960</span> Calories
                    </h2>
                    <div className={styles.iconBox}>
                      <BsCartFill className={styles.icon} />
                    </div>
                  </div>
                </div>
              </div>

              {/* ////// */}

              <div className={styles.menuItem}>
                <div className={styles.dishImage}>
                  <img src="./dish.jpg" alt="" />
                </div>
                <div className={styles.dishDesc}>
                  <h5>Balsamic Chicken Salad(16 oz)</h5>
                  <h6>gluten free, dairy free, nut free</h6>
                  <div className={styles.calories}>
                    <h2>
                      <span style={{ fontWeight: "bold" }}>960</span> Calories
                    </h2>
                    <div className={styles.iconBox}>
                      <BsCartFill className={styles.icon} />
                    </div>
                  </div>
                </div>
              </div>
              {/* ////// */}

              <div className={styles.menuItem}>
                <div className={styles.dishImage}>
                  <img src="./dish.jpg" alt="" />
                </div>
                <div className={styles.dishDesc}>
                  <h5>Balsamic Chicken Salad(16 oz)</h5>
                  <h6>gluten free, dairy free, nut free</h6>
                  <div className={styles.calories}>
                    <h2>
                      <span style={{ fontWeight: "bold" }}>960</span> Calories
                    </h2>
                    <div className={styles.iconBox}>
                      <BsCartFill className={styles.icon} />
                    </div>
                  </div>
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
