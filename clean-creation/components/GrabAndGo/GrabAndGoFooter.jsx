import Link from 'next/link';
import React from 'react';
import styles from '../../styles/component-styles/GrabAndGo/GrabAndGoFooter.module.css';

function GrabAndGoFooter() {
  return (
    <div className={styles.container}>
        <div className={styles.innerContainer}>
        <div className={styles.leftSection}>
            <img src="https://cleancreations.com/assets/images/clean_creations_logo-1.svg" alt="" />
        </div>
        <div className={styles.rightSection}>
            <div className={styles.linksWrapper}>
            <div className={styles.cleanCreations}>
                <h1>BookOnePos</h1>
                <Link href={'/about'}>About Us</Link>
                <Link href={'/grabAndGo'}>Grab And Go</Link>
                <Link href={'/contact'}>Contact Us</Link>
                <Link href={'/privacyPolicy'}>Privacy Policy</Link>
                <Link href={'/faq'}>F.A.Q.</Link>
            </div>
            <div className={styles.orderMeals}>
                <h1>Order Meals</h1>
                <Link href={'/byingredients'}>Bulk Menu</Link>
                <Link href={'/meals'}>Meal Plan</Link>
                <Link href={'/alacarte'}>A La Carte</Link>
                <Link href={'/customMealBuilder'}>Custom Meal Builder</Link>
                <Link href={'/giftcard'}>Gift Cards</Link>
                <Link href={'/extras'}>Extras</Link>
            </div>
            <div className={styles.contactUs}>
                <h1>Contact Us</h1>
                <ul>
                    <li>112336454563</li>
                    <li>inzamam@gmail.com</li>
                </ul>
            </div>
            </div>
        </div>
        </div>
    </div>
  )
}

export default GrabAndGoFooter