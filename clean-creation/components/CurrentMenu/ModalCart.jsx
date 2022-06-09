import styles from "../../styles/component-styles/CurrentMenu-styles/Menu.module.css";
import { Modal, InputGroup, FormControl, Button } from "react-bootstrap";
import { useState } from "react";
import { BsCartFill } from "react-icons/bs";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { FaFire } from "react-icons/fa";

const Cart = (props) => {
  let [num, setNum] = useState(0);

  let increment = () => {
    if (num < 10) {
      setNum(Number(num) + 1);
    }
  };

  let decrement = () => {
    if (num > 0) {
      setNum(num - 1);
    }
  };

  let handleChange = (e) => {
    setNum(e.target.value);
  };

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
            <img src={props.val === undefined ? "" : props.val.image} alt="" />
          </div>
          <div className={styles.modalData}>
            <div className={styles.modalFirst}>
              <h3>{props.val === undefined ? "" : props.val.heading}</h3>
              <p>{props.val === undefined ? "" : props.val.desc}</p>
              <span>E</span>
              <div className={styles.belowBottom}></div>
            </div>
            <div className={styles.modalSecond}>
              <h4>Available Portions</h4>
              <div className={styles.regular}>
                {props.val === undefined ? "" : props.val.regularPrice}
              </div>
              <div className={styles.inputGroup}>
                <InputGroup>
                  <button className={styles.numBtn} onClick={decrement}>
                    -
                  </button>
                  <input
                    onChange={handleChange}
                    className={styles.formControl}
                    type=""
                    value={num}
                  />

                  <button className={styles.numBtn} onClick={increment}>
                    +
                  </button>
                </InputGroup>
              </div>
              <div className={styles.modalOrder}>Order for June 12, 2022</div>
            </div>
            <div className={styles.modalThird}>
              <div className={styles.modalTotalCalories}>
                <h6>TOTAL CALORIES</h6>
                <div className={styles.fireCalories}>
                  <FaFire className={styles.fireIcon} />
                  <span>
                    {props.val === undefined ? "" : props.val.calories}
                  </span>
                  <p>Calories</p>
                </div>
              </div>
              <div className={styles.modalCal}>
                <div className={styles.modalCalDesc}>
                  <h5>{props.val === undefined ? "" : props.val.protein}</h5>
                  <p>PROTEIN</p>
                </div>
                <div className={styles.modalCalDesc}>
                  <h5>{props.val === undefined ? "" : props.val.carb}</h5>
                  <p>TOTAL CARBOHYDRATES</p>
                </div>
                <div className={styles.modalCalDesc}>
                  <h5>{props.val === undefined ? "" : props.val.fat}</h5>
                  <p>TOTAL FAT</p>
                </div>
                <div className={styles.modalCalDesc}>
                  <h5>{props.val === undefined ? "" : props.val.fiber}</h5>
                  <p>DIETERY FIBER</p>
                </div>
                <div className={styles.modalCalDesc}>
                  <h5>
                    {props.val === undefined ? "" : props.val.saturatedFat}
                  </h5>
                  <p>SATURATED FAT</p>
                </div>
                <div className={styles.modalCalDesc}>
                  <h5>
                    {props.val === undefined ? "" : props.val.cholesterol}
                  </h5>
                  <p>CHOLESTEROL</p>
                </div>
                <div className={styles.modalCalDesc}>
                  <h5>{props.val === undefined ? "" : props.val.sodium}</h5>
                  <p>SODIUM</p>
                </div>
                <div className={styles.modalCalDesc}>
                  <h5>{props.val === undefined ? "" : props.val.totalSugar}</h5>
                  <p>TOTAL SUGARS</p>
                </div>
                <div className={styles.modalCalDesc}>
                  <h5>
                    {props.val === undefined ? "" : props.val.includedSugar}
                  </h5>
                  <p>INCLUDED SUGARS</p>
                </div>
              </div>
            </div>
            <div className={styles.modalFourth}>
              <h2>Ingredients: </h2>
              <p>{props.val === undefined ? "" : props.val.ingredients}</p>
              <h2>Allergens: </h2>
              <p>{props.val === undefined ? "" : props.val.allergens}</p>
              <h2>Heating Instructions</h2>
              <p>{props.val === undefined ? "" : props.val.heating}</p>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};

const CartModal = ({ val }) => {
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

      <Cart val={val} show={modalShow} onHide={() => setModalShow(false)} />
    </>
  );
};

export default CartModal;
