import React, {useState, useEffect} from 'react';
import { Appointment } from '../../models/AppointmentClass';
import { ESPECIALIDAD } from '../../models/especialidad';
import Table from '../tabs/Table';
import "../../styles/agendaStyles.css";
import DateControl from '../pure/dateControl';
import ColoredTable from '../tabs/coloredTable';


const Agenda = () => {

    
    const client1=new Appointment("juanita", 4512266, "Osso de Bernoulli",ESPECIALIDAD.General,'2018-02-13T19:30',"el alto",false);
    const client2=new Appointment("juanito", 25262621, "Osso de Bernoulli",ESPECIALIDAD.Fisioterapia,'2023-02-13T15:00',"el alto",true);
    const client3=new Appointment("belloti", 6980555, "Osso de Bernoulli",ESPECIALIDAD.General,'2023-02-13T08:30',"el alto",true);
    const client4=new Appointment("paola", 77788555, "Osso de Bernoulli",ESPECIALIDAD.EducacionEspecial,'2023-02-13T10:30',"el alto",false);
    const client5=new Appointment("stampy", 77788555, "Osso de Bernoulli",ESPECIALIDAD.Psicopedagogia,'2023-02-13T12:30',"el alto",false);
    const client6=new Appointment("jack", 77788555, "Osso de Bernoulli",ESPECIALIDAD.General,'2023-02-13T15:00',"el alto",false);
    const client7=new Appointment("ronald", 77788555,"Osso de Bernoulli", ESPECIALIDAD.Psicologia,'2023-02-14T11:30',"el alto",false);
    const client8=new Appointment("ana", 77788555,"Osso de Bernoulli", ESPECIALIDAD.Psicopedagogia,'2023-02-14T08:30',"el alto",false);
    const client9=new Appointment("andy", 77788555,"Osso de Bernoulli", ESPECIALIDAD.Psicopedagogia,'2023-02-14T10:30',"el alto",false);
    const client10=new Appointment("eli", 77788555,"Osso de Bernoulli", ESPECIALIDAD.Fisioterapia,'2023-02-14T08:30',"el alto",false);
    
    /* Current date */
    const date = new Date();
    const today=new Date(date.getTime() - (date.getTimezoneOffset() * 60000)).toJSON().slice(0,10);

    const [clients, setClients] = useState([client1,client2,client3,client4,client5,client6, client7, client8, client9, client10]);
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
    /* crear citas */
    

    if(searchedDates.length>0){
        clientsTable=
            <Table 
                clientsList={searchedDates}
                completeTask={completeAppointment}
                remove={removeAppointment}
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
                <div 
                    className='card-body' 
                    style={ {position:"relative", height:"400px"}} 
                    data-mdb-perfect-scrollbar="true"
                >
                    { loading ? <p>Cargando lista de reservas</p> : clientsTable }
                </div>
                <div>
                    <ColoredTable
                        clients={searchedDates}
                    ></ColoredTable>
                   
            </div>
            </div>
            
        </div>
    </div>
    )
}

export default Agenda;
