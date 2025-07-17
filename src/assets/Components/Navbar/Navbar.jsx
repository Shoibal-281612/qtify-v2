import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../Button/Button'; // Assuming Button.js is in a 'Button' folder one level up
import Logo from '../../../assets/Components/Logo/Logo';     // Assuming Logo.js is in a 'Logo' folder one level up
import Search from '../Search/search'; // Assuming Search.js is in a 'Search' folder one level up
import styles from "./Navbar.module.css"; // Uncomment and use if you have specific CSS module styles

function Navbar({ searchData }) {
  return (
    <nav
      style={{
        backgroundColor: '#4CAF50', // Green background
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '10px 20px',
        borderRadius: '8px',
      }}
      className="w-full" // Ensure navbar takes full width
      // className={styles.navbar} // Use this if you want to apply styles from Navbar.module.css
    >
      <Link to="/">
        <Logo />
      </Link>

      <div className="flex-grow flex justify-center mx-4"> {/* Centering search bar */}
        <Search
          placeholder="Search a song of your choice"
          searchData={searchData}
        />
      </div>

      <Button>Give Feedback</Button>
    </nav>
  );
}

export default Navbar;