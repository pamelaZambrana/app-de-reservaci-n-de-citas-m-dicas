import React, {useRef, useState, useEffect} from "react";
import { useNavigate } from 'react-router-dom';
import { BRANCHES, DOCTOR, ESPECIALIDAD } from "../../models/options";
import { Appointment } from "../../models/AppointmentClass";
import Agenda from '../containers/agenda';
import "../../styles/newAppointment.css";
import { getIdAppointments, saveNewAppointment, saveUpdateAppointment } from "../../requests/appointmentRequest";
import { getUsers } from "../../requests/userRequest";
import { getCustomers } from "../../requests/customerRequest";
import { useEditContext } from "../pure/context/editContext";

const EditAppointmentForm = ({ arrows, setArrows }) => {
    /* Estado del componente */
    const [open, setOpen] = useState(false);
    const [users, setUsers] = useState([]);
    const [pacients, setPacients] = useState([]);
    const [searchedName, setSearchedName] = useState([]);
    const [searchedContact, setSearchedContact] = useState("");
    const [fillInfo, setfillInfo] = useState(false);
    const [appointment, setAppointment] = useState([]);
    const { editApp, indexApp } = useEditContext();
    const [date, setDate] = useState("");
    const [hour, setHour] = useState("");
    function openCloseTab(){
        if(arrows===1){
            setArrows(2);
        }else{
            setArrows(1);
        }
        setOpen(!open);
    }
    /* Referencias para los inputs */
    const nameRef = useRef("");
    const cellphoneRef = useRef("");
    const doctorRef = useRef(DOCTOR.Juanita);
    const specialtyRef = useRef(ESPECIALIDAD.General);
    const dateRef = useRef("");
    const timeRef = useRef("");

    /* Search by name */
    const searchListener = (event)=>{
        console.log(event.target.value);
        /* setSearchValue(event.target.value); */
    };
    const navigate=useNavigate();
    /* submit button */
    async function updateAppointment(e){
        e.preventDefault();
        const values=new Appointment(
            //`${nameRef.current.value}`,
            //cellphoneRef.current.value,
            doctorRef.current.value,
            specialtyRef.current.value,
            `${dateRef.current.value}T${timeRef.current.value}`,
            //BRANCHES.EA,
            //false
        )
        alert(JSON.stringify(values));
        await saveUpdateAppointment(values, indexApp )
                                .then(ans => {
                                    console.log("newAppo",ans)
                                    navigate("/private/home/tablaCitas");
                                    
                                })
                                .catch(error => {
                                    console.log("newAppo",error)
                                });
        console.log("sending values", values)
    }
    /* Petición lista de doctores */
    async function usersRequest(){
        await getUsers()
                    .then(ans=>{
                        setUsers(ans.data.body);

                    })
                    .catch(error=>{
                        console.log(error)
                    })
    };
    /* Petición de lista de pacientes */
    async function pacientsRequest(){
        getCustomers()
                        .then(ans=>{
                            setPacients(ans.data.body);
                        })
                        .catch(error=>console.log(error))
    };
    
    /* Datos buscados */
    function selected(event){
        setSearchedName(event.target.value);
    };
    let searchContact;
    if(!searchedName){
        searchContact=[...pacients];
    }else{
        searchContact=pacients.filter((pacient)=>{
            const nameValue=pacient.name;
            const searchValue=searchedName;
            return (nameValue.includes(searchValue));
        });
    };
    function getInfo(){
        const val=searchContact[0];
        setSearchedContact(val);
        setfillInfo(true);
    };

    /* Petición de datos del appointment en específico */
    async function appointmentRequest(id){
        await getIdAppointments(id)
        .then(ans=>{
            setAppointment(ans.data.body[0]);
            const regex=/^[^T]*/;
            const regex2=/(\d{2}):(\d{2})$/;
            setDate(`${ans.data.body[0].dateTime.match(regex)[0]}`);
            setHour(`${ans.data.body[0].dateTime.match(regex2)[0]}`);
            console.log(ans.data.body[0])
        })
        .catch(error=>{
            console.log(error)
        })
    };
    console.log(appointment.specialty)
    useEffect(() => {
        usersRequest();
        pacientsRequest();
        appointmentRequest();
    }, []);
    

    
    return (
        <div className="appointment-container" >
             <h3>NUEVA CITA MÉDICA</h3>
            
                <form 
                    onSubmit={ updateAppointment }
                    className="appointment-form"
                >
                    <fieldset className="card appointment-section">
                        <h5 className="appointment-section-label">Datos del paciente</h5>
                        <hr></hr>
                        <label className="appointment-label" htmlFor="name">Nombre del paciente: </label>
                        <div className="search-container">
                                {/* <input
                                    id="name"
                                    value={appointment.name}
                                    name="name"
                                    required
                                    ref={ nameRef }
                                    className="form-select"
                                    //onChange={selected}
                                    //autoFocus  
                                    //list="searchedPatients"
                                /> */}
                                <p >{appointment.name}</p>
                                {/* <datalist id="searchedPatients" >
                                    {  pacients.map((pacient,index)=>{
                                            return(
                                                <option key={index} value={pacient.name} ></option>
                                            )
                                        })
                                    }
                                </datalist> */}
                                {/* <button 
                                    className="btn btn-primary"
                                    onClick={getInfo}
                                >
                                    Ingresar paciente
                                </button> */}

                        </div>
                        <label className="appointment-label" htmlFor="name">Número de contacto: </label>
                        {/* <input
                            id="cellphone"
                            defaultValue={appointment.cellphone}
                            type="text"
                            required
                            ref={cellphoneRef }
                            className="form-control"
                            name="cellphone"
                            placeholder="Ej. 71298655"
                            minLength="7"
                            maxLength="8"
                            autoFocus  
                        /> */}
                        <p className="text-center"> {appointment.cellphone} </p>
                    </fieldset>
                    <fieldset className="card appointment-section">
                        <h5 className="appointment-section-label">Datos de la cita médica</h5>
                        <hr></hr>
                        <label className="appointment-label" htmlFor="datetime">Fecha: </label>
                        <input
                            id="date"
                            defaultValue={ date }
                            ref={ dateRef }
                            type="date"
                            required
                            className="form-control"
                            name="datetime"
                        />
                      

                        <label className="appointment-label" htmlFor="name">Hora: </label>
                        <select
                            id="time"
                            defaultValue={ hour }
                            ref={ timeRef }
                            type="text"
                            required
                            className="form-select"
                            name="time"
                        >
                            <option>08:30</option>
                            <option>09:00</option>
                            <option>09:30</option>
                            <option>10:00</option>
                            <option>10:30</option>
                            <option>11:00</option>
                            <option>11:30</option>
                            <option>12:00</option>
                            <option>12:30</option>
                            <option>13:00</option>
                            <option>13:30</option>
                            <option>14:00</option>
                            <option>14:30</option>
                            <option>15:00</option>
                            <option>15:30</option>
                            <option>16:00</option>
                            <option>16:30</option>
                            <option>17:00</option>
                            <option>17:30</option>
                            <option>18:00</option>
                            <option>18:30</option>
                            <option>19:00</option>
                            <option>19:30</option>
                            <option>20:00</option>
                            <option>20:30</option>
                            <option>21:00</option>
                        
                        </select>
                        <label className="appointment-label" >Especialidad</label>
                        <select
                            id="specialty"
                            ref={ specialtyRef }
                            type="text"
                            required
                            list="specialties"
                            className="form-select"
                            name="specialty"
                            selection="true"
                        >
                            <option value={appointment.specialty} selected disabled hidden>{ appointment.specialty }</option>
                            <option 
                                value ={ ESPECIALIDAD.General }
                            >General</option>
                            <option 
                                value ={ ESPECIALIDAD.Fisioterapia }
                            >Fisioterapia</option>
                            <option 
                                value ={ ESPECIALIDAD.Odontología }
                            >Odontología</option>
                            <option 
                                value ={ ESPECIALIDAD.Fonoaudiologia }
                            >Fonoaudiología</option>
                            <option 
                                value ={ ESPECIALIDAD.Psicologia }
                            >Psicología</option>
                            <option 
                                value ={ ESPECIALIDAD.Psicopedagogia}
                            >Psicopedagogía</option>
                            <option 
                                value ={ ESPECIALIDAD.TerapiaOcupacional }
                            >Terapia Ocupacional</option>
                        </select>
                        <label className="appointment-label" >Especialista</label>
                        <select
                            id="doctor"
                            ref={ doctorRef }
                            type="text"
                            required
                            className="form-select"
                            name="doctor"
                            placeholder="Elija un especialista"
                        >
                        <option value={appointment.doctor} selected disabled hidden>{ appointment.doctor }</option>
                            {users.map((doctor, index)=>{
                                return(
                                    <option key={index}>{doctor.name}</option>
                                )
                            })}
                        </select>
                    </fieldset>
                    <div className="buttons-container" >
                        <button 
                            type="button"
                            className='btn btn-primary watch-table-button submit-button'
                            onClick={ openCloseTab }
                        >Ver Horarios</button>
                        <button 
                            type="submit"
                            className='btn btn-primary submit-button'
                        >Guardar</button>
                    </div>

                </form>
            { open 
            ? (
                <div className='colored-agenda-container'>
                    <div className='icon-container'>
                        <button 
                            className='close-table-button'
                            onClick={ openCloseTab}
                            setArrows={setArrows}
                        >
                            <i className="bi bi-x"></i>
                        </button>
                    </div>
                    <Agenda
                        arrows = { arrows }
                        setArrows = { setArrows }
                    ></Agenda>
                </div>
            )
            : null
            }
                
        </div>
    );
}

/* EditAppointmentFormik.propTypes={
    add: PropTypes.func.isRequired,
    lengthList: PropTypes.number.isRequired
} */
export default EditAppointmentForm;
