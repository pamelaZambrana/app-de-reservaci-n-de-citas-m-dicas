import React from 'react';
import AppointmentComponent from '../pure/client';
import ClientComponent from '../pure/client';
const Table = ({appointmentList, completeAppo, complete, remove}) => {
    console.log("searched",appointmentList);
    return (
        
            <table className='table table-striped'>
                <thead>
                    <tr>
                        <th scope="col">Sucursal</th>
                        <th scope='col'>Horario</th>
                        <th scope='col'>Nombre del paciente</th>     
                        <th scope='col'>Celular</th>       
                        <th scope='col'>Doctor</th> 
                        <th scope='col'>Especialista</th>
                        <th scope='col'>Estado</th>
                        <th scope='col'>Editar</th>        
                    </tr>
                </thead>
                <tbody>

                    {appointmentList.map((appointment,index)=> {
                        return (
                            <AppointmentComponent
                                key= {index}
                                appointment={appointment}
                                complete={complete}
                                completeAppo={completeAppo}
                                remove={remove}
                            >
                            </AppointmentComponent>
                        )
                    })}                            
                </tbody>
            </table>
        );
};

export default Table;
