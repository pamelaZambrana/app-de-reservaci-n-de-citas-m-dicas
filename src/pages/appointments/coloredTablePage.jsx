import React from 'react';
import { useNavigate } from 'react-router-dom';
import Agenda from '../../components/containers/agenda';
import "../../styles/coloredTablePage.css";

const ColoredTablePage = ({ clients, arrows, setArrows }) => {
    const navigate=useNavigate();
    return (
        <div className='colored-agenda-container'>
            <div className='icon-container'>
            <button 
                className='close-table-button'
                onClick={()=>navigate(-1)}
            >
                <i className="bi bi-x"></i>
            </button>
            </div>
            <Agenda 
                clients = { clients } 
                arrows = { arrows }
                setArrows = { setArrows }
            ></Agenda>
        </div>
    );
}

export default ColoredTablePage;
