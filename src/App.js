import React from 'react';
import { BrowserRouter as Router, Link, Routes, Route } from 'react-router-dom';
import Navbar from './assets/Components/Navbar/Navbar';
import Hero from './assets/Components/Hero/Hero';
import Section from './assets/Components/Section/Section';
import 'swiper/css';
import 'swiper/css/navigation';
// Main App Component
function App() {
  return (
   <div className="bg-black min-h-screen pb-20"> {/* Added dark background and padding */}
      <Navbar/>
      <Hero/>
      {/* Top Albums Section - type="album" to show "Show All" button */}
      <Section
        title="Top Albums"
        apiEndpoint="https://qtify-backend-labs.crio.do/albums/top"
        type="album" // Crucial: sets the type for this section
      />
      {/* New Albums Section - type="album" to show "Show All" button */}
      <Section
        title="New Albums"
        apiEndpoint="https://qtify-backend-labs.crio.do/albums/new"
        type="album" // Crucial: sets the type for this section
      />
      {/* Songs Section - type="song" to hide "Show All" button and show tabs */}
      <Section
        title="Songs"
        apiEndpoint="https://qtify-backend-labs.crio.do/songs"
        type="song" // Crucial: sets the type for this section
      />
    </div>
  );
}

export default App;
