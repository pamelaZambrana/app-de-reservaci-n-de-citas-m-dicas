import React from 'react';
import CustomerComponent from '../pure/customerComponent';
const CustomerTable = ({customerList, remove}) => {
    return (
        
            <table className='table table-striped user-table'>
                <thead>
                    <tr>
                        <th scope="col">Nombre</th>
                        <th scope='col'>Edad</th>
                        <th scope='col'>Fecha de nacimiento</th>
                        <th scope='col'>Contacto</th> 
                        <th scope='col'>Sucursal</th>     
                        <th scope='col'>Diagnóstico</th>
                        <th scope='col'>Edición</th>        
                    </tr>
                </thead>
                <tbody>

                    {customerList.map((customer,index)=> {
                        return (
                            <CustomerComponent
                                key= {index}
                                customer={customer}
                                remove={remove}
                            >
                            </CustomerComponent>
                        )
                    })}                            
                </tbody>
            </table>
        );
};

export default CustomerTable;
