import { Modal } from "react-bootstrap";
import { useState } from "react";
import styles from "../../styles/component-styles/Meal-styles/Random.module.css";
import { FaObjectGroup } from "react-icons/fa";
import { ImSearch } from "react-icons/im";
import { FiChevronDown } from "react-icons/fi";
import { HiPlusSm } from "react-icons/hi";

const RandomModal = (props) => {
  return (
    <div className={styles.modalContainer}>
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton className={styles.modalHeader}>
          <h4 id="contained-modal-title-vcenter">Selecting 1 of 6 Lifestyle</h4>
        </Modal.Header>
        <div className={styles.modalBody}>
          <div className={styles.modalUpper}>
            <div className={styles.modalFirst}>
              <div className={styles.modalSearch}>
                <input type="text" placeholder="Search" />
                <i className={styles.iconSearch}>
                  <ImSearch />
                </i>
              </div>
              <div className={styles.sortMeal}>
                <div className={styles.sorting}>
                  <h4>Sort Alphabetically A-Z</h4>
                  <FiChevronDown className={styles.iconSort} />
                </div>
              </div>
            </div>
            <div className={styles.modalSecond}>
              <div className={styles.preferencesButton}>
                <button className={styles.innerButtonOne}>
                  <h6 className={styles.buttonSix}>Edit Preferences</h6>
                  <HiPlusSm className={styles.plusIcon} />
                </button>
                <button className={styles.innerButtonTwo}>
                  <h6 className={styles.buttonSix}>My Diet Preferences</h6>
                  <HiPlusSm className={styles.plusIcon} />
                </button>
              </div>
            </div>
            <div className={styles.emptyModal}>
              <div className={styles.modalImage}>
                <img src="./empty.svg" alt="" />
                <p>
                  No meals available. Try to change the preferences on the menu.
                </p>
              </div>
            </div>
          </div>
        </div>

        <Modal.Footer>
          <button onClick={props.onHide}>Close</button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

const RandomMealModal = () => {
  const [modalShow, setModalShow] = useState(false);

  return (
    <>
      <div>
        <FaObjectGroup className={styles.icon} />
      </div>
      <button
        className={styles.modalButtomRandom}
        variant="primary"
        onClick={() => setModalShow(true)}
      >
        Manually select meals
      </button>

      <RandomModal show={modalShow} onHide={() => setModalShow(false)} />
    </>
  );
};

export default RandomMealModal;
