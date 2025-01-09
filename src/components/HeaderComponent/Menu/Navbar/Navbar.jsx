import React from 'react'
import styles from './Navbar.module.css'

const Navbar = () => {
  return (
    <ul className={styles.navbarContainer}>
          <li className={styles.menuOption}><a href="#">ABOUT</a></li>
          <li className={styles.menuOption}><a href="#">CARRERS</a></li>
          <li className={styles.menuOption}><a href="#">EVENTS</a></li>
          <li className={styles.menuOption}><a href="#">PRODUCTS</a></li>
          <li className={styles.menuOption}><a href="#">SUPPORT</a></li>
    </ul>
  )
}

export default Navbar