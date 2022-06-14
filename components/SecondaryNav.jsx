import React from 'react';
import styles from '../styles/SecondaryNav.module.css';
import {FaRegQuestionCircle}  from 'react-icons/fa';

function SecondaryNav({heading , buttonText}) {
  return (
    <div className={styles.container}>
        <div className={styles.innerContainer}>
            <div className={styles.heading}>
                <h1>{heading}</h1>
            </div>
            <div className={styles.button}>
                <div className={styles.buttonText}>
                <div className={styles.icon}>
                    <FaRegQuestionCircle /> 
                </div>
                <h2>{buttonText}</h2>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SecondaryNav