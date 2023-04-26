import React, {useEffect, useState} from 'react';
import './App.css';
import {Routes, Route, Navigate, useNavigate,} from 'react-router-dom';
import"./styles/principal-section.css";
import ColoredTablePage from "./pages/appointments/coloredTablePage"
import LoginPage from './pages/auth/loginPage';
import UserFormPage from './pages/formPages/userFormPage';
import CustomerForm from './components/forms/custormerForm';
import PrincipalPage from './pages/home/principalPage';
import NewAppointmentPage from './pages/formPages/newAppointmentPage';
import { AuthProvider, useAuth } from './components/pure/auth';
import PublicRoute from './pages/public/PublicRoute';
import PrivateRoute from './pages/private/PrivateRoute';



function App() {

  const [arrows, setArrows] = useState(1);

  /* let login;
  if (sessionStorage.getItem("token")!==""){
    login=true;
  }else{ 
    login=false;
  }; */

  /* function logInOut(){
    //setLogin(prev=>!prev);
    login=!login;
    console.log("login:",login);
  }; */
  return (
    <AuthProvider>
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
            path='watch'
            element = { <ColoredTablePage
                              arrows = { arrows }
                              setArrows = { setArrows }
                        /> }
          />
        </Route>
            
        <Route path='*' element={<p>Not Found</p>}/>
      </Routes>
    </AuthProvider>
  );
}

export default App;
