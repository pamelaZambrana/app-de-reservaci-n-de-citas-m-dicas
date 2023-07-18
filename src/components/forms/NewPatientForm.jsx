import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { BRANCHES, ESPECIALIDAD } from './models/options';
import { Patient } from './models/patient';
const NewPatientForm = () => {
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
    async function addCustomer(e){
        e.preventDefault();
        const values=new Patient(
            nameRef.current.value,
            ageRef.current.value,
            birthdayRef.current.value,
            phoneRef.current.value,
            branchRef.current.value,
            specialtyRef.current.value,
            diagnosisRef.current.value,
        )
        /* alert(JSON.stringify(values));
        await saveNewCustomer(values)
                            .then( ans => {
                                console.log(ans)
                            })
                            .catch( error => {
                                console.log(error)
                            })

        navigate("/private/pacientes"); */
        console.log("sending values", values)
    }
    return (
<form 
        className="action-form"
        onSubmit={ addCustomer}
    >
    <h1>Registro de un nuevo paciente</h1>
        <fieldset>
            <h5>Datos del paciente</h5>
            <hr></hr>
            <div className='form-input'>
                <label className="input-label" htmlFor="age">Nombre completo: </label>
                <input
                    id="name"
                    ref={ nameRef }
                    type="text"
                    required
                    name="name"
                    placeholder="Ej. Andrés Cristian Gómez Pérez"
                    autoFocus  
                />
            </div>
            <div className='form-input'>
                <label className="input-label" >Edad:</label>
                <input
                    id="age"
                    ref={ ageRef }
                    type="number"
                    required
                    name="age"
                />
            </div>
            <div className='form-input'>
                <label className="input-label" htmlFor="birthday">Fecha de nacimiento: </label>
                <input
                    id="birthday"
                    ref={ birthdayRef }
                    type="date"
                    name="birthday"
                    required 
                />
            </div>
            <div className='form-input'>
                <label className="input-label" htmlFor="phone">Tel/Cel.: </label>
                <input
                    id="phone"
                    type="text"
                    required
                    ref={ phoneRef }
                    name="phone"
                    placeholder="Ej. 71298655"
                    minLength="7"
                    maxLength="8" 
                />
            </div>
            <div className='form-input'>
                <label className="input-label" htmlFor="branch">Sucursal: </label>
                <select
                    id="branch"
                    ref={ branchRef }
                    type="text"
                    name="branch"
                    required
                    defaultValue={`DEFAULT`}
                >
                    <option value="DEFAULT" disabled hidden>Elija una sucursal</option>
                    <option value={ BRANCHES.EA }>El Alto</option>
                    <option value={ BRANCHES.LP }>La Paz</option>
                </select>
            </div>
            <div className='form-input'>
                <label className="input-label" htmlFor="diagnosis">Diagnóstico: </label>
                <input
                    id="diagnosis"
                    ref={ diagnosisRef }
                    type="diagnosis"
                    required
                    name="diagnosis"
                    defaultValue={`Sin diagnóstico`}
                />
            </div>
        </fieldset>
        <div className="buttons-container" >
            <button 
                type="submit"
                className='submit-button'
            >Guardar</button>
            <button 
                type="submit"
                className='cancel-button'
                onClick={()=>navigate(-1)}
            >Cancelar</button>
        </div>

    </form>
    );
}

export default NewPatientForm;