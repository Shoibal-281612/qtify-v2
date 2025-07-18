import React from 'react';
import Button from '../Button/Button';
import Logo from '../../../assets/Components/Logo/Logo';    
import Search from '../Search/search'; 

 function Navbar({ searchData }) {
  return (
    <nav
      style={{
        backgroundColor: '#4CAF50',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '10px 20px',
        borderRadius: '8px',
      }}
      className="w-full" 
    >
        <Logo />

      <div className="flex-grow flex justify-center mx-4"> 
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