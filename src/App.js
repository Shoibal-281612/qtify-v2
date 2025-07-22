import React from 'react';
import { BrowserRouter as Router, Link, Routes, Route } from 'react-router-dom';
import Navbar from './assets/Components/Navbar/Navbar';
import Hero from './assets/Components/Hero/Hero';
import Section from './assets/Components/Section/Section'
// Main App Component
function App() {
  return (
    <div>
    < Navbar/>
    <Hero/>
     <Section title="Top Albums" apiEndpoint="https://qtify-backend-labs.crio.do/albums/top" />
    </div>
  );
}

export default App;
