import React from "react";
import styles from "../../styles/component-styles/AlaCarte/Top.module.css";
import { Modal, Button } from "react-bootstrap";
import { useState } from "react";
import { BsFillQuestionCircleFill } from "react-icons/bs";

function PopUp() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <button className={styles.modalButton} onClick={handleShow}>
        <BsFillQuestionCircleFill className={styles.modalIcon} />
        <h6 className={styles.modalHeadEl}>How To Order À la Carte </h6>
      </button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>How to Order À la Carte ?</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, this is video modal!</Modal.Body>
      </Modal>
    </>
  );
}

const TopBar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.heading}>
        <div className={styles.innerHeading}>
          <h1>À la Carte</h1>
          <PopUp />
        </div>
      </div>
    </div>
  );
};

export default TopBar;
