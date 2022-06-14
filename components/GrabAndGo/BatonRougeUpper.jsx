import React from "react";
import styles from "../../styles/component-styles/GrabAndGo/BatonUpper.module.css";

const BatonRougeUpper = () => {
  return (
    <div className={styles.bigContainer}>
      <div className={styles.container}>
        <div className={styles.contactNumber}>
          <h6>
            (Call ahead for curbside pickup <span>(225) 615-714</span>)
          </h6>
        </div>
        <div className={styles.Images}>
          <div className={styles.ImageOne}>
            <img src="/Baton.jpg" alt="" />
          </div>
          <div className={styles.ImageTwo}>
            <img src="/map.jpg" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BatonRougeUpper;
