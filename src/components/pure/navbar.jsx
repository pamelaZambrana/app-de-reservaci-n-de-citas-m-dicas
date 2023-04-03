import React from 'react';
import DropdownNavMenu from './dropdownNavMenu';
import "../../styles/navStyle.css";


const Navbar = ({navBarMenu, openNavBarMenu, setLogin}) => {
    
    return (
        <div >
            <nav className='navbar '>
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
                
                <div className='d-flex gap-3 align-items-center'>
                    
                    <h5 
                        className='nav-item dropdown-toggle menu-button'
                        onClick={()=> openNavBarMenu() }
                        
                    >
                        Menu
                    </h5>
                    
                </div>              
                { navBarMenu ? <DropdownNavMenu 
                                    openNavBarMenu={openNavBarMenu}
                                    setLogin={ setLogin }
                                ></DropdownNavMenu> : null}
                
            </nav>
        </div>
        
    );
}

export default Navbar;
