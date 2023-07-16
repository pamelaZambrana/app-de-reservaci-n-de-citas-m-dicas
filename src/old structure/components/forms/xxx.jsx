import React, {useRef, useState, useEffect, useContext} from "react";
import { useNavigate } from 'react-router-dom';
import { DOCTOR, ESPECIALIDAD } from "../../models/options";
import { Appointment } from "../../models/AppointmentClass";
import Agenda from '../containers/agenda';
import "../../styles/newAppointment.css";
import {  getIdAppointments } from "../../requests/appointmentRequest";
import { useEditContext } from "../pure/context/editContext";

const EditAppointmentForm = ({ clients, addNewAppointment, arrows, setArrows }) => {
    /* Estado de tabla abierta */
    const [open, setOpen] = useState(false);
    const [appointment, setAppointment] = useState([]);
    const { editApp } = useEditContext();
    function openCloseTab(){
        setArrows(2);
        setOpen(!open);
    }
    /* Referencias para los inputs */
    const nameRef = useRef("");
    const apPaternoRef = useRef("");
    const apMaternoRef = useRef("");
    const cellphoneRef = useRef("");
    const doctorRef = useRef(DOCTOR.Juanita);
    const specialtyRef = useRef(ESPECIALIDAD.General);
    const dateRef = useRef("");
    const timeRef = useRef("");

    const navigate=useNavigate();
    /* submit button */
    function addAppointment(e){
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
        addNewAppointment(values);
        navigate("/");
        console.log("sending values", values)
    };
    /* Peticio}ón de datos al backend */
    const regex=/^[^T]*/;
    const regex2=/(\d{2}):(\d{2})$/;
    async function appointmentRequest(id){
        await getIdAppointments(id)
                    .then(ans=>{
                        setAppointment(ans.data.body[0]);
                        console.log(ans.data.body);
                    })
                    .catch(error=>{
                        console.log(error)
                    })
    };
    useEffect(() => {
        appointmentRequest(editApp);
    }, []);
    return (
        <div className="appointment-container" >
             <h3>EDITAR CITA MÉDICA</h3>
            
                <form 
                    className="appointment-form"
                    onSubmit={ addAppointment }
                >
                    <fieldset className="card appointment-section">
                        <h5 className="appointment-section-label">Datos del paciente</h5>
                        <hr></hr>
                        <label className="appointment-label" htmlFor="name">Nombres y apellidos: </label>
                        <input
                            id="name"
                            defaultValue={ appointment.name}
                            ref={ nameRef }
                            type="text"
                            required
                            className="form-control"
                            name="name"
                            placeholder="Ej. Remedios Muriel"
                            autoFocus  
                        />
                        <label className="appointment-label" htmlFor="name">Celular: </label>
                        <input
                            id="cellphone"
                            defaultValue={ appointment.cellphone }
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
                    </fieldset>
                    <fieldset className="card appointment-section">
                        <h5 className="appointment-section-label">Datos de la cita médica</h5>
                        <hr></hr>
                        <label className="appointment-label" htmlFor="datetime">Fecha: </label>
                        <input
                            id="date"
                            value={ `${appointment.dateTime.match(regex)[0]}` }
                            ref={ dateRef }
                            type="date"
                            required
                            className="form-control"
                            name="datetime"
                            autoFocus  
                        />
                      

                        <label className="appointment-label" htmlFor="name">Hora: </label>
                        <select
                            id="time"
                            defaultValue={`DEFAULT`}
                            ref={ timeRef }
                            type="text"
                            required
                            className="form-select"
                            name="time"

                        >
                            <option value="DEFAULT" hidden>{`${appointment.dateTime.match(regex2)[0]}`}</option>
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
                        <label className="appointment-label" >Especialista</label>
                        <input
                            id="doctor"
                            ref={ doctorRef }
                            defaultValue={appointment.doctor}
                            type="text"
                            required
                            list="doctors"
                            className="form-select"
                            name="doctor"
                            selection="true"
                            placeholder="Elija un especialista"
                        />
                        <datalist id="doctors">
                            <option 
                                value ={ DOCTOR.Juanito }
                            >Juanito</option>
                            <option 
                                value ={ DOCTOR.Juanita }
                            >Juanita</option>
                            <option 
                                value ={DOCTOR.OssoDeBernoulli }
                            >Osso de Bernoulli</option>
                        </datalist>
                        <label className="appointment-label" >Especialidad</label>
                        <input
                            id="specialty"
                            ref={ specialtyRef }
                            type="text"
                            required
                            list="specialties"
                            className="form-select"
                            name="specialty"
                            selection="true"
                            placeholder="Elija una especialidad"
                        />
                        <datalist id="specialties">
                            <option 
                                value ={ ESPECIALIDAD.General }
                            ></option>
                            <option 
                                value ={ ESPECIALIDAD.Fisioterapia }
                            ></option>
                            <option 
                                value ={ ESPECIALIDAD.Odontología }
                            ></option>
                            <option 
                                value ={ ESPECIALIDAD.Fonoaudiologia }
                            ></option>
                            <option 
                                value ={ ESPECIALIDAD.Psicologia }
                            ></option>
                            <option 
                                value ={ ESPECIALIDAD.Psicopedagogia}
                            ></option>
                            <option 
                                value ={ ESPECIALIDAD.TerapiaOcupacional }
                            ></option>
                        </datalist>
                    </fieldset>
                    <div className="buttons-container" >
                        <button 
                            type="button"
                            className='btn btn-primary watch-table-button'
                            onClick={ openCloseTab }
                        >Ver Horarios</button>
                        <button 
                            type="submit"
                            className='btn btn-primary appointment-submit-button'
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
                        >
                            <i className="bi bi-x"></i>
                        </button>
                    </div>
                    <Agenda 
                        clients = { clients } 
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
