import React from 'react';
import styles from './LeftnavButton.module.css';
// Import your SVG as a React Component
import { ReactComponent as LeftArrowSVG } from '../../../../assets/left-nav.svg'; // <--- THIS IS THE KEY CHANGE

function LeftnavButton({ onClick }) {
  return (
    <button className={styles.leftnavButton} onClick={onClick}>
      <LeftArrowSVG /> {/* <--- RENDER YOUR SVG COMPONENT HERE */}
    </button>
  );
}

export default LeftnavButton;