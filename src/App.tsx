import React from 'react';
import { Landing } from './pages/landing/landing'
import { Nav } from './shared/nav'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

export const App = () => {
  return(
    <Router>
      <Nav/>
      <Landing/>
    </Router>
  );
}
