import React from "react";
import styles from "../../styles/component-styles/Home-styles/AddOne.module.css";
import Image from "next/image";
import { useRouter } from 'next/router'

const AdvertisementOne = () => {
  const router = useRouter()

  const handleClick = e => {
    e.preventDefault()
    router.push('/about')
  }

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h2>
          Our mission is to make clean <br /> eating delicious and convenient
          <br />
          for everyone.
        </h2>
        <p>
          Our mission is to make clean eating simple and convenient. You should
          never have to sacrifice quality, flavor or nutrition when it comes to
          your, which is why we offer the highest quality ingredients in our
          meals. Every meal we prepare is created with passion and care by our
          incredible chef and culinary team. We are more passionate than ever
          that we can truly change people’s lives with clean eating!
        </p>
        <button onClick={handleClick}>LEARN MORE</button>
      </div>
      <div className={styles.image}>
        <img src="./AddOne.jpg" alt="" />
      </div>
    </div>
  );
};

export default AdvertisementOne;
