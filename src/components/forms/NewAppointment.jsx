import React, {useRef, useState, useEffect} from "react";
import { useNavigate } from 'react-router-dom';
import { BRANCHES, DOCTOR, ESPECIALIDAD, SPECIALTY } from "./models/options";
import { Appointment } from "../../old structure/models/AppointmentClass";
import { schedule } from "./scheduleList";


const NewAppointmentForm = ({ arrows, setArrows }) => {
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
    /* const searchListener = (event)=>{
        console.log(event.target.value);
        setPacients(event.target.value);
    }; */
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
            BRANCHES.EA,
            false
        )
        alert(JSON.stringify(values));
       /*  await saveNewAppointment(values)
                                .then(ans => {
                                    console.log("newAppo",ans)
                                    navigate("/private/pacientes");
                                })
                                .catch(error => {
                                    console.log("newAppo",error)
                                });
        console.log("sending values", values) */
    }
    /* Petición lista de doctores */
    /* async function usersRequest(){
        await getUsers()
                    .then(ans=>{
                        setUsers(ans.data.body);

                    })
                    .catch(error=>{
                        console.log(error)
                    })
    }; */
    /* Petición de lista de pacientes */
    /* async function pacientsRequest(){
        getCustomers()
                        .then(ans=>{
                            setPacients(ans.data.body);
                        })
                        .catch(error=>console.log(error))
    }; */
    
    useEffect(() => {
        return()=>
            {
                /* usersRequest();
                pacientsRequest(); */

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
    return (
        <div> 
    <form 
        onSubmit={ addAppointment }
        className="action-form"
    >
    <h1>NUEVA CITA MÉDICA</h1>
        <fieldset>
            <h5>Datos del paciente</h5>
            <hr></hr>
            <div className="form-input">
            <label htmlFor="name">Nombre del paciente: </label>
                    <input
                        id="name"
                        name="name"
                        required
                        ref={ nameRef }
                        list="searchedPatients"
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
                        className="submit-button"
                        onClick={getInfo}
                    >
                        Ingresar paciente
                    </button>

            </div>
            <div className="form-input">
                <label htmlFor="name">Número de contacto: </label>
                { pacientInfo() }
            </div>
        </fieldset>
        <fieldset>
            <h5>Datos de la cita médica</h5>
            <hr></hr>
            <div className="form-input">
                <label htmlFor="datetime">Fecha: </label>
                <input
                    id="date"
                    ref={ dateRef }
                    type="date"
                    required
                    name="datetime"
                />
            </div>
            <div className="form-input">
                
                <label htmlFor="name">Hora: </label>
                <select
                    id="time"
                    ref={ timeRef }
                    type="text"
                    required
                    name="time"
                >
                    <option>Elija un horario</option>
                    {
                        schedule(8,21).map((sch,index) => (<option key={index}>{ sch }</option>))
                    }
                
                </select>
            </div>
            <div className="form-input">
                
                <label>Especialidad</label>
                <select
                    id="specialty"
                    ref={ specialtyRef }
                    type="text"
                    required
                    list="specialties"
                    name="specialty"
                    selection="true"
                    defaultValue={`DEFAULT`}
                >
                    <option value="DEFAULT" disabled hidden>Elija a una especialidad</option>
                    {
                        SPECIALTY.map((spe, index) => (
                            <option 
                                key={index}
                                value={ spe.category }
                                className={ `${spe.color}` }
                            >{ spe.name }</option>
                        ))
                    }
                </select>
            </div>
            <div className="form-input">
                
                <label>Especialista</label>
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
            </div>
        </fieldset>
        <div className="buttons-container" >
            <button 
                type="button"
                className='navigation-button'
                onClick={ openCloseTab }
            >Ver Horarios</button>
            <button 
                type="submit"
                className='submit-button'
            >Guardar</button>
            <button 
                type="button"
                className='cancel-button'
                onClick={() => navigate(-1)}
            >Cancelar</button>
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
                {/* <Agenda
                    arrows = { arrows }
                    setArrows = { setArrows }
                ></Agenda> */}
            </div>
        )
        : null
        }
            
    </div>
    );
}

export default NewAppointmentForm;