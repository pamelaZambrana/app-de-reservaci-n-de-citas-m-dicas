import React, {useState, useEffect, useContext} from 'react';
import TableHeader from './common/TableHeader';
import { tablesList } from './utilities/characteristicsList';
import TableContent from './common/TableContent';

const worker1 = {
    _id: 12336,
    branch : "la paz",
    sch : "8:30",
    name : "pamela",     
    cellphone : "69802366",       
    doctor : "Bellota", 
    specialty: "Psicomotricidad", 
};
const worker2 = {
    _id: 12337,
    branch : "la paz",
    sch : "8:30",
    name : "pamela",     
    cellphone : "69802366",       
    doctor : "Bellota", 
    specialty: "Psicomotricidad",
}
const AppointmentsTable = () => {
    /* ----using local state ----- */
    const [appointments, setAppointments] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setAppointments([worker1, worker2]); // debe ir dentro de la función request .then()
        //customerRequest();
        
    }, []);
    return (    
        <div className='table-container'>
        {
        !loading ?
        <>
            <TableHeader
                header = { tablesList[2] } 
            ></TableHeader>
            {
                appointments.length > 0 ?
                <TableContent
                    contentList = { appointments }
                    properties = { tablesList[2].properties }
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
    
    export default AppointmentsTable;
