import React, { useEffect, useState } from "react";
import {BrowserRouter as Router, Routes, Route}  from "react-router-dom"; 
import { getPlanets } from "./service.js";

import Header from "./Components/Header";
import Home from "./Components/Home";
import Planet from './Components/Planet';
import Resident from './Components/Resident';

import './App.css';

function App() {
  const [planets, setPlanets] = useState([]);

  useEffect(() =>   {
    getPlanets().then(res => setPlanets(res));
  }, [])

  //console.log(planets);

  return (
    <Router>
      <div>
        <Header data={planets}/>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/:planet" element={<Planet />}/>
          <Route path="/:planet/:resident" element={<Resident />}/>
        </Routes>
      </div>
    </Router>

    
  );
}

export default App;