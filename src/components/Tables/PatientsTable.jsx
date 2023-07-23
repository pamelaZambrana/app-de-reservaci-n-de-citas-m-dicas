import React, {useState, useEffect} from 'react';
import TableHeader from './common/TableHeader';
import { tablesList } from './utilities/characteristicsList';
import TableContent from './common/TableContent';
import { getAllPatientsBackend } from '../../requests/patientsRequest';


const worker1 = {
    _id: 12336,
    name : "Bellota", 
    specialty : "Psicomotricidad",
    branch : "El Alto",
    availability : "Mañana y Tarde",
    phone : "26485215",
    address : "Av. Quintanilla",
    email : "bellota@gmail.com",
};
const worker2 = {
    _id: 12337,
    name : "Stampy", 
    specialty : "Fisioterapia",
    branch : "El Alto",
    availability : "Mañana y Tarde",
    phone : "89785236",
    address : "Av. Quintanilla",
    email : "stampy@gmail.com",
}
const PatientsTable = () => {

    /* ---- using local state ------ */
    const [patients, setPatients] = useState([]);
    const [loading, setLoading] = useState(false);
    //const [searchCustomer, setSearchCustomer] = useState("");

    /* Petición de registros */
    /* async function customerRequest(){
        await getpatients()
                        .then(ans=>{
                            setLoading(true);
                            setPatients(ans.data.body);
                            console.log(ans.data.body);
                        })
                        .catch(error=>{
                            console.log(error)
                        })
    } */
    /* Buscando por usuario */
    
    
    /* borrando citas */
    function removeUser(customer){
        const index=patients.indexOf(customer);
        const temppatients=[...patients];
        temppatients.splice(index,1);
        setPatients(temppatients);
    }
    
    /* Desplegando la tabla */
   /*  let customerTable;
    if(patients.length>0){
        customerTable=
            <CustomerTable
                customerList={ patients }
                remove={ removeUser }
            ></CustomerTable>
     }else{
       customerTable = (
       <div>
            <h4>No hay pacientes registrados.</h4>
            <h5>Crea un nuevo perfil de paciente.</h5>
       </div>
       ) 
    }; */
    async function pacientsRequest(){
        getAllPatientsBackend()
            .then(ans=>{
                console.log(ans);
                setPatients(ans.data.body)
            })
            .catch(e=>{console.log(e)});
    }
    useEffect(() => {
        pacientsRequest()
    }, []);
    return (    
    <div className='table-container'>
    {
        !loading ?
        <>
            <TableHeader
                header = { tablesList[1] } 
            ></TableHeader>
            {
                patients.length > 0 ?
                <TableContent
                    contentList = { patients }
                    properties = { tablesList[1].properties }
                ></TableContent>
                :
                <p>No hay registros en esta fecha...</p>
            }
        </>
        :
        <p>Cargando...</p>
    }
        
    </div>
    )
}

export default PatientsTable;
