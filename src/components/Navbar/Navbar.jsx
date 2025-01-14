import React from 'react'
import styles from './Navbar.module.css'
import PropTypes from 'prop-types'

const Navbar = ({NavbarFor}) => {
  return (
    <ul className={styles[NavbarFor]}>
          <li className={styles.menuOption}><a href="#">About</a></li>
          <li className={styles.menuOption}><a href="#">Careers</a></li>
          <li className={styles.menuOption}><a href="#">Events</a></li>
          <li className={styles.menuOption}><a href="#">Products</a></li>
          <li className={styles.menuOption}><a href="#">Support</a></li>
    </ul>
  )
}

Navbar.propTypes = {
  NavbarFor: PropTypes.string.isRequired
}

export default Navbar