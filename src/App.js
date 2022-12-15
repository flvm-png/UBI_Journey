import React from "react";
import {useState} from "react";
import './App.css';
import {Login} from "./Login";
import {Register} from "./Register";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import { Dashboard } from "./Dashboard";

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
        </Routes>
      </Router>
    </div>
  );
}

export default App;
