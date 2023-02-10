import React from 'react';
import ClientComponent from '../pure/client';
const Table = ({clientsList, completeTask, complete}) => {
    return (
        
            <table>
                <thead>
                    <tr>
                        <th scope='col'>Horario</th>
                        <th scope='col'>Nombre del paciente</th>     
                        <th scope='col'>Celular</th>       
                        <th scope='col'>Especialidad</th> 
                        <th scope='col'>Especialista</th>
                        <th scope='col'>Estado</th>
                        <th scope='col'>Editar</th>        
                    </tr>
                </thead>
                <tbody>

                    {clientsList.map((client,index)=> {
                        return (
                            <ClientComponent
                                key= {index}
                                client={client}
                                complete={complete}
                                completeTask={completeTask}
                            >
                            </ClientComponent>
                        )
                    })}                            
                </tbody>
            </table>
        );
};

export default Table;
