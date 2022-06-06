import React from "react";
import styles from "../../styles/component-styles/Home-styles/AddTwo.module.css";
import Image from "next/image";

const AdvertisementTwo = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.image}>
          <Image src="./one.jpg" alt="" />
        </div>
        <div className={styles.card}>
          <h2>
            Get Started <br />
            With a Healthier You
          </h2>
          <p>
            The convenience of a well prepared, healthy, flavorful meal with no
            shopping, preparing, or clean up is a total game changer for your
            lifestyle!
          </p>
          <button>SIGN UP NOW</button>
        </div>
      </div>
    </>
  );
};

export default AdvertisementTwo;
