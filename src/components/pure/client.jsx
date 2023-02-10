import React from 'react';

const ClientComponent = ({ client, complete, completeTask }) => {
   
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
        <tr>
            <th>
                <span className='ms-2'>{ `${new Date(client.dateTime).getHours()}:${new Date(client.dateTime).getMinutes()} - ${client.finalHour}`}</span>
            </th>
            <td className='align-middle'>
                <span>{ `${client.name} ${client.lastName}` }</span>
            </td>
            <td className='align-middle'>
                {client.cellphone}
            </td>
            <td className='align-middle'>
                {client.specialty}
            </td>
            <td className='align-middle'>
                {client.specialist}
            </td>
            <td className='align-middle'>
                {completedIcon()}
            </td>
            <td className='align-middle'>
                <i className="bi bi-pencil-square"></i>
                <i className="bi bi-trash3"></i>
            </td>
        </tr>
    )
}

export default ClientComponent;
