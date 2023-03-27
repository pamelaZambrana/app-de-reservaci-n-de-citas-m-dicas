import React, {useState, useEffect} from 'react';
import { Appointment } from '../../models/AppointmentClass';
import { ESPECIALIDAD } from '../../models/options';
import Table from '../tabs/Table';
import "../../styles/agendaStyles.css";
import DateControl from '../pure/dateControl';
import ColoredTable from '../tabs/coloredTable';


const Agenda = ({ clients, setClients, arrows, setArrows }) => {

    
    /* Current date */
    const date = new Date();
    const today=new Date(date.getTime() - (date.getTimezoneOffset() * 60000)).toJSON().slice(0,10);

    /* Estados de agenda */
    const [searchDate, setSearchDate] = useState(today);
    const [loading, setLoading] = useState(true);
    /* ordenando la lista por fecha y hora */
    let orderedClients=clients.sort((a, b) => new Date(a.dateTime).getTime() - new Date(b.dateTime).getTime());
    /* Desplegando la tabla */
    let clientsTable;
    let coloredSch;
    const regex=/^[^T]*/;

    /* Buscando por fecha */
    let searchedDates=orderedClients.filter((client)=>{
        const dateValue=client.dateTime.match(regex)[0];
        const searchValue=searchDate;
        return (dateValue.includes(searchValue));
    });
    
    /* completando citas */
    function completeAppointment(client){
        const index=clients.indexOf(client);
        const tempClients=[...clients];
        tempClients[index].complete=!tempClients[index].complete;
        setClients(tempClients);
    }
    /* borrando citas */
    function removeAppointment(client){
        const index=clients.indexOf(client);
        console.log("index",index);
        const tempClients=[...clients];
        console.log("prevClients:",tempClients);
        tempClients.splice(index,1);
        setClients(tempClients);
    }
    

    if(searchedDates.length>0){
        clientsTable=
            <Table 
                clientsList={searchedDates}
                completeTask={completeAppointment}
                remove={removeAppointment}
            ></Table>
        /* Horaro por colores */
        coloredSch=<ColoredTable clients={searchedDates}></ColoredTable>;
    }else{
       clientsTable = (
       <div>
            <h4>No hay citas agendadas para esta fecha</h4>
            <h5>Crea una nueva cita.</h5>
       </div>
       )
        /* Horaro por colores */
       coloredSch = (
        <div>
            <h4>No hay citas agendadas para esta fecha</h4>
            <h5>Crea una nueva cita.</h5>
       </div>
       )
    };

    useEffect(() => {
        console.log("Task state has been modified");
        setTimeout(() => {
            setLoading(false);
        }, 2000);
        return () => {
            console.log("TaskList component is going to unmount...")
        };
    }, [clients]);
    return (    
            <div className='card agenda'>
                <div className='card-header d-flex'>
                    <DateControl 
                        searchDate={searchDate}
                        setSearchDate={setSearchDate}
                        arrows={ arrows }
                        setArrows = { setArrows }
                    ></DateControl>
                    
                </div>
                { arrows === 1 
                ? 
                    <div 
                        className='card-body' 
                        style={ {position:"relative", height:"400px"}} 
                        data-mdb-perfect-scrollbar="true"
                    >
                        { loading ? <p>Cargando lista de reservas</p> : clientsTable }
                    </div>
                :
                    <div
                        className='card-body'
                        style={ {position:"relative", height:"400px"}} 
                    >
                        { loading 
                        ? <p>Cargando lista de reservas</p> 
                        :   coloredSch
                        }
                        
                    </div>
                }
                
            </div>
    )
}

export default Agenda;
