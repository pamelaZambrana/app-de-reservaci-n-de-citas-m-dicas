import React from 'react';
import { NavLink, useNavigate} from 'react-router-dom';

const DropdownNavMenu = ({openNavBarMenu, setLogin}) => {
    const navigate=useNavigate();
    function exit(){
        setLogin(false);
        navigate("/login");
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
    ]
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
