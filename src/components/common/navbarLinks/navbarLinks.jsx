import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { TYPES } from '../../../globalContext/reducer';
import { GlobalContext } from '../../../globalContext/globalContext';

const NavbarLinks = ({list, classStyle}) => {
  const [globalState, dispatch] = useContext(GlobalContext);
  const loginState = globalState.loginState;
    return (
    <ul 
      className={`${classStyle}`}
      onMouseLeave={() => dispatch({ type: TYPES.CLOSE_OPEN_PRINCIPAL_MENU })} 
    
    >
          {
          list?.map((link) => (
            <li key={link.id} className={`${classStyle}`}>
              <NavLink
                to={`${link.path}`}
                className={({isActive}) => isActive ? "active-link" : null}
              >{ link.name }</NavLink>
            </li>
          ))
          }
    </ul>
        
    );
}

export default NavbarLinks;
