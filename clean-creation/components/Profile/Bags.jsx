import React from "react";
import styles from "../../styles/component-styles/Profile/Bag.module.css";

const Bags = () => {
  return (
    <div className={styles.bigContainer}>
      <div className={styles.container}>
        <div className={styles.bagcard}>
          <h3>Bags</h3>
          <div className={styles.bagBorder}></div>
        </div>
      </div>
    </div>
  );
};

export default Bags;
