import './App.css';
import React, {useState} from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import Nav from './components/nav'
import Profile from './components/profile'
import Events from './components/events'
import Home from './components/home'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';



function App() {
return (
    <Router>
    <Nav />
    
    <div className="display">
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/events" element={<Events />} />
    </Routes>
    </div>
    </Router>
)
}

export default App;
