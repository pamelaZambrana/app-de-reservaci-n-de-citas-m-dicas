import React from 'react';

const ClientComponent = ({ client, complete, completeTask, remove }) => {
    let finalHour;
    /* calculando el final de la sesión*/
    function timeRange(){
        let initialHour=(new Date(client.dateTime).getHours())*60;
        let initialMinutes=new Date(client.dateTime).getMinutes();
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
        if((client.branch==="la paz")){
            hours=Math.floor((totalMinutes+LP)/(60));
            minutes=(((totalMinutes+LP)/(60))-hours)*60;
        }else if((client.branch==="el alto")){
            hours=Math.floor((totalMinutes+EA)/(60));
            minutes=(((totalMinutes+EA)/(60))-hours)*60;
        };
        if(minutes===0){
            minutes='00';
           
        }
        finalHour=`${hours}:${minutes}`;
        console.log(hours, minutes, finalHour)
        return(
           /*  `${new Date(client.dateTime).getHours()}:${new Date(client.dateTime).getMinutes()}-${finalHour}` */
           `${initialHour/60}:${initMinutes}-${finalHour}`
        );
    };
    function completedIcon(){
        
        if(client.complete){
            return(
            <i 
                onClick={ ()=>completeTask(client) }
                className='bi bi-toggle-on task-action'
                style={{ color:"green" }}
            >

            </i>
            );
        }else{
            return(
                <i 
                onClick={ ()=>completeTask(client) }
                className='bi bi-toggle-off task-action'
                style={{ color:"gray" }}
                >
                </i>
            );
        };
    };
    return (
        <tr className={client.complete ? "complete-appointment" : "uncomplete-appointment"}>
            <th>
                <span className='ms-2'>{ client.branch }</span>
            </th>
            <td className='align-middle'>
                <span>{ timeRange() }</span>
            </td>
            <td className='align-middle'>
                <span>{ client.name }</span>
            </td>
            <td className='align-middle'>
                {client.cellphone}
            </td>
            <td className='align-middle'>
                {client.doctor}
            </td>
            <td className='align-middle'>
                {client.specialty}
            </td>
            <td className='align-middle'>
                {completedIcon()}
            </td>
            <td className='align-middle'>
                <i className="bi bi-pencil-square"></i>
                <i 
                    className="bi bi-trash3"
                    onClick={()=>remove(client)}
                ></i>
            </td>
        </tr>
    )
}

export default ClientComponent;
