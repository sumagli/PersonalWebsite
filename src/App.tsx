import React from 'react';
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import Tiels from './Components/Tiels/Tiels';
import Footer from './Components/Footer/Footer';
import styled from './Components/Tiel/Tile.module.css'
import CW from './Components/CW/CW'
import Imprint from './Components/Imprint/Imprint'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Projects" element={<div className={styled.container}>{<Tiels />}</div>} />
        <Route path="/CW" element={<div className={styled.container}>{<CW />}</div>} />
        <Route path="/Imprint" element={<div className={styled.container}>{<Imprint />}</div>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
