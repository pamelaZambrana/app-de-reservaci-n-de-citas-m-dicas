import React from 'react';
import DropdownNavMenu from './dropdownNavMenu';
import "../../styles/navStyle.css";


const Navbar = ({navBarMenu, openNavBarMenu}) => {
    
    return (
        <div >
            <nav className='navbar fixed-top'>
                <div className='navbar-item months'>
                    <h5 className='navbar-item'>Suyana</h5>
                    <h5 className="navbar-item month">Febrero</h5>
                    <h5 className="navbar-link">
                        <button className='navbar-arrows' type='button'>
                            <i className="bi bi-chevron-left arrows"></i>
                        </button>
                        <button className='navbar-arrows' type='button'>
                            <i className="bi bi-chevron-right arrows"></i>
                        </button>
                        
                    </h5>
                </div>
                
                <div >
                    <h5 
                    className='nav-item dropdown-toggle'
                    onClick={()=> openNavBarMenu() }
                    >
                        Menu
                    </h5>
                    
                </div>              
                { navBarMenu ? <DropdownNavMenu></DropdownNavMenu> : null}
                
            </nav>
        </div>
        
    );
}

export default Navbar;
