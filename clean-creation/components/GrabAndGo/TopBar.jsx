import React from "react";
import styles from "../../styles/component-styles/GrabAndGo/Top.module.css";

const TopBar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.first}>
        <h2>Try our grab and go location.</h2>
      </div>
      <div className={styles.second}>
        <h4>Hours Of Operation</h4>
        <h5>Monday-Friday 7-7 Saturday 8-4 Sunday 8-4</h5>
      </div>
    </div>
  );
};

export default TopBar;
