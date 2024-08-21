// import './index.css';
import React from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Login from './pages/Login';
import AuthPage from './pages/Register';
// import Pharma from './pages/Pharmacy/popup.html';


function App() {
  return (
   <BrowserRouter>

   <Routes>
    
    <Route path='login' element={<Login/>}/>
    <Route path='register' element={<AuthPage/>}/>
    {/* <Route path='pharma' element={<Pharma/>}/>s */}

   </Routes>
  
   </BrowserRouter>
  );
}

export default App;
