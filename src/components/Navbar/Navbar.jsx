import React from 'react'
import styles from './Navbar.module.css'
import PropTypes from 'prop-types'

const Navbar = ({NavbarFor}) => {
  return (
    <ul className={styles[NavbarFor]}>
          <li className={styles.menuOption}><a href="#">About</a><hr className={styles.underlined} /></li>
          <li className={styles.menuOption}><a href="#">Careers</a><hr className={styles.underlined}/></li>
          <li className={styles.menuOption}><a href="#">Events</a><hr className={styles.underlined}/></li>
          <li className={styles.menuOption}><a href="#">Products</a><hr className={styles.underlined}/></li>
          <li className={styles.menuOption}><a href="#">Support</a><hr className={styles.underlined}/></li>
    </ul>
  )
}

Navbar.propTypes = {
  NavbarFor: PropTypes.string.isRequired
}

export default Navbar