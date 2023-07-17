import React from 'react';
import { NavLink } from 'react-router-dom';


const NavbarLinks = ({list, classStyle}) => {

    return (
    <ul 
      className={`${classStyle}`} 
    >
          {
          list?.map((link) => (
            <li key={link.id}>
              <NavLink
                to={`${link.path}`}
                className={({isActive}) => isActive ? "active-link" : null}
                end
              >{ link.name }</NavLink>
            </li>
          ))
          }
    </ul>
        
    );
}

export default NavbarLinks;
