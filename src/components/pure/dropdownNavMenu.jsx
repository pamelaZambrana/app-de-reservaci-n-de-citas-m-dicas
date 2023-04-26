import React from 'react';
import { NavLink, useNavigate} from 'react-router-dom';
import { useAuthContext } from './auth';

const DropdownNavMenu = ({openNavBarMenu}) => {
    const {logOut}=useAuthContext();
    const navigate=useNavigate();

    function exit(){
        sessionStorage.setItem("name","");   
        sessionStorage.setItem("rol",""); 
        sessionStorage.setItem("token","");
        navigate("/");
        logOut();
    }
    
    const completeMenu=[
        {
        to: "tablaUsuarios",
        option: "Lista de trabajadores"
        },
        {
            to: "tablaPacientes",
            option: "Lista de pacientes"
            },
        {
            to: "tablaCitas",
            option: "Lista de citas médicas"
            },
    ];

    return (
        <ul 
            className="navbar-menu card" 
            onMouseLeave={()=> openNavBarMenu() }
        >
            { 
                completeMenu.map((item, key)=>(
                    <li className="navbar-item" key={key}>
                        <NavLink 
                            to={item.to}
                            style={({isActive})=>({
                                textDecoration: "none",
                                color: 'black',
                            })}
                        >{item.option}</NavLink>
                    </li>
                )
                )
            }
                <li className="navbar-item" onClick={ exit } >Salir</li>
        </ul>
    );
}

export default DropdownNavMenu;
