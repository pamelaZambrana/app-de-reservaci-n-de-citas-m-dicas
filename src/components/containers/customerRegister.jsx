import React, {useState, useEffect} from 'react';
import "../../styles/agendaStyles.css";
import CustomerTable from '../tabs/CustomerTable';

const CustomerRegister = ({ customers, setCustomers}) => {

    /* Estados de CustomerRegister */
    const [searchCustomer, setSearchCustomer] = useState("");
    const [loading, setLoading] = useState(true);

    
    /* Buscando por usuario */
    
    
    /* borrando citas */
    function removeUser(customer){
        const index=customers.indexOf(customer);
        const tempCustomers=[...customers];
        tempCustomers.splice(index,1);
        setCustomers(tempCustomers);
    }
    
    /* Desplegando la tabla */
    let customerTable;
    if(customers.length>0){
        customerTable=
            <CustomerTable
                customerList={ customers }
                remove={ removeUser }
            ></CustomerTable>
     }else{
       customerTable = (
       <div>
            <h4>No hay pacientes registrados.</h4>
            <h5>Crea un nuevo perfil de paciente.</h5>
       </div>
       ) 
    };

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 2000);
    }, [customers]);
    return (    
            <div className='card agenda'>
            <div className='card-header d-flex'>
                <h1>Registro de Pacientes</h1>
            </div>
                <div 
                    className='card-body' 
                    style={ {position:"relative", height:"458px"}} 
                    data-mdb-perfect-scrollbar="true"
                >
                    { loading ? <p>Cargando lista de pacientes</p> : customerTable }
                </div>
                
            </div>
    )
}

export default CustomerRegister;
