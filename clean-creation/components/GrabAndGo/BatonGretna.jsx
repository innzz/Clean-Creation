import React from "react";
import styles from "../../styles/component-styles/GrabAndGo/BatonGretna.module.css";
import Image from "next/image";
import Link from "next/link";

const BatonGretna = () => {
  return (
    <div className={styles.bigContainer}>
      <div className={styles.container}>
        <div className={styles.card}>
          <div className={styles.cardInfo}>
            <div className={styles.image}>
              <Link href="/batonRouge">
                <img
                  className={styles.imgSize}
                  src="/Baton.jpg"
                  // loader={myLoader}

                  layout="fill"
                />
              </Link>
            </div>
            <div className={styles.cardDetail}>
              <h3>Baton Rouge</h3>
              <h4 className={styles.subHeading}>
                18303 Old Perkins Rd E #409, <br />
                Baton Rouge, LA 70810
              </h4>
              <Link href="/batonRouge">
                <h5
                  style={{
                    marginTop: "-4px",
                    color: "blue",
                    cursor: "pointer",
                  }}
                  className={styles.subHeading}
                >
                  See Whats In Our Coolers
                </h5>
              </Link>
            </div>
          </div>
        </div>

        {/* /////// */}

        <div className={styles.card}>
          <div className={styles.cardInfo}>
            <div className={styles.image}>
              <Link href="/gretna">
                <img
                  className={styles.imgSize}
                  src="/Gretna.jpg"
                  // loader={myLoader}

                  layout="fill"
                />
              </Link>
            </div>
            <div className={styles.cardDetail}>
              <h3>Gretna</h3>
              <h4 className={styles.subHeading}>
                1105 Lafayette St, <br />
                Gretna, LA 70053
              </h4>
              <Link href="/gretna">
                <h5
                  style={{
                    marginTop: "-4px",
                    color: "blue",
                    cursor: "pointer",
                  }}
                  className={styles.subHeading}
                >
                  See Whats In Our Coolers
                </h5>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BatonGretna;
