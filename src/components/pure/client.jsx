import React from 'react';
import { useNavigate } from 'react-router-dom';
import EditAppointmentForm from '../forms/xxx';

const AppointmentComponent = ({ appointment, completeAppo, remove, editAppointment }) => {
    let finalHour;
    /* calculando el final de la sesión*/
    function timeRange(){
        let initialHour=(new Date(appointment.dateTime).getHours())*60;
        let initialMinutes=new Date(appointment.dateTime).getMinutes();
        let initMinutes;
        if(initialMinutes===0){
            initMinutes="00";
        }else{
            initMinutes = initialMinutes;
        };
        let totalMinutes=initialHour+initialMinutes;
        /* duración de cada sesión */
        let EA=30;
        let LP=45;
        let minutes;
        let hours;
        if((appointment.branch==="La Paz")){
            hours=Math.floor((totalMinutes+LP)/(60));
            minutes=(((totalMinutes+LP)/(60))-hours)*60;
        }else if((appointment.branch==="El Alto")){
            hours=Math.floor((totalMinutes+EA)/(60));
            minutes=(((totalMinutes+EA)/(60))-hours)*60;
        };
        if(minutes===0){
            minutes='00';
           
        }
        finalHour=`${hours}:${minutes}`;
        return(
           /*  `${new Date(appointment.dateTime).getHours()}:${new Date(appointment.dateTime).getMinutes()}-${finalHour}` */
           `${initialHour/60}:${initMinutes}-${finalHour}`
        );
    };
    function completedIcon(){
        
        if(appointment.complete){
            return(
            <i 
                onClick={ ()=>completeAppo(appointment) }
                className='bi bi-toggle-on task-action'
                style={{ color:"green" }}
            >

            </i>
            );
        }else{
            return(
                <i 
                onClick={ ()=>completeAppo(appointment) }
                className='bi bi-toggle-off task-action'
                style={{ color:"gray" }}
                >
                </i>
            );
        };
    };

    return (
        <tr className={appointment.complete ? "complete-appointment" : "uncomplete-appointment"}>
            <th>
                <span className='ms-2'>{ appointment.branch }</span>
            </th>
            <td className='align-middle'>
                <span>{ timeRange() }</span>
            </td>
            <td className='align-middle'>
                <span>{ appointment.name }</span>
            </td>
            <td className='align-middle'>
                {appointment.cellphone}
            </td>
            <td className='align-middle'>
                {appointment.doctor}
            </td>
            <td className='align-middle'>
                {appointment.specialty}
            </td>
            <td className='align-middle'>
                {completedIcon()}
            </td>
            <td className='align-middle'>
                <i 
                    className="bi bi-pencil-square"
                    onClick={ ()=>editAppointment(appointment) }
                ></i>
                <i 
                    className="bi bi-trash3"
                    onClick={()=>remove(appointment)}
                ></i>
            </td>
        </tr>
    )
}

export default AppointmentComponent;
