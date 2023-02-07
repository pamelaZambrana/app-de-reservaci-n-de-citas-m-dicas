import React, {useState, useEffect} from 'react';
import { Appointment } from '../../models/AppointmentClass';
import { ESPECIALIDAD } from '../../models/especialidad';
import ClientComponent from '../pure/client';
import "../../styles/agendaStyles.css";


const Agenda = () => {
    const client1=new Appointment("juanita","de los palotes", 4512266,"juenito@delospalote.com",ESPECIALIDAD.General,"Osso de Bernoulli","8/02/2023","8:30","9:00","la paz,false");
    const client2=new Appointment("juanito","de los palotes", 25262621,"juenito@delospalote.com",ESPECIALIDAD.General,"Osso de Bernoulli","8/02/2023","7:30","8:30","la paz,true");
    const client3=new Appointment("belloti","foronda", 6980555,"belloti@bonita.com",ESPECIALIDAD.General,"Osso de Bernoulli","8/02/2023","16:30","17:00","la paz,true");
    const client4=new Appointment("stampy","foronda", 77788555,"gordito@bonito.com",ESPECIALIDAD.General,"Osso de Bernoulli","8/02/2023","10:30","11:00","la paz,false");
    
    const [clients, setClients] = useState([client1,client2,client3,client4]);
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        console.log("Task state has been modified");
        setTimeout(() => {
            setLoading(false);
        }, 2000);
        return () => {
            console.log("TaskList component is going to unmount...")
        };
    }, [clients]);
    /* ordenando la lista por hora */
    let orderedClients=[];
    function orderList(){

        let hours=clients.map(client=>(client.initialHour.split(":").join("")));
        let orderedHours=hours.sort(function(a,b){
           return(a-b)
        });
        orderedHours=orderedHours.map(element => element.split(""));
           for(let i=0;i<orderedHours.length;i++){
                let element=orderedHours[i];
                if(element.length<4){
                    element[0]=`${element[0]}:`;
                }else{
                    element[1]=`${element[1]}:`;;
                };
                element.join("");
            };
        orderedHours=orderedHours.map(hour=>hour.join(""));
        for (let i=0;i<orderedHours.length;i++){
            const item=orderedHours[i];
            const element=clients.find(client=>(client.initialHour===item));
            orderedClients.push(element);
        };
    }

    let Table=()=>{
        return(
            <table>
                <thead>
                    <tr>
                        <th scope='col'>Horario</th>
                        <th scope='col'>Nombre del paciente</th>     
                        <th scope='col'>Celular</th>       
                        <th scope='col'>Especialidad</th> 
                        <th scope='col'>Especialista</th>
                        <th scope='col'>Estado</th>
                        <th scope='col'>Editar</th>        
                    </tr>
                </thead>
                <tbody>

                    {orderedClients.map((client,index)=> {
                        return (
                            <ClientComponent
                                key= {index}
                                client={client}
                            >
                            </ClientComponent>
                        )
                    })}                            
                </tbody>
            </table>
        )
    };

    let clientsTable;
    if(clients.length>0){
        {orderList()}
        clientsTable=<Table></Table>
    }else{
        
       clientsTable = (
       <div>
            <h4>No hay horarios agendades</h4>
            <h5>Crea una nueva cita.</h5>
       </div>
       )
    };
    return (
        <div>
        <div className='col-12'>
            <div className='card agenda'>
                <div className='card-header p-3'>
                    <h4>Control de citas agendadas</h4>
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
