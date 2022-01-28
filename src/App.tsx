import React, { useEffect } from 'react';
import { Landing } from './pages/landing/landing';
import { Facts } from './pages/facts/facts';
import { Login } from './pages/login/login'
import { Nav } from './shared/nav';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'antd/dist/antd.css';
import axios from 'axios';
import { getChartData } from './pages/facts/factsData';

export const App = () => {
  const getTest = getChartData()
  useEffect(() => {
    getTest.then(r => {if(r.status !== 200){
      localStorage.removeItem('token')
    }} )
  }, []);
  const userToken = localStorage.getItem('token');

  return(
    <Router>
      <Nav/>
      <Routes>
        {userToken != null ?
        <>
         <Route path="/" element={<Landing/>}/>
         <Route path="/facts" element={<Facts/>}/> 
         </>:
         <>
         <Route path="/" element={<Login/>}/>
         </>
         }
      </Routes>
    </Router>
  );
}
