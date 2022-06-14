import React from "react";
import styles from "../../styles/component-styles/GiftCard/GiftMenu.module.css";
import { BsBasket2Fill } from "react-icons/bs";

const GiftMenu = () => {
  return (
    <div className={styles.bigContainer}>
      <div className={styles.container}>
        <div className={styles.innerContainer}>
          <div className={styles.giftPrice}>
            <div className={styles.priceDetail}>
              <h5>$50.00</h5>
            </div>
            {/* //// */}
            <div className={styles.priceDetail}>
              <h5>$100.00</h5>
            </div>
            {/* ///// */}
            <div className={styles.priceDetail}>
              <h5>$150.00</h5>
            </div>
            {/* ////// */}
            <div className={styles.priceDetail}>
              <h5>$200.00</h5>
            </div>
            {/* ///// */}
            <div className={styles.priceDetail}>
              <h5>$300.00</h5>
            </div>
            {/* ///// */}
            <div className={styles.priceDetail}>
              <h5>$400.00</h5>
            </div>
            {/* //// */}
            <div className={styles.priceDetail}>
              <h5>$500.00</h5>
            </div>
          </div>
          <div className={styles.giftDetail}>
            <div className={styles.left}>
              <div className={styles.searchInput}>
                <h6>Recipients Name</h6>
                <input type="text" placeholder="" />
              </div>
              <div className={styles.searchInput}>
                <h6>Recipients Email</h6>
                <input type="email" placeholder="" />
              </div>
            </div>
            <div className={styles.right}>
              <div className={styles.searchInput}>
                <h6>Recipients Phone</h6>
                <input type="number" placeholder="" />
              </div>
            </div>
          </div>
          <div className={styles.addTocart}>
            <button className={styles.cartButton}>
              <i>
                <BsBasket2Fill className={styles.cartIcon} />
              </i>
              <h5>Add to cart</h5>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GiftMenu;
