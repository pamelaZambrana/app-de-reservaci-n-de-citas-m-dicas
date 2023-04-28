import React, {useState, useEffect, useContext} from 'react';
import Table from '../tabs/Table';
import "../../styles/agendaStyles.css";
import DateControl from '../pure/dateControl';
import ColoredTable from '../tabs/coloredTable';
import { getAppointments, removeAppointments } from '../../requests/appointmentRequest';
import { useEditContext } from '../pure/context/editContext';
import { useNavigate } from 'react-router-dom';


const Agenda = ({  arrows, setArrows }) => {

    
    /* Current date */
    const date = new Date();
    const today=new Date(date.getTime() - (date.getTimezoneOffset() * 60000)).toJSON().slice(0,10);

    /* Estados de agenda */
    const [appointments, setAppointments] = useState([]);
    const [searchDate, setSearchDate] = useState(today);
    const [loading, setLoading] = useState(true);
    /* Petición de citas médicas */
    async function appointmenstRequest(){
        getAppointments()
                        .then(ans=>{
                            setLoading(false);
                            setAppointments(ans.data.body);
                        })
                        .catch(error=>console.log(error))
    }
    /* ordenando la lista por fecha y hora */
    let orderedAppointments=appointments.sort((a, b) => new Date(a.dateTime).getTime() - new Date(b.dateTime).getTime());
    
    /* Desplegando la tabla */
    let appointmentsTable;
    let coloredSch;
    const regex=/^[^T]*/;
    /* Buscando por fecha */
    let searchedDates=orderedAppointments.filter((appointment)=>{
        const dateValue=appointment.dateTime.match(regex)[0];
        const searchValue=searchDate;
        return (dateValue.includes(searchValue));
    });

    /* completando citas */
    function completeAppointment(appointment){
        const index=appointments.indexOf(appointment);
        const tempappointments=[...appointments];
        tempappointments[index].complete=!tempappointments[index].complete;
        setAppointments(tempappointments);
    }
    /* borrando citas */
    async function removeAppointment(appointment){
        const index=appointment._id;
        console.log("index",index);
        await removeAppointments(index)
                            .then((ans)=>{
                                console.log(ans);
                            })
                            .catch((error)=>{
                                console.log(error)
                            })
    };
    /* Editando citas */
    const navigate=useNavigate();
    function editAppointment(appointment){
        const index=appointment._id;
        localStorage.setItem("id", JSON.stringify(index));
        navigate("/private/editAppointment");
    };
    if(searchedDates.length>0){
        appointmentsTable=
            <Table 
                appointmentList={searchedDates}
                completeAppo={completeAppointment}
                remove={removeAppointment}
                editAppointment = { editAppointment }
            ></Table>
        /* Horaro por colores */
        coloredSch=<ColoredTable appointments={searchedDates}></ColoredTable>;
    }else{
       appointmentsTable = (
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
        appointmenstRequest();
        console.log(appointments);
    }, []);
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
                        style={ {position:"relative", height:"458px"}} 
                        data-mdb-perfect-scrollbar="true"
                    >
                    { loading 
                        ?
                        <div className="d-flex justify-content-center">
                            <p>Cargando lista de citas.</p>
                            <div className="spinner-border" role="status">
                                <span className="visually-hidden">Loading...</span>
                            </div>
                        </div> 
                        : appointmentsTable
                    }
                    </div>
                :
                    <div
                        className='card-body'
                        style={ {position:"relative", height:"458px"}} 
                    >
                    { loading 
                        ?
                        <div className="d-flex justify-content-center">
                            <p>Cargando organizador.</p>
                            <div className="spinner-border" role="status">
                                <span className="visually-hidden">Loading...</span>
                            </div>
                        </div> 
                        : coloredSch
                    }
                        
                    </div>
                }
                
            </div>
    )
}

export default Agenda;
