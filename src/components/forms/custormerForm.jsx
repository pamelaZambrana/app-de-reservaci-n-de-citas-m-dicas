import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Customer } from '../../models/customer';
import { AVAILABILITY, BRANCHES, ESPECIALIDAD } from '../../models/options';
import "../../styles/newUser.css";
const CustomerForm = ({addNewCustomer}) => {
    /* Referencias para los inputs */
    const nameRef = useRef("");
    const ageRef = useRef("");
    const birthdayRef = useRef("");
    const phoneRef = useRef("");
    const branchRef = useRef(BRANCHES.EA);
    const specialtyRef = useRef(ESPECIALIDAD.General);
    const diagnosisRef = useRef("");

    const navigate=useNavigate();
    /* submit button */
    function addCustomer(e){
        e.preventDefault();
        const values=new Customer(
            nameRef.current.value,
            ageRef.current.value,
            birthdayRef.current.value,
            phoneRef.current.value,
            branchRef.current.value,
            specialtyRef.current.value,
            diagnosisRef.current.value,
        )
        alert(JSON.stringify(values));
        addNewCustomer(values);
        navigate("/tablaPacientes");
        console.log("sending values", values)
    }
    return (
        <div className='user-container'>
            <h1>Registro de un nuevo paciente</h1>
            <form 
                    className="user-form"
                    onSubmit={ addCustomer}
                >
                    <fieldset className="card user-section">
                        <h5 className="user-section-label">Datos del paciente</h5>
                        <hr></hr>
                        <label className="user-label" htmlFor="age">Nombre completo: </label>
                        <input
                            id="name"
                            ref={ nameRef }
                            type="text"
                            required
                            className="form-control"
                            name="name"
                            placeholder="Ej. Andrés Cristian Gómez Pérez"
                            autoFocus  
                        />
                        <label className="user-label" >Edad:</label>
                        <input
                            id="age"
                            ref={ ageRef }
                            type="number"
                            required
                            className="form-control"
                            name="age"
                        />
                        
                        <label className="user-label" htmlFor="birthday">Fecha de nacimiento: </label>
                        <input
                            id="birthday"
                            className="form-control"
                            ref={ birthdayRef }
                            type="date"
                            name="birthday"
                            required 
                        />
                        <label className="user-label" htmlFor="phone">Tel/Cel.: </label>
                        <input
                            id="phone"
                            type="text"
                            required
                            ref={ phoneRef }
                            className="form-control"
                            name="phone"
                            placeholder="Ej. 71298655"
                            minLength="7"
                            maxLength="8" 
                        />
                        <label className="user-label" htmlFor="branch">Sucursal: </label>
                        <select
                            id="branch"
                            className="form-select"
                            ref={ branchRef }
                            type="text"
                            name="branch"
                            required
                        >
                            <option value="" disabled selected hidden>Elija una sucursal</option>
                            <option value={ BRANCHES.EA }>El Alto</option>
                            <option value={ BRANCHES.LP }>La Paz</option>
                        </select>
                        <label className="user-label" >Especialidad</label>
                        <select
                            id="specialty"
                            ref={ specialtyRef }
                            type="text"
                            required
                            className="form-select"
                            name="specialty"
                        >
                            <option value="" disabled selected hidden>Elija una especialidad</option>
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
                        <label className="user-label" htmlFor="diagnosis">Diagnóstico: </label>
                        <input
                            id="diagnosis"
                            ref={ diagnosisRef }
                            type="diagnosis"
                            required
                            className="form-control"
                            name="diagnosis"
                        />
                    </fieldset>
                    <div className="buttons-container" >
                        <button 
                            type="submit"
                            className='btn btn-primary user-submit-button'
                        >Guardar</button>
                    </div>

                </form>
        </div>
    );
}

export default CustomerForm;
