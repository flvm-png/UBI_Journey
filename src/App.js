import React from "react";
import {useState} from "react";
import './App.css';
import {Login} from "./Login";
import {Register} from "./Register";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import { Dashboard } from "./Dashboard";
import {Contact} from "./Contact";
import {Map} from "./Map";
import {Info} from "./Info";
import {Missions} from "./cardViews";
import Avatar from "./Avatar";
import {Undef} from "./undefined"; 
import MapaBib from "./MapaBib";
import MapaAv from "./MapaAv";
import MapaGol from "./MapaGol";
import MapaRato from "./MapaRato";
import {QuestOne} from "./Quest1"


function App() {
  
  const [currentForm, setCurrentForm] = useState('login');

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  }

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={currentForm === "login" ? <Login onFormSwitch={toggleForm}/> : <Register onFormSwitch={toggleForm}/>} />
          <Route path="/dash" element={<Dashboard />} />
          <Route path="/ct" element={<Contact />} />
          <Route path="/map" element={<Map />} />
          <Route path="/mapB" element={<MapaBib />} />
          <Route path="/mapG" element={<MapaGol />} />
          <Route path="/mapA" element={<MapaAv />} />
          <Route path="/mapR" element={<MapaRato />} />
          <Route path="/avatar" element={<Avatar />} />
          <Route path="/info" element={<Info />} />
          <Route path="*" element={<Undef/>} />
          <Route path="/missions" element={<Missions/>} />
          <Route path="/quest1" element={<QuestOne/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
