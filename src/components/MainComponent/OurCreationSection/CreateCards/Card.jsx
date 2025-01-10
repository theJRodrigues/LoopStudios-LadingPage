import React from "react";
import { useEffect, useState } from "react";
import CheckResolution from "../../../CheckResolution/CheckResolution";
import { v4 as uuidv4 } from "uuid";
import styles from './Card.module.css'

const Card = () => {
  const CheckResolutionForImage = CheckResolution();
  const [cardInfos, setInfos] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5173/LoopStudios-LadingPage/assets/Datas/data.json")
      .then((res) => res.json())
      .then((infos) => {
        setInfos(infos)
      });
  }, []);

  return (
    <>
       {cardInfos?.map((info) =>(
          <div className={styles.card} key={uuidv4()}>
            <img className={styles.imgCard} src={CheckResolutionForImage? info.imageMobile : info.imageDesktop}
              alt={info.text}/>
            <div className={styles.titleContainer}>
              <h1 className={styles.titleCard}>{info.text}</h1>
            </div>
            
          </div>))
        }
    </>
  );
};

export default Card;
