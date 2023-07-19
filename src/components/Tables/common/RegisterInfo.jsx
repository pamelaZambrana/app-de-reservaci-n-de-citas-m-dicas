import React from 'react';
import errorAlert from '../../../alerts/errorAlert'
import successAlert from '../../../alerts/successAlert'

const RegisterInfo = ({ worker, properties }) => {

    /* const eliminarUsuario = async ()=>{
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
    } */

    return (
        <tr>
            {
                properties.map((prop, index) => (
                    <td>{ worker[prop] }</td>
                ))
            }
            {/* <td>
                <span>{ worker.name }</span>
            </td>
            <td> {worker.specialty} </td>
            <td> <span className='ms-2'>{ worker.branch }</span> </td>
            <td> { worker.availability} </td>
            <td> { worker.phone} </td>
            <td> { worker.address} </td>
            <td> {worker.email} </td> */}
            <td>
                <div className='table-icons-container'>
                    <i className="bi bi-pencil-square"></i>
                    <i 
                        className="bi bi-trash3"
                        //onClick={()=>eliminarUsuario()}
                    ></i>
                </div>
            </td>
        </tr>
    )
}

export default RegisterInfo;

