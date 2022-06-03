import React from 'react';
import styles from '../../styles/component-styles/subscription-styles/UserPlanSelection.module.css';
import { InputGroup } from 'react-bootstrap';
import { FormControl } from 'react-bootstrap';
import { IoIosWarning } from "react-icons/io";
import { IoIosArrowDown } from 'react-icons/io';
import { GiMeal } from 'react-icons/gi';
import { FaShoppingCart } from 'react-icons/fa';

function UserPlanSelection() {
  return (
    <div className={styles.outerContainer}>
    <div className={styles.midContainer}>
      <div className={styles.inputContainer}>
        <InputGroup className={`mb-3 ${styles.input}`}>
            <span className={styles.inputIcon}><IoIosWarning style={{color: 'orange'}} size={'30px'} /></span>
            <FormControl className={`${styles.inputInside}`} aria-label="Dollar amount (with dot and two decimal places)" style={{borderRadius:'10px'}} />
        </InputGroup>
      </div>
      <div className={styles.midContent}>
      <div className={styles.insideContainer}>
      <div className={styles.leftSection}>
          <div className={styles.cards}>
            <div className={styles.card}>
              <div className={styles.heading}>
                  <h3>1. Choose your plan</h3>
              </div>
              <div className={styles.buttonsGroup}>
                <div className={styles.button}>
                    The Everything Plan
                </div>
                <div className={styles.button}>
                    The Everything Plan
                </div>
                <div className={styles.button}>
                    The Everything Plan
                </div>
                <div className={styles.button}>
                    The Everything Plan
                </div>
                <div className={styles.button}>
                    The Everything Plan
                </div>
                <div className={styles.button}>
                    The Everything Plan
                </div>
                <div className={styles.button}>
                    The Everything Plan
                </div>
                <div className={styles.button}>
                    The Everything Plan
                </div>
              </div>
            </div>
            <div className={styles.card}>
              <div className={styles.heading}>
                  <h3>1. Choose your plan</h3>
              </div>
              <div className={styles.buttonsGroup}>
                <div className={styles.button}>
                    The Everything Plan
                </div>
                <div className={styles.button}>
                    The Everything Plan
                </div>
                <div className={styles.button}>
                    The Everything Plan
                </div>
                <div className={styles.button}>
                    The Everything Plan
                </div>
                <div className={styles.button}>
                    The Everything Plan
                </div>
              </div>
            </div>
            <div className={styles.card}>
              <div className={styles.heading}>
                  <h3>1. Choose your plan</h3>
              </div>
              <div className={styles.buttonsGroup}>
                <div className={styles.button}>
                    The Everything Plan
                </div>
                <div className={styles.button}>
                    The Everything Plan
                </div>
                <div className={styles.button}>
                    The Everything Plan
                </div>
                <div className={styles.button}>
                    The Everything Plan
                </div>
                <div className={styles.button}>
                    The Everything Plan
                </div>
              </div>
            </div>
            <div className={styles.card}>
              <div className={styles.heading}>
                  <h3>1. Choose your plan</h3>
              </div>
              <div className={styles.buttonsGroup}>
                <div className={styles.button}>
                    The Everything Plan
                </div>
                <div className={styles.button}>
                    The Everything Plan
                </div>
                <div className={styles.button}>
                    The Everything Plan
                </div>
                <div className={styles.button}>
                    The Everything Plan
                </div>
                <div className={styles.button}>
                    The Everything Plan
                </div>
              </div>
            </div>
          </div>
      </div>
      <div className={styles.rightSection}>
        <div className={styles.rightInnerContainer}>
            <div className={styles.overView}>
              <div className={styles.overViewContent}>
                  Overview <IoIosArrowDown style={{display: 'block'}} size={'30px'}/>
              </div>
              <div className={styles.overViewButton}>
                  Start Over 
              </div>
            </div>
            <div className={styles.bottom}>
              Starting at
            </div>
        </div>
      </div>
      </div>
      </div>
      <div className={styles.buttonWrapper}>
      <div className={styles.leftButtonGroup}>
                <div className={styles.button}>
                    <GiMeal size={'25px'} style={{marginRight: '8px'}}/>Select Your Meals
                </div>
                <div className={styles.button}>
                    <FaShoppingCart size={'25px'} style={{marginRight: '8px'}}/>Go to Cart
                </div>
      </div>
      </div>
    </div>
    </div>
  )
}

export default UserPlanSelection