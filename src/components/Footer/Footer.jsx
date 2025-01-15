import React from "react";
import styles from "./Footer.module.css";
import logo from "../../assets/images/logo.svg";
import Navbar from "../Navbar/Navbar";
import FacebookIconComponent from "./SocialElements/Facebook/facebookIconComponent";
import TwitterIconComponent from "./SocialElements/Twitter/TwitterIconComponent";
import PinterestIconComponent from "./SocialElements/Pinterest/PinterestIconComponent";
import InstragramIconComponent from "./SocialElements/Instagram/InstragramIconComponent";

const Footer = () => {
  return (
    <footer className={styles.footerContainer}>
      <div className={styles.containerCenterFooter}>
        <a href="/">
          <img className={styles.imgLogo} src={logo} alt="logo" />
        </a>
        <Navbar NavbarFor="navBarFooter" />
        <div className={styles.SocialIconsContainer}>
          <div className={styles.socialIcon}><FacebookIconComponent /><hr className={styles.underlined}/></div>
          <div className={styles.socialIcon}><TwitterIconComponent /><hr className={styles.underlined}/></div>
          <div className={styles.socialIcon}><PinterestIconComponent /><hr className={styles.underlined}/></div>
          <div className={styles.socialIcon}><InstragramIconComponent /><hr className={styles.underlined}/></div>
        </div>
        <p className={styles.noCopyrightsSection}>
          &copy; 2021 Loopstudios. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
