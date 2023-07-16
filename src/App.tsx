import React from 'react';
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Projects from "./Components/Tiel/Sources/Projects/ProjectList"
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import Tile from './Components/Tiel/Tile'
import Footer from './Components/Footer/Footer';
import styled from './Components/Tiel/Tile.module.css'
import CW from './Components/CW/CW'
import Imprint from './Components/Imprint/Imprint'

function App() {

  const projects = Projects.map(item => (
    <Tile
      key={item.id}
      {...item}
    />
  ));



  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Projects" element={<div className={styled.container}>{projects}</div>} />
        <Route path="/CW" element={<div className={styled.container}>{<CW />}</div>} />
        <Route path="/Imprint" element={<div className={styled.container}>{<Imprint />}</div>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
