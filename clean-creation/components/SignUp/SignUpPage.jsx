import React from 'react';
import styles from '../../styles/component-styles/SignUp/SignUpPage.module.css';

function SignUpPage() {
  return (
    <div className={styles.container}>
        <div className={styles.leftSection}>
        </div>
        <div className={styles.rightSection}>
            <div className={styles.innerForm}>
                <div className={styles.formHeading}>
                    <h3>
                        <strong>Sign Up to BookOnePos</strong>
                    </h3>
                </div>
                <div className={styles.formInputsContainer}>
                    <div className={styles.input}>
                        <h4>First Name *</h4>
                        <input type="text" placeholder='First Name'/>
                    </div>
                    <div className={styles.input}>
                        <h4>Email *</h4>
                        <input type="text" placeholder='Email'/>
                    </div>
                    <div className={styles.input}>
                        <h4>Phone *</h4>
                        <input type="text" placeholder='Phone'/>
                    </div>
                    <div className={styles.input}>
                        <h4>Birthday *</h4>
                        <input type="text" placeholder='Birthday'/>
                    </div>
                    <div className={styles.input}>
                        <h4>Password *</h4>
                        <input type="text" placeholder='Password'/>
                    </div>
                    <div className={styles.input}>
                        <h4>Password Confirmation *</h4>
                        <input type="text" placeholder='Password Confirmation'/>
                    </div>
                    <div className={styles.robot} style={{height: '64px'}}>
                        <h5>
                            I am Not A Robot
                        </h5>
                    </div>
                </div>
                <div className={styles.terms}>
                    <div className={styles.term}>
                        <input type="checkbox" />
                        <h5>I agree to receiving periodic messages sent to my phone for alerts and notifications. Message and data rates may apply.</h5>
                    </div>
                    <div className={styles.term}>
                        <input type="checkbox" />
                        <h5>I agree to receiving periodic messages sent to my email for alerts and notifications.</h5>
                    </div>
                    <div className={styles.term}>
                        <input type="checkbox" />
                        <h5>I have read and agree to the <a>Terms & Conditions. *</a></h5>
                    </div>
                </div>
                    <button type='submit'>Register</button>
            </div>
        </div>
    </div>
  )
}

export default SignUpPage