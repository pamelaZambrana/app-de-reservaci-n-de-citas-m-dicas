import React, {useState, useEffect} from 'react';
import { Appointment } from '../../models/AppointmentClass';
import { ESPECIALIDAD } from '../../models/especialidad';
import Table from '../tabs/Table';
import "../../styles/agendaStyles.css";
import DateControl from '../pure/dateControl';


const Agenda = () => {

    
    const client1=new Appointment("juanita","de los palotes", 4512266,"juenito@delospalote.com",ESPECIALIDAD.General,"Osso de Bernoulli",'2018-06-12T19:30',"10:00","la paz",false);
    const client2=new Appointment("juanito","de los palotes", 25262621,"juenito@delospalote.com",ESPECIALIDAD.General,"Osso de Bernoulli",'2023-06-12T15:30',"9:00","la paz",true);
    const client3=new Appointment("belloti","foronda", 6980555,"belloti@bonita.com",ESPECIALIDAD.General,"Osso de Bernoulli",'2023-06-12T08:30','11:00',"la paz",true);
    const client4=new Appointment("stampy","foronda", 77788555,"gordito@bonito.com",ESPECIALIDAD.General,"Osso de Bernoulli",'2023-06-12T10:30','11:30',"la paz",false);
    const client5=new Appointment("stampy","foronda", 77788555,"gordito@bonito.com",ESPECIALIDAD.General,"Osso de Bernoulli",'2023-02-09T12:30','13:00',"la paz",false);
    const client6=new Appointment("gaby","foronda", 77788555,"gordito@bonito.com",ESPECIALIDAD.General,"Osso de Bernoulli",'2023-02-09T11:30','12:30',"la paz",false);
    /* Current date */
    const date = new Date();
    const today=new Date(date.getTime() - (date.getTimezoneOffset() * 60000)).toJSON().slice(0,10);

    const [clients, setClients] = useState([client1,client2,client3,client4,client5,client6]);
    const [searchDate, setSearchDate] = useState(today);
    const [loading, setLoading] = useState(true);
    /* ordenando la lista por fecha y hora */
    let orderedClients=clients.sort((a, b) => new Date(a.dateTime).getTime() - new Date(b.dateTime).getTime());
    let clientsTable;
    const regex=/^[^T]*/;

    /* Buscando por fecha */
    let searchedDates=orderedClients.filter((client)=>{
    const dateValue=client.dateTime.match(regex)[0];
    const searchValue=searchDate;
    return (dateValue.includes(searchValue));
    });
    
    
    
    /* completando tareas */
    function completeTask(client){
        const index=clients.indexOf(client);
        const tempClients=[...clients];
        tempClients[index].complete=!tempClients[index].complete;
        console.log(index);
        setClients(tempClients);
    }
    
    if(searchedDates.length>0){
        clientsTable=
            <Table 
                clientsList={searchedDates}
                completeTask={completeTask}
            ></Table>
    }else{
       clientsTable = (
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
        <div>
        <div className='col-12'>
            <div className='card agenda'>
                <div className='card-header p-3'>
                    <DateControl 
                        searchDate={searchDate}
                        setSearchDate={setSearchDate}
                    ></DateControl>
                    <button className='button'>
                        Agendar Cita
                    </button>
                </div>
                <div className='card-body' style={ {position:"relative", height:"400px"}} data-mdb-perfect-scrollbar="true">
                    { loading ? <p>Cargando lista de reservas</p> : clientsTable }
                </div>
            </div>

        </div>
        
    </div>
    )
}

export default Agenda;
