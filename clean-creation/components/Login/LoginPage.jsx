import React from "react";
import styles from "../../styles/component-styles/Login-styles/loginPage.module.css";
import Image from "next/image";

function LoginPage() {
  return (
    <div className={styles.bodyContainer}>
      <div className={styles.container}>
        <div className={styles.leftImageContainer}>
          <img
            src="https://cleancreations.com/data/config/login_image.jpg?md=5aa06eb7aa5a83d1992520b885d63182"
            alt=""
          />
        </div>
        <div className={styles.rightContentContainer}>
          <div className={styles.rightInnerContainer}>
            <div className={styles.headingContainer}>
              <h2>Login to Clean Creations</h2>
              <h3>
                To access your account please login with your email address and
                password.
              </h3>
            </div>
            <div className={styles.inputContainer}>
              <div className={styles.details}>
                Your email
                <input type="text" placeholder="Your registered email" />
              </div>
              <div className={styles.details}>
                Your password
                <input type="text" />
              </div>
            </div>
            <div className={styles.bottomText}>
              <a href="#">Dont have an account?</a>
              <a href="#">Forgot password?</a>
            </div>
            <div className={styles.button}>Login</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
