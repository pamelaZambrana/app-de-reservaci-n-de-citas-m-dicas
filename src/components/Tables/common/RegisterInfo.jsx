import React from 'react';
import errorAlert from '../../../alerts/errorAlert'
import successAlert from '../../../alerts/successAlert'

const RegisterInfo = ({ item, properties }) => {

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
                Object.keys(properties).map((prop, index) => (
                    <td key={ index }>{ item[prop] }</td>
                ))
            }
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

