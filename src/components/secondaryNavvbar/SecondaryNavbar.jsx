import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import NavbarLinks from '../common/navbarLinks/navbarLinks';
import { useContext } from 'react';
import { GlobalContext } from '../../globalContext/globalContext';
import { TYPES } from '../../globalContext/reducer';
import { secondaryNavbarList } from './linkList';

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
              windowSize.width > 785 ?
              <NavbarLinks
                list={ secondaryNavbarList }
                classStyle={ "navbar-links-plain" }
              ></NavbarLinks>
              :
              <>
                <i 
                  className="bi bi-list"
                  onClick={() => dispatch({ type : TYPES.CLOSE_OPEN_PRINCIPAL_MENU })}  
                ></i>
                {
                  openMenu ?
                  <NavbarLinks
                    list={ secondaryNavbarList }
                    classStyle={ "navbar-links-vertical" }
                  ></NavbarLinks>
                  : null
                }
              </>
          }
      </nav>
    );
}

export default SecondaryNavbar;
