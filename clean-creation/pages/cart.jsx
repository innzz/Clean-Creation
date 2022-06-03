import React from "react";
import styles from "../styles/component-styles/Cart-styles/CartScreen.module.css";

const CartScreen = () => {
  return (
    <div className={styles.container}>
      <div className={styles.cartConfirm}>
        <h2>Confirm Your Cart</h2>
        <div className={styles.cartDetails}>
          <div className={styles.cartDate}>
            <h4>Wednesday, Jun 08, 2022</h4>
          </div>
          <div className={styles.cardSubscription}>
            <div>
              <h5>Weekly Subscription</h5>
              <a href="#">Edit</a>
            </div>
            <h6>$65.00</h6>
          </div>
          {/* ///////////////////// */}
          <div className={styles.cartOrderDetails}>
            <div className={styles.cartPreferences}>
              <div>
                <h4>Renewal preferences</h4>
                <p>Automatic Renewal</p>
              </div>
            </div>
            <div className={styles.billing}>
              <div>
                <h4>Renewal preferences</h4>
                <p>Automatic Renewal</p>
              </div>
            </div>
            <div className={styles.delivery}>
              <h4>Deliveries scheduled for</h4>
              <div>
                <p>Date</p>
                <p>Date</p>
              </div>
            </div>
          </div>

          {/* ///////////////////// */}

          <div className={styles.cartButton}>
            <button>Proceed to Checkout</button>
          </div>
        </div>
        {/* /////////////////////// */}
        <div className={styles.additional}>
          <h1>Additional Products</h1>
          <div>
            <img src="" alt="" />
            <p>Elderberry Syrup (160z)</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartScreen;
