import React from 'react'
import imgElement from '../../../../images/icon-close.svg'
import styles from './CloseMenu.module.css'

const CloseMenuButton = ({setElementState}) => {
  return (
    <button className={styles.buttonElement} onClick={() => setElementState(false)}><img src={imgElement} alt="" /></button>
  )
}

export default CloseMenuButton