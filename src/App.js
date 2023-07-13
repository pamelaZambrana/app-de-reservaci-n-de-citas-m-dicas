/* import React, { useState} from 'react';
//import './App.css';
import {Routes, Route} from 'react-router-dom';
import"./styles/principal-section.css";
import ColoredTablePage from "./pages/appointments/coloredTablePage"
import LoginPage from './pages/auth/loginPage';
import UserFormPage from './pages/formPages/userFormPage';
import CustomerForm from './components/forms/custormerForm';
import PrincipalPage from './pages/home/principalPage';
import NewAppointmentPage from './pages/formPages/newAppointmentPage';
import PublicRoute from './pages/public/PublicRoute';
import PrivateRoute from './pages/private/PrivateRoute';
import EditAppointmentPage from './pages/formPages/EditAppointmentPage';
import { EditProvider } from './components/pure/context/editContext';
import { AuthProvider } from './components/pure/context/auth';




function App() {

  const [arrows, setArrows] = useState(1);

  return (
    
  <AuthProvider>
      <EditProvider>
        <Routes>
          <Route path="/" element={<PublicRoute/>}>
            <Route 
              index
              element = { <LoginPage/> }
            />
          </Route>
  
          <Route path='private/*' element={<PrivateRoute/>}>
            <Route 
              path='home/*'
              element={
                <PrincipalPage
                  arrows = { arrows }
                  setArrows = { setArrows }
                  />
                }
            /> 
            <Route 
              path='registroUsuario'
              element = { <UserFormPage/> }
            />
            <Route 
              path='registroPaciente'
              element = { <CustomerForm/> }
            />
            <Route 
                path='newAppointment'
                element = { <NewAppointmentPage 
                              arrows = { arrows }
                              setArrows = { setArrows }
                          /> 
                          }
            />
            <Route 
                path='editAppointment'
                element = { <EditAppointmentPage
                              arrows = { arrows }
                              setArrows = { setArrows }
                          /> 
                          }
            />
            <Route
              path='watch'
              element = { <ColoredTablePage
                                arrows = { arrows }
                                setArrows = { setArrows }
                          /> }
            /></Route>
              
          <Route path='*' element={<p>Not Found</p>}/>
        </Routes>
      </EditProvider>
    </AuthProvider>
    );
  }
  
  export default App;
   */