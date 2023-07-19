import React, {useState, useEffect} from 'react';
import TableHeader from './common/TableHeader';
import TableContent from './common/TableContent';
import { tablesList } from './utilities/characteristicsList';


const worker1 = {
    _id: 5452,
    name: "Nombre",
    specialty:"Especialidad",
    branch :  "Sucursal",     
    availability:  "Disponibilidad",       
    phone: "Contacto", 
    address:  "Dirección",
    email : "Email",
};
const worker2 = {
    _id: 5463,
    name: "Pamela",
    specialty:"programador",
    branch :  "La Paz",     
    availability:  "Turno tarde",       
    phone: "C698023666", 
    address:  "Av. la paz",
    email : "pame@pame.com",
}

const WorkersTable = () => {
    /* --- using local state ---- */
    const [workers, setWorkers] = useState([]);
    //const [searchUser, setSearchUser] = useState("");
    const [loading, setLoading] = useState(false);
   
    /* ----request aqui ---- */

    useEffect(() => {
        setWorkers([worker1, worker2]); // debe ir dentro de la función request .then()

        /* ---- llamada a request---- */
        //workerRequest();
    }, []);
    return (    
    <div className='table-container'>
    {
        !loading ?
        <>
            <TableHeader
                header = { tablesList[0] } 
            ></TableHeader>
            <TableContent
                entries = { tablesList[0].entries }
                workersList = { workers }
                properties = { tablesList[0].properties }
            ></TableContent>
        </>
        :
        <p>Cargando...</p>
    }

        
    </div>
    )
}

export default WorkersTable;