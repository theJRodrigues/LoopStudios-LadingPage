import React , {useState, useEffect} from "react";
import MenuMobile from "./Menu/MenuMobile/MenuMobile";
import styles from "./Header.module.css";
import logo from "../../assets/images/logo.svg";
import useIsMobile from "../../hooks/useIsMobile/CheckResolution";
import Navbar from "../Navbar/Navbar";

const Header = () => {
  const [changeBGHeader, setChangeBG] = useState(false)

  useEffect(() => {
    function verifyScrollY(){
      {window.scrollY > 50 ? setChangeBG(true) : setChangeBG(false)}
    }

    window.addEventListener('scroll', verifyScrollY)
  }, [])

  return (
    <section className={styles.bgImg}>
      <header className={`${styles.Header} ${changeBGHeader ? styles.HeaderChangeBG : ''}`} >
        <div className={styles.ContainerCenterHeader}>
        <a href="#">
          <img className={styles.imgLogo} src={logo} alt="logo" />
        </a>
        {useIsMobile() ? <MenuMobile /> : <Navbar NavbarFor = "navBarHeader" />}
        </div>
        
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
