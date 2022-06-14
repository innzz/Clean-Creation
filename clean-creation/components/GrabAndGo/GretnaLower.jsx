import styles from "../../styles/component-styles/GrabAndGo/BatonLower.module.css";
import React from "react";

const GretnaLower = () => {
  return (
    <div className={styles.bigContainer}>
      <div className={styles.container}>
        <div className={styles.mainHead}>
          <h2>Whats in our coolers</h2>
        </div>
        <div className={styles.secondaryHead}>
          <h3>Lifestyle Breakfast</h3>
          <div className={styles.menuDesc}>
            <h4>Migas</h4>
            <h5>$9.50</h5>
          </div>
          <div className={styles.menuDesc}>
            <h4>Migas</h4>
            <h5>$9.50</h5>
          </div>
          <div className={styles.menuDesc}>
            <h4>Migas</h4>
            <h5>$9.50</h5>
          </div>
          <div className={styles.menuDesc}>
            <h4>Migas</h4>
            <h5>$9.50</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GretnaLower;
