import React from 'react';

const UserComponent = ({ user,  remove }) => {

    return (
        <tr>
            <td className='align-middle'>
                <span>{ user.name }</span>
            </td>
            <td className='align-middle'>
                {user.specialty}
            </td>
            <td>
                <span className='ms-2'>{ user.branch }</span>
            </td>
            <td className='align-middle'>
                {user.availability}
            </td>
            <td className='align-middle'>
                {user.phone}
            </td>
            <td className='align-middle'>
                {user.address}
            </td>
            <td className='align-middle'>
                {user.email}
            </td>
            <td className='align-middle'>
                <i className="bi bi-pencil-square"></i>
                <i 
                    className="bi bi-trash3"
                    onClick={()=>remove(user)}
                ></i>
            </td>
        </tr>
    )
}

export default UserComponent;
