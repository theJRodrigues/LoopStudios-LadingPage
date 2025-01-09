
import styles from './FirstSection.module.css'
import img from '../../../assets/images/mobile/image-interactive.jpg'
const FirstSection = () => {
  return (
    <div className={styles.elementContainer}>
        <img className={styles.imgElement} src={img} alt="" />
        <div className={styles.textContainer}>
            <h1 >THE LEADER IN INTERACTIVE VR</h1>
            <p >Founded in 2011, Loopstudios has been producing world-class virtual reality projects for some of the best companies around the globe. Our award-winning creations have transformed businesses through digital experiences that bind to their brand.</p>
        </div>
    </div>
  )
}

export default FirstSection