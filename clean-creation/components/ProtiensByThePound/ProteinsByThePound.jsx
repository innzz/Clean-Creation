import React from 'react';
import {RiQuestionFill} from 'react-icons/ri';
import {RiDeleteBin6Fill} from 'react-icons/ri';
import {IoMdAddCircle} from 'react-icons/io';
import {MdShoppingBasket} from 'react-icons/md'
import styles from '../../styles/component-styles/ProteinsByThePound/ProtiensByThePound.module.css';

function ProteinsByThePound() {
  return (
    <div className={styles.outerContainer}>
        <div className={styles.innerContainer}>
        <div className={styles.outerDateContainer}>
            <div className={styles.dateContainer}>
                <div className={styles.dateContainerHeading}>
                1. Select a Date
                </div>
                <div className={styles.dateCardsSection}>
                    <div className={styles.dateCardsSectionHeading}>
                        <h3>June 2022</h3>
                        <h3>July 2022</h3>
                    </div>
                    <div className={styles.dateCards}>
                        <div className={styles.dateCard}>
                            <h4>SUN</h4>
                            <h2>12</h2>
                        </div>
                        <div className={styles.dateCard}>
                            <h4>SUN</h4>
                            <h2>12</h2>
                        </div>
                        <div className={styles.dateCard}>
                            <h4>SUN</h4>
                            <h2>12</h2>
                        </div>
                        <div className={styles.dateCard}>
                            <h4>SUN</h4>
                            <h2>12</h2>
                        </div>
                        <div className={styles.dateCard}>
                            <h4>SUN</h4>
                            <h2>12</h2>
                        </div>
                        <div className={styles.dateCard}>
                            <h4>SUN</h4>
                            <h2>12</h2>
                        </div>
                        <div className={styles.dateCard}>
                            <h4>SUN</h4>
                            <h2>12</h2>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.rightSectionText}>
                    <h3>Order for</h3>
                    <h2>Sunday, June 12, 2022</h2>
            </div>
        </div>
        <div className={styles.packsContainer}>
            <div className={styles.packs}>
                <div className={styles.pack}>
                    <div className={styles.packHeading}>
                        <div className={styles.packHeadingLeftSection}>
                        <h2>Pack#1</h2>
                        <div className={styles.plusMinusButton}>
                            <button>-</button>
                            <input type="number" value={'1'} step={'1'} min={'1'} max={'1000'}/>
                            <button>+</button>
                        </div>
                        <RiQuestionFill style={{paddingTop: '8px', color:'#243843'}}  size={'35px'}/>
                        </div>
                        <div className={styles.rightSection}>
                            <div className={styles.deleteButton}>
                                <RiDeleteBin6Fill  size={'15px'}/>
                                <h5 >Delete Pack</h5>
                            </div>
                        </div>
                    </div>
                    <div className={styles.innerPackContainer}>
                        <div className={styles.leftSection}>
                            <h2>2. Choose your Proteins</h2>
                            <div className={styles.cards}>
                                <div className={styles.card}>
                                    No protiens
                                </div>
                                <div className={styles.card}>
                                    No protiens
                                </div>
                                <div className={styles.card}>
                                    No protiens
                                </div>
                                <div className={styles.card}>
                                No protiensNo protien
                                </div>
                                <div className={styles.card}>
                                No protiensNo protien
                                </div>
                                <div className={styles.card}>
                                No protiensNo protien
                                </div>
                                <div className={styles.card}>
                                No protiensNo protien
                                </div>
                                <div className={styles.card}>
                                No protiensNo protien
                                </div>
                                <div className={styles.card}>
                                No protiensNo protien
                                </div>
                                <div className={styles.card}>
                                No protiensNo protien
                                </div>
                                <div className={styles.card}>
                                No protiensNo protien
                                </div>
                                <div className={styles.card}>
                                No protiensNo protien
                                </div>
                                <div className={styles.card}>
                                    No protiens
                                </div>
                                <div className={styles.card}>
                                    No protiens
                                </div>
                                <div className={styles.card}>
                                    No protiens
                                </div>
                            </div>
                            <h2>3. Choose your quantity</h2>
                            <div className={styles.cards}>
                                <div className={styles.card}>
                                    1 lbs
                                </div>
                                <div className={styles.card}>
                                    2 lbs
                                </div>
                                <div className={styles.card}>
                                    3 lbs
                                </div>

                            </div>
                        </div>
                        <div className={styles.rightSection}>
                            <div className={styles.carbsContainer}>
                                <div className={styles.carbsBoldText}>
                                    <h3>Calories</h3>
                                    <h3>O cal<span>(0)</span></h3>
                                </div>
                                <div className={styles.carbsBoldText}>
                                    <h3>Calories</h3>
                                    <h3>O cal<span>(0)</span></h3>
                                </div>
                                <div className={styles.carbsSlimText}>
                                    <h3>Calories</h3>
                                    <h3>O cal<span>(0)</span></h3>
                                </div>
                                <div className={styles.carbsBoldText}>
                                    <h3>Calories</h3>
                                    <h3>O cal<span>(0)</span></h3>
                                </div>
                                <div className={styles.carbsBoldText}>
                                    <h3>Calories</h3>
                                    <h3>O cal<span>(0)</span></h3>
                                </div>
                                <div className={styles.carbsBoldText}>
                                    <h3>Calories</h3>
                                    <h3>O cal<span>(0)</span></h3>
                                </div>
                                <div className={styles.carbsSlimText}>
                                    <h3>Calories</h3>
                                    <h3>O cal<span>(0)</span></h3>
                                </div>
                                <div className={styles.carbsSlimText}>
                                    <h3>Calories</h3>
                                    <h3>O cal<span>(0)</span></h3>
                                </div>
                                <div className={styles.carbsSlimText}>
                                    <h3>Calories</h3>
                                    <h3>O cal<span>(0)</span></h3>
                                </div>
                                <div className={styles.carbsBoldText}>
                                    <h3>Calories</h3>
                                    <h3>O cal<span>(0)</span></h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.buttons}>
                <div className={styles.upperButtons}>
                <div className={styles.leftButton}>
                    <IoMdAddCircle size={'25px'} />
                    <h5>Add another Pack</h5>
                </div>
                <div className={styles.rightButton}>
                    <MdShoppingBasket size={'25px'} />
                    <h5>Continue to Cart</h5>
                </div>
                </div>
                <div className={styles.lowerButton}>
                <div className={styles.leftButton}>
                    <IoMdAddCircle size={'25px'} />
                    <h5>Add Extra Add-on</h5>
                </div>
                </div>
            </div>
        </div>
        </div>
    </div>
  )
}

export default ProteinsByThePound