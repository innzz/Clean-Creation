import React from "react";
import styles from "../../styles/component-styles/People.module.css";
import { Carousel } from "react-bootstrap";

const PeopleSaying = () => {
  return (
    <div>
      <div className={styles.container}>
        <Carousel fade>
          <Carousel.Item>
            <div className={styles.imagtext}>
              <img
                className={`d-block w-100 ${styles.image}`}
                src="/carousel.jpg"
                alt="First slide"
              />
            </div>

            <Carousel.Caption>
              <h3 className={styles.secondHeading}>
                Food is prepared perfectly. Makes meal prepping more convenient
                and saves time. Taste great. Highly recommend.
              </h3>
              <h4 className={styles.thirdHeading}>~Rhett Majoria</h4>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <div className={styles.imagtext}>
              <img
                className={`d-block w-100 ${styles.image}`}
                src="/carousel.jpg"
                alt="First slide"
              />
            </div>

            <Carousel.Caption>
              <h3 className={styles.secondHeading}>
                I have always been so impressed with everything we've ever had
                from here. Both quality and taste!!! ~Emily Hoskins I can't say
                enough good things about this place, friendly and inviting staff
                that are happy to answer any questions you might have, grab and
                go meals that will leave you feeling great. Not to mention I
                spend less money here than at any fast food place. ~Nick Pierce
                Food is prepared perfectly. Makes meal prepping more convenient
                and saves time. Taste great. Highly recommend.
              </h3>
              <h4 className={styles.thirdHeading}>~Monique Encala</h4>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <div className={styles.imagtext}>
              <img
                className={`d-block w-100 ${styles.image}`}
                src="/carousel.jpg"
                alt="First slide"
              />
            </div>

            <Carousel.Caption>
              <h3 className={styles.secondHeading}>
                I can't say enough good things about this place, friendly and
                inviting staff that are happy to answer any questions you might
                have, grab and go meals that will leave you feeling great. Not
                to mention I spend less money here than at any fast food place.
                ~Nick Pierce Food is prepared perfectly. Makes meal prepping
                more convenient and saves time. Taste great. Highly recommend.
              </h3>
              <h4 className={styles.thirdHeading}>~Emili Hoskins</h4>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
};

export default PeopleSaying;
