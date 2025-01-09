import React from 'react'
import imgElement from '../../../../images/icon-hamburger.svg'
import styles from './OpenMenu.module.css'

const OpenMenuButton = ({setElementState}) => {
  return (
    <button className={styles.buttonElement} onClick={() => setElementState(true)}><img src={imgElement} alt="" /></button>
  )
}

export default OpenMenuButton