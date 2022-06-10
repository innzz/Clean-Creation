import React from 'react';
import styles from '../../styles/component-styles/About/AboutUs.module.css';

function AboutUs() {
  return (
    <div className={styles.outerContainer}>
        <div className={styles.innerContainer1}>
            {/* <img src="https://cleancreations.com/data/customfiles/green-banner.jpg" alt="" /> */}
            <h1>About Us</h1>
            <p>Our philosophy is simple: We deliver good, clean food to make eating smart easy. But we’re obsessed with good food, too – not just good-for-you food. Big flavors, high-quality ingredients, and fresh produce are the cornerstones of our prepared meals. We don’t use preservatives, and our meals are always fresh – never (ever) frozen. We also customize meals to accommodate dietary restrictions, and offer gluten-free, paleo, vegetarian, and vegan meals.</p>
        </div>
        <div className={styles.innerContainer2}>
            <div className={styles.cateringWellnessContainer}>
                <h2>catering and wellness</h2>
                <div className={styles.passageContainerWrapper}>
                <div className={styles.passageContainer}>
                <div className={styles.leftPassage}>
                    <h3>Catering</h3>
                    <p>BookOnePos caters! We prepare fresh, healthy gourmet meals for private parties, corporate events, office lunches, and more. We can also create custom menus for particular dietary restrictions, including gluten-free, paleo, vegetarian, or vegan.</p>
                    <p>For more information about catering and menus, send an e-mail to:
                    events@bookonepos.net</p>
                </div>
                <div className={styles.rightPassage}>
                    <h3>Corporate Wellness</h3>
                    <p>Fact: employees are what they eat. While many corporate wellness programs focus entire on fitness-based models, nutrition is often a missing component. Good nutrition is a vital element in a successful, healthy, productive working environment.</p>
                    <ul>
                        <li>A nutrition program can reduce medical costs by lowering the risk factors of diseases like diabetes and heart disease.</li>
                        <li>Fitness-based programs can be unrealistic for some employees. A nutrition program can be incorporated slowly to instill good eating habits and genuine lifestyle changes.</li>
                        <li>You are what you eat. Simply put, if you fuel your body with wholesome, healthy foods, you will perform better. Employees benefit from the positive results of healthy meals and feel better throughout the workday.</li>
                    </ul>
                </div>
                </div>
                </div>
            </div>
            <div className={styles.foodSafetyContainer}>
                <h2>Food Safety</h2>
                <div className={styles.passageContainerWrapper}>
                <div className={styles.passageContainer}>
                <div className={styles.leftPassage}>
                    <ul>
                    <li>All of our meals are prepared in a certified commercial kitchen. We use fresh, high-quality ingredients to ensure our meals meet high standards of taste and nutrition.</li>
                    <li>
                        Each meal is portioned, packaged and stored in a 38 degree cold kitchen, then loaded into a refrigerated delivery van to ensure controlled, food-safe temperatures.
                    </li>
                    </ul>
                </div>
                <div className={styles.rightPassage}>
                <ul>
                <li>
                    Meal temperatures are checked with a laser thermometer to ensure our delivery van and coolers are performing properly.
                </li>
                 <li>
                    Our chef is certified in food safety and handling.
                </li>
                <li>
                        Meals are delivered in an insulated cooler packed with Techni Ice packs
                </li>
                </ul>
                </div>
                </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutUs