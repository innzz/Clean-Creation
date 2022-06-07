import React from "react";
import styles from "../../styles/component-styles/CurrentMenu-styles/Current.module.css";

const DateDay = () => {
  return (
    <div className={styles.container}>
      <div className={styles.heading}>
        <h1>Our Menu for Jun 08, 2022</h1>
      </div>
      <div className={styles.day}>
        <h4>June 2022</h4>
        <div className={styles.date}>
          <h5>WED</h5>
          <h6>08</h6>
        </div>
      </div>
    </div>
  );
};

export default DateDay;
