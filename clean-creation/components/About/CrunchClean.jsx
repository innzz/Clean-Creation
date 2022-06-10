import React from "react";
import styles from "../../styles/component-styles/About/CrunchClean.module.css";

const CrunchClean = () => {
  return (
    <div className={styles.bigContainer}>
      <div className={styles.container}>
        <div className={styles.image}>
          <img src="/big.jpeg" alt="" />
        </div>
        <div className={styles.desc}>
          <h3>
            Eat Healthy on a Time Crunch with BookOnePos, Baton Rouge
          </h3>
          <p>
            At BookOnePos, Baton Rouge, we know how hard it can be to eat
            healthy when you’re busy. Whether you work a demanding job, have
            kids to look after, or feel buried under piles of coursework, a
            balanced diet is often the last thing on your mind. Healthy fresh
            food requires time to prepare, and chopping and washing all of your
            produce can take forever. Even going to the grocery store or
            farmer’s market can feel time-consuming when you have other
            commitments. But with BookOnePos Baton Rouge, you can get all
            the benefits of a healthy diet with none of the hassle. We offer
            fresh, nutritious meals delivered right to your door or picked up at
            one of our convenient locations in New Orleans or Baton Rouge,
            taking the fuss out of healthy eating.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CrunchClean;
