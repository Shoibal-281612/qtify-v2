import React from "react";
import styles from "./Hero.module.css"; // Ensure this path is correct
import heroHeadphones from '../../../assets/hero_headphones.png' // Ensure this path is correct

function Hero() {
  return (
    <div className={styles.hero}>
      {/* Add a class to the text container for potential specific styling */}
      <div className={styles.heroTextContent}>
        <h1>100 Thousand Songs, ad-free</h1>
        <h1>Over thousands podcast episodes</h1>
      </div>
      <div>
        <img
          src={heroHeadphones}
          width={212} /* This width seems okay based on the image */
          alt="headphones"
        />
      </div>
    </div>
  );
}

export default Hero;