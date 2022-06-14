import React from "react";
import styles from "../../styles/component-styles/Profile/Checkout.module.css";
import { BsQuestionCircleFill } from "react-icons/bs";
import {
  FaSortAmountDownAlt,
  FaSortAmountDown,
  FaSortAmountUpAlt,
  FaSortAmountUp,
} from "react-icons/fa";

const Checkout = () => {
  return (
    <div className={styles.bigContainer}>
      <div className={styles.container}>
        <div className={styles.checkoutCard}>
          <div className={styles.heading}>
            <h2>Checkouts</h2>
            <div className={styles.iconSec}>
              <BsQuestionCircleFill className={styles.iconHead} />
              <h3>How to Re Order from Previous Checkout</h3>
            </div>
          </div>
          <div className={styles.headingBorder}></div>
          <div className={styles.second}>
            <div className={styles.entry}>
              <p>Show</p>
              <input type="text" name="" id="" placeholder="" />
              <p>entries</p>
            </div>
            <div className={styles.search}>
              <p>Search:</p>
              <input type="text" placeholder="" />
            </div>
          </div>
          <div className={styles.third}>
            <div className={styles.thirdDetail}>
              <h5>Order</h5>
              <FaSortAmountDown className={styles.sortIcon} />
            </div>
            <div className={styles.thirdDetail}>
              <h5>Order</h5>
              <FaSortAmountDown className={styles.sortIcon} />
            </div>
            <div className={styles.thirdDetail}>
              <h5>Order</h5>
              <FaSortAmountDown className={styles.sortIcon} />
            </div>
            <div className={styles.thirdDetail}>
              <h5>Order</h5>
              <FaSortAmountDown className={styles.sortIcon} />
            </div>
          </div>
          <div className={styles.thirdBorder}></div>
          <div className={styles.dataAvailable}>
            <h6>No data available in table</h6>
          </div>
          <div className={styles.dataBorder}></div>
          <div className={styles.fifth}>
            <div className={styles.page}>
              <p>Showing 0 to 0 of 0 entries</p>
            </div>
            <div className={styles.fifthButton}>
              <div className={styles.prevBtn}>Previous</div>
              <div className={styles.nextBtn}>Next</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
