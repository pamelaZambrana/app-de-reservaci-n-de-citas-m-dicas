import React, {useState} from 'react';
import Navbar from '../../components/pure/navbar';
import Aside from '../../components/containers/aside';
import {Route, Routes } from 'react-router-dom';
import UsersDashboard from '../dashboard/usersDashboard';
import CustomerDashboard from '../dashboard/customerDashboard';
import Dashboard from '../dashboard/Dashboard';

const PrincipalPage = ({arrows, setArrows}) => {
  const [navBarMenu, setNavBarMenu] = useState(false);
  
  /* Abrir navBarMenu */
  function openNavBarMenu(){
      setNavBarMenu(prevState=>!prevState);  
  }
    return (
      <div className='App'>
        <Navbar
            navBarMenu = { navBarMenu }
            openNavBarMenu = { openNavBarMenu }
            >
        </Navbar>
        <section className='principal-section'>
        <Routes>
            <Route 
            path='tablaUsuarios'
            element = { <UsersDashboard 
                        /> 
                      } 
            />
            <Route 
            path='tablaPacientes'
            element = { <CustomerDashboard
                            /> 
                        }
            />
            <Route 
            path='tablaCitas'
            element = {<Dashboard 
                            arrows = { arrows }
                            setArrows = { setArrows }
                            /> 
                      }
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
