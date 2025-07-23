import React from 'react';
import styles from './RightnavButton.module.css';
import { ReactComponent as RightArrowSVG } from '../../../../assets/right-nav.svg';
function RightNavButton({ onClick }) {
  return (
    <button className={styles.rightnavButton} onClick={onClick}>
      <RightArrowSVG /> 
    </button>
  );
}

export default RightNavButton;