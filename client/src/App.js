import './App.css';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import HomePage from './scenes/homePage';
import LoginScene from './scenes/login';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const checkLogin = () => {
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    if (isLoggedIn) {
      setIsLoggedIn(isLoggedIn)
    }
  }

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<HomePage></HomePage>}></Route>
          <Route path="/login" element={<LoginScene></LoginScene>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
