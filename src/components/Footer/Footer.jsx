import React from 'react'
import styles from './Footer.module.css'
import logo from '../../assets/images/logo.svg'
import Navbar from '../Navbar/Navbar'
import FacebookIconComponent from './SocialElements/Facebook/facebookIconComponent'
import TwitterIconComponent from './SocialElements/Twitter/TwitterIconComponent'
import PinterestIconComponent from './SocialElements/Pinterest/PinterestIconComponent'
import InstragramIconComponent from './SocialElements/Instagram/InstragramIconComponent'

const Footer = () => {
  return (
    <footer className={styles.footerContainer}>
        <a href="/"><img className={styles.imgLogo} src={logo} alt="logo" /></a> 
        <Navbar NavbarFor ="navBarFooter"/>
        <div className={styles.SocialIconsContainer}>
              <FacebookIconComponent />
              <TwitterIconComponent />
              <PinterestIconComponent />
              <InstragramIconComponent />
        </div>
        <p className={styles.noCopyrightsSection}>&copy; 2021 Loopstudios. All rights reserved.</p>
    </footer>
  )
}

export default Footer