import { Modal } from "react-bootstrap";
import { useState } from "react";
import styles from "../../styles/component-styles/CurrentMenu-styles/Menu.module.css";
import { BsCartFill, BsPlus } from "react-icons/bs";
import { GrFormSubtract } from "react-icons/gr";
import { FaFire } from "react-icons/fa";

const Cart = (props) => {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <div className={styles.modalBody}>
        {/* <button onClick={props.onHide}>Close</button> */}
        <div className={styles.modalInnerContainer}>
          <div className={styles.modalImage}>
            <img src="./dish.jpg" alt="" />
          </div>
          <div className={styles.modalData}>
            <div className={styles.modalFirst}>
              <h3>Balsamic Chicken Salad (16 oz)</h3>
              <p>gluten free, dairy free, nut free</p>
              <span>E</span>
              <div className={styles.belowBottom}></div>
            </div>
            <div className={styles.modalSecond}>
              <h4>Available Portions</h4>
              <div className={styles.regular}>Regular | $10.95</div>
              <div className={styles.modalQty}>
                <GrFormSubtract className={styles.sub} />
                <p>0</p>
                <BsPlus className={styles.plus} />
              </div>
              <div className={styles.modalOrder}>Order for June 12, 2022</div>
            </div>
            <div className={styles.modalThird}>
              <div className={styles.modalTotalCalories}>
                <h6>TOTAL CALORIES</h6>
                <div className={styles.fireCalories}>
                  <FaFire className={styles.fireIcon} />
                  <span>960</span>
                  <p>Calories</p>
                </div>
              </div>
              <div className={styles.modalCal}>
                <div className={styles.modalCalDesc}>
                  <h5>88.00 gr</h5>
                  <p>Protein</p>
                </div>
                <div className={styles.modalCalDesc}>
                  <h5>88.00 gr</h5>
                  <p>Protein</p>
                </div>
                <div className={styles.modalCalDesc}>
                  <h5>88.00 gr</h5>
                  <p>Protein</p>
                </div>
                <div className={styles.modalCalDesc}>
                  <h5>88.00 gr</h5>
                  <p>Protein</p>
                </div>
              </div>
            </div>
            <div className={styles.modalFourth}>
              <h2>Ingredients: </h2>
              <p>
                Balsamic Chicken Salad (Shaved red onion (red onion), Dried
                Cranberry, Bias Cut Celery, Balsamic Chicken Dressing (balsamic,
                basil, Minced Garlic, Dijon Mustard, Black Pepper, Honey, Olive
                Oil Blend), Balsamic Chicken for Chicken Salad (Chicken (raw),
                Black Pepper, salt, italian seasoning, Paprika))
              </p>
              <h2>Allergens: </h2>
              <p>Fruit/Berries</p>
              <h2>Heating Instructions</h2>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};

const CartModal = () => {
  const [modalShow, setModalShow] = useState(false);

  return (
    <>
      <button
        variant="primary"
        onClick={() => setModalShow(true)}
        className={styles.iconBox}
        style={{ cursor: "pointer" }}
      >
        <BsCartFill className={styles.icon} />
      </button>

      <Cart show={modalShow} onHide={() => setModalShow(false)} />
    </>
  );
};

export default CartModal;
