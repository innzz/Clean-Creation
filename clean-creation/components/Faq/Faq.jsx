import React from "react";
import styles from "../../styles/component-styles/Faq/Faqs.module.css";
import { Collapse } from "react-bootstrap";
import { useState } from "react";
import { BsPlusCircle } from "react-icons/bs";

const Faq = () => {
  const [open, setOpen] = useState({
    button1: false,
    button2: false,
  });

  return (
    <>
      <div className={styles.container}>
        <h3>Frequently Asked Questions</h3>
        <div className={styles.collapseContent}>
          <h4>How do I get started?</h4>
          <BsPlusCircle
            className={styles.plusIcon}
            onClick={() => setOpen({ ...open, button1: !open.button1 })}
            aria-controls="example-collapse-text"
            aria-expanded={open}
          />
          <div className={styles.borderLine}></div>
          <Collapse Collapse in={open.button1}>
            <div id="example-collapse-text" className={styles.info}>
              Please visit the “Get Started” link on our website to set up an
              account. Once a profile is created, you can then visit the “Order”
              tab on our homepage to begin placing your order.
            </div>
          </Collapse>
        </div>
        {/* /////// */}
        <div className={styles.collapseContent}>
          <h4>How do I get started?</h4>
          <BsPlusCircle
            className={styles.plusIcon}
            button
            onClick={() => setOpen({ ...open, button2: !open.button2 })}
            aria-controls="example-collapse-text"
            aria-expanded={open}
          />
          <div className={styles.borderLine}></div>
          <Collapse Collapse in={open.button2}>
            <div id="example-collapse-text" className={styles.info}>
              Please visit the “Get Started” link on our website to set up an
              account. Once a profile is created, you can then visit the “Order”
              tab on our homepage to begin placing your order.
            </div>
          </Collapse>
        </div>
      </div>
    </>
  );
};

export default Faq;
