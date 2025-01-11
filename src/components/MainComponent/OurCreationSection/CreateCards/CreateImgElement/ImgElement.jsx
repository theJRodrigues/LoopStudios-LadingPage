import React from 'react'
import useIsMobile from '../../../../../hooks/useIsMobile/CheckResolution';
import styles from './ImgElement.module.css'
import PropTypes from 'prop-types';

const ImgElement = ({imgMobile, imgDesktop}) => {
    const isMobile = useIsMobile();
  return (
    <img className={styles.imgCard} src={isMobile ? imgMobile : imgDesktop} alt="" />
  )
}

ImgElement.propTypes = {
  imgMobile: PropTypes.string.isRequired, imgDesktop: PropTypes.string.isRequired
}

export default ImgElement