import React, {useState} from 'react';
import './App.css';
import {Routes, Route, Navigate, useNavigate, Router} from 'react-router-dom';
import"./styles/principal-section.css";

import Dashboard from './pages/dashboard/Dashboard';
import AppointmentForm from './components/forms/appointmentForm';
import ColoredTablePage from "./pages/appointments/coloredTablePage"
import LoginPage from './pages/auth/loginPage';
import UserFormPage from './pages/formPages/userFormPage';
import UsersDashboard from './pages/dashboard/usersDashboard';
import CustomerForm from './components/forms/custormerForm';
import CustomerDashboard from './pages/dashboard/customerDashboard';
import Navbar from './components/pure/navbar';
import Aside from './components/containers/aside';
import ColoredAgenda from './components/containers/coloredAgenda';
import Agenda from './components/containers/agenda';
import PrincipalPage from './pages/home/principalPage';
import NewAppointmentPage from './pages/formPages/newAppointmentPage';



function App() {
  const [arrows, setArrows] = useState(1);
  const [login, setLogin] = useState(false);

  const navigate=useNavigate();
  return (
      <Routes>
        <Route 
          path='/login'
          element = { <LoginPage 
                              login={ login }
                              setLogin = { setLogin }
                /> }
        />
        <Route 
          path='registroUsuario'
          element = { <UserFormPage 
                        /> }
        />
        <Route 
          path='registroPaciente'
          element = { <CustomerForm
                        /> }
        />
        <Route 
            path='/newAppointment'
            element = { <NewAppointmentPage 
                          arrows = { arrows }
                          setArrows = { setArrows }
                      /> }
        />
        <Route
          path='/watch'
          element = { <ColoredTablePage
                            arrows = { arrows }
                            setArrows = { setArrows }
                            setLogin = { setLogin }
                      /> }
        />
        <Route path='home/*' element={
          login
          ?
          (<PrincipalPage
          arrows = { arrows }
          setArrows = { setArrows }
          login={login}
          setLogin = { setLogin }
          />)
          : <Navigate from="/home"  replace to={"/login"}/>
        }
        /> 
        
      <Route path='*' element={<p>Not Found</p>}/>
    </Routes>
  );
}

export default App;
