import React from "react";
import logo from "../../../../assets/images/logo.svg";
import { useState } from "react";
import CloseMenuButton from '../OpenCloseMenuButton/CloseButton/CloseMenuButton';
import OpenMenuButton from '../OpenCloseMenuButton/OpenButton/OpenMenuButton';
import Navbar from "../../../Navbar/Navbar";
import styles from "./MenuMobile.module.css";

const MenuMobile = () => {
  const [menuState, setMenuState] = useState(false);
  return (
    <>
      <OpenMenuButton setElementState={setMenuState} />
      <div className={menuState ? styles.menuContainerOpen : styles.menuContainerClose}>
        <div className={styles.headerMenuOpen}>
          <a href="#"><img src={logo} alt="logo" /></a>
          <CloseMenuButton setElementState={setMenuState} />
        </div>
        <Navbar NavbarFor="navBarHeader" />
      </div>
    </>
  );
};

export default MenuMobile;
