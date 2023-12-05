import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../pages/home';
import Overview from '../pages/overview';

function Main() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/overview" element={<Overview />} />
      </Routes>
    </Router>
  );
}

export default Main;
