import React from 'react';
import { removeUser } from '../../requests/userRequest';
import errorAlert from '../../alerts/errorAlert'
import successAlert from '../../alerts/successAlert'

const UserComponent = ({ user,  remove }) => {

    const eliminarUsuario = async ()=>{
        //console.log({user});
        //console.log(user._id);
        await removeUser(user._id)
            .then( answer =>{
                console.log({answer});
                successAlert(answer.data.message)
            } )
            .catch( error => {
                console.log(error.response.data);
                errorAlert(error.response.data.body.error)
            })
        remove(user)
    }

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
                    onClick={()=>eliminarUsuario()}
                ></i>
            </td>
        </tr>
    )
}

export default UserComponent;
