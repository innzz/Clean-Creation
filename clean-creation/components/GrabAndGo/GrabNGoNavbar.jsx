import Link from 'next/link';
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
        setShowMenu(!showMenu);
    }

    const handleClick2 = ()=>{
        setShowShopDropDown(!showShopDropDown);
    }

    const handleClick3 = ()=>{
        setShowAboutDropDown(!showAboutDropDown);
    }

  return (
    <div className={styles.container}>
      <div className={styles.leftSection}>
        <Link href={'/'}>
          <img src="/bookOne.png" alt="" />
        </Link>
      </div>
      <div className={styles.rightSection}>
          <Link href={'/Blog'}><li className={styles.topBorder}>Blogs Home</li></Link>
          <li className={styles.shop}>Shop <span>&#8964;</span>          
          <ul className={styles.shopModal}>
              <Link href={'/byingrdients'}><li>Bulk Meals</li></Link>
              <Link href={'/meals'}><li>Meal Plan</li></Link>
              <Link href={'/alacarte'}><li>A La Carte</li></Link>
              <Link href={'/customMealBuilder'}><li>Custom Meal Builder</li></Link>
              <Link href={'/giftcard'}><li>Gift Card</li></Link>
              <Link href={'/extras'}><li>Extras</li></Link>
          </ul>
          </li>
          <Link href={'/grabAndGo'}><li className={styles.topBorder}>Grab And Go</li></Link>
          <Link href={'/about'}><li className={styles.about}>About <span>&#8964;</span>
          <ul className={styles.aboutModal}>
              <Link href={'/clean_creations_baton_rouge'}><li>Clean Creation Baton Rouge</li></Link>
          </ul>
          </li>
          </Link>
          <Link href={'/faq'}><li className={styles.topBorder}>F.A.Q.</li></Link>
          <Link href={'/contact'}><li className={styles.topBorder}>Contact Us</li></Link>
      </div>
      <div className={styles.hamMenu} onClick={handleClick1}>
          {showMenu?(<GiHamburgerMenu size={'30px'}/>):(<ImCross size={'30px'}/>)}
          
      </div>
      {showMenu ?'': (<div className={styles.subMenu}>
              <ul>
              <li>Blogs Home</li>
                <li className={styles.shopDropdown} onClick={handleClick2}>Shop <span>&#8964;</span> 
                {showShopDropDown?'':((<ul className={styles.shopDropdownMenu}>
                <li>Bulk Meals</li>
                <li>Meal Plans</li>
                <li>A La Carte</li>
                <li>Custom Meal Builder</li>
                <li>Gift Card</li>
                <li>Extras</li>
                </ul>  ))}       
                </li>
                <li>Grab And Go</li>
                <li onClick={handleClick3} className={styles.aboutDropdown}>About <span>&#8964;</span>
                {showAboutDropDown?'':((<ul className={styles.aboutDropdownMenu}>
                <li className={styles.aboutDropdownMenu}>BookOnePos Baton Rouge</li>
                </ul>))} 
                </li>
                <li>F.A.Q.</li>
                <li>Contact Us</li>
              </ul>
      </div>)}
    </div>
  )
}

export default GrabNGoNavbar
