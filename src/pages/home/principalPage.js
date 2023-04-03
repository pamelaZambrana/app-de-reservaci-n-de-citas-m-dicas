import React, {useState} from 'react';
import Navbar from '../../components/pure/navbar';
import Aside from '../../components/containers/aside';
import { Navigate, Route, Routes } from 'react-router-dom';
import UsersDashboard from '../dashboard/usersDashboard';
import CustomerDashboard from '../dashboard/customerDashboard';
import Dashboard from '../dashboard/Dashboard';
const PrincipalPage = ({login, setLogin, arrows, setArrows}) => {
     
  
  const [navBarMenu, setNavBarMenu] = useState(false);
  /* Abrir navBarMenu */
  function openNavBarMenu(){
    console.log(navBarMenu);
      setNavBarMenu(prevState=>!prevState);  
  }
    return (
      <div className='App'>
        <Navbar
            navBarMenu = { navBarMenu }
            openNavBarMenu = { openNavBarMenu }
            setLogin={ setLogin }
            >
        </Navbar>
        <section className='principal-section'>
        <Routes>
            <Route 
            path='tablaUsuarios'
            element = { login
                        ? <UsersDashboard 
                            setLogin = { setLogin }
                        /> 
                        :<Navigate from="/tablaUsuarios" to={ "/login" }/>} 
            />
            <Route 
            path='tablaPacientes'
            element = { login 
                        ? <CustomerDashboard
                            setLogin = { setLogin }
                            /> 
                        : <Navigate from="/tablaPacientes"  replace to={"/login"}/>}
            />
            <Route 
            path='tablaCitas'
            element = { login
                        ? <Dashboard 
                            arrows = { arrows }
                            setArrows = { setArrows }
                            setLogin = { setLogin }
                            /> 
                        : <Navigate from ="/tablaCitas" to="/login"/>}
            />
        </Routes>
          <Aside
            arrows={ arrows }
            setArrows = { setArrows }
          ></Aside>
        </section>
      </div>
    );
}

export default PrincipalPage;
