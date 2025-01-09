import React from "react";
import MenuDesktop from "./Menu/MenuDesktop/MenuDesktop";
import MenuMobile from "./Menu/MenuMobile/MenuMobile";
import styles from './Header.module.css'
import logo from "../../assets/images/logo.svg";
import { useState } from "react";

const Header = () => {
  const checkResolution = () => (window.innerWidth <= 810 ? true : false)
  const [windowResolution, setResolution] = useState(checkResolution)
  window.addEventListener('resize', () => setResolution(checkResolution))

  return (
    <section className={styles.bgImg}>
      <header className={styles.Header}>
        <a href="/"><img className={styles.imgLogo} src={logo} alt="logo" /></a>
        {windowResolution ? <MenuMobile /> : <MenuDesktop />}
      </header>

      <div className={styles.textContainer}>
        <div>
          <h1>IMERSIVE</h1>
          <h1>EXPERIENCES</h1>
          <h1>THAT</h1>
          <h1>DELIVER</h1>
        </div>
        
      </div>
    </section>
  );
};

export default Header;
