import React from 'react';
import { useNavigate } from 'react-router-dom';

const DropdownNavMenu = ({openNavBarMenu}) => {
    const navigate=useNavigate();
    return (
        <ul 
            className="navbar-menu card" 
            onMouseLeave={()=> openNavBarMenu() }
        >
            <li 
                className="navbar-item"
                onClick={()=> navigate("/tablaUsuarios") }
            >Lista de trabajadores</li>
            <li 
                className="navbar-item"
                onClick={()=>navigate("/tablaPacientes")}
            >Lista de pacientes</li>
            <li 
                className="navbar-item"
                onClick={()=>navigate("/tablaCitas")}
            >
                Tabla de citas médicas
            </li>
            <li className="navbar-item">Agenda</li>
            <li className="navbar-item">Imprimir horario</li>
            <li 
                className="navbar-item"
                onClick={()=>navigate("/login")}
            >
                Salir
            </li>
        </ul>
    );
}

export default DropdownNavMenu;
