import React, { useState } from 'react';
import {RiQuestionFill} from 'react-icons/ri';
import {RiDeleteBin6Fill} from 'react-icons/ri';
import {IoMdAddCircle} from 'react-icons/io';
import {MdShoppingBasket} from 'react-icons/md';
import {ProgressBar} from 'react-bootstrap'
import styles from '../../styles/component-styles/ProteinsByThePound/ProtiensByThePound.module.css';

function ProteinsByThePound() {
    const [caloriesData, setCaloriesData] = useState({
        calories: '',
        totalFat: '',
        saturatedFat: '',
        cholestrol: '',
        sodium: '',
        totalCarbs: '',
        dietryFibres: '',
        totalSugars: '',
        includedSugars: '',
        protein: ''
    });
    console.log(caloriesData);

    const proteinsData = [
        {
            name: 'No Proteins',
            calories: '',
            totalFat: '',
            saturatedFat: '',
            cholestrol: '',
            sodium: '',
            totalCarbs: '',
            dietryFibres: '',
            totalSugars: '',
            includedSugars: '',
            protein: ''
        },
        {
            name: 'House Quinoa',
            calories: {
                num: 104,
                precentage: 5
            },
            totalFat: {
                num: 1.60,
                precentage: 2
            },
            saturatedFat: {
                num: 0.00,
                precentage: 0
            },
            cholestrol: {
                num: 0.00,
                precentage: 0
            },
            sodium: {
                num: 4.00,
                precentage: 0
            },
            totalCarbs: {
                num: 18.40,
                precentage: 7
            },
            dietryFibres: {
                num: 2.40,
                precentage: 9
            },
            totalSugars: {
                num: 0.00,
                precentage: 0
            },
            includedSugars: {
                num: 0.00,
                precentage: 0
            },
            protein: {
                num: 4.00,
                precentage: 8
            }
        },
        {
            name: 'House Brown Rice',
            calories: {
                num: 551,
                precentage: 28
            },
            totalFat: {
                num: 4.06,
                precentage: 5
            },
            saturatedFat: {
                num: 0.81,
                precentage: 4
            },
            cholestrol: {
                num: 0.00,
                precentage: 0
            },
            sodium: {
                num: 143.11,
                precentage: 6
            },
            totalCarbs: {
                num: 115.97,
                precentage: 42
            },
            dietryFibres: {
                num: 5.19,
                precentage: 19
            },
            totalSugars: {
                num: 1.20,
                precentage: 0
            },
            includedSugars: {
                num: 0.00,
                precentage: 0
            },
            protein: {
                num: 11.41,
                precentage: 23
            }
        },

    ];

    const handleProteins = (val)=>{
        setCaloriesData(val);
    }

    console.log(caloriesData.calories.precentage)

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
                            {proteinsData.map((val,i)=>{
                                return (
                                    <div className={styles.card} key={i} onClick={()=>{handleProteins(val)}}>
                                    {val.name}
                                    </div>
                                )
                            })}
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
                                    <div className={styles.text}>
                                    <h3>Calories</h3>
                                    {caloriesData.calories.num!==''?(<h3>{caloriesData.calories.num}cal<span>({caloriesData.calories.precentage}%)</span></h3>):(<h3>0 cal<span>(0%)</span></h3>)}
                                    </div>
                                    <ProgressBar now={caloriesData.calories.precentage===undefined?0:caloriesData.calories.precentage} variant={'success'} style={{height: '6px'}}/> 
                                </div>
                                <div className={styles.carbsBoldText}>
                                    <div className={styles.text}>
                                    <h3>Total Fat</h3>
                                    {caloriesData.totalFat.num!==''?(<h3>{caloriesData.totalFat.num}cal<span>({caloriesData.totalFat.precentage}%)</span></h3>):(<h3>0 cal<span>(0%)</span></h3>)}
                                    </div>
                                    <ProgressBar now={caloriesData.totalFat.precentage===undefined?0:caloriesData.totalFat.precentage} variant={'danger'} style={{height: '6px'}}/> 
                                </div>
                                <div className={styles.carbsSlimText}>
                                <div className={styles.text}>
                                    <h3>Calories</h3>
                                    <h3>O cal<span>(0)</span></h3>
                                    </div>
                                    <ProgressBar now={60} variant={'warning'} style={{height: '6px'}}/> 
                                </div>
                                <div className={styles.carbsBoldText}>
                                <div className={styles.text}>
                                    <h3>Calories</h3>
                                    <h3>O cal<span>(0)</span></h3>
                                    </div>
                                    <ProgressBar now={60} variant={'info'} style={{height: '6px'}}/> 
                                </div>
                                <div className={styles.carbsBoldText}>
                                <div className={styles.text}>
                                    <h3>Calories</h3>
                                    <h3>O cal<span>(0)</span></h3>
                                    </div>
                                    <ProgressBar now={60} variant={'success'} style={{height: '6px'}}/> 
                                </div>
                                <div className={styles.carbsBoldText}>
                                <div className={styles.text}>
                                    <h3>Calories</h3>
                                    <h3>O cal<span>(0)</span></h3>
                                    </div>
                                    <ProgressBar now={60} variant={'danger'} style={{height: '6px'}}/> 
                                </div>
                                <div className={styles.carbsSlimText}>
                                <div className={styles.text}>
                                    <h3>Calories</h3>
                                    <h3>O cal<span>(0)</span></h3>
                                    </div>
                                    <ProgressBar now={60} variant={'warning'} style={{height: '6px'}}/> 
                                </div>
                                <div className={styles.carbsSlimText}>
                                <div className={styles.text}>
                                    <h3>Calories</h3>
                                    <h3>O cal<span>(0)</span></h3>
                                    </div>
                                    <ProgressBar now={60} variant={'info'} style={{height: '6px'}}/> 
                                </div>
                                <div className={styles.carbsSlimText}>
                                <div className={styles.text}>
                                    <h3>Calories</h3>
                                    <h3>O cal<span>(0)</span></h3>
                                    </div>
                                    <ProgressBar now={60} variant={'danger'} style={{height: '6px'}}/> 
                                </div>
                                <div className={styles.carbsBoldText}>
                                <div className={styles.text}>
                                    <h3>Calories</h3>
                                    <h3>O cal<span>(0)</span></h3>
                                    </div>
                                    <ProgressBar now={60} variant={'success'} style={{height: '6px'}}/> 
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
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