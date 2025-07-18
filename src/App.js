import React from 'react';
import { BrowserRouter as Router, Link, Routes, Route } from 'react-router-dom';
import Navbar from './assets/Components/Navbar/Navbar';
import Hero from './assets/Components/Hero/Hero';

// Main App Component
function App() {
  return (
    <div>
    < Navbar/>
    <Hero/>
    </div>
  );
}

export default App;
