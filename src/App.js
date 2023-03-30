import React, {useState} from 'react';
import './App.css';
import {Routes, Route} from 'react-router-dom';
import"./styles/principal-section.css";

import Dashboard from './pages/dashboard/Dashboard';
import AppointmentForm from './components/forms/appointmentForm';
import ColoredTablePage from "./pages/appointments/coloredTablePage"
import LoginPage from './pages/auth/loginPage';
import UserFormPage from './pages/formPages/userFormPage';
import UsersDashboard from './pages/dashboard/usersDashboard';
import CustomerForm from './components/forms/custormerForm';
import CustomerDashboard from './pages/dashboard/customerDashboard';



function App() {

  
  const [arrows, setArrows] = useState(1);
  const [navBarMenu, setNavBarMenu] = useState(false);

  /* Abrir navBarMenu */
  function openNavBarMenu(){
    console.log(navBarMenu);
      setNavBarMenu(prevState=>!prevState);  
  }
 
  
  return (
    <Routes>
      <Route 
        path='registroUsuario'
        element = { <UserFormPage 
                      /> }
      />
      <Route 
        path='tablaUsuarios'
        element = { <UsersDashboard 
                      navBarMenu = { navBarMenu }
                      openNavBarMenu = { openNavBarMenu }
                      /> }
      />
      <Route 
        path='registroPaciente'
        element = { <CustomerForm
                      /> }
      />
      <Route 
        path='tablaPacientes'
        element = { <CustomerDashboard
                      navBarMenu = { navBarMenu }
                      openNavBarMenu = { openNavBarMenu }
                      /> }
      />
      <Route 
        path='tablaCitas'
        element = { <Dashboard 
                      arrows = { arrows }
                      setArrows = { setArrows }
                      navBarMenu = { navBarMenu }
                      openNavBarMenu = { openNavBarMenu }
                      /> }
      />
      <Route 
        path='/newAppointment'
        element = { <AppointmentForm 
                      arrows = { arrows }
                      setArrows = { setArrows }
                   /> }
      />
      <Route 
        path='/login'
        element = { <LoginPage/> }
      />
      <Route
        path='/watch'
        element = { <ColoredTablePage 
                          arrows = { arrows }
                          setArrows = { setArrows }
                     /> }
      />
      
    </Routes> 
    
    
  );
}

export default App;
