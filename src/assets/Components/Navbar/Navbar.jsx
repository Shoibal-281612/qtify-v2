import React from 'react';
import Button from '../Button/Button';
import Logo from '../../../assets/Components/Logo/Logo';    
import Search from '../Search/search'; 

 function Navbar({ searchData }) {
  return (
    <nav
      style={{
        backgroundColor: '#34C94B',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '10px 20px',
        height: '76px',
      }}
      className="w-full" 
    >
        <Logo />

      <div className="flex-grow flex justify-center mx-4"> 
        <Search
          placeholder="Search an album of your choice"
          searchData={searchData}
        />
      </div>

      <Button>Give Feedback</Button>
    </nav>
  );
 }
  export default Navbar;