import React from "react";
import styles from "../../styles/component-styles/Home-styles/Plan.module.css";
import Link from "next/link";

const PlanForEveryone = () => {
  return (
    <div className={styles.container}>
      <div className={styles.heading}>
        <h1>Plans for Everyone</h1>
        <h2>
          Consistency in your diet starts with a plan. Choose from 2,3, or 4
          meals per day for 5,6, or 7 days. <br /> Plans are subscription based
          but can be changed at any time to meet your needs.
        </h2>
      </div>
      <div className={styles.cards}>
        <div className={styles.card}>
          <div className={styles.cardHeading}>
            <h2>The Lifestyle Plan</h2>
            <h3>as low as</h3>
            <h4>$9.76 per meal</h4>
            <Link href="/subscription">
              <button>CHOOSE</button>
            </Link>
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.cardHeading}>
            <h2>The Lifestyle Plan</h2>
            <h3>as low as</h3>
            <h4>$9.76 per meal</h4>
            <button>CHOOSE</button>
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.cardHeading}>
            <h2>The Lifestyle Plan</h2>
            <h3>as low as</h3>
            <h4>$9.76 per meal</h4>
            <button>CHOOSE</button>
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.cardHeading}>
            <h2>The Lifestyle Plan</h2>
            <h3>as low as</h3>
            <h4>$9.76 per meal</h4>
            <button>CHOOSE</button>
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.cardHeading}>
            <h2>The Lifestyle Plan</h2>
            <h3>as low as</h3>
            <h4>$9.76 per meal</h4>
            <button>CHOOSE</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlanForEveryone;
