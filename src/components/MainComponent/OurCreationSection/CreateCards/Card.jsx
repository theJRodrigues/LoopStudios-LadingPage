import React from "react";
import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import styles from "./Card.module.css";
import ImgElement from "./CreateImgElement/imgElement";
import axios from "axios";

const Card = () => {
  const [cardInfos, setInfos] = useState([]);

  useEffect(() => {
    axios.get("https://raw.githubusercontent.com/theJRodrigues/LoopStudios-LadingPage/refs/heads/main/src/assets/Datas/data.json").then((response) => setInfos(response.data))

    // lixo
    // fetch(
    //   "https://raw.githubusercontent.com/theJRodrigues/LoopStudios-LadingPage/refs/heads/main/src/assets/Datas/data.json"
    // )
    //   .then((res) => res.json())
    //   .then((infos) => {
    //     setInfos(infos);
    //   });
  }, []);

  return (
    <>
      {cardInfos?.map((info) => (
        <div className={styles.card} key={uuidv4()}>
          <div className={styles.imgContainer}>
            <ImgElement imgMobile ={info.imageMobile} imgDesktop ={info.imageDesktop}/>
            <div className={styles.bgGradient}></div>
          </div>

          <h1 className={styles.titleCard}>{info.text}</h1>
        </div>
      ))}
    </>
  );
};

export default Card;
