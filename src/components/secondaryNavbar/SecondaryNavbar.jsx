import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

import { useContext } from 'react';
import { GlobalContext } from '../../globalContext/globalContext';
import { TYPES } from '../../globalContext/reducer';
import { secondaryNavbarList } from './linkList';

import { navbarButtonsList } from './navbarButtonsList';
import NavbarButtons from '../common/navbarItems/navbarButtons';
import NavbarLinks from '../common/navbarItems/navbarLinks';


const SecondaryNavbar = () => {
      /* ---- using local state */
    const [windowSize, setWindowSize] = useState({
        width: window.innerWidth,
    });
      /* ----- using global state ----- */
    const [globalState, dispatch] = useContext(GlobalContext);
    const openMenu = globalState.openPrincipalMenu;
    useEffect(() => {
        const handleResize = () => {
          setWindowSize({
            width: window.innerWidth,
          });
        };
        window.addEventListener('resize', handleResize);
        return () => {
          window.removeEventListener('resize', handleResize);
        };
      }, []);
    console.log(windowSize)
    return (
        <nav className='secondary-navbar'>
          {
              windowSize.width > 768 ?
              <>
                <NavbarButtons
                  list = { navbarButtonsList }
                  classStyle={ "navbar-buttons-plain" }
                  classButtons={"navbar-button-plain"}
                ></NavbarButtons>
                <NavbarLinks
                  list={ secondaryNavbarList }
                  classStyle={ "navbar-links-plain" }
                ></NavbarLinks>
              </>
              :
              <>
                <i 
                  className="bi bi-list"
                  onClick={() => dispatch({ type : TYPES.CLOSE_OPEN_PRINCIPAL_MENU })}  
                ></i>
                {
                  openMenu ?
                  <div 
                    className='navbar-open-menu'
                    onMouseLeave={() => dispatch({ type: TYPES.CLOSE_OPEN_PRINCIPAL_MENU })}   
                  >
                    <NavbarLinks
                      list={ secondaryNavbarList }
                      classStyle={ "navbar-links-vertical" }
                    ></NavbarLinks>
                    <NavbarButtons
                      list = { navbarButtonsList }
                      classStyle={ "navbar-buttons-vertical" }
                      classButtons={"navbar-button-vertical"}
                    ></NavbarButtons>
                  </div>
                  : null
                }
              </>
          }
      </nav>
    );
}

export default SecondaryNavbar;
