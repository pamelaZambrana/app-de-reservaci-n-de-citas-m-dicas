import React from 'react';

const ClientComponent = ({ client }) => {
    return (
        <tr>
            <th>
                <span className='ms-2'>{ `${client.initialHour} - ${client. finalHour}`}</span>
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
                {client.complete}
                <i class="bi bi-check2-square"></i>
            </td>
            <td className='align-middle'>
                <i className="bi bi-pencil-square"></i>
                <i className="bi bi-trash3"></i>
            </td>
        </tr>
    )
}

export default ClientComponent;
