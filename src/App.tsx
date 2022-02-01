import React, { useEffect } from 'react';
import { Landing } from './pages/landing/landing';
import { Facts } from './pages/facts/facts';
import { Login } from './pages/login/login';
import { Quiz } from './pages/quiz/quiz';
import { Nav } from './shared/nav';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'antd/dist/antd.css';

export const App = () => {
  const userToken = localStorage.getItem('token');

  return(
    <Router>
      <Nav/>
      <Routes>
        {userToken != null ?
        <>
         <Route path="/" element={<Landing/>}/>
         <Route path="/facts" element={<Facts/>}/> 
         <Route path="/quiz" element={<Quiz/>}/> 
         </>:
         <>
         <Route path="/" element={<Login/>}/>
         <Route path="/facts" element={<Login/>}/>
         <Route path="/quiz" element={<Login/>}/>
         </>
         }
      </Routes>
    </Router>
  );
}
