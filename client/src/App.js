import React from 'react'
import Dashboard from './dashboard/dashboard.js'
import SignAuth from './SignUp/SignAuth.js';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'

function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />}/>
        <Route path="signup" element={<SignAuth />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;