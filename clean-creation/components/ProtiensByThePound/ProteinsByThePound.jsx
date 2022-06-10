import React, { useState } from 'react';
import {RiQuestionFill} from 'react-icons/ri';
import {RiDeleteBin6Fill} from 'react-icons/ri';
import {IoMdAddCircle} from 'react-icons/io';
import {MdShoppingBasket} from 'react-icons/md';
import {ProgressBar} from 'react-bootstrap'
import styles from '../../styles/component-styles/ProteinsByThePound/ProtiensByThePound.module.css';

function ProteinsByThePound() {
    const [caloriesData, setCaloriesData] = useState({
        calories: {
            num: '',
            percentage: ''
        },
        totalFat: {
            num: '',
            percentage: ''
        },
        saturatedFat: {
            num: '',
            percentage: ''
        },
        cholestrol: {
            num: '',
            percentage: ''
        },
        sodium: {
            num: '',
            percentage: ''
        },
        totalCarbs: {
            num: '',
            percentage: ''
        },
        dietryFibres: {
            num: '',
            percentage: ''
        },
        totalSugars: {
            num: '',
            percentage: ''
        },
        includedSugars: {
            num: '',
            percentage: ''
        },
        protein: {
            num: '',
            percentage: ''
        }
    });


    const [proteinDataLbs, setproteinDataLbs] = useState({
        calories: {
            num: '',
            percentage: ''
        },
        totalFat: {
            num: '',
            percentage: ''
        },
        saturatedFat: {
            num: '',
            percentage: ''
        },
        cholestrol: {
            num: '',
            percentage: ''
        },
        sodium: {
            num: '',
            percentage: ''
        },
        totalCarbs: {
            num: '',
            percentage: ''
        },
        dietryFibres: {
            num: '',
            percentage: ''
        },
        totalSugars: {
            num: '',
            percentage: ''
        },
        includedSugars: {
            num: '',
            percentage: ''
        },
        protein: {
            num: '',
            percentage: ''
        }
    });

    const buttonLbs = [
        '1 lbs',
        '2 lbs',
        '3 lbs'
    ]

    const proteinsData = [
        {
            name: 'No Proteins',
            calories: {
                num: '',
                percentage: ''
            },
            totalFat: {
                num: '',
                percentage: ''
            },
            saturatedFat: {
                num: '',
                percentage: ''
            },
            cholestrol: {
                num: '',
                percentage: ''
            },
            sodium: {
                num: '',
                percentage: ''
            },
            totalCarbs: {
                num: '',
                percentage: ''
            },
            dietryFibres: {
                num: '',
                percentage: ''
            },
            totalSugars: {
                num: '',
                percentage: ''
            },
            includedSugars: {
                num: '',
                percentage: ''
            },
            protein: {
                num: '',
                percentage: ''
            }
        },
        {
            name: 'House Quinoa',
            calories: {
                num: 104,
                percentage: 5
            },
            totalFat: {
                num: 1.60,
                percentage: 2
            },
            saturatedFat: {
                num: 0.00,
                percentage: 0
            },
            cholestrol: {
                num: 0.00,
                percentage: 0
            },
            sodium: {
                num: 4.00,
                percentage: 0
            },
            totalCarbs: {
                num: 18.40,
                percentage: 7
            },
            dietryFibres: {
                num: 2.40,
                percentage: 9
            },
            totalSugars: {
                num: 0.00,
                percentage: 0
            },
            includedSugars: {
                num: 0.00,
                percentage: 0
            },
            protein: {
                num: 4.00,
                percentage: 8
            }
        },
        {
            name: 'House Brown Rice',
            calories: {
                num: 551,
                percentage: 28
            },
            totalFat: {
                num: 4.06,
                percentage: 5
            },
            saturatedFat: {
                num: 0.81,
                percentage: 4
            },
            cholestrol: {
                num: 0.00,
                percentage: 0
            },
            sodium: {
                num: 143.11,
                percentage: 6
            },
            totalCarbs: {
                num: 115.97,
                percentage: 42
            },
            dietryFibres: {
                num: 5.19,
                percentage: 19
            },
            totalSugars: {
                num: 1.20,
                percentage: 0
            },
            includedSugars: {
                num: 0.00,
                percentage: 0
            },
            protein: {
                num: 11.41,
                percentage: 23
            }
        },
        {
            name: 'House Brussel Sprouts',
            calories: {
                num: 292,
                percentage: 15
            },
            totalFat: {
                num: 12.69,
                percentage: 16
            },
            saturatedFat: {
                num: 1.09,
                percentage: 5
            },
            cholestrol: {
                num: 0.00,
                percentage: 0
            },
            sodium: {
                num: 113.43,
                percentage: 5
            },
            totalCarbs: {
                num: 40.59,
                percentage: 15
            },
            dietryFibres: {
                num: 17.25,
                percentage: 62
            },
            totalSugars: {
                num: 9.97,
                percentage: 0
            },
            includedSugars: {
                num: 0.00,
                percentage: 0
            },
            protein: {
                num: 15.34,
                percentage: 31
            }
        },
        {
            name: 'House Cauliflower',
            calories: {
                num: 142,
                percentage: 7
            },
            totalFat: {
                num: 1.56,
                percentage: 2
            },
            saturatedFat: {
                num: 0.75,
                percentage: 4
            },
            cholestrol: {
                num: 0.00,
                percentage: 0
            },
            sodium: {
                num: 170.00,
                percentage: 7
            },
            totalCarbs: {
                num: 28.19,
                percentage: 10
            },
            dietryFibres: {
                num: 11.31,
                percentage: 40
            },
            totalSugars: {
                num: 10.81,
                percentage: 0
            },
            includedSugars: {
                num: 0.00,
                percentage: 0
            },
            protein: {
                num: 10.88,
                percentage: 22
            }
        },
        {
            name: 'House Chicken',
            calories: {
                num: 1039,
                percentage: 52
            },
            totalFat: {
                num: 44.64,
                percentage: 57
            },
            saturatedFat: {
                num: 5.73,
                percentage: 29
            },
            cholestrol: {
                num: 491.67,
                percentage: 164
            },
            sodium: {
                num: 303.03,
                percentage: 13
            },
            totalCarbs: {
                num: 0.00,
                percentage: 0
            },
            dietryFibres: {
                num: 0.00,
                percentage: 0
            },
            totalSugars: {
                num: 0.00,
                percentage: 0
            },
            includedSugars: {
                num: 0.00,
                percentage: 0
            },
            protein: {
                num: 151.55,
                percentage: 303
            }
        },
        {
            name: 'House Chicken',
            calories: {
                num: 304,
                percentage: 15
            },
            totalFat: {
                num: 19.80,
                percentage: 25
            },
            saturatedFat: {
                num: 1.58,
                percentage: 8
            },
            cholestrol: {
                num: 0.00,
                percentage: 0
            },
            sodium: {
                num: 5.10,
                percentage: 0
            },
            totalCarbs: {
                num: 32.56,
                percentage: 12
            },
            dietryFibres: {
                num: 15.17,
                percentage: 54
            },
            totalSugars: {
                num: 9.51,
                percentage: 0
            },
            includedSugars: {
                num: 0.00,
                percentage: 0
            },
            protein: {
                num: 7.51,
                percentage: 15
            }
        },
        {
            name: 'House Ground Turkey',
            calories: {
                num: 180,
                percentage: 9
            },
            totalFat: {
                num: 10.00,
                percentage: 13
            },
            saturatedFat: {
                num: 2.00,
                percentage: 10
            },
            cholestrol: {
                num: 80.00,
                percentage: 27
            },
            sodium: {
                num: 80.00,
                percentage: 3
            },
            totalCarbs: {
                num: 0.00,
                percentage: 0
            },
            dietryFibres: {
                num: 0.00,
                percentage: 0
            },
            totalSugars: {
                num: 0.00,
                percentage: 0
            },
            includedSugars: {
                num: 0.00,
                percentage: 0
            },
            protein: {
                num: 20.00,
                percentage: 40
            }
        },

    ];

    const handleProteins = (val)=>{
        setproteinDataLbs({
            calories: {
                num: '',
                percentage: ''
            },
            totalFat: {
                num: '',
                percentage: ''
            },
            saturatedFat: {
                num: '',
                percentage: ''
            },
            cholestrol: {
                num: '',
                percentage: ''
            },
            sodium: {
                num: '',
                percentage: ''
            },
            totalCarbs: {
                num: '',
                percentage: ''
            },
            dietryFibres: {
                num: '',
                percentage: ''
            },
            totalSugars: {
                num: '',
                percentage: ''
            },
            includedSugars: {
                num: '',
                percentage: ''
            },
            protein: {
                num: '',
                percentage: ''
            }
        })
        setCaloriesData(val);
    }

    const handleProteinsLbs = (calories,btnTxt)=>{
        if(btnTxt==='1 lbs'){
            setproteinDataLbs({
                calories: {
                    num: calories.calories.num,
                    percentage: calories.calories.percentage
                },
                totalFat: {
                    num: calories.totalFat.num,
                    percentage: calories.totalFat.percentage
                },
                saturatedFat: {
                    num: calories.saturatedFat.num,
                    percentage: calories.saturatedFat.percentage
                },
                cholestrol: {
                    num: calories.cholestrol.num,
                    percentage: calories.cholestrol.percentage
                },
                sodium: {
                    num: calories.sodium.num,
                    percentage: calories.sodium.percentage
                },
                totalCarbs: {
                    num: calories.totalCarbs.num,
                    percentage: calories.totalCarbs.percentage
                },
                dietryFibres: {
                    num: calories.dietryFibres.num,
                    percentage: calories.dietryFibres.percentage
                },
                totalSugars: {
                    num: calories.totalSugars.num,
                    percentage: calories.totalSugars.percentage
                },
                includedSugars: {
                    num: calories.includedSugars.num,
                    percentage: calories.includedSugars.percentage
                },
                protein: {
                    num: calories.protein.num,
                    percentage: calories.protein.percentage
                }
            })
        }
        else if (btnTxt==='2 lbs'){
            setproteinDataLbs({
                calories: {
                    num: calories.calories.num * 2,
                    percentage: calories.calories.percentage*2
                },
                totalFat: {
                    num: calories.totalFat.num *2,
                    percentage: calories.totalFat.percentage*2
                },
                saturatedFat: {
                    num: calories.saturatedFat.num *2,
                    percentage: calories.saturatedFat.percentage *2
                },
                cholestrol: {
                    num: calories.cholestrol.num *2,
                    percentage: calories.cholestrol.percentage *2
                },
                sodium: {
                    num: calories.sodium.num *2,
                    percentage: calories.sodium.percentage *2
                },
                totalCarbs: {
                    num: calories.totalCarbs.num*2,
                    percentage: calories.totalCarbs.percentage *2
                },
                dietryFibres: {
                    num: calories.dietryFibres.num *2,
                    percentage: calories.dietryFibres.percentage *2
                },
                totalSugars: {
                    num: calories.totalSugars.num*2,
                    percentage: calories.totalSugars.percentage*2
                },
                includedSugars: {
                    num: calories.includedSugars.num*2,
                    percentage: calories.includedSugars.percentage*2
                },
                protein: {
                    num: calories.protein.num*2,
                    percentage: calories.protein.percentage*2
                }
            })
        }
        else if (btnTxt==='3 lbs'){
            setproteinDataLbs({
                calories: {
                    num: calories.calories.num * 3,
                    percentage: calories.calories.percentage*3
                },
                totalFat: {
                    num: calories.totalFat.num *3,
                    percentage: calories.totalFat.percentage*3
                },
                saturatedFat: {
                    num: calories.saturatedFat.num *3,
                    percentage: calories.saturatedFat.percentage *3
                },
                cholestrol: {
                    num: calories.cholestrol.num *3,
                    percentage: calories.cholestrol.percentage *3
                },
                sodium: {
                    num: calories.sodium.num *3,
                    percentage: calories.sodium.percentage *3
                },
                totalCarbs: {
                    num: calories.totalCarbs.num*3,
                    percentage: calories.totalCarbs.percentage *3
                },
                dietryFibres: {
                    num: calories.dietryFibres.num *3,
                    percentage: calories.dietryFibres.percentage *3
                },
                totalSugars: {
                    num: calories.totalSugars.num*3,
                    percentage: calories.totalSugars.percentage*3
                },
                includedSugars: {
                    num: calories.includedSugars.num*3,
                    percentage: calories.includedSugars.percentage*3
                },
                protein: {
                    num: calories.protein.num*3,
                    percentage: calories.protein.percentage*3
                }
            })
        }
    }

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
                                {buttonLbs.map((val,i)=>{
                                    return (<div className={styles.card} onClick={()=>{handleProteinsLbs(caloriesData,val)}} key={i}>
                                        {val}
                                    </div>)
                                })}
                            </div>
                        </div>
                        <div className={styles.rightSection}>
                            <div className={styles.carbsContainer}>
                                <div className={styles.carbsBoldText}>
                                    <div className={styles.text}>
                                    <h3>Calories</h3>
                                    {caloriesData.calories.num!==''?(<h3>{(proteinDataLbs.calories.num!==''?proteinDataLbs.calories.num:caloriesData.calories.num).toFixed(2)}cal<span>({proteinDataLbs.calories.percentage!==''?proteinDataLbs.calories.percentage:caloriesData.calories.percentage}%)</span></h3>):(<h3>0 cal<span>(0%)</span></h3>)}
                                    </div>
                                    <ProgressBar now={proteinDataLbs.calories.percentage!==''?proteinDataLbs.calories.percentage:caloriesData.calories.percentage===''?0:caloriesData.calories.percentage} style={{height: '6px'}}/> 
                                </div>
                                <div className={styles.carbsBoldText}>
                                    <div className={styles.text}>
                                    <h3>Total Fat</h3>
                                    {caloriesData.totalFat.num!==''?(<h3>{(proteinDataLbs.totalFat.num!==''?proteinDataLbs.totalFat.num:caloriesData.totalFat.num).toFixed(2)}cal<span>({proteinDataLbs.totalFat.percentage!==''?proteinDataLbs.totalFat.percentage:caloriesData.totalFat.percentage}%)</span></h3>):(<h3>0 cal<span>(0%)</span></h3>)}
                                    </div>
                                    <ProgressBar now={proteinDataLbs.totalFat.percentage!==''?proteinDataLbs.totalFat.percentage:caloriesData.totalFat.percentage===''?0:caloriesData.totalFat.percentage} variant={'danger'} style={{height: '6px'}}/> 
                                </div>
                                <div className={styles.carbsSlimText}>
                                <div className={styles.text}>
                                    <h3>Saturated Fat</h3>
                                    {caloriesData.saturatedFat.num!==''?(<h3>{(proteinDataLbs.saturatedFat.num!==''?proteinDataLbs.saturatedFat.num:caloriesData.saturatedFat.num).toFixed(2)}gr<span>({proteinDataLbs.saturatedFat.percentage!==''?proteinDataLbs.saturatedFat.percentage:caloriesData.saturatedFat.percentage}%)</span></h3>):(<h3>O gr<span>(0)</span></h3>)}
                                    </div>
                                    <ProgressBar now={proteinDataLbs.saturatedFat.percentage!==''?proteinDataLbs.saturatedFat.percentage:caloriesData.saturatedFat.percentage===''?0:caloriesData.saturatedFat.percentage} variant={'warning'} style={{height: '6px'}}/> 
                                </div>
                                <div className={styles.carbsBoldText}>
                                <div className={styles.text}>
                                    <h3>Cholestrol</h3>
                                    {caloriesData.cholestrol.num!==''?(<h3>{(proteinDataLbs.cholestrol.num!==''?proteinDataLbs.cholestrol.num:caloriesData.cholestrol.num).toFixed(2)}mg<span>({proteinDataLbs.cholestrol.percentage!==''?proteinDataLbs.cholestrol.percentage:caloriesData.cholestrol.percentage}%)</span></h3>):(<h3>O mg<span>(0)</span></h3>)}
                                    </div>
                                    <ProgressBar now={proteinDataLbs.cholestrol.percentage!==''?proteinDataLbs.cholestrol.percentage:caloriesData.cholestrol.percentage===''?0:caloriesData.cholestrol.percentage}  style={{height: '6px'}}/> 
                                </div>
                                <div className={styles.carbsBoldText}>
                                <div className={styles.text}>
                                    <h3>Sodium</h3>
                                    {caloriesData.sodium.num!==''?(<h3>{(proteinDataLbs.sodium.num!==''?proteinDataLbs.sodium.num:caloriesData.sodium.num).toFixed(2)}mg<span>({proteinDataLbs.sodium.percentage!==''?proteinDataLbs.sodium.percentage:caloriesData.sodium.percentage}%)</span></h3>):(<h3>O mg<span>(0)</span></h3>)}
                                    </div>
                                    <ProgressBar now={proteinDataLbs.sodium.percentage!==''?proteinDataLbs.sodium.percentage:caloriesData.sodium.percentage===''?0:caloriesData.sodium.percentage} variant={'success'} style={{height: '6px'}}/>  
                                </div>
                                <div className={styles.carbsBoldText}>
                                <div className={styles.text}>
                                    <h3>Total Carbohydrates</h3>
                                    {caloriesData.totalCarbs.num!==''?(<h3>{(proteinDataLbs.totalCarbs.num!==''?proteinDataLbs.totalCarbs.num:caloriesData.totalCarbs.num).toFixed(2)}gr<span>({proteinDataLbs.totalCarbs.percentage!==''?proteinDataLbs.totalCarbs.percentage:caloriesData.totalCarbs.percentage}%)</span></h3>):(<h3>O gr<span>(0)</span></h3>)}
                                    </div>
                                    <ProgressBar now={proteinDataLbs.totalCarbs.percentage!==''?proteinDataLbs.totalCarbs.percentage:caloriesData.totalCarbs.percentage===''?0:caloriesData.totalCarbs.percentage} variant={'danger'} style={{height: '6px'}}/>   
                                </div>
                                <div className={styles.carbsSlimText}>
                                <div className={styles.text}>
                                    <h3>Dietry Fiber</h3>
                                    {caloriesData.dietryFibres.num!==''?(<h3>{(proteinDataLbs.dietryFibres.num!==''?proteinDataLbs.dietryFibres.num:caloriesData.dietryFibres.num).toFixed(2)}gr<span>({proteinDataLbs.dietryFibres.percentage!==''?proteinDataLbs.dietryFibres.percentage:caloriesData.dietryFibres.percentage}%)</span></h3>):(<h3>O gr<span>(0)</span></h3>)}
                                    </div>
                                    <ProgressBar now={proteinDataLbs.dietryFibres.percentage!==''?proteinDataLbs.dietryFibres.percentage:caloriesData.dietryFibres.percentage===''?0:caloriesData.dietryFibres.percentage} variant={'success'} style={{height: '6px'}}/>   
                                </div>
                                <div className={styles.carbsSlimText}>
                                <div className={styles.text}>
                                    <h3>Total Sugars</h3>
                                    {caloriesData.totalSugars.num!==''?(<h3>{(proteinDataLbs.totalSugars.num!==''?proteinDataLbs.totalSugars.num:caloriesData.totalSugars.num).toFixed(2)}gr<span>({proteinDataLbs.totalSugars.percentage!==''?proteinDataLbs.totalSugars.percentage:caloriesData.totalSugars.percentage}%)</span></h3>):(<h3>O gr<span>(0)</span></h3>)}
                                    </div>
                                    <ProgressBar now={proteinDataLbs.totalSugars.percentage!==''?proteinDataLbs.totalSugars.percentage:caloriesData.totalSugars.percentage===''?0:caloriesData.totalSugars.percentage} variant={'warning'} style={{height: '6px'}}/>  
                                </div>
                                <div className={styles.carbsSlimText}>
                                <div className={styles.text}>
                                    <h3>Included Sugars</h3>
                                    {caloriesData.includedSugars.num!==''?(<h3>{(proteinDataLbs.includedSugars.num!==''?proteinDataLbs.includedSugars.num:caloriesData.includedSugars.num).toFixed(2)}gr<span>({proteinDataLbs.includedSugars.percentage!==''?proteinDataLbs.includedSugars.percentage:caloriesData.includedSugars.percentage}%)</span></h3>):(<h3>O gr<span>(0)</span></h3>)}
                                    </div>
                                    <ProgressBar now={proteinDataLbs.includedSugars.percentage!==''?proteinDataLbs.includedSugars.percentage:caloriesData.includedSugars.percentage===''?0:caloriesData.includedSugars.percentage} variant={'success'} style={{height: '6px'}}/>   
                                </div>
                                <div className={styles.carbsBoldText}>
                                <div className={styles.text}>
                                    <h3>Protein</h3>
                                    {caloriesData.protein.num!==''?(<h3>{(proteinDataLbs.protein.num!==''?proteinDataLbs.protein.num:caloriesData.protein.num).toFixed(2)}gr<span>({proteinDataLbs.protein.percentage!==''?proteinDataLbs.protein.percentage:caloriesData.protein.percentage}%)</span></h3>):(<h3>O gr<span>(0)</span></h3>)}
                                    </div>
                                    <ProgressBar now={proteinDataLbs.protein.percentage!==''?proteinDataLbs.protein.percentage:caloriesData.protein.percentage===''?0:caloriesData.protein.percentage} variant={'danger'} style={{height: '6px'}}/> 
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