import React, {useState, useEffect} from 'react';
import { getCustomers } from '../../requests/customerRequest';
import "../../styles/agendaStyles.css";
import CustomerTable from '../tabs/CustomerTable';

const CustomerRegister = () => {

    /* Estados de CustomerRegister */
    const [customers, setCustomers] = useState([]);
    const [searchCustomer, setSearchCustomer] = useState("");
    const [loading, setLoading] = useState(false);

    /* Petición de registros */
    async function customerRequest(){
        await getCustomers()
                        .then(ans=>{
                            console.log(ans);
                            setLoading(true);
                            setCustomers(ans.data.body);

                        })
                        .catch(error=>{
                            console.log(error)
                        })
    }
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
        customerRequest();
        
    }, []);
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
                    { !loading 
                    ?
                    <div className="d-flex justify-content-center">
                        <p>Cargando registro de pacientes</p>
                        <div className="spinner-border" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                    </div> 
                    : customerTable }
                </div>
                
            </div>
    )
}

export default CustomerRegister;
