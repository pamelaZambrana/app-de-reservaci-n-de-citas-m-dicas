import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { AVAILABILITY, BRANCHES, ESPECIALIDAD } from './models/options';
import { Worker } from './models/workers';
import { newWorkerRequestToBackend } from '../../requests/workerRequest';


const NewWorkerForm = () => {
    /* Referencias para los inputs */
    const nameRef = useRef("");
    const specialtyRef = useRef(ESPECIALIDAD.General);
    const phoneRef = useRef("");
    const branchRef = useRef("");
    const avaRef = useRef(AVAILABILITY.morning);
    const addressRef = useRef("");
    const emailRef = useRef("");
    const passwordRef = useRef("");

    const navigate=useNavigate();
    /* submit button */
    async function  addUser(e){
        e.preventDefault();
        const values=new Worker(
            `${nameRef.current.value}`,
            specialtyRef.current.value,
            branchRef.current.value,
            avaRef.current.value,
            phoneRef.current.value,
            addressRef.current.value,
            emailRef.current.value,
            passwordRef.current.value,
        )
        alert(JSON.stringify(values));
        /* ---- request ---- */
        await newWorkerRequestToBackend(values)
                        .then( ans => {
                            console.log(ans)
                            navigate("/private/home/tablaUsuarios");
                        })
                        .catch( error => {
                            console.log(error)
                        })

    }
    return (
    <form 
        className="action-form"
        onSubmit={ addUser }
    >
        <h1>Registro de nuevo usuario</h1>
        <h5 className="user-section-label">Datos del trabajador</h5>
        <hr></hr>
        <fieldset>
            <div className='form-input'>
                <label className="input-label" htmlFor="name">Nombre completo: </label>
                <input
                    id="name"
                    ref={ nameRef }
                    type="text"
                    required
                    name="name"
                    autoFocus  
                />

            </div>
            <div className='form-input'>
                <label className="input-label" htmlFor="phone">Tel/Cel.: </label>
                <input
                    id="phone"
                    type="text"
                    required
                    ref={ phoneRef }
                    className="form-control"
                    name="phone"
                    minLength="7"
                    maxLength="8" 
                />

            </div>
            <div className='form-input'>
                <label className="input-label" htmlFor="addres">Dirección: </label>
                <input
                    id="address"
                    ref={ addressRef }
                    type="text"
                    required
                    className="form-control"
                    name="address"
                />

            </div>
            <div className='form-input'>
                <label className="input-label" htmlFor="email">E-mail: </label>
                <input
                    id="email"
                    ref={ emailRef }
                    type="email"
                    required
                    className="form-control"
                    name="email"
                />
            </div>
            <div className='form-input'>
                <label className="input-label" >Especialidad</label>
                <select
                    id="specialty"
                    ref={ specialtyRef }
                    type="text"
                    required
                    name="specialty"
                    defaultValue={`DEFAULT`}
                >
                    <option value="DEFAULT" disabled hidden>Elija una especialidad</option>
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
            <label className="input-label" htmlFor="availability">Disponibilidad: </label>
                <select
                    id="availability"
                    ref={ avaRef }
                    type="text"
                    required
                    name="availability" 
                    defaultValue={`DEFAULT`}
                >
                    <option value="DEFAULT" disabled hidden>Elija los turnos de atención </option>
                    <option value={ AVAILABILITY.morning }>Turno mañana</option>
                    <option value={ AVAILABILITY.evening }>Turno tarde</option>
                    <option value={ AVAILABILITY.ambos }>Mañana y tarde</option>
                </select>
            </div>
           
            <div className='form-input'>
                <label className="input-label" htmlFor="password">Contraseña: </label>
                <input
                    id="password"
                    ref={ passwordRef }
                    type="password"
                    required
                    className="form-control"
                    name="password"
                    minLength="6"
                    maxLength="12" 
                />
            </div>
        </fieldset>
                <div className="buttons-container" >
                    <button 
                        type="submit"
                        className='submit-button'
                    >Guardar</button>
                    <button 
                        type="button"
                        className='cancel-button'
                        onClick={() => navigate("-1")}
                    >Cancelar</button>
                </div>
                

            </form>

    );
}

export default NewWorkerForm;