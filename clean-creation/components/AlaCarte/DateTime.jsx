import React from "react";
import { useState } from "react";
import styles from "../../styles/component-styles/AlaCarte/Date.module.css";
import { HiPlusSm } from "react-icons/hi";
import { ImSearch } from "react-icons/im";
import { FiChevronDown } from "react-icons/fi";
import { Button, Offcanvas, Form } from "react-bootstrap";

function SidePopUP() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const toggleShow = () => setShow((s) => !s);

  return (
    <>
      <button
        variant="primary"
        onClick={toggleShow}
        className={`me-2 ${styles.innerButtonOne}`}
      >
        <h6>Edit Preferences</h6>
        <HiPlusSm />
      </button>
      <Offcanvas
        className={styles.canvasFull}
        show={show}
        onHide={handleClose}
        placement="end"
        scroll="true"
        // style={{ padding: "0px" }}
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title className={styles.canvaTitle}>
            Filter preferences
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div className={styles.canvasBody}>
            <div className={styles.canvasUpper}>
              <div>
                <Form>
                  <Form.Check
                    type="switch"
                    id="custom-switch"
                    label="Show meals with allergens"
                  />
                </Form>
              </div>

              <div className={styles.headingFour}>
                <h4>Type</h4>

                <Form>
                  <Form.Check type="checkbox" label="Entree" />
                </Form>
              </div>
            </div>
            <div className={styles.canvasLower}>
              <button className={styles.applyBtn}>Apply Filters</button>
              <button className={styles.applyClr}>Clear</button>
            </div>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

const DateTime = () => {
  return (
    <div className={styles.bigContainer}>
      <div className={styles.container}>
        <div className={styles.upper}>
          <div className={styles.dateSelection}>
            <h3>2. Select Date</h3>
            <div>
              <div className={styles.day}>
                <h4>June 2022</h4>
                <div className={styles.data}>
                  <div className={styles.dateOne}>
                    <h5>WED</h5>
                    <h6>08</h6>
                  </div>
                  <div className={styles.dateTwo}>
                    <h5>WED</h5>
                    <h6>08</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.orderDate}>
            <h5>
              Order for <br />
              <span className={styles.orderSpan}>Sunday, June 12, 2022</span>
            </h5>
          </div>
        </div>
        <div className={styles.lower}>
          <div className={styles.selectMeal}>
            <div className={styles.dateSelection}>
              <h3>3. Select your meals</h3>
            </div>
            <div className={styles.preferencesButton}>
              <button>
                <SidePopUP />
              </button>
              <button className={styles.innerButtonTwo}>
                <h6>My Diet Preferences</h6>
                <HiPlusSm />
              </button>
            </div>
          </div>
          <div className={styles.searchMeal}>
            <div className={styles.searchInput}>
              <input type="text" placeholder="What are you craving?" />
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
        </div>
        <div
          style={{
            border: "1px solid black",
            marginTop: "20px",
            borderColor: "#cdcdce",
          }}
        ></div>
      </div>
    </div>
  );
};

export default DateTime;
