import React from 'react';
import UserComponent from '../pure/userComponent';
const UserTable = ({usersList, remove}) => {
    return (
        
            <table className='table table-striped user-table'>
                <thead>
                    <tr>
                        <th scope="col">Nombre</th>
                        <th scope='col'>Especialidad</th>
                        <th scope='col'>Sucursal</th>     
                        <th scope='col'>Disponibilidad</th>       
                        <th scope='col'>Contacto</th> 
                        <th scope='col'>Dirección</th>
                        <th scope='col'>Email</th>
                        <th scope='col'>Modificar</th>         
                    </tr>
                </thead>
                <tbody>

                    {usersList.map((user,index)=> {
                        return (
                            <UserComponent
                                key= {index}
                                user={user}
                                remove={remove}
                            >
                            </UserComponent>
                        )
                    })}                            
                </tbody>
            </table>
        );
};

export default UserTable;
