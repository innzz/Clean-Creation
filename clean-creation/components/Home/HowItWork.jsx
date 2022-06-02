import React from 'react';
import styles from '../../styles/component-styles/HowItWork.module.css';

function HowItWork() {
  return (
    <div className={styles.container}>
        <div className={styles.heading}>
            <h1>How It Works</h1>
        </div>
        <div className={styles.cards}>
            <div className={styles.card}>
                <div className={styles.icon}>
                    <img src="https://cleancreations.com/data/config/theme_howitworks_item1_image.svg?md=a90764e4d1943d70ade260f7af365720" alt="menu" />
                </div>
                <div className={styles.description}>
                    <h2>PLACE ORDER</h2>
                    <p>Select from our wide variety of signature dishes, custom, or specialty meal options. Pick up in Baton Rouge or choose between in-store pickup or delivery in the New Orleans Metro Area</p>
                </div>
            </div>
            <div className={styles.card}>
                <div className={styles.icon}>
                    <img src="https://cleancreations.com/data/config/theme_howitworks_item2_image.svg?md=479cab042576f04da7f0a2ab489f63bb" alt="menu" />
                </div>
                <div className={styles.description}>
                    <h2>COOK</h2>
                    <p>Our staff will carefully prepare, cook, and package all of your meals and have them fresh and ready to go!</p>
                </div>
            </div>
            <div className={styles.card}>
                <div className={styles.icon}>
                    <img src="https://cleancreations.com/data/config/theme_howitworks_item3_image.svg?md=31b0e449112fcc4e895a653e28dffb22" alt="menu" />
                </div>
                <div className={styles.description}>
                    <h2>PICKUP / DELIVER</h2>
                    <p>You choose whether to pick up your meals in our very own brick and mortar location or even choose a delivery method in case you are busy. We never want you to miss out</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default HowItWork