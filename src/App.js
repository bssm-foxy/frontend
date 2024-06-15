import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './page/Home';
import Load from './page/Load';
import Unload from './page/Unload';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/load" element={<Load />} />
        <Route path="/unLoad" element={<Unload />} />
      </Routes>
    </Router>
  );
}

export default App;
