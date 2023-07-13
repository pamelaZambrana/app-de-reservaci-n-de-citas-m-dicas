import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import "../../assets/styles/css/principalNavbarStyle.css";


const PrincipalNavbar = () => {
      const [windowSize, setWindowSize] = useState({
        width: window.innerWidth,
      });
    
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
        <nav className='principal-navbar'>
            <h1>CLÍNICA SUYANA</h1>
            {
                windowSize.width > 595 ?
                <ul className='navbar-links'>
                  <li className='navbar-links'>
                    <Link>Inicio</Link>
                  </li>
                  <li className='navbar-links'>
                    <Link>Sobre Nosotros</Link>
                  </li>
                  <li className='navbar-links'>
                    <Link>Servicios</Link>
                  </li>
                  <li className='navbar-links'>
                    <Link>Especialistas</Link>
                  </li>
                  <li className='navbar-links'>
                    <Link>Contactos</Link>
                  </li>
                </ul>
                :
                <i className="bi bi-list navbar-links"></i>
            }
        </nav>
    );
}

export default PrincipalNavbar;
