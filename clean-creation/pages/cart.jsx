import React from "react";
import styles from "../styles/component-styles/Cart-styles/CartScreen.module.css";
import { FaRegClock } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";
import { BiRightArrowAlt } from "react-icons/bi";
import Image from "next/image";

const CartScreen = () => {
  return (
    <div className={styles.bigContainer}>
      <div className={styles.container}>
        <div className={styles.cartConfirm}>
          <h2>Confirm Your Cart</h2>
          <div className={styles.cartDetails}>
            <div className={styles.cartDate}>
              <FaRegClock className={styles.clockIcon} />
              <h4>Wednesday, Jun 08, 2022</h4>
            </div>
            <div className={styles.cartSubscription}>
              <div className={styles.bin}>
                <div className={styles.deletion}>
                  <RiDeleteBin6Line className={styles.binIcon} />
                  <h5>Weekly Subscription</h5>
                </div>
                <div className={styles.edit}>
                  <a href="#">Edit</a>
                </div>
              </div>

              <div>
                <h6 style={{ fontWeight: "bold" }}>$65.00</h6>
              </div>
            </div>
            {/* ///////////////////// */}
            <div className={styles.cartOrderDetails}>
              <div className={styles.cartPreferences}>
                <div className={styles.desc}>
                  <h4>Renewal preferences</h4>
                  <p>Automatic Renewal</p>
                </div>
                {/* /////// */}
                <div className={styles.desc}>
                  <h4>Plan</h4>
                  <p>The Everything Plan</p>
                </div>
                {/* /////// */}
                <div className={styles.desc}>
                  <h4>Billing Plan</h4>
                  <p>1 Week Plan with Breakfast</p>
                </div>
                {/* ////// */}
                <div className={styles.desc}>
                  <h4>Portion Size</h4>
                  <p>Regular</p>
                </div>
                {/* ///// */}
              </div>

              {/* ////////////////// */}
              <div className={styles.billing}>
                <div className={styles.desc}>
                  <h4>Billing Renewal Cycle</h4>
                  <p>1 Week</p>
                </div>
                {/* /////// */}
                <div className={styles.descOne}>
                  <h4>Days per Week</h4>
                  <p>5 Days per Week</p>
                </div>
                {/* ////// */}
                <div className={styles.descTwo}>
                  <h4>Meals per Day</h4>
                  <p>1 Meal</p>
                </div>
                {/* /////// */}
                <div className={styles.descThree}>
                  <h4>Starting Date</h4>
                  <p>2022-06-08</p>
                </div>
                {/* ///// */}
              </div>
              <div className={styles.delivery}>
                <h4>Deliveries scheduled for</h4>
                <div className={styles.dateSection}>
                  <a href="#">Wed,Jun 08,2022</a>
                  <BiRightArrowAlt className={styles.arrowRight} />
                  <a href="#">Sun,Jun 12,2022</a>
                </div>
              </div>
            </div>
            <hr />

            {/* ///////////////////// */}

            <div className={styles.proceedTo}>
              <button className={styles.cartButton}>Proceed to Checkout</button>
            </div>
          </div>
          {/* /////////////////////// */}
          <div className={styles.additional}>
            <div className={styles.heading}>
              <h1>Additional Products</h1>
            </div>
            <div className={styles.addPro}>
              <div className={styles.imgContainer}>
                <Image
                  className={styles.syrupImg}
                  src="./syrup.jpg"
                  alt="syrup"
                />
                <p>Elderberry Syrup (160z)</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartScreen;
