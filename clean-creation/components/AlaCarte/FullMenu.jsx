import React from "react";
import styles from "../../styles/component-styles/AlaCarte/Full.module.css";
import { BsCartFill, BsTagsFill, BsPlus } from "react-icons/bs";
import { GrFormSubtract } from "react-icons/gr";
import Link from "next/link";
import { ProgressBar } from "react-bootstrap";

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
        <div className={styles.menuAndChart}>
          <div className={styles.menu}>
            {/* ////////// */}
            <div className={styles.cardWrap}>
              {/* ////// */}
              <div className={styles.menuItem}>
                <div className={styles.dishImage}>
                  <img src="./dish.jpg" alt="" />
                </div>
                <div className={styles.dishDesc}>
                  <div className={styles.labelDish}>
                    <div className={styles.tag}>
                      <BsTagsFill className={styles.tagIcon} />
                      <p>$10.95</p>
                    </div>
                    <h5>Balsamic Chicken Salad(16 oz)</h5>
                  </div>
                  <div className={styles.quantity}>
                    <div className={styles.innerQuantity}>
                      <BsPlus className={styles.plus} />
                      <p className={styles.num}>0</p>
                      <GrFormSubtract className={styles.subs} />
                    </div>
                    <div className={styles.btnAdd}>Add to cart</div>
                  </div>
                </div>
              </div>
              {/* ///////// */}
              <div className={styles.menuItem}>
                <div className={styles.dishImage}>
                  <img src="./dish.jpg" alt="" />
                </div>
                <div className={styles.dishDesc}>
                  <div className={styles.labelDish}>
                    <div className={styles.tag}>
                      <BsTagsFill className={styles.tagIcon} />
                      <p>$10.95</p>
                    </div>
                    <h5>Balsamic Chicken Salad(16 oz)</h5>
                  </div>
                  <div className={styles.quantity}>
                    <div className={styles.innerQuantity}>
                      <BsPlus className={styles.plus} />
                      <p className={styles.num}>0</p>
                      <GrFormSubtract className={styles.subs} />
                    </div>
                    <div className={styles.btnAdd}>Add to cart</div>
                  </div>
                </div>
              </div>
              {/* ///////// */}
              <div className={styles.menuItem}>
                <div className={styles.dishImage}>
                  <img src="./dish.jpg" alt="" />
                </div>
                <div className={styles.dishDesc}>
                  <div className={styles.labelDish}>
                    <div className={styles.tag}>
                      <BsTagsFill className={styles.tagIcon} />
                      <p>$10.95</p>
                    </div>
                    <h5>Balsamic Chicken Salad(16 oz)</h5>
                  </div>
                  <div className={styles.quantity}>
                    <div className={styles.innerQuantity}>
                      <BsPlus className={styles.plus} />
                      <p className={styles.num}>0</p>
                      <GrFormSubtract className={styles.subs} />
                    </div>
                    <div className={styles.btnAdd}>Add to cart</div>
                  </div>
                </div>
              </div>
              {/* ///////// */}
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
                    <div className={styles.labelDish}>
                      <div className={styles.tag}>
                        <BsTagsFill className={styles.tagIcon} />
                        <p>$10.95</p>
                      </div>
                      <h5>Balsamic Chicken Salad(16 oz)</h5>
                    </div>
                    <div className={styles.quantity}>
                      <div className={styles.innerQuantity}>
                        <BsPlus className={styles.plus} />
                        <p className={styles.num}>0</p>
                        <GrFormSubtract className={styles.subs} />
                      </div>
                      <div className={styles.btnAdd}>Add to cart</div>
                    </div>
                  </div>
                </div>

                {/* ///////// */}
                <div className={styles.menuItem}>
                  <div className={styles.dishImage}>
                    <img src="./dish.jpg" alt="" />
                  </div>
                  <div className={styles.dishDesc}>
                    <div className={styles.labelDish}>
                      <div className={styles.tag}>
                        <BsTagsFill className={styles.tagIcon} />
                        <p>$10.95</p>
                      </div>
                      <h5>Balsamic Chicken Salad(16 oz)</h5>
                    </div>
                    <div className={styles.quantity}>
                      <div className={styles.innerQuantity}>
                        <BsPlus className={styles.plus} />
                        <p className={styles.num}>0</p>
                        <GrFormSubtract className={styles.subs} />
                      </div>
                      <div className={styles.btnAdd}>Add to cart</div>
                    </div>
                  </div>
                </div>
                {/* ///////// */}
                <div className={styles.menuItem}>
                  <div className={styles.dishImage}>
                    <img src="./dish.jpg" alt="" />
                  </div>
                  <div className={styles.dishDesc}>
                    <div className={styles.labelDish}>
                      <div className={styles.tag}>
                        <BsTagsFill className={styles.tagIcon} />
                        <p>$10.95</p>
                      </div>
                      <h5>Balsamic Chicken Salad(16 oz)</h5>
                    </div>
                    <div className={styles.quantity}>
                      <div className={styles.innerQuantity}>
                        <BsPlus className={styles.plus} />
                        <p className={styles.num}>0</p>
                        <GrFormSubtract className={styles.subs} />
                      </div>
                      <div className={styles.btnAdd}>Add to cart</div>
                    </div>
                  </div>
                </div>
                {/* ///////// */}
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
