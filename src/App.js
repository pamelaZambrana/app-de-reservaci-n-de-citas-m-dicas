import React from 'react';
import './App.css';
import {Routes, Route, Navigate} from 'react-router-dom';
import"./styles/principal-section.css";

import LoginFormik from './components/forms/loginFormik';
import AppointmentFormik from './components/forms/appointmentFormik';
import Dashboard from './pages/dashboard/Dashboard';


function App() {
  
 
  return (
    <Routes>
      
      <Route 
        path='/'
        element = { <Dashboard/> }
      />
      
    </Routes> 
    
    
  );
}

export default App;
