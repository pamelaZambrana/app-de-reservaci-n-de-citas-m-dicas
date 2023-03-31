import React, {useRef, useState, useEffect} from "react";
import { useNavigate } from 'react-router-dom';
import { DOCTOR, ESPECIALIDAD } from "../../models/options";
import { Appointment } from "../../models/AppointmentClass";
import Agenda from '../../components/containers/agenda';
import "../../styles/newAppointment.css";
import { saveNewAppointment } from "../../requests/appointmentRequest";
import { getUsers } from "../../requests/userRequest";
import { getCustomers } from "../../requests/customerRequest";

const AppointmentForm = ({ arrows, setArrows }) => {
    /* Estado del componente */
    const [open, setOpen] = useState(false);
    const [users, setUsers] = useState([]);
    const [pacients, setPacients] = useState([]);
    const [searchedName, setSearchedName] = useState([]);
    const [searchedContact, setSearchedContact] = useState("");
    const [fillInfo, setfillInfo] = useState(false);
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
    async function addAppointment(e){
        e.preventDefault();
        const values=new Appointment(
            `${nameRef.current.value}`,
            cellphoneRef.current.value,
            doctorRef.current.value,
            specialtyRef.current.value,
            `${dateRef.current.value}T${timeRef.current.value}`,
            "el alto",
            false
        )
        alert(JSON.stringify(values));
        await saveNewAppointment(values)
                                .then(ans => {
                                    console.log("newAppo",ans)
                                })
                                .catch(error => {
                                    console.log("newAppo",error)
                                });
        navigate("/tablaCitas");
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
    
    useEffect(() => {
        return()=>
            {
                usersRequest();
                pacientsRequest();

            }
        
    }, []);
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

    function pacientInfo(){
        if(fillInfo){
            return(
                <input
                            id="cellphone"
                            defaultValue={searchedContact.phone}
                            type="text"
                            required
                            ref={cellphoneRef }
                            className="form-control"
                            name="cellphone"
                            placeholder="Ej. 71298655"
                            minLength="7"
                            maxLength="8"
                            autoFocus  
                        />
            )
        } else {
            return(
                <p>----</p>
            )
        }
    }
    /* useEffect(() => {
        
    }, [searchedContact]);
    console.log("search", searchContact); */
    

    
    return (
        <div className="appointment-container" >
             <h3>NUEVA CITA MÉDICA</h3>
            
                <form 
                    onSubmit={ addAppointment }
                    className="appointment-form"
                >
                    <fieldset className="card appointment-section">
                        <h5 className="appointment-section-label">Datos del paciente</h5>
                        <hr></hr>
                        <label className="appointment-label" htmlFor="name">Nombre del paciente: </label>
                        <div className="search-container">
                                <input
                                    id="name"
                                    name="name"
                                    required
                                    ref={ nameRef }
                                    list="searchedPatients"
                                    className="form-select"
                                    onChange={selected}
                                    autoFocus  
                                />
                                <datalist id="searchedPatients" >
                                    {  pacients.map((pacient,index)=>{
                                            return(
                                                <option key={index} value={pacient.name} ></option>
                                            )
                                        })
                                    }
                                </datalist>
                                <button 
                                    className="btn btn-primary"
                                    onClick={getInfo}
                                >
                                    Ingresar paciente
                                </button>

                        </div>
                        <label className="appointment-label" htmlFor="name">Número de contacto: </label>

                        {/* <input
                            id="cellphone"
                            value={searchContact.phone}
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
                       { pacientInfo() }
                    </fieldset>
                    <fieldset className="card appointment-section">
                        <h5 className="appointment-section-label">Datos de la cita médica</h5>
                        <hr></hr>
                        <label className="appointment-label" htmlFor="datetime">Fecha: </label>
                        <input
                            id="date"
                            ref={ dateRef }
                            type="date"
                            required
                            className="form-control"
                            name="datetime"
                        />
                      

                        <label className="appointment-label" htmlFor="name">Hora: </label>
                        <select
                            id="time"
                            ref={ timeRef }
                            type="text"
                            required
                            className="form-select"
                            name="time"
                        >
                            <option>Elija un horario</option>
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
                            defaultValue={`DEFAULT`}
                        >
                            <option value="DEFAULT" disabled hidden>Elija a una especialidad</option>
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
                            defaultValue={`DEFAULT`}
                        >
                            <option value="DEFAULT" disabled hidden>Elija a un especialista</option>
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

/* AppointmentFormik.propTypes={
    add: PropTypes.func.isRequired,
    lengthList: PropTypes.number.isRequired
} */
export default AppointmentForm;
