import React from "react";
import MenuDesktop from "./Menu/MenuDesktop/MenuDesktop";
import MenuMobile from "./Menu/MenuMobile/MenuMobile";
import styles from './Header.module.css'
import logo from "../../assets/images/logo.svg";
import { useState } from "react";
import CheckResolution from "../CheckResolution/CheckResolution";

const Header = () => {

  return (
    <section className={styles.bgImg}>
      <header className={styles.Header}>
        <a href="/"><img className={styles.imgLogo} src={logo} alt="logo" /></a>
        {CheckResolution() ? <MenuMobile /> : <MenuDesktop />}
      </header>

      <div className={styles.textContainer}>
        <div>
          <h1>IMMERSIVE</h1>
          <h1>EXPERIENCES</h1>
          <h1>THAT</h1>
          <h1>DELIVER</h1>
        </div>
      </div>
    </section>
  );
};

export default Header;
