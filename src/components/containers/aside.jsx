import React from 'react';
import { useNavigate } from 'react-router-dom';
import "../../styles/aside.css";
const Aside = ({addNewAppointment}) => {
    const navigate=useNavigate();
    return (
        <div className='aside d-flex flex-column gap-3'>
            <button 
                className='aside-button'
                onClick={()=>navigate("/registroUsuario")}
            >
                Crear nuevo usuario
            </button>
            <button 
                className='aside-button'
                onClick={()=>navigate("/newAppointment")}
            >
                Agendar Cita
            </button>
        </div>
    );
}

export default Aside;
