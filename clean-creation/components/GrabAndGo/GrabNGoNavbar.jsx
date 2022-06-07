import React from 'react';
import { useState } from 'react';
import {GiHamburgerMenu} from 'react-icons/gi';
import {ImCross} from 'react-icons/im'
import styles from '../../styles/component-styles/GrabAndGo/GrabNGoNavbar.module.css';

function GrabNGoNavbar() {
    const [showMenu, setShowMenu] = useState('false');
    const [showShopDropDown, setShowShopDropDown] = useState('false');
    const [showAboutDropDown, setShowAboutDropDown] = useState('false');
    const handleClick1 = ()=>{
        console.log('clicked')
        setShowMenu(!showMenu);
    }

    const handleClick2 = ()=>{
        console.log('clicked2')
        setShowShopDropDown(!showShopDropDown);
    }

    const handleClick3 = ()=>{
        console.log('clicked3')
        setShowAboutDropDown(!showAboutDropDown);
    }

  return (
    <div className={styles.container}>
      <div className={styles.leftSection}>

      </div>
      <div className={styles.rightSection}>
          <li className={styles.topBorder}>Blogs Home</li>
          <li className={styles.shop}>Shop <span>&#8964;</span>          
          <ul className={styles.shopModal}>
              <li>Bulk Meals</li>
              <li>Meal Plans</li>
              <li>A La Carte</li>
              <li>Custom Meal Builder</li>
              <li>Gift Card</li>
              <li>Extras</li>
          </ul>
          </li>
          <li className={styles.topBorder}>Grab And Go</li>
          <li className={styles.about}>About <span>&#8964;</span>
          <ul className={styles.aboutModal}>
              <li>Clean Creation Baton Rouge</li>
          </ul>
          </li>
          <li className={styles.topBorder}>F.A.Q.</li>
          <li className={styles.topBorder}>Contact Us</li>
      </div>
      <div className={styles.hamMenu} onClick={handleClick1}>
          {showMenu?(<ImCross size={'30px'}/>):(<GiHamburgerMenu size={'30px'}/>)}
          
      </div>
      {showMenu ? (<div className={styles.subMenu}>
              <ul>
              <li>Blogs Home</li>
                <li className={styles.shopDropdown} onClick={handleClick2}>Shop <span>&#8964;</span> 
                {showShopDropDown?(<ul className={styles.shopDropdownMenu}>
                <li>Bulk Meals</li>
                <li>Meal Plans</li>
                <li>A La Carte</li>
                <li>Custom Meal Builder</li>
                <li>Gift Card</li>
                <li>Extras</li>
                </ul>  ):''}       
                </li>
                <li>Grab And Go</li>
                <li onClick={handleClick3} className={styles.aboutDropdown}>About <span>&#8964;</span>
                {showAboutDropDown?(<ul className={styles.aboutDropdownMenu}>
                <li className={styles.aboutDropdownMenu}>Clean Creations Baton Rouge</li>
                </ul>):''} 
                </li>
                <li>F.A.Q.</li>
                <li>Contact Us</li>
              </ul>
      </div>) : ''}
    </div>
  )
}

export default GrabNGoNavbar
