import React from 'react';
import styles from '../../styles/component-styles/Cart-Confirm/ShoppingCartConfirm.module.css';
import {RiDeleteBin6Line} from 'react-icons/ri';
import {BsShop} from 'react-icons/bs';
import { ImCross } from 'react-icons/im';
import {FiClock} from 'react-icons/fi'

function ShoppingCartConfirmation() {
  return (
    <div className={styles.outerContainer}>
        <div className={styles.innerContainer}>
            <div className={styles.shoppingCartSection}>
                <div className={styles.heading1}>
                    <h1>Shopping Cart</h1>
                    <div className={styles.deleteCartButton}>
                        <RiDeleteBin6Line size={'20px'} style={{paddingBottom: '2px'}}/>
                    <h2>DELETE CART</h2>
                    </div>
                </div>
                <div className={styles.innerContent1}>
                    <div className={styles.deliveryContent}>
                    <BsShop size={'20px'} style={{marginBottom: '10px'}}/>
                    <h3>DELIVERY <a href="/">Edit</a></h3>
                    </div>
                    <div className={styles.dateContent}>
                        <h3><FiClock />Sunday,Jun 12,2022</h3>
                    </div>
                </div>
            </div>
            <div className={styles.weeklySubscription}>
                <div className={styles.heading2}><ImCross className={styles.weeklySubscriptionIcon} size={'15px'}/>Weekly Subscription</div>
                <h3>$65.00</h3>
            </div>
            <div className={styles.tipSection}>
                <div className={styles.heading3}>
                    <h3>Would you like to tip your delivery team? </h3>
                    <h3 className={styles.noTipButton}>No Tip</h3>
                </div>
                <div className={styles.innerCardsSection}>
                    <div className={styles.innerCards}>
                        <div className={styles.innerCard}>
                            <h3>5%</h3>
                            <h3 className={styles.tipPriceText}>$3.25</h3>
                        </div>
                        <div className={styles.innerCard}>
                            <h3>5%</h3>
                            <h3 className={styles.tipPriceText}>$3.25</h3>
                        </div>
                        <div className={styles.innerCard}>
                            <h3>5%</h3>
                            <h3 className={styles.tipPriceText}>$3.25</h3>
                        </div>
                        <div className={styles.innerCard}>
                            <h3>5%</h3>
                            <h3 className={styles.tipPriceText}>$3.25</h3>
                        </div>
                        <div className={styles.innerCard}>
                            <h3>Other</h3>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.subTotalSection}>
                <h3>Sub Total:</h3>
                <h3 className={styles.subTotalPriceText}>$65.00</h3>
            </div>
            <div className={styles.serviceSection}>
                <h3>Service Fee:</h3>
                <h3 className={styles.serviceSectionPriceText}>$1.00</h3>
            </div>
            <div className={styles.deliverySection}>
                <h3>Delivery (0):</h3>
                <h3 className={styles.deliverySectionDateText}>Jun 12, 2022 - $0.00</h3>
            </div>
            <div className={styles.totalSection}>
                <h3>Total:</h3>
                <h3 className={styles.totalSectionPriceText}>$66.00</h3>
            </div>
            <div className={styles.DeliveryBagSection}>
                <h4>Delivery bag fee:</h4>
                <h3>This $5 bag fee will be added for each delivery.</h3>
                <p>When the driver drops off your delivery they will scan the bag and ice packs you have left out and the $5 fee will be returned to your digital wallet. If you do not have a bag and ice packs out upon delivery the $5 bag fee will not be refunded.</p>

                <h4>One Time Initial Bag Rental:</h4>
                
                <p><span>This $30 bag and ice pack rental is a one time fee on your initial order.</span>The bags and ice packs are mandatory for delivery. They ensure that the meals remain at a safe temperature throughout the delivery process and allow us to deliver to you even if you are not home. When you are finished with our service the bag and ice packs can be returned to our facility and the $30 rental will be refunded to your credit card. </p>
            </div>
            <div className={styles.button}>
                checkout
            </div>
            <div className={styles.footer}>
                By clicking checkout you agree to our <a>Terms & Conditions</a>
            </div>
        </div>
      
    </div>
  )
}

export default ShoppingCartConfirmation
