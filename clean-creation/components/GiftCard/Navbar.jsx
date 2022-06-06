import React from "react";
import styles from "../../styles/component-styles/GiftCard/Gift.module.css";
import { Modal, Button } from "react-bootstrap";
import { useState } from "react";
import { BsFillQuestionCircleFill } from "react-icons/bs";

const PopUp = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <button
        variant="primary"
        onClick={handleShow}
        className={styles.modalButton}
      >
        <BsFillQuestionCircleFill className={styles.modalIcon} />
        <p>How to Order Gift Card?</p>
      </button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

const Navbar = () => {
  return (
    <div className={styles.bigContainer}>
      <div className={styles.container}>
        <div className={styles.left}>
          <h2>Gift Card</h2>
          <h3>
            Select the value of the Gift Card you would like to purchase.
            <br />
            Please note: Gift Cards may only be used for online purchases and
            not valid in the grab and go.
          </h3>
        </div>
        <div className={styles.right}>
          <PopUp />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
