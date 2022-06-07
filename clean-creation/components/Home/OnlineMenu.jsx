import React from "react";
import styles from "../../styles/component-styles/Home-styles/OnlineMenu.module.css";
import Image from "next/image";
import Link from "next/link";

function OnlineMenu() {
  return (
    <div className={styles.container}>
      <div className={styles.innerContainer}>
        <div className={styles.heading}>
          <h1>Online Menu</h1>
          <h2>
            Not interested in a plan? Shop our online menu and pick as many or
            few meals as you need.
          </h2>
        </div>
        <div className={styles.cardsSection}>
          <div className={styles.cards}>
            <div className={styles.card}>
              <div className={styles.leftImage}>
              </div>
              <div className={styles.rightContent}>
                <div className={styles.cardDescription}>
                  <p className={styles.menuTitle}>
                    Balsamic Chicken Salad (16 oz)
                  </p>
                  <p className={styles.menuDescription}>
                    gluten free, dairy free, nut free
                  </p>
                </div>
                <div className={styles.calories}>
                  <p>
                    <b>960</b> Calories
                  </p>
                </div>
              </div>
            </div>
            <div className={styles.card}>
              <div className={styles.leftImage}>
              </div>
              <div className={styles.rightContent}>
                <div className={styles.cardDescription}>
                  <p className={styles.menuTitle}>
                    Balsamic Chicken Salad (16 oz)
                  </p>
                  <p className={styles.menuDescription}>
                    gluten free, dairy free, nut free
                  </p>
                </div>
                <div className={styles.calories}>
                  <p>
                    <b>960</b> Calories
                  </p>
                </div>
              </div>
            </div>
            <div className={styles.card}>
              <div className={styles.leftImage}>
              </div>
              <div className={styles.rightContent}>
                <div className={styles.cardDescription}>
                  <p className={styles.menuTitle}>
                    Balsamic Chicken Salad (16 oz)
                  </p>
                  <p className={styles.menuDescription}>
                    gluten free, dairy free, nut free
                  </p>
                </div>
                <div className={styles.calories}>
                  <p>
                    <b>960</b> Calories
                  </p>
                </div>
              </div>
            </div>
            <div className={styles.card}>
              <div className={styles.leftImage}>
              </div>
              <div className={styles.rightContent}>
                <div className={styles.cardDescription}>
                  <p className={styles.menuTitle}>
                    Balsamic Chicken Salad (16 oz)
                  </p>
                  <p className={styles.menuDescription}>
                    gluten free, dairy free, nut free
                  </p>
                </div>
                <div className={styles.calories}>
                  <p>
                    <b>960</b> Calories
                  </p>
                </div>
              </div>
            </div>
            <div className={styles.card}>
              <div className={styles.leftImage}>
              </div>
              <div className={styles.rightContent}>
                <div className={styles.cardDescription}>
                  <p className={styles.menuTitle}>
                    Balsamic Chicken Salad (16 oz)
                  </p>
                  <p className={styles.menuDescription}>
                    gluten free, dairy free, nut free
                  </p>
                </div>
                <div className={styles.calories}>
                  <p>
                    <b>960</b> Calories
                  </p>
                </div>
              </div>
            </div>
            <div className={styles.card}>
              <div className={styles.leftImage}>
              </div>
              <div className={styles.rightContent}>
                <div className={styles.cardDescription}>
                  <p className={styles.menuTitle}>
                    Balsamic Chicken Salad (16 oz)
                  </p>
                  <p className={styles.menuDescription}>
                    gluten free, dairy free, nut free
                  </p>
                </div>
                <div className={styles.calories}>
                  <p>
                    <b>960</b> Calories
                  </p>
                </div>
              </div>
            </div>
            <div className={styles.card}>
              <div className={styles.leftImage}>
              </div>
              <div className={styles.rightContent}>
                <div className={styles.cardDescription}>
                  <p className={styles.menuTitle}>
                    Balsamic Chicken Salad (16 oz)
                  </p>
                  <p className={styles.menuDescription}>
                    gluten free, dairy free, nut free
                  </p>
                </div>
                <div className={styles.calories}>
                  <p>
                    <b>960</b> Calories
                  </p>
                </div>
              </div>
            </div>
            <div className={styles.card}>
              <div className={styles.leftImage}>
              </div>
              <div className={styles.rightContent}>
                <div className={styles.cardDescription}>
                  <p className={styles.menuTitle}>
                    Balsamic Chicken Salad (16 oz)
                  </p>
                  <p className={styles.menuDescription}>
                    gluten free, dairy free, nut free
                  </p>
                </div>
                <div className={styles.calories}>
                  <p>
                    <b>960</b> Calories
                  </p>
                </div>
              </div>
            </div>
            <div className={styles.card}>
              <div className={styles.leftImage}>
              </div>
              <div className={styles.rightContent}>
                <div className={styles.cardDescription}>
                  <p className={styles.menuTitle}>
                    Balsamic Chicken Salad (16 oz)
                  </p>
                  <p className={styles.menuDescription}>
                    gluten free, dairy free, nut free
                  </p>
                </div>
                <div className={styles.calories}>
                  <p>
                    <b>960</b> Calories
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.buttonWrapper}>
            <div className={styles.button}>
              <Link href="/currentmenu">VIEW ENTIRE MENU</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OnlineMenu;
