import React from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Login from './pages/Login';
import AuthPage from './pages/Register';
import Pharma from './pages/Pharma2';
import PharmacyPage from './pages/pharma';
import LoginButton from './pages/Home';
import MedicAidAI from './pages/MedAI';



function App() {

  return (
   <BrowserRouter>
    
   <Routes>
    
    <Route path='login' element={<Login/>}/>
    <Route path='register' element={<AuthPage/>}/>
    <Route path='pharma' element={<PharmacyPage/>}/>
    <Route path='pharma2' element={<Pharma/>}/>
    <Route path='home' element={<LoginButton/>}/>
    <Route path='MedicAidAI' element={<MedicAidAI/>}/>
   </Routes>
    
   </BrowserRouter>
   
  );
};

export default App;