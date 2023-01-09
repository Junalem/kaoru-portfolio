import React, { Component, useState } from 'react';
import './App.css';
import About from './components/About';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Photo from './components/Photo'
import Photos from './components/Photos';


const App = () => {
  return (
    <div>
      <div className="navbar">
        < Navbar />
      </div>
      <div>
        <div className="left-scene">
          < Photo />
        </div>
        <div className="right-scene">
          < About />
        </div>
      </div>
      <div className="middle-scene">
        < Photos />
      </div>
      <div className="footer">
        < Footer />
      </div>
    </div>
  );
};

export default App;
