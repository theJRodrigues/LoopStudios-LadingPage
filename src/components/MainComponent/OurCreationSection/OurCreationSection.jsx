import React from 'react'
import Card from './CreateCards/Card';
import styles from './OurCreationSection.module.css'


const OurCreationSection = () =>{
  return (
    <div className={styles.container}>
        <h1>OUR CREATIONS</h1>
        <button className={styles.buttonSeeAll}>SEE ALL</button>
        <div className={styles.cardContainer}>
          <Card/>
        </div>
        
    </div>
  )
}

export default OurCreationSection