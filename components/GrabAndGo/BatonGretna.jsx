import React from "react";
import styles from "../../styles/component-styles/GrabAndGo/BatonGretna.module.css";
import Image from "next/image";
import Link from "next/link";

const BatonGretna = () => {
  const blogInfo = [
    {
      link: "/batonRouge",
      image: "/Baton.jpg",
      heading: "Baton Rouge",
      descOne: "18303 Old Perkins Rd E #409, Baton Rouge, LA 70810",
      descTwo: "See Whats In Our Coolers",
    },
    {
      link: "/gretna",
      image: "/Gretna.jpg",
      heading: "Gretna",
      descOne: "1105 Lafayette St, Gretna, LA 70053",
      descTwo: "See Whats In Our Coolers",
    },
  ];

  return (
    <div className={styles.bigContainer}>
      <div className={styles.container}>
        <div className={styles.card}>
          {blogInfo.map((val, i) => (
            <div
              className={styles.cardInfo}
              style={{ marginRight: "20px" }}
              key={i}
            >
              <div className={styles.image}>
                <Link href={val.link}>
                  <img className={styles.imgSize} src={val.image} />
                </Link>
              </div>
              <div className={styles.cardDetail}>
                <h3>{val.heading}</h3>
                <h4 className={styles.subHeading}>{val.descOne}</h4>
                <Link href="/batonRouge">
                  <h5
                    style={{
                      marginTop: "-4px",
                      color: "blue",
                      cursor: "pointer",
                    }}
                    className={styles.subHeading}
                  >
                    {val.descTwo}
                  </h5>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* /////// */}
      </div>
    </div>
  );
};

export default BatonGretna;
