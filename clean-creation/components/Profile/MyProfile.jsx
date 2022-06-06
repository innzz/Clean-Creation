import React from 'react';
import styles from '../../styles/component-styles/Profile/MyProfile.module.css';

function MyProfile() {
  return (
    <div className={styles.outerContainer}>
        <div className={styles.innerContainer}>
            <div className={styles.leftSection}>
                <div className={styles.heading}>
                    <h3>My Profile</h3>
                </div>
                <div className={styles.name}>
                    <div className={styles.firstName}>
                        <h4>First name</h4>
                        <input type="text" value={'Inzamam'} placeholder='First Name'/>
                    </div>
                    <div className={styles.lastName}>
                        <h4>Last name</h4>
                        <input type="text" value={'Pawaskar'} placeholder='LastName'/>
                    </div>
                </div>
                <div className={styles.birthPhone}>
                    <div className={styles.birthday}>
                        <h4>Birthday</h4>
                        <input type="text" placeholder='Birthday'/>
                    </div>
                    <div className={styles.phone}>
                        <h4>Phone</h4>
                        <input type="text" placeholder='Phone'/>
                    </div>
                </div>
                <div className={styles.lowerSection}>
                    <div className={styles.radioButtons}>
                        <div className={styles.receiveSms}>
                        <label className={styles.switch}>
                        <input type="checkbox" />
                        <span className={styles.slider+" "+styles.round}></span>
                        </label>
                            <h4>Receive SMS?</h4>
                        </div>
                        <div className={styles.receiveEmails}>
                        <label className={styles.switch}>
                        <input type="checkbox" />
                        <span className={styles.slider+" "+styles.round}></span>
                        </label>
                            <h4>Receive Emails?</h4>
                        </div>
                    </div>
                    <div className={styles.button}>
                        Save
                    </div>
                </div>
            </div>
            <div className={styles.rightSection}>
                    <div className={styles.digitalWallet}>
                        <h2>DIGITAL WALLET</h2>
                        <h1>$0.00</h1>
                    </div>
                    <div className={styles.button}>
                        change password
                    </div>
            </div>
        </div>
    </div>
  )
}

export default MyProfile