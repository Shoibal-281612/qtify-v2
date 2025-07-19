import React from 'react'; // Don't forget to import React
import styles from './Button.module.css'; // Import your CSS Module

const Button = () => (
  <button
    // Apply the CSS module class and keep necessary Tailwind classes for other styles
    className={`${styles.button} bg-black font-bold px-4 rounded-full shadow-lg hover:bg-gray-800 hover:scale-105 transition-all duration-300 ease-in-out`}
  >
    Give Feedback
  </button>
);

export default Button;