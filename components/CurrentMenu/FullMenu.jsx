import React from "react";
import styles from "../../styles/component-styles/CurrentMenu-styles/Menu.module.css";
import { BsCartFill } from "react-icons/bs";
import Link from "next/link";
import Image from "next/image";
import CartModal from "./ModalCart";
import { useState } from "react";

const FullMenu = () => {
  const foodDetailOne = [
    {
      image:
        "https://cleancreations.com/data/meals/251.jpg?md=272ee44ac6e0f0904a5a41adc74bfb66",
      heading: "Balsamic Chicken Salad()16 oz",
      desc: "gluten free, dairy free, nutfree",
      calCount: "960",
      qty: "0",
      regularPrice: "Regular | $10.95",
      calories: "960",
      protein: "80.00gg",
      carb: "67.88gr",
      fat: "37.00gr",
      fiber: "5.00gr",
      saturatedFat: "4.00gr",
      cholesterol: "280.00mg",
      sodium: "1470.00mg",
      totalSugar: "56.00gr",
      includedSugar: "31.00gr",
      ingredients:
        "Balsamic Chicken Salad (Shaved red onion (red onion), Dried Cranberry, Bias Cut Celery, Balsamic Chicken Dressing (balsamic, basil, Minced Garlic, Dijon Mustard, Black Pepper, Honey, Olive Oil Blend), Balsamic Chicken for Chicken Salad (Chicken (raw), Black Pepper, salt, italian seasoning, Paprika))",
      allergens: "Fruit/Berries",
      heating: "",
    },
    {
      image:
        "https://cleancreations.com/data/meals/254.jpg?md=7abe2d53eb88ee393e14d72956b70c2f",
      heading: "Barb's Boobie Milk Lactation Cookies (1/2 Dozen)",
      desc: "Whole Wheat Oatmeal and Chocolate Chip Lactation Cookies. Highly effective in helping to increase milk supply. Safe for daddies too! (Nutrition information per cookie)",
      calCount: "170",
      qty: "0",
      regularPrice: "Regular | $9.00",
      calories: "170",
      protein: "4.00gr",
      carb: "23.00gr",
      fat: "8.00gr",
      fiber: "3.00gr",
      saturatedFat: "5.00gr",
      cholesterol: "25.00mg",
      sodium: "160.00mg",
      totalSugar: "11.00gr",
      includedSugar: "11.00gr",
      ingredients:
        "Lactation Cookies (brewers yeast, brown sugar, butter (unsalted), chocolate chips, cinnamon, fenugreek, salt, stevia, vanilla extract, egg whole shell, BAKING SODA, Wheat Flour, GROUND FLAX SEED, OLD FASHIONED OATS)",
      allergens: "Wheat (Gluten), Dairy (Lactose)",
      heating: "",
    },
    {
      image:
        "https://cleancreations.com/data/meals/351.jpg?md=9cf68854baff02b930806d916e0b47ee",
      heading: "Chicken Salad over Mixed Greens (Low Carb)",
      desc: "House Chicken Salad, over Mixed Greens served with Honey Mustard and Fresh Fruit",
      calCount: "430",
      qty: "0",
      regularPrice: "Regular | $12.00",
      calories: "430",
      protein: "28.00gr",
      carb: "28.00gr",
      fat: "23.00gr",
      fiber: "3.00gr",
      saturatedFat: "2.00gr",
      cholesterol: "80.00mg",
      sodium: "720.00mg",
      totalSugar: "24.00gr",
      includedSugar: "7.00gr",
      ingredients:
        "mixed fruit (pineapple, Cantaloupe, Honey Dew Melon), House Chicken Salad (celery, House Chicken (Chicken (raw), Olive Oil Blend, Lemon Cracked Pepper Seasoning), dijon mustard, grapes, greek yogurt, pepper, salt, walnut), Honey Mustard (1.5 oz souf) (dijon mustard, honey, oil, rice vinegar, Black Pepper, salt), mixed greens (mixed greens (mixed greens (mixed greens (mixed greens (mixed greens (mixed greens (mixed greens)))))))",
      allergens: "Fruit/Berries, Dairy (Lactose), Nuts, Yogurt",
      heating: "",
    },
    {
      image:
        "https://cleancreations.com/data/meals/100.jpg?md=041cb2922511a3ff7e759bf96853068a",
      heading: "Chicken Salad Wrap",
      desc: "Chicken salad on wheat tortilla served with fresh fruit",
      calCount: "600",
      qty: "0",
      regularPrice: "Regular | $11.60",
      calories: "600",
      protein: "34.00gr",
      carb: "50.00gr",
      fat: "30.00gr",
      fiber: "6.00gr",
      saturatedFat: "3.50gr",
      cholesterol: "85.00mg",
      sodium: "1030.00mg",
      totalSugar: "26.00gr",
      includedSugar: "7.00gr",
      ingredients:
        "mixed fruit (pineapple, Cantaloupe, Honey Dew Melon), Honey Mustard (1.5 oz souf) (dijon mustard, honey, oil, rice vinegar, Black Pepper, salt), Chicken Salad Wrap (House Spinach (Spinach), wheat tortilla (wheat tortilla), House Chicken Salad (celery, House Chicken (Chicken (raw), Olive Oil Blend, Lemon Cracked Pepper Seasoning), dijon mustard, grapes, greek yogurt, pepper, salt, walnut))",
      allergens: "Fruit/Berries, Wheat (Gluten), Dairy (Lactose), Nuts, Yogurt",
      heating: "",
    },
  ];
  const foodDetailTwo = [
    {
      image:
        "https://cleancreations.com/data/meals/74.jpg?md=120070094cac59572870acd40546c68f",
      heading: "Breakfast Burrito (Vegan)",
      desc: "JUST EGG, Chorizo spiced tofu, Onion, Jalapeno Topped with Green Onion and Fresh Tomato in a Wheat Tortilla With Salsa Escabeche.",
      calCount: "360",
      qty: "0", 
      regularPrice: "Regular | $11.00",
      calories: "360",
      protein: "20.00gr",
      carb: "47.00gr",
      fat: "11.00gr",
      fiber: "9.00gr",
      saturatedFat: "2.50gr",
      cholesterol: "",
      sodium: "860.00mg",
      totalSugar: "23.00gr",
      includedSugar: "",
      ingredients:
        "Salsa Escabeche (1.5 oz souffle) (Cilantro, Black Pepper, salt, Ancho Chili Pepper, Fire Roasted Diced Tomato, Pickled Jalapeno Halves), Vegan Breakfast Burrito (wheat tortilla (wheat tortilla), VEGAN BREAKFAST BURRITO MIX (House black beans (black beans), Diced Yellow Onion, Diced Jalapeno (jalapeno), Just Egg (Just Egg), Chorizo Spiced Tofu (tofu, Minced Garlic, Cinnamon, salt, Cumin, Chili Powder, Coriander Ground, Paprika, Ancho Chili Powder, Oregano, Ground Clove)))",
      allergens: "Wheat (Gluten), Soy",
      heating: "",
    },
    {
      image:
        "https://cleancreations.com/data/meals/127.jpg?md=59c78d5049cb534a019ac3cb012b600b",
      heading: "Italian Stuffed Bell Pepper",
      desc: "Ground Turkey Stuffed Bell Pepper served with Italian Veggie Blend",
      calCount: "320",
      qty: "0",
      regularPrice: "Regular | $12.85",
      calories: "320",
      protein: "12.00gr",
      carb: "37.00gr",
      fat: "16.00gr",
      fiber: "9.00gr",
      saturatedFat: "",
      cholesterol: "",
      sodium: "460.00mg",
      totalSugar: "15.00gr",
      includedSugar: "",
      ingredients:
        "Italian Vegetables (banana pepper, carrot, Cauliflower (Cauliflower (f)), celery, olive oil, red bell pepper, squash, zucchini, yellow onion, Sweet Basil Tarragon Seasoning, Pickled Banana Peppers), House Marinara (Red Sauce) (crushed tomato, garlic, stevia, Diced Yellow Onion, Fresh Basil, Onion Powder, Garlic Powder, Black Pepper, Red Cooking Wine, Minors low sodium vegetable base), Vegan Stuffed Bell Pepper (Vegan Italian Stuffing (House Marinara (Red Sauce) (crushed tomato, garlic, stevia, Diced Yellow Onion, Fresh Basil, Onion Powder, Garlic Powder, Black Pepper, Red Cooking Wine, Minors low sodium vegetable base), House Quinoa (Quinoa (dry), water (cold)), Roasted Garlic Portabella (portabella mushroom, Minced Garlic, Black Pepper, salt, Blend Oil, Minced Shallot)), 1/2 Bell Pepper (for stuffed peppers))",
      allergens: "None",
      heating: "Microwave: Remove lid. Cover with Napkin. Heat for 1-2 min.",
    },
    {
      image:
        "https://cleancreations.com/data/meals/231.jpg?md=60e07b4346fe2cf501d13238a741559c",
      heading: "Taco Bowl (Vegan)",
      desc: "Black Bean taco bowl with farro, tomato, cilantro, lime wedge, and jalapeno salsa",
      calCount: "300",
      qty: "0",
      regularPrice: "Regular | $13.00",
      calories: "300",
      protein: "15.00gr",
      carb: "56.00gr",
      fat: "3.00gr",
      fiber: "14.00gr",
      saturatedFat: "",
      cholesterol: "",
      sodium: "115.00mg",
      totalSugar: "4.00gr",
      includedSugar: "",
      ingredients:
        "TACO SEASONED BLACK BEANS (black beans, Taco Seasoning (Black Pepper, salt, Cumin, Chili Powder, Cayenne Pepper, Onion Powder, Garlic Powder)), Farro (cooked) (water, Farro (dry), Minors low sodium vegetable base), Salsa Escabeche (1.5 oz souffle) (Cilantro, Black Pepper, salt, Ancho Chili Pepper, Fire Roasted Diced Tomato, Pickled Jalapeno Halves), pico de gallo (cilantro, lime juice, salt, Roma Tomato, White Onion, Diced Jalapeno (jalapeno)), lime wedge (lime)",
      allergens: "Wheat (Gluten)",
      heating: "",
    },
    {
      image:
        "https://cleancreations.com/data/meals/118.jpg?md=4f480eb8f69f54e00e6072a6b438f390",
      heading: "French Toast",
      desc: "Whole wheat French Toast served with Yogurt Berry Parfait",
      calCount: "410",
      qty: "0",
      regularPrice: "Regular | $10.50",
      calories: "410",
      protein: "18.00gr",
      carb: "65.00gr",
      fat: "10.00gr",
      fiber: "7.00gr",
      saturatedFat: "2.00gr",
      cholesterol: "",
      sodium: "420.00mg",
      totalSugar: "35.00gr",
      includedSugar: "23.00gr",
      ingredients:
        "vanilla yogurt (Vanilla yogurt light and fit), French Toast (wedge) (almond milk, egg white, vanilla extract, sprouted bread (whole wheat bread), Cinnamon), blueberry (Blueberry raw), House Made Paleo Granola (almonds whole raw, coconut oil, honey, vanilla extract, Cinnamon, Cashews, Pepitas, Dried Cranberry, salt, Coconut Flake Unsweetened, Ground Nutmeg), Cinnamon maple syrup (1 oz souflee) (maple syrup, Cinnamon)",
      allergens:
        "Fruit/Berries, Nuts, Dairy (Lactose), Yogurt, Wheat (Gluten), Eggs",
      heating:
        "Microwave: Remove lid & parfait. Cover with Napkin. Heat for 1-2 min.",
    },
  ];

  return (
    <div className={styles.bigContainer}>
      <div className={styles.container}>
        <div className={styles.nav}>
          <div className={styles.childNav}>
            <h3>
              <a href="#entree">Entree</a>
            </h3>
            <h4>
              <a href="#breakfast">Breakfast</a>
            </h4>
          </div>
        </div>
        <div className={styles.menu}>
          <div className={styles.entreeMenu}>
            <h3 id="entree">Entree</h3>

            <div className={styles.cardWrap}>
              {foodDetailOne.map((val, i) => {
                return (
                  <div className={styles.menuItem} key={i}>
                    <Link href="#">
                      <div
                        className={styles.dishImage}
                        style={{ cursor: "pointer" }}
                      >
                        <img src={val.image} alt="" />
                      </div>
                    </Link>
                    <div className={styles.dishDesc}>
                      <h5>{val.heading}</h5>
                      <h6>{val.desc}</h6>
                      <div className={styles.calories}>
                        <h2>
                          <span style={{ fontWeight: "bold" }}>
                            {val.calCount}
                          </span>
                          Calories
                        </h2>
                        <CartModal val={val} />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* /////// */}

          <div className={styles.breakfastMenu}>
            <h3 id="breakfast">Breakfast</h3>

            <div className={styles.cardWrap}>
              {foodDetailTwo.map((val, i) => {
                return (
                  <div className={styles.menuItem} key={i}>
                    <Link href="#">
                      <div
                        className={styles.dishImage}
                        style={{ cursor: "pointer" }}
                      >
                        <img src={val.image} alt="" />
                      </div>
                    </Link>
                    <div className={styles.dishDesc}>
                      <h5>{val.heading}</h5>
                      <h6>{val.desc}</h6>
                      <div className={styles.calories}>
                        <h2>
                          <span style={{ fontWeight: "bold" }}>
                            {val.calCount}
                          </span>
                          Calories
                        </h2>
                        <CartModal val={val} />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FullMenu;
