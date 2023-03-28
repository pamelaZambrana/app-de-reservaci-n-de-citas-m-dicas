import React from 'react';

const CustomerComponent = ({ customer,  remove }) => {

    return (
        <tr>
            <td className='align-middle'>
                <span>{ customer.name }</span>
            </td>
            <td className='align-middle'>
                {customer.age}
            </td>
            <td className='align-middle'>
                {customer.birthday}
            </td>
            <td className='align-middle'>
                {customer.phone}
            </td>
            <td>
                <span className='ms-2'>{ customer.branch }</span>
            </td>
            <td className='align-middle'>
                {customer.specialty}
            </td>
            <td className='align-middle'>
                {customer.diagnosis}
            </td>
            <td className='align-middle'>
                <i className="bi bi-pencil-square"></i>
                <i 
                    className="bi bi-trash3"
                    onClick={()=>remove(customer)}
                ></i>
            </td>
        </tr>
    )
}

export default CustomerComponent;
