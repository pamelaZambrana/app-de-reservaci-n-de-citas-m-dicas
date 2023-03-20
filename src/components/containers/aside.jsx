import React from 'react';
import { useNavigate } from 'react-router-dom';
import "../../styles/aside.css";
const Aside = ({addNewAppointment}) => {
    const navigate=useNavigate();
    return (
        <div className='aside'>
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
