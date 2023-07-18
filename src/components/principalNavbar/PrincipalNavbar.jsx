import React from 'react';
import { useContext } from 'react';
import { GlobalContext } from '../../globalContext/globalContext';
import { NavLink } from 'react-router-dom';
import { TYPES } from '../../globalContext/reducer';



const PrincipalNavbar = () => {
  const [globalState, dispatch] = useContext(GlobalContext);
  const loginState = globalState.loginState;



  return (
      <nav className='principal-navbar'>
        <h1>CLÍNICA SUYANA</h1>
        {
            loginState ?
            <li className='navbar-links-plain'>
              <NavLink
                to="/"
                onClick={() => {
                  dispatch({ type : TYPES.CLOSE_SESSION });
                  localStorage.removeItem("user");
                }}
              >Cerrar sesión</NavLink>
            </li>
          :null
          }
    
      </nav>
  );
}

export default PrincipalNavbar;
