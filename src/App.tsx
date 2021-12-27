import React from 'react';
import { Landing } from './pages/landing/landing'
import { Nav } from './shared/nav'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'antd/dist/antd.css';

export const App = () => {
  return(
    <Router>
      <Nav/>
      <Routes>
        <Route path="/" element={<Landing/>}/>
      </Routes>
    </Router>
  );
}
