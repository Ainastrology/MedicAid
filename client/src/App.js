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











// import React from 'react';
// import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
// import HomePage from './pages/Home';
// import MedicAidAIPage from './pages/MedAI';
// import './App.css';  // Custom CSS for your styles

// const App = () => {
//   return (
//     <Router>
//       <div className="App">
//         <nav>
//           <ul>
//             <li><Link to="/">Home</Link></li>
//             <li><Link to="/medicaid-ai">MedicAid AI</Link></li>
//           </ul>
//         </nav>
//         <Routes>
//           <Route path="/" element={<HomePage />} />
//           <Route path="/medicaid-ai" element={<MedicAidAIPage />} />
//         </Routes>
//       </div>
//     </Router>
//   );
// };

// export default App;
