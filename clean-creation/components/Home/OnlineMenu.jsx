import React from "react";
import styles from "../../styles/component-styles/Home-styles/OnlineMenu.module.css";
import Link from "next/link";

function OnlineMenu() {

  const cardsDetails = [
    {
      img: 'https://cleancreations.com/data/meals/251.jpg?md=272ee44ac6e0f0904a5a41adc74bfb66',
      title: 'Balsamic Chicken Salad (16 oz)',
      description: 'gluten free, dairy free, nut free',
      calories: 960
    },
    {
      img: 'https://cleancreations.com/data/meals/254.jpg?md=7abe2d53eb88ee393e14d72956b70c2f',
      title: "Barb's Boobie Milk Lactation Cookies (1/2 Dozen)",
      description: "Whole Wheat Oatmeal and Chocolate Chip Lactation Cookies. Highly effective in helping to",
      calories: 170
    },
    {
      img: 'https://cleancreations.com/data/meals/74.jpg?md=120070094cac59572870acd40546c68f',
      title: "Breakfast Burrito (Vegan)",
      description: "JUST EGG, Chorizo spiced tofu, Onion, Jalapeno Topped with Green Onion and Fresh Tomato in",
      calories: 360
    },
    {
      img: 'https://cleancreations.com/data/meals/50.jpg?md=bb66aa99be815d0998ea8ee5d9ef4918',
      title: "Breakfast Burrito Bowl with Chipotle Dip (Low Carb)",
      description: "Whole Eggs, Black Beans, White Cheddar, Tomato over Baby Spinach Served with Chipotle Dip",
      calories: 380
    },
    {
      img: 'https://cleancreations.com/data/meals/26.jpg?md=c2ba5befd0936023cdd17e4a0b5be930',
      title: "Breakfast Burrito With Chipotle Dip",
      description: "Whole Eggs, Black Beans, Turkey Chorizo, Jalapeno, White Cheddar, Tomato on Whole Wheat Tortilla",
      calories: 430
    },
    {
      img: 'https://cleancreations.com/data/meals/342.jpg?md=62babb1f9ffe074a035e3963685f1af5',
      title: "Broccoli and Red Pepper Vegan Egg Bites",
      description: "Served with Fresh Fruit",
      calories: 350,
      premium: 'premium'
    },
    {
      img: 'https://cleancreations.com/data/meals/285.jpg?md=847cede9fcdd02dab6872cc5059eaa7f',
      title: "Carrot Cake Overnight Oats",
      description: "Overnight oats with almond milk, spices, raisins, Yogurt and pecans",
      calories: 640,
    },
    {
      img: 'https://cleancreations.com/data/meals/152.jpg?md=afa55d98554a5cec569cbb7f3db6cf25',
      title: "Cheddar Broccoli Egg Bite",
      description: "Served with Yogurt Parfait",
      calories: 350,
      premium: 'premium'
    },
    {
      img: 'https://cleancreations.com/data/meals/351.jpg?md=9cf68854baff02b930806d916e0b47ee',
      title: "Chicken Salad over Mixed Greens (Low Carb)",
      description: "House Chicken Salad, over Mixed Greens served with Honey Mustard and Fresh Fruit",
      calories: 430,
      premium: 'premium'
    },
  ]

  console.log(cardsDetails)

  return (
    <div className={styles.container}>
      <div className={styles.innerContainer}>
        <div className={styles.heading}>
          <h1>Online Menu</h1>
          <h2>
            Not interested in a plan? Shop our online menu and pick as many or
            few meals as you need.
          </h2>
        </div>
        <div className={styles.cardsSection}>
          <div className={styles.cards}>
            {cardsDetails.map((val,i)=>{
              return (
                <div className={styles.card} key={i}>
              <div className={styles.leftImage}>
                <img src={val.img} alt="" />
                {val.premium === 'premium'?(<div className={styles.premium}>
                  premium
                </div>):''}
              </div>
              <div className={styles.rightContent}>
                <div className={styles.cardDescription}>
                  <p className={styles.menuTitle}>
                    {val.title}
                  </p>
                  <p className={styles.menuDescription}>
                    {val.description}
                  </p>
                </div>
                <div className={styles.calories}>
                  <p>
                    <b>{val.calories}</b> Calories
                  </p>
                </div>
              </div>
            </div>
              )
            })}
          </div>
          <div className={styles.buttonWrapper}>
            <div className={styles.button}>
              <Link href="/currentmenu">VIEW ENTIRE MENU</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OnlineMenu;
