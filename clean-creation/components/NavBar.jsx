import Link from 'next/link';
import React from 'react';
import styles from '../styles/component-styles/NavBar2.module.css';
import {BsBasket3} from 'react-icons/bs';
import {useState} from 'react';
import {GiHamburgerMenu} from 'react-icons/gi';
import {ImCross} from 'react-icons/im';

function NavBar2() {
    const [shopModal1, setshopModal1] = useState(false);
    const [shopModal2, setshopModal2] = useState(false);
    const [menuModal, setmenuModal] = useState(false);

    const handleShopModal1 = ()=>{
        setshopModal1(!shopModal1);
    }
    const handleShopModal2 = ()=>{
        setshopModal2(!shopModal2);
    }
    const handleMenuModal = ()=>{
        setmenuModal(!menuModal);
    }
  return (
    <div className={styles.container}>
        <div className={styles.innerContainer}>
            <div className={styles.leftLinks}>
                <Link href={'/'}>Current Menu</Link>
                <Link href={'/'}>Grab & Go</Link>
            </div>
            <div className={styles.logo}>
                <img src="/bookOne.png" alt="" />
            </div>
            <div className={styles.rightMenuContainer}>
            <div className={styles.rightMenu}>
                <div className={styles.shopBtn} onClick={handleShopModal1}>
                    Shop 
                    <div className={styles.shopModal} style={shopModal1?{display: 'block'}:{display: 'none'}}>
                        <li>Subscription Meal Selection</li>
                        <li>A la Carte</li>
                        <li>Proteins By The Pound</li>
                        <li>Custom Meal Builder</li>
                        <li>Extras</li>
                        <li>Gift Card</li>
                    </div>
                </div>
                <Link href={'/'}>Select Meals</Link>
                <Link href={'/'}>Blog</Link>
                </div>
                <div className={styles.icons}>
                <BsBasket3  size={'23px'} style={{cursor: 'pointer', margin:'0 19px'}}/>
                <div className={styles.profileIcon}>I</div>
            </div>
            <div className={styles.hamIcon} onClick={handleMenuModal}>
                {menuModal?(<ImCross size={'23px'} style={{cursor: 'pointer', margin:'0 19px'}} />):(<GiHamburgerMenu size={'23px'} style={{cursor: 'pointer', margin:'0 19px'}}  />)}   
            </div>
            </div>
        </div>
        <div className={styles.menuModal} style={menuModal?{display: 'block'}:{display: 'none'}}>
            <li>Current Menu</li>
            <div className={styles.shopBtn2} onClick={handleShopModal2}>
                Shop
                        <div className={styles.shopBtnModal2} style={shopModal2?{display: 'block'}:{display: 'none'}}>
                        <li>Subscription Meal Selection</li>
                        <li>A la Carte</li>
                        <li>Proteins By The Pound</li>
                        <li>Custom Meal Builder</li>
                        <li>Extras</li>
                        <li>Gift Card</li>
                        </div>
            </div>
            <li>Select Meals</li>
            <li>Grab & Go</li>
            <li>Blog</li>
        </div>
    </div>
  )
}

export default NavBar2