import React from 'react';
import {useState} from 'react'
import styles from '../../styles/component-styles/subscription-styles/UserPlanSelection.module.css';
import { InputGroup } from 'react-bootstrap';
import { FormControl } from 'react-bootstrap';
import { IoIosWarning } from "react-icons/io";
import { IoIosArrowDown } from 'react-icons/io';
import { GiMeal } from 'react-icons/gi';
import { FaShoppingCart } from 'react-icons/fa';

function UserPlanSelection() {
    const yourPlan = [
        {btnTxt: 'The Everything Plan',
        btnDesc: "This plan combines every menu option we offer. It's perfect if you love to mix your meal preferences like low carb, vegan, vegetarian, pescatarian or lifestyle. ***PLEASE NOTE: IN ORDER TO AVOID DUPLICATES OF VARIATIONS YOU MUST SELECT YOUR MEALS WITHIN THE PLAN***"
        },
        {btnTxt: 'The Lifestyle Plan',
        btnDesc: "Every meal in this plan was created to promote a healthy lifestyle. Select from the Normal portion (4-5 oz of lean protein, 2-4 oz of complex carbohydrates and 4-6 oz of nutrient rich vegetables) or Muscle Builder portion (6-8 oz of lean protein, 3-6 oz of complex carbohydrates and 6-8 oz of nutrient rich vegetables)"
        },
        {btnTxt: 'The Low Carb Plan',
        btnDesc: "Our low carb selections are completely grain free and packed with nutrient dense vegetable swaps like zucchini noodles, Cauliflower Corn Grits and Turnip Mash. Menus from this plan include top sellers like Shrimp and Cauliflower Grits, Hickory Burger with Caramelized Onions and Mixed Vegetables and Thai Turkey Lettuce Wrap over Cauliflower Rice."
        },
        {btnTxt: 'The Pescatarian Plan',
        btnDesc: "This plan contains a largely plant-based diet of whole grains, nuts, legumes, produce and healthy fats, with seafood playing a key role as a main protein source. You can expect some delicious healthy takes on Louisiana Classics like Shrimp and Vegan Sausage Jambalaya as well as some International cuisine like our Red Curry Shrimp over Brown Rice with Baby Bok Choy and our Agave Lime Shrimp over Roasted Red Peppers."
        },
        {btnTxt: 'The Vegan Plan',
        btnDesc: "Vegan diets are an effective way to improve health if done correctly! Our completely plant based menus offer a diverse mix of legumes, grains, and vegetables. We keep eating plant based exciting with menu options like BBQ tofu over Cauliflower Corn Grits, Shitake Mushroom Eggroll Bowl and Kale and Quinoa Hummus Bowl."
        },
        {btnTxt: 'The Vegaterian Plan',
        btnDesc: "Apart from the ethical and environmental benefits of cutting meat from your diet, a well-planned vegetarian diet may also reduce your risk of chronic disease, support weight loss and improve the quality of your diet. Our Vegetarian menu items include a diverse mix of fruits, vegetables, grains, healthy fats and proteins. Protein that would typically be provided by meat in your diet, is replaced by a variety of protein-rich plant foods like nuts, seeds, legumes, mushrooms and tofu."
        },
    ];
    const portionSizeBtnTxt = [
        'Regular',
        'Muscle Builder (Large)'
    ];
    const billingRenewalCycle = [
        '1 Week',
        '2 Week',
        '3 Week'
    ];
    const yourPlan2 = [
        '1 Week Plan with Breakfast',
        '1 Week Plan without Breakfast'
    ];
    const daysPerWeek = [
        '5 Days Per Week',
        '6 Days Per Week',
        '7 Days Per Week'
    ];
    const mealsPerDay = [
        '1 meal',
        '2 meals',
        '3 meals',
        '4 meals'
    ];

    const [yourPlanBtnDesc, setyourPlanBtnDesc] = useState('');

    const handleYourPlanClick = (val)=>{
        setyourPlanBtnDesc(val.btnDesc);
    }

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
              <div className={styles.buttonsGroup} >
                {yourPlan.map((val,index)=>{
                    return (
                        <div className={styles.button} key={index} onClick={()=>{handleYourPlanClick(val)}}>
                            {val.btnTxt}
                        </div>
                    )
                })}
              </div>
              <div className={styles.desc}>
                {yourPlanBtnDesc}
            </div>
            </div>
            <div className={styles.card}>
              <div className={styles.heading}>
                  <h3>2. Choose your Portion Size</h3>
              </div>
              <div className={styles.buttonsGroup}>
                {portionSizeBtnTxt.map((val,i)=>{
                    return(<div className={styles.button} key={i}>
                    {val}
                </div>)})}
              </div>
            </div>
            <div className={styles.card}>
              <div className={styles.heading}>
                  <h3>3. Choose your Billing Renewal Cycle</h3>
              </div>
              <div className={styles.buttonsGroup}>
               {billingRenewalCycle.map((val,i)=>{
                   return( <div className={styles.button} key={i}>
                    {val}
                </div>)
               })}
              </div>
            </div>
            <div className={styles.card}>
              <div className={styles.heading}>
                  <h3>4. Choose your plan</h3>
              </div>
              <div className={styles.buttonsGroup}>
                {yourPlan2.map((val,i)=>{
                    return(<div className={styles.button} key={i}>
                        {val}
                    </div>)
                })}
              </div>
            </div>
            <div className={styles.card}>
              <div className={styles.heading}>
                  <h3>5. How many days per week do you want food?</h3>
              </div>
              <div className={styles.buttonsGroup}>
                {daysPerWeek.map((val,i)=>{
                    return(<div className={styles.button} key={i}>
                        {val}
                    </div>)
                })}
              </div>
            </div>
            <div className={styles.card}>
              <div className={styles.heading}>
                  <h3>6. How many meals per day?</h3>
              </div>
              <div className={styles.buttonsGroup}>
                {mealsPerDay.map((val,i)=>{
                    return(<div className={styles.button} key={i}>
                        {val}
                    </div>)
                })}
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
            <div className={styles.overViewItem}>
                <div><li>Plan</li><h3>The Everything Plan</h3></div>
                <div><li>Portion Size</li><h3>Regular</h3></div>
                <div><li>Billing Renewal Cycle</li><h3>1 Week</h3></div>
                <div><li>Billing Plan</li><h3>1 Week Plan with Breakfast</h3></div>
                <div><li>Days per week</li><h3>5 Days per Week</h3></div>
                <div><li>Meals per day</li><h3>1 Meal</h3></div>
                <div><li>Price per meal</li><h3>$13.00</h3></div>
                <div><li>Starting on</li><h3>2022-06-15</h3></div>
            </div>
            <div className={styles.bottom}>
              Starting at <h4>$65.00</h4>
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